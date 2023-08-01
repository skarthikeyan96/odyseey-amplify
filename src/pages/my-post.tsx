import { postsByUsername } from '@/graphql/queries'
import { API, Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { deletePost } from '@/graphql/mutations'
import Wrapper from '@/components/wrapper'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

const MyPost = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchPost = async () => {
    setLoading(true)
    const response = await Auth.currentAuthenticatedUser()
    const username = `${response.attributes.sub}::${response.username}`
    const post: any = await API.graphql({
      query: postsByUsername,
      variables: { username },
    })

    setPosts(post.data.postsByUsername.items)
    setLoading(false)
  }

  const deleteMediaPost = async (id: string) => {
    await API.graphql({
      query: deletePost,
      variables: { input: { id } },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })

    fetchPost()
  }

  useEffect(() => {
    fetchPost()
  }, [])

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

          <div className="space-x-4">
            <button
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-sm bg-black text-white"
              onClick={() => deleteMediaPost(post.id)}
            >
              Delete
            </button>
            <Link
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold text-sm"
              href={`post/edit/${post.id}`}
            >
              Edit post
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

export default MyPost
