import { updatePost } from '@/graphql/mutations'
import { getPost } from '@/graphql/queries'
import { API, Storage } from 'aws-amplify'
import { useRouter } from 'next/router'
import React, { useEffect, useRef } from 'react'
import { v4 as uuid } from 'uuid'
import ReactMarkdown from 'react-markdown'
import { Editor } from '@monaco-editor/react'
import Navbar from '@/components/navbar'

const EditPost = () => {
  const router = useRouter()

  const [loading, setLoading] = React.useState(false)
  const fileInput = useRef<any>(null)

  const id = router.query.id

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [title, setTitle] = React.useState('')

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [markdownContent, setMarkdownContent] = React.useState('')

  const [coverImage, setCoverImage] = React.useState<any>(null)
  const [localImage, setLocalImage] = React.useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true)
      if (!id) return
      const postData: any = await API.graphql({
        query: getPost,
        variables: { id },
      })
      setTitle(postData.data.getPost.name)
      setMarkdownContent(postData.data.getPost.content)
      if (postData.data.getPost.coverImage) {
        updateCoverImage(postData.data.getPost.coverImage)
      }
      setLoading(false)
    }

    fetchPost()
  }, [id])

  const updateCoverImage = async (coverImageParam: any) => {
    const coverImage = await Storage.get(coverImageParam)
    setCoverImage(coverImage)
  }

  const handleUpdatePost = async () => {
    if (!title || !markdownContent) return

    let coverImageToBeUpdated = ''

    if (coverImage && localImage) {
      coverImageToBeUpdated = `${coverImage.name}_${uuid()}`
      await Storage.put(coverImageToBeUpdated, coverImage)
    }

    await API.graphql({
      query: updatePost,
      variables: {
        input: {
          id,
          name: title,
          content: markdownContent,
          coverImage: coverImageToBeUpdated,
        },
      },
      authMode: 'AMAZON_COGNITO_USER_POOLS',
    })
    router.push(`/my-post`)
  }

  if (!title || !markdownContent) return null
  const handleImageChange = (e: any) => {
    const fileUploaded = e.target.files[0]

    if (!fileUploaded) return
    setCoverImage(fileUploaded)
    setLocalImage(URL.createObjectURL(fileUploaded) as any)
  }

  const handleuploadImage = () => {
    fileInput.current.click()
  }

  const handleAttachImage = async (e: any) => {
    const fileUploaded = e.target.files[0]

    if (!fileUploaded) return

    const contentImage = `${fileUploaded.name}_${uuid()}`

    const res = await Storage.put(contentImage, fileUploaded, {
      progressCallback(progress) {
        console.log(`Uploaded: ${progress.loaded}/${progress.total}`)
      },
    })

    const image = await Storage.get(res.key)
    setMarkdownContent(`${markdownContent} \n ![post-image](${image})`)
  }

  const handleEditorChange = (value: any) => setMarkdownContent(value)

  if (loading) return <p> Loading... </p>

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="mt-4">
          <label
            htmlFor="input-label"
            className="block text-sm font-medium mb-2 dark:text-black text-black"
          >
            Title
          </label>
          <input
            value={title}
            name="name"
            onChange={(e: any) => setTitle(e.target.value)}
            type="text"
            className="py-3 px-4 block w-full border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400"
          />
        </div>

        {coverImage && <img src={localImage ? localImage : coverImage} />}

        <div className="flex w-full items-center justify-between pt-5">
          <div className="flex h-10 items-center gap-2 shrink-0">
            <div className="h-3 border-l border-divider-2 dark:border-gray-7"></div>
            <input
              type="file"
              style={{ display: 'none' }}
              ref={fileInput}
              onChange={handleAttachImage}
            />
            <button
              onClick={handleuploadImage}
              className="rounded font-medium items-center whitespace-nowrap focus:outline-none inline-flex p-1 hover:bg-fill-3 dark:hover:bg-dark-fill-3"
            >
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
        <label
          htmlFor="input-label"
          className="block text-sm font-medium mb-2 dark:text-black text-black"
        >
          Journal content
        </label>
        <div className="h-[calc(100vh_-_15rem)] flex">
          <div className="flex flex-1 min-h-0 grow">
            <Editor
              width="100%"
              className="border rounded-lg w-full "
              defaultLanguage="markdown"
              value={markdownContent}
              onChange={handleEditorChange}
              options={{
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

        <label className="block">
        <span className="block text-sm font-medium mb-2 dark:text-black text-black">
            {' '}
            Choose cover image{' '}
          </span>
          <span className="sr-only">Choose cover image</span>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            id="contained-button-file"
            className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-blue-500 file:text-white
                    hover:file:bg-blue-600
    "
          />
        </label>

        <button
          onClick={handleUpdatePost}
          className="mt-4 w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
        >
          Edit Journal
        </button>
      </div>
    </>
  )
}

export default EditPost
