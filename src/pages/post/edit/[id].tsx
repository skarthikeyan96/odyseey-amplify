import { updatePost } from "@/graphql/mutations";
import { getPost } from "@/graphql/queries";
import { API , Storage} from "aws-amplify";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import {v4 as uuid} from 'uuid'

const EditPost = () => {

    const router = useRouter();
    
    const [post, setPost] = React.useState<any>({
        name: "",
        content: ""
    });

    const {name,  content} = post;

    const id = router.query.id;


    const [coverImage, setCoverImage] = React.useState<any>(null)
    const [localImage, setLocalImage] = React.useState(null);


    useEffect(() => {

        
        const fetchPost = async () => {
            if (!id) return;
            const postData:any = await API.graphql({
                query: getPost,
                variables: {id}
            })
            console.log(postData)
            setPost(postData.data.getPost)
            if (postData.data.getPost.coverImage) {
                updateCoverImage(postData.data.getPost.coverImage);
              }
        }


       

        fetchPost()
        

    },[id])


    const updateCoverImage = async (coverImageParam: any) => {
        const coverImage = await Storage.get(coverImageParam)
        setCoverImage(coverImage)
    }


    const handleUpdatePost = async () => {
        if(!name || !content) return;

        const postUpdated: any = {
            id,
            content,
            name
        }
       

        if (coverImage && localImage) {
            const fileName = `${coverImage.name}_${uuid()}`;
            postUpdated.coverImage = fileName;
            await Storage.put(fileName, coverImage);
          }


        await API.graphql({
            query: updatePost,
            variables: {input: postUpdated},
            authMode: "AMAZON_COGNITO_USER_POOLS"
        })
        router.push(`/my-post`)
    }


    const handleChange = (event: any) => {
        setPost((post: any) => ({...post, [event?.target.name]: event?.target.value}))
    }

    if(!post) return null
    const handleImageChange = (e: any) => {
        const fileUploaded = e.target.files[0];
        console.log(fileUploaded)

        if(!fileUploaded) return;
        setCoverImage(fileUploaded);
        setLocalImage(URL.createObjectURL(fileUploaded) as any);
    }
    return (
        <div className="container mx-auto p-4">
        <div className="mt-4">
        <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black text-black">Title</label>
        <input value={post.name} name="name" onChange={handleChange} type="text" className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
        
        </div>
        

        {
            coverImage && <img src={localImage ? localImage : coverImage}/>
        }
       <div className="mt-4">
       <label htmlFor="input-label" className="block text-sm font-medium mb-2 dark:text-black text-black capitalize">description</label>
        <textarea value={post.content} name="content"  onChange={handleChange} className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"/>
        </div> 


        <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        // style={{ display: 'none' }}
        id="contained-button-file"
      />
        <button onClick={handleUpdatePost} className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"> Update Post </button>
        </div>
    )
}

export default EditPost;