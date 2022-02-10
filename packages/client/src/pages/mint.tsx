/* eslint-disable @next/next/no-img-element */
import SEOHead from '../components/SEOHead/SEOHead'
import Slide from '../components/landingpage/hero/heroslide'
import styled from 'styled-components'
import Link from 'next/link'
import { useState } from 'react'
import { connectWallet } from '../../utils/eth'

const Home = () => {
  const [walletAddress, setWalletAddress] = useState('')

  const onConnectWallet = async () => {
    try {
      const fetchedAddres = await connectWallet()
      setWalletAddress(fetchedAddres)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <SEOHead />
      <nav className="flex items-center justify-between bg-brown px-4 lg:px-24 py-2">
        <Link href="/">
          <a className="">
            <img
              src="/images/logo.svg"
              alt="logo"
              className="logo"
              id="logo"
              width={33.21}
              height={31}
            />
          </a>
        </Link>

        {walletAddress && (
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 bg-green-500 rounded-full" />
            <StyledConnectText className="ml-1 mr-2 font-bold text-green-500 text-sm">
              Connected
            </StyledConnectText>
            <StyledProfilePicture
              className="rounded-full w-10 h-10"
              src="https://res.cloudinary.com/lab88/image/upload/dpr_auto,q_auto,f_auto/v1643791432/website/chinese_e2dydz"
            />
          </div>
        )}

        {!walletAddress && (
          <DiscordButton
            onClick={onConnectWallet}
            className="flex justify-center text-white items-center"
          >
            Connect wallet
          </DiscordButton>
        )}
      </nav>
      <main>
        <StyledSection className="sectionContainer flex flex-col justify-between min-h-screen ">
          <div className="sectionContent flex flex-col items-center pt-12 pb-12 lg:pt-4 lg:pb-9 w-full h-full relative wrapper">
            <div className="flex flex-col items-center text-center">
              <img src="images/vectors/weed3.svg" alt="weed" className="mb-6" />
              <h1 className="mb-6">Mint Haze Monkey</h1>
              <p className="mb-6">
                4,200 Haze Monkeys making an impact in society through the
                metaverse.
              </p>
              <button className="coming-soon cursor-not-allowed opacity-20 bg-buttonGreen tracking-widest transition-colors  font-bold flex items-center justify-center">
                MINT
              </button>
            </div>
          </div>
          <Slide />
        </StyledSection>
      </main>
    </>
  )
}

const StyledConnectText = styled.p`
  font-family: var(--roobert-bold);
`

const DiscordButton = styled.button`
  background: var(--green1);
  border-radius: 12px;
  width: 151.39px;
  height: 51px;
`

const StyledProfilePicture = styled.img`
  width: 40px;
  height: 40px;
`

const StyledSection = styled.section`
  @media all and (min-width: 0px) {
    background: var(--brown1);

    .sectionContent {
      z-index: 0;
    }
    .sectionContent h1 {
      font: 3.75rem/4rem var(--optima);
      font-weight: 900;
      color: var(--green1);
      width: 80%;
    }
    .sectionContent p {
      font: 1.125rem/1.875rem var(--roobert);
      font-weight: 400;
      color: var(--green1);
    }
  }

  @media all and (min-width: 700px) {
    .sectionContent > div {
      max-width: 50%;
    }
    .artWrap {
      display: grid;
      grid-template-columns: repeat(3, 20%);
      grid-gap: 0;
      margin: 0 auto;
      justify-content: center;
    }
  }
  @media all and (min-width: 1024px) {
    .sectionContent {
      z-index: 1;
    }
    .sectionContainer {
      padding: 4.5rem 0 0 0;
    }

    .sectionContent div:first-child {
      margin: 1.5rem 0;
    }
    .artWrap {
      display: grid;
      grid-template-columns: repeat(3, 33.33%);
      grid-gap: 0;
      margin: 0 auto;
      justify-content: center;
    }
  }
  @media all and (min-width: 1280px) {
    .sectionContainer {
      height: 100%;
    }

    .sectionContent div:first-child {
      margin: 2.5rem 0;
    }
    .sectionContent h1 {
      font: 5rem/5.5rem var(--optima);
      font-weight: 900;
      color: var(--green1);
      width: 100%;
    }
    .sectionContent p {
      font: 1.5rem/2rem var(--roobert);
      font-weight: 400;
      color: var(--green1);
    }
  }
  @media all and (min-width: 2000px) {
  }
`

export default Home
