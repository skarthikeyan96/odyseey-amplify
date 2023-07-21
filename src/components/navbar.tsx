import { Auth, Hub } from "aws-amplify";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [signedUser, setSignedUser] = useState(false);

  console.log(signedUser)

  useEffect(() => {
    AuthListener()
  },[])


  const AuthListener = async () => {
    Hub.listen('auth' , (data) => {
      switch (data.payload.event) {
        case "SignIn":
            return setSignedUser(true)
        case "SignOut":
          return setSignedUser(false)
      }
    })

    try{
      await Auth.currentAuthenticatedUser()
      setSignedUser(true)
    }catch(err){
      
    }
  }
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
          >
            Brand
          </a>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
              data-hs-collapse="#navbar-with-collapse"
              aria-controls="navbar-with-collapse"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-with-collapse"
          className="hidden basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            <Link
              className="font-medium text-blue-500"
              href="/"
              aria-current="page"
            >
              Home
            </Link>

            <Link
              className="font-medium text-blue-500"
              href="/post/new"
              aria-current="page"
            >
              New post
            </Link>
            <Link
              className="font-medium text-blue-500"
              href="/profile"
              aria-current="page"
            >
              Profile
            </Link>
           {
            signedUser && (
              <Link
              className="font-medium text-blue-500"
              href="/my-post"
              aria-current="page"
            >
             My posts
            </Link>
            )
           }
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
