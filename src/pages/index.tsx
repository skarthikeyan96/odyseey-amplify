import Image from 'next/image'
import { Inter } from 'next/font/google'
import {API} from 'aws-amplify'
import { listPosts } from '@/graphql/queries'
import { useEffect, useState } from 'react'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [posts, setPosts] = useState<any>([])

  useEffect(() => {
    fetchPosts()
  }, [])


  const fetchPosts = async () => {
    const postData: any = await API.graphql({
      query: listPosts
    })
    setPosts(postData.data.listPosts.items)
  }

  console.log(posts)


  return (
    <main
      className={`flex min-h-screen flex-col items-center  pt-10 ${inter.className}`}
    >
        {
        posts.map((post: any, postIdx: number) => {
          return (
            <li key={postIdx}>
              
              <Link href={`post/${post.id}`}> {post.name} </Link>
              
              </li>
          )
        })
      }
    </main>
  )
}
