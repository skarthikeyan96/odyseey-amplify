import { createPost } from "@/graphql/mutations";
import { Authenticator } from "@aws-amplify/ui-react"
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import React, { useRef } from "react"
import {v4 as uuid} from 'uuid'
import ReactMarkdown from "react-markdown";
import { Editor } from "@monaco-editor/react";
const NewPost = () => {


    const router = useRouter();
    
    const [post, setPost] = React.useState<any>({
        name: "",
        content: ""
    });

    const {name,  content} = post;
    // const [image, setImage] = React.useState<any>(null)
    const [title, setTitle] = React.useState("");

    const [markdownContent, setMarkdownContent] = React.useState("");

    const handleChange = (event: any) => {
        setPost((post: any) => ({...post, [event?.target.name]: event?.target.value}))
    }





    const handleCreatePost = async () => {

        if(!title || !markdownContent) return;

        const id = uuid();

        post.id = id;

        // if(image){
        //     const coverImage = `${image.name}_${uuid()}`
        //     post.coverImage = coverImage
        //     await Storage.put(coverImage, image)
        // }
        await API.graphql({
            query: createPost,
            variables: {
                input: {
                    id,
                    name: title,
                    content: markdownContent
                }
            },
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })

        router.push(`/post/${id}`)
    }

    const handleUploadImage = () => {

    }


    const imageInput = useRef(null)


    // const handleImageChange = (e: any) => {
    //     const fileUploaded = e.target.files[0];
    //     console.log(fileUploaded)

    //     if(!fileUploaded) return;

    //     setImage(fileUploaded)
    // }


    const [markdownImage, setMarkdownImage] = React.useState(null);

    const handleEditorChange = (value: any) => setMarkdownContent(value);

    const fileInput = useRef<any>(null)


    const handleuploadImage = () => {
      fileInput.current.click()
    }

    const handleAttachImage = async (e: any) => {

        const fileUploaded = e.target.files[0];
        // console.log(fileUploaded)

        if(!fileUploaded) return;

        const contentImage = `${fileUploaded.name}_${uuid()}`

        const res  = await Storage.put(contentImage, fileUploaded, {
            progressCallback(progress) {
              console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
            }});

        const image = await Storage.get(res.key)
        console.log(image)
        setMarkdownContent(`${markdownContent} \n ![post-image](${image})`)

    }


    return(
        <Authenticator>
            <div className="container mx-auto p-4">
            <div className="mt-4">
            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black text-black">Title</label>
            <input value={title} name="name" onChange={(e: any) => setTitle(e.target.value)} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
            
            </div>

            {/* {
                image && 
                <img src={URL.createObjectURL(image)}/>
            }
           */}
          <div className="flex w-full items-center justify-between pt-5">
          <div className="flex h-10 items-center gap-2 shrink-0">
  
            <div className="h-3 border-l border-divider-2 dark:border-gray-7"></div>
            <input type="file" style={{ display: 'none' }} ref={fileInput} onChange={handleAttachImage}/>
            <button onClick={handleuploadImage} className="rounded font-medium items-center whitespace-nowrap focus:outline-none inline-flex p-1 hover:bg-fill-3 dark:hover:bg-dark-fill-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="1em"
                height="1em"
                fill="currentColor"
                className="h-4.5 w-4.5 text-gray-8 dark:text-dark-gray-8"
              >
                <path
                  fill-rule="evenodd"
                  d="M21 14.997V18a3 3 0 01-3 3H6a3 3 0 01-3-3V6a3 3 0 013-3h12a3 3 0 013 3v8.997zm-2-2.293V6a1 1 0 00-1-1H6a1 1 0 00-1 1v11.218l8.96-7.965a1 1 0 011.346.015L19 12.704zm0 2.731l-4.39-4.084L6.005 19H18a1 1 0 001-1v-2.565zM8.5 11a2.5 2.5 0 110-5 2.5 2.5 0 010 5zm0-2a.5.5 0 100-1 .5.5 0 000 1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>

          </div>
        </div>

        <div className="h-[calc(100vh_-_15rem)] flex">
          <div className="flex flex-1 min-h-0 grow">
            <Editor
              width="100%"
              className="border rounded-lg w-full "
              defaultLanguage="markdown"
              value={markdownContent}
              onChange={handleEditorChange}
              options={{
                lineNumbers: "off",
                minimap: {
                  enabled: false,
                },
              }}
            />
          </div>
          <div className="w-1/2 prose border p-4 overflow-scroll">
            <ReactMarkdown
              children={markdownContent}
              //   remarkPlugins={[remarkGfm]}
            />
          </div>
        </div>
          
          {/* <h2> Add a cover image </h2>
            <input
        type="file"
        accept="image/*"
        ref={imageInput}
        onChange={handleImageChange}
        // style={{ display: 'none' }}
        id="contained-button-file"
      /> */}

            <button onClick={handleCreatePost} className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"> Create Post </button>
            </div>
        </Authenticator>
    )
}

export default NewPost