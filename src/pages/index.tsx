import Image from 'next/image'
import { Inter } from 'next/font/google'
import { API } from 'aws-amplify'
import { listPosts } from '@/graphql/queries'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Wrapper from '@/components/wrapper'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Dashboard() {
  const [posts, setPosts] = useState<any>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    const postData: any = await API.graphql({
      query: listPosts,
    })
    setPosts(postData.data.listPosts.items)
    setLoading(false)
  }

  const renderPost = () => {
    if (loading) return <p> Loading ... </p>

    if (posts.length === 0)
      return (
        <p>
          No posts added , <Link href="/create"> Create Post </Link>
        </p>
      )

    return posts.map((post: any, postIdx: number) => {
      return (
        <div className="flex flex-wrap py-4  md:flex-nowrap" key={post.id}>
          <div className="md:flex-grow">
            <Link className="text-black-500 mt-4" href={`post/${post.id}`}>
              <h2 className="title-font mb-2 text-xl font-medium text-gray-900 ">
                {post.name}
              </h2>
              <p className="leading-relaxed ">by {post.username}</p>
            </Link>
          </div>
        </div>
      )
    })
  }

  return (
    <>
      <Navbar />
      <Wrapper>
        <section
          className={`${inter.className}body-font overflow-hidden text-gray-600`}
        >
          <div className="mx-auto">
            <div className="divide-y ">{renderPost()}</div>
          </div>
        </section>
      </Wrapper>
    </>
  )
}
