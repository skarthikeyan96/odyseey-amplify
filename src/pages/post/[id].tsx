import { getPost, listPosts } from '@/graphql/queries'
import { API, Storage } from 'aws-amplify'
import { GetStaticPaths, GetStaticProps } from 'next'
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Navbar from '@/components/navbar'

const Post = ({ post }: any) => {
  const [coverImage, setCoverImage] = useState('')

  React.useEffect(() => {
    if (!post.coverImage) return
    const getCoverImage = async () => {
      const image = await Storage.get(post.coverImage)
      setCoverImage(image)
    }
    getCoverImage()
  }, [])

  if (!post) return

  return (
    <>
      <Navbar />
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl">
          <div className="flex justify-between items-center mb-6">
            <div className="flex w-full sm:items-center gap-x-5 sm:gap-x-3">
              <div className="grow">
                <div className="grid sm:flex sm:justify-between sm:items-center gap-2">
                  <div>
                    <div className="hs-tooltip inline-block [--trigger:hover] [--placement:bottom]">
                      <div className="hs-tooltip-toggle sm:mb-1 block text-left cursor-pointer">
                        <span className="font-semibold text-gray-800">
                          {post.username}
                        </span>

                        <div
                          className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 max-w-xs cursor-default bg-gray-900 divide-y divide-gray-700 shadow-lg rounded-xl dark:bg-black"
                          role="tooltip"
                        >
                          <div className="p-4 sm:p-5">
                            <div className="mb-2 flex w-full sm:items-center gap-x-5 sm:gap-x-3">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                                  alt="Image Description"
                                />
                              </div>

                              <div className="grow">
                                <p className="text-lg font-semibold text-gray-200">
                                  Leyla Ludic
                                </p>
                              </div>
                            </div>
                            <p className="text-sm text-gray-400">
                              Leyla is a Customer Success Specialist at Preline
                              and spends her time speaking to in-house
                              recruiters all over the world.
                            </p>
                          </div>

                          <div className="flex justify-between items-center px-4 py-3 sm:px-5">
                            <ul className="text-xs space-x-3">
                              <li className="inline-block">
                                <span className="font-semibold text-gray-200">
                                  56
                                </span>
                                <span className="text-gray-400">articles</span>
                              </li>
                              <li className="inline-block">
                                <span className="font-semibold text-gray-200">
                                  1k+
                                </span>
                                <span className="text-gray-400">followers</span>
                              </li>
                            </ul>

                            <div>
                              <button
                                type="button"
                                className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-1.5 rounded-md border border-transparent font-semibold bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 text-xs"
                              >
                                <svg
                                  className="w-3.5 h-3.5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                  <path
                                    fill-rule="evenodd"
                                    d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                                  />
                                </svg>
                                Follow
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="text-xs text-gray-500">
                      <li className="inline-block relative pr-6 last:pr-0 last-of-type:before:hidden before:absolute before:top-1/2 before:right-2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-gray-300 before:rounded-full dark:text-gray-400 dark:before:bg-gray-600">
                        {new Date(post.createdAt).toDateString()}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-8">
            <h2 className="text-2xl font-bold md:text-3xl ">{post.name}</h2>
            <div className="flex-shrink-0">
              {coverImage && (
                <img
                  className="w-full object-cover rounded-xl"
                  src={coverImage}
                  alt="Image Description"
                />
              )}
            </div>
            <div className="space-y-3 prose">
              <ReactMarkdown
                // eslint-disable-next-line react/no-children-prop
                children={post.content}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postsData: any = await API.graphql({
    query: listPosts,
  })

  const paths = postsData.data.listPosts.items.map((post: any) => ({
    params: { id: post.id.toString() },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { id } = params
  const postsData: any = await API.graphql({
    query: getPost,
    variables: { id },
  })

  return {
    props: {
      post: postsData.data.getPost,
    },
  }
}

export default Post
