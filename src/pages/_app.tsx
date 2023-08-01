import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../../configureAmplify'
import { useEffect } from 'react'
import { Auth, Hub } from 'aws-amplify'
import React from 'react'
import NextNprogress from 'nextjs-progressbar'
import { Authenticator } from '@aws-amplify/ui-react'

export default function App({ Component, pageProps }: AppProps) {
  const [signedUser, setSignedUser] = React.useState(false)
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    AuthListener()
  }, [])

  const AuthListener = async () => {
    Hub.listen('auth', (data) => {
      switch (data.payload.event) {
        case 'SignIn':
          return setSignedUser(true)
        case 'SignOut':
          return setSignedUser(false)
      }
    })

    try {
      setLoading(true)
      await Auth.currentAuthenticatedUser()
      setSignedUser(true)
      setLoading(false)
    } catch (err) {}
  }

  useEffect(() => {
    //@ts-ignore
    import('preline')
  }, [])

  return (
    <Authenticator.Provider>
      <NextNprogress />
      <Component {...pageProps} />
    </Authenticator.Provider>
  )
}
