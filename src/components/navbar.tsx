import { Auth, Hub } from "aws-amplify";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [signedUser, setSignedUser] = useState(false);


  useEffect(() => {
    AuthListener()
  }, [])


  const AuthListener = async () => {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case "SignIn":
          return setSignedUser(true)
        case "SignOut":
          return setSignedUser(false)
      }
    })

    try {
      await Auth.currentAuthenticatedUser()
      setSignedUser(true)
    } catch (err) {

    }
  }
  return (


    <header className="body-font text-gray-600  shadow-md" >
      <div className="container mx-auto flex h-28 min-h-0   flex-row flex-wrap items-center px-5">
        <Link href="/" passHref className="title-font mb-0 flex items-center font-medium text-gray-900">
          <span className="font text-xl tracking-wide text-black ">
          Odyssey
          </span>
        </Link>

        <nav className="ml-auto flex flex-wrap items-center justify-center text-base space-x-4">
          <Link
            className="font-medium "
            href="/"
            aria-current="page"
          >
            Home
          </Link>

          <Link
            className="font-medium "
            href="/post/new"
            aria-current="page"
          >
            New Journal
          </Link>


          {
            signedUser && (
              <Link
                className="font-medium "
                href="/my-post"
                aria-current="page"
              >
                My Journal
              </Link>
            )
          }

          <Link
            className="font-medium "
            href="/profile"
            aria-current="page"
          >
            Profile
          </Link>
        </nav>
      </div>

    </header>
  );
};

export default Navbar;
