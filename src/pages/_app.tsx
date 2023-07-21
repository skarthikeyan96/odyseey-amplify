import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../../configureAmplify'
import { useEffect } from 'react'
import Navbar from '@/components/navbar'

export default function App({ Component, pageProps }: AppProps) {

  useEffect(() => {
    //@ts-ignore
    import('preline')
  }, [])

  
  return (
  <> 
  <Navbar/>
  <Component {...pageProps} />
  </>
  )
}
