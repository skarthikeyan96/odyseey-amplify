import { Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css'
import Navbar from '@/components/navbar'
import Wrapper from '@/components/wrapper'

const Profile = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <div className="p-4">
          <Authenticator>
            {({ signOut, user }) => (
              <main>
                <h1> Username: {user?.username}</h1>
                <button
                  className="mt-4 py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-gray-800 text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm dark:focus:ring-gray-900 dark:focus:ring-offset-gray-800"
                  onClick={signOut}
                >
                  Sign out
                </button>
              </main>
            )}
          </Authenticator>
        </div>
      </Wrapper>
    </>
  )
}

export default Profile
