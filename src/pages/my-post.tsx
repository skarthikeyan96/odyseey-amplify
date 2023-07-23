import { postsByUsername } from "@/graphql/queries";
import { API, Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { Inter } from 'next/font/google'
import Link from "next/link";
import { deletePost } from '@/graphql/mutations';

const inter = Inter({ subsets: ['latin'] })

const MyPost = () => {

    const [posts, setPosts] = useState([])
    const fetchPost = async () => {
        const response = await Auth.currentAuthenticatedUser()
        console.log("username", response)
        const username = `${response.attributes.sub}::${response.username}`
       const post:any =  await API.graphql({ 
            query: postsByUsername,
            variables: {username}
        })

        setPosts(post.data.postsByUsername.items)

    }



    const deleteMediaPost = async (id: string) => {
      await API.graphql({
        query: deletePost,
        variables: {input: {id}},
        authMode: "AMAZON_COGNITO_USER_POOLS"
      })

      fetchPost()
    }


    useEffect(() => {
        fetchPost()
    },[])
    return (
        <>
            My post

            <main
      className={`flex min-h-screen flex-col items-center  pt-10 ${inter.className}`}
    >
        {
        posts.map((post: any, postIdx: number) => {
          return (
            <li key={postIdx}>
              
              <Link href={`post/${post.id}`}> {post.name} </Link>
              <br/>
              <button onClick={() => deleteMediaPost(post.id)}> Delete Post </button>
              <Link href={`post/edit/${post.id}`}> Edit post</Link>

              </li>
          )
        })
      }
    </main>
        </>
    )
}

export default MyPost;