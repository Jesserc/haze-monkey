import '../styles/globals.css'
import { useRouter } from 'next/router'
import { Provider } from "react-redux";
import { Rinkeby, Mainnet, DAppProvider } from '@usedapp/core';
import { ToastProvider } from "react-toast-notifications";
import store from "../redux/store";
import Layout from '../components/landingpage/layout/layout'
// import Loading from '../components/landingpage/loading/loading'
import { useState, useEffect } from 'react'
import { initGA, logPageView } from '../../utils/analytics'
// import { listRef } from '../components/landingpage/appNavbar/navList'

// import { gsap } from 'gsap/dist/gsap.js';
// import { TweenLite, Power3 } from 'gsap/dist/gsap.js';


const MyApp = ({ Component, pageProps }) => {
  const [isClicked, setClicked] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const handleClick = () => {
    setClicked(!isClicked)
     
    // TweenLite.staggerFrom([listRef.children[0], listRef.children[1], listRef.children[2]], 0.2, {
    //     opacity: 0, y: 10, ease: Power3.easeOut
    // }, .4)
            
  }

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000);
  // }, [])

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
  }, [])

  useEffect(() => {
    logPageView()
  }, [router.pathname])

  // const config = {
  //   // readOnlyChainId: Rinkeby.chainId,
  //   // readOnlyUrls: {
  //   //   [Rinkeby.chainId]: "https://rinkeby.infura.io/v3/9b9c747683534e9cbbaec57dc67b7dbf"
  //   // },
  //   readOnlyChainId: Mainnet.chainId,
  //   readOnlyUrls: {
  //     [Mainnet.chainId]: "https://mainnet.infura.io/v3/f674dc4ebe2e4c589aa4fccfa2a66fbd"
  //   },
  // }
  return (
    // <DAppProvider config={config}>
      <Provider store={store}>
        <ToastProvider autoDismissTimeout={3000}>
        
          <Layout handleClick={handleClick} isClicked={isClicked}>
            <Component
              {...pageProps}
              handleclick={handleClick}
              isClicked={isClicked}
              loading = {loading}
            />
          </Layout>
        </ToastProvider>
      </Provider>
    // </DAppProvider>
    
  )
}

export default MyApp
