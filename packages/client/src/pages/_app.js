import '../styles/globals.css'
// import type { AppProps } from 'next/app'
import Layout from '../components/landingpage/layout/layout'
import { useState } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!isClicked);
    console.log(isClicked);
  }
  return (
    <Layout
      handleClick = { handleClick }
      isClicked = { isClicked }
    > 
      <Component
        {...pageProps}
        handleclick = {handleClick}
        isClicked = {isClicked}
       />

    </Layout>
  )
}

export default MyApp
