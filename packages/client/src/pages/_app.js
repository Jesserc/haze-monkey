import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import Layout from '../components/landingpage/layout/layout'
import Loading from '../components/landingpage/loading/loading'
import { useState, useEffect } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const [isClicked, setClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [app, enterApp] = useState(true)

  const handleClick = () => {
    setClicked(!isClicked);
  }
  const enterJungle = () => {
    enterApp(false);
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])
  return (
    <main> 
   
      {
        app ? 
        <>
            <Loading 
              loading={loading}
              enterJungle = {enterJungle}
          />
        </>
        
        :

         <Layout
          handleClick = { handleClick }
          isClicked = { isClicked }
        > 
          <Component
            {...pageProps}
            handleclick = {handleClick}
            isClicked = {isClicked}
            loading = {loading}
          />

        </Layout>
       
      }
      
    </main>
  )
}

export default MyApp
