import { createPost } from "@/graphql/mutations";
import { Authenticator } from "@aws-amplify/ui-react"
import { API, Storage } from "aws-amplify";
import { useRouter } from "next/router";
import React, { useRef } from "react"
import {v4 as uuid} from 'uuid'

const NewPost = () => {


    const router = useRouter();
    
    const [post, setPost] = React.useState<any>({
        name: "",
        content: ""
    });

    const {name,  content} = post;
    const [image, setImage] = React.useState<any>(null)

    const handleChange = (event: any) => {
        setPost((post: any) => ({...post, [event?.target.name]: event?.target.value}))
    }


    const handleCreatePost = async () => {

        if(!name || !content) return;

        const id = uuid();

        post.id = id;

        if(image){
            const coverImage = `${image.name}_${uuid()}`
            post.coverImage = coverImage
            await Storage.put(coverImage, image)
        }
        await API.graphql({
            query: createPost,
            variables: {
                input: post
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
        console.log(fileUploaded)

        if(!fileUploaded) return;

        setImage(fileUploaded)
    }


    return(
        <Authenticator>
            <div className="container mx-auto p-4">
            <div className="mt-4">
            <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black text-black">Title</label>
            <input value={post.name} name="name" onChange={handleChange} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
            
            </div>

            {
                image && 
                <img src={URL.createObjectURL(image)}/>
            }
           <div className="mt-4">
           <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black text-black capitalize">description</label>
            <textarea value={post.content} name="content"  onChange={handleChange} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
            </div> 

            <input
        type="file"
        accept="image/*"
        ref={imageInput}
        onChange={handleImageChange}
        // style={{ display: 'none' }}
        id="contained-button-file"
      />

            <button onClick={handleCreatePost} className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"> Create Post </button>
            </div>
        </Authenticator>
    )
}

export default NewPost