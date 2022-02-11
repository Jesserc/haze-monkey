/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import SEOHead from '../components/SEOHead/SEOHead'
import Slide from '../components/landingpage/hero/heroslide'
import styled from 'styled-components'
import Link from 'next/link'
import Hazy from '../artifacts/Hazy.sol/Hazy.json'
import { useMemo, useState } from 'react'
import { connectWallet } from '../../utils/eth'
import { ethers } from 'ethers'

const Home = () => {
  // Constants
  const MINT_PRICE = 0.06

  const [walletAddress, setWalletAddress] = useState('')
  const [mintQuantity, setMintQuantity] = useState(1)
  const [signer, setSigner] = useState<any>(null)

  const [mintError, setMintError] = useState(false)
  const [mintMessage, setMintMessage] = useState('')
  const [mintLoading, setMintLoading] = useState(false)

  const onConnectWallet = async () => {
    try {
      const getchedSigner = await connectWallet()
      const address = await getchedSigner.getAddress()
      setWalletAddress(address)
      setSigner(getchedSigner)
    } catch (error) {
      console.log(error)
    }
  }

  const numberIncrease = (sub: boolean) => {
    if (sub && mintQuantity !== 1) {
      return setMintQuantity(mintQuantity - 1)
    }
    if (!sub && mintQuantity !== 2) {
      return setMintQuantity(mintQuantity + 1)
    }
  }

  const mint = async () => {
    // Get wallet details
    if (!walletAddress) return
    try {
      try {
        setMintLoading(true)
        // Interact with contract
        const contract = new ethers.Contract(
          'process.env.NEXT_PUBLIC_MINTER_ADDRESS',
          Hazy,
          signer
        )
        const totalPrice = MINT_PRICE * mintQuantity
        const transaction = await contract.mint(mintQuantity, {
          value: ethers.utils.parseEther(totalPrice.toString())
        })
        await transaction.wait()

        setMintMessage(`Congrats, you minted ${mintQuantity} token(s)!`)
        setMintError(false)
      } catch {
        setMintMessage('Connect your wallet first.')
        setMintError(true)
      }
    } catch (error: any) {
      setMintMessage(error.message)
      setMintError(true)
    }
    setMintLoading(false)
  }

  const walletAddressExist = useMemo(() => {
    return Boolean(walletAddress)
  }, [walletAddress])

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
          <div className="sectionContent flex flex-col items-center pt-12 pb-12 lg:pt-16 lg:pb-9 w-full h-full relative wrapper">
            <div className="flex flex-col items-center text-center">
              <img src="images/vectors/weed3.svg" alt="weed" className="mb-6" />
              <h1 className="mb-0">Mint Haze Monkey</h1>
              <p className="">
                Input quantity to be minted and click on "Mint" button
              </p>

              <form className=" mt-12">
                <div className=" mb-4">
                  <p className=" text-sm font-bold text-left">Max mint - 2</p>
                  <StyledMintInput className="border-2 bg-white w-full rounded-md border-black">
                    <button type="button" onClick={() => numberIncrease(true)}>
                      -
                    </button>

                    <input
                      placeholder="1"
                      type="tel"
                      value={mintQuantity}
                      className="text-center w-20 font-bold focus:outline-none"
                    />
                    <button type="button" onClick={() => numberIncrease(false)}>
                      +
                    </button>
                  </StyledMintInput>
                </div>

                <button
                  onClick={mint}
                  disabled={Boolean(walletAddress)}
                  className={[
                    'py-4 px-24 border-2 border-black rounded-sm bg-buttonGreen transition-colors  font-bold flex items-center justify-center',
                    !walletAddressExist && 'opacity-25 cursor-not-allowed'
                  ].join(' ')}
                >
                  Mint
                </button>
              </form>
            </div>
          </div>
          <Slide />
        </StyledSection>
      </main>
    </>
  )
}

const StyledMintInput = styled.div`
  button {
    padding: 10px 24px;
    font-size: 24px;
  }

  input {
    font-family: var(--roobert-bold);
  }
`

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
      font: 30px var(--optima);
      font-weight: 900;
      color: var(--green1);
      width: 80%;
    }
  }

  @media all and (min-width: 700px) {
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

    .sectionContent h1 {
      font: 55px var(--optima);
      font-weight: 900;
      color: var(--green1);
      width: 100%;
    }
  }
`

export default Home
