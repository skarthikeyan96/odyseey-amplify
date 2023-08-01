import { createPost } from "@/graphql/mutations";
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import React, { useRef } from "react"
import { v4 as uuid } from 'uuid'
import ReactMarkdown from "react-markdown";
import { Editor } from "@monaco-editor/react";
const NewPost = () => {


  const router = useRouter();

  const [post, setPost] = React.useState<any>({
    name: "",
    content: ""
  });

  // const {name,  content} = post;
  const [image, setImage] = React.useState<any>(null)
  const [title, setTitle] = React.useState("");

  const [markdownContent, setMarkdownContent] = React.useState("");

  const handleCreatePost = async () => {

    if (!title || !markdownContent) return;

    const id = uuid();
    let coverImage = "";


    if (image) {
      coverImage = `${image.name}_${uuid()}`
      await Storage.put(coverImage, image)
    }

    await API.graphql({
      query: createPost,
      variables: {
        input: {
          id,
          name: title,
          content: markdownContent,
          coverImage
        }
      },
      authMode: "AMAZON_COGNITO_USER_POOLS"
    })

    router.push(`/post/${id}`)
  }

  const handleUploadImage = () => {

  }


  const imageInput = useRef(null)


  const handleImageChange = (e: any) => {
    const fileUploaded = e.target.files[0];

    if (!fileUploaded) return;

    setImage(fileUploaded)
  }

  const handleEditorChange = (value: any) => setMarkdownContent(value);

  const fileInput = useRef<any>(null)


  const handleuploadImage = () => {
    fileInput.current.click()
  }

  const handleAttachImage = async (e: any) => {

    const fileUploaded = e.target.files[0];

    if (!fileUploaded) return;

    const contentImage = `${fileUploaded.name}_${uuid()}`

    const res = await Storage.put(contentImage, fileUploaded, {
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`);
      }
    });

    const image = await Storage.get(res.key)
    setMarkdownContent(`${markdownContent} \n ![post-image](${image})`)

  }


  return (
      <div className="container mx-auto p-4">
        <div className="mt-4 mb-4">
          <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black text-black">Title</label>
          <input value={title} name="title" onChange={(e: any) => setTitle(e.target.value)} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" />

        </div>

        {
          image &&
          // eslint-disable-next-line @next/next/no-img-element
          <img src={URL.createObjectURL(image)} alt="cover_photo" />
        }
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
              // eslint-disable-next-line react/no-children-prop
              children={markdownContent}
            />
          </div>
        </div>

        <h2> Add a cover image </h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          ref={fileInput}
          id="contained-button-file"
        />

        

        <button onClick={handleCreatePost} className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"> Create Post </button>
      </div>
  )
}

export default NewPost