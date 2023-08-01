import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Navbar from '@/components/navbar'
import Wrapper from '@/components/wrapper'
import { Auth } from 'aws-amplify'
import { useRouter } from 'next/router'
import React from 'react'
import { Hub } from 'aws-amplify'

const Profile = () => {
  const router = useRouter()
  const { authStatus } = useAuthenticator((context) => [context.authStatus])
  const { user } = useAuthenticator((context) => [context.user])

  // React.useEffect(() => {
  //   if(authStatus === "authenticated") router.push("/")

  // }, [authStatus])

  Hub.listen('auth', (data) => {
    switch (data.payload.event) {
      case 'signIn':
        router.push('/')
        break
      case 'signUp':
        console.log('user signed up')
        break
      case 'signOut':
        console.log('user signed out')
        break
      case 'signIn_failure':
        console.log('user sign in failed')
        break
      case 'configured':
        console.log('the Auth module is configured')
    }
  })
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="p-4">
          {authStatus === 'configuring' && 'Loading...'}

          {authStatus !== 'authenticated' ? (
            <Authenticator />
          ) : (
            <>
              <main>
                <h1> Username: {user?.username}</h1>
                <button
                  className="mt-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                  onClick={() => {
                    Auth.signOut()
                    router.push('/home')
                  }}
                >
                  Sign out
                </button>
              </main>
            </>
          )}
        </div>
      </Wrapper>
    </>
  )
}

export default Profile
