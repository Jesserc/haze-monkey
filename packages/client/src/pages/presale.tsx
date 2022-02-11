/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import SEOHead from '../components/SEOHead/SEOHead'
import Slide from '../components/landingpage/hero/heroslide'
import styled from 'styled-components'
import Link from 'next/link'
import Hazy from '../artifacts/Hazy.sol/Hazy.json'
import { useEffect, useMemo, useState } from 'react'
import { connectWallet } from '../../utils/eth'
import Confetti from 'react-confetti'
import { ethers } from 'ethers'
import Spinner from '../components/atoms/Spinner'

const CONTRACT_ADDRESS = '0xD85EbB24bc0C2fcD6901cc9aE7409e41d4a9E0a3'

const PresaleMintPage = () => {
  // Constants
  const MINT_PRICE = 0.06

  const [walletAddress, setWalletAddress] = useState('')
  const [mintQuantity, setMintQuantity] = useState(1)
  const [signer, setSigner] = useState<any>(null)
  const [mintErrorMessage, setMintErrorMessage] = useState(
    'Connect wallet before trying to mint'
  )
  const [mintMessage, setMintMessage] = useState('')
  const [mintLoading, setMintLoading] = useState(false)

  const [windowWandH, setWAndH] = useState({
    width: 0,
    height: 0
  })

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    setWAndH({
      width,
      height
    })
  }, [])

  const onConnectWallet = async () => {
    try {
      const getchedSigner = await connectWallet()
      const address = await getchedSigner.getAddress()
      setWalletAddress(address)
      setSigner(getchedSigner)
      setMintErrorMessage('')
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
      setMintLoading(true)
      // Interact with contract
      const contract = new ethers.Contract(CONTRACT_ADDRESS, Hazy, signer)
      const totalPrice = MINT_PRICE * mintQuantity
      const transaction = await contract.presaleMint(mintQuantity, {
        value: ethers.utils.parseEther(totalPrice.toString())
      })
      await transaction.wait()

      setMintMessage(`🎉🎉🎉 Congrats, you minted ${mintQuantity} token(s)!`)
    } catch (error: any) {
      console.log(`${error.message}`)
      setMintErrorMessage(
        'Presale has not begun. Starting by 2:20pm (EST)'
      )
    }
    setMintLoading(false)
  }

  const walletAddressExist = useMemo(() => {
    return Boolean(walletAddress)
  }, [walletAddress])

  return (
    <>
      <SEOHead
        title="Presale Mint"
        description="Official Presale mint page for Haze Monkey Society"
        ogImage="https://res.cloudinary.com/lab88/image/upload/v1644592637/presale_ystzdi.jpg"
      />
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

              <form className=" mt-12 w-full md:w-1/2 lg:w-1/2">
                {mintMessage && (
                  <p className="mb-6 text-green-500">{mintMessage}</p>
                )}
                <div className=" mb-4 w-full">
                  <p className=" text-sm font-bold text-left">Max mint - 2</p>
                  <StyledMintInput className="border-2 flex items-center justify-between h-16 w-full bg-white rounded-md border-black">
                    <button type="button" onClick={() => numberIncrease(true)}>
                      -
                    </button>

                    <input
                      placeholder="1"
                      type="tel"
                      value={mintQuantity}
                      readOnly
                      className="text-center w-20 font-bold focus:outline-none"
                    />
                    <button type="button" onClick={() => numberIncrease(false)}>
                      +
                    </button>
                  </StyledMintInput>
                </div>

                <button
                  type="button"
                  onClick={mint}
                  disabled={(walletAddress ? false : false) || mintLoading}
                  className={[
                    'py-4 px-24 border-2 h-16 border-black w-full rounded-sm bg-buttonGreen transition-colors  font-bold flex items-center justify-center',
                    !walletAddressExist && 'opacity-25 cursor-not-allowed'
                  ].join(' ')}
                >
                  {mintLoading ? <Spinner size={40} /> : 'Mint'}
                </button>
                {mintErrorMessage && (
                  <p className=" mt-4 text-red-600">{mintErrorMessage}</p>
                )}
              </form>
            </div>
          </div>

          <Slide />
        </StyledSection>
        {mintMessage && (
          <Confetti width={windowWandH.width} height={windowWandH.height} />
        )}
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

export default PresaleMintPage
