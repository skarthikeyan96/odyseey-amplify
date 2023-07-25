import { getPost, listPosts } from "@/graphql/queries"
import { API, Storage } from "aws-amplify"
import { GetStaticPaths, GetStaticProps } from "next"
import React, { useState } from "react"
import ReactMarkdown from "react-markdown"

const Post = ({post}: any) => {
console.log(post)

const [coverImage, setCoverImage] = useState("")


React.useEffect(() => {
    if(!post.coverImage) return;
    const getCoverImage = async () =>{ 
        const image = await Storage.get(post.coverImage)
        setCoverImage(image)
    }
    getCoverImage()
},[])


    return (
        <> 
           <h1>  {post.name} </h1>
           {coverImage && <img src={coverImage}/>}
           <div className="w-1/2 prose border p-4 overflow-scroll">
            <ReactMarkdown
              children={post.content}
              //   remarkPlugins={[remarkGfm]}
            />
          </div>
        </>
    )
}


export const getStaticPaths:GetStaticPaths = async () => {


    const postsData: any = await API.graphql({
        query: listPosts
    })

    const paths = postsData.data.listPosts.items.map((post: any) => ({params: {id: post.id.toString()}}))
    return{
        paths,
        fallback: true
    }
}

export const getStaticProps: GetStaticProps = async ({params}: any) => {
    const {id} = params;
    const postsData: any = await API.graphql({
        query: getPost,
        variables: {id}
    })

    return {
        props: {
            post: postsData.data.getPost
        }
    }
}


export default Post;