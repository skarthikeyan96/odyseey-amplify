import { Authenticator } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';


const Profile = () => {
    return(
        <div className="p-4">
        <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Hello {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
      </div>
    )
}

export default Profile