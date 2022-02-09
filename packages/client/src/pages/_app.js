import '../styles/globals.css'
import { useRouter } from 'next/router'
import Layout from '../components/landingpage/layout/layout'
import { useState, useEffect } from 'react'
import { initGA, logPageView } from '../../utils/analytics'

const MyApp = ({ Component, pageProps }) => {
  const [isClicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const handleClick = () => {
    setClicked(!isClicked)
  }

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
  }, [])

  useEffect(() => {
    logPageView()
  }, [router.pathname])

  return (
    <Layout handleClick={handleClick} isClicked={isClicked}>
      <Component
        {...pageProps}
        handleclick={handleClick}
        isClicked={isClicked}
        loading={loading}
      />
    </Layout>
  )
}

export default MyApp
