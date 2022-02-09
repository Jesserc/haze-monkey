import '../styles/globals.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { initGA, logPageView } from '../../utils/analytics'

const MyApp = ({ Component, pageProps }) => {
  const [loading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
  }, [])

  useEffect(() => {
    logPageView()
  }, [router.pathname])

  return <Component {...pageProps} loading={loading} />
}

export default MyApp
