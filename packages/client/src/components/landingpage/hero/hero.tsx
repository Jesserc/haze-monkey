/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Link from 'next/link'
import Web3Modal from 'web3modal'
import { useEffect, useMemo, useState } from 'react'
import Hazy from '../../../artifacts/Hazy.sol/Hazy.json'
import styled from 'styled-components'
import styles from '../../../styles/local/components/hero.module.css'
import Slide from './heroslide'
import { ethers } from 'ethers'
import navBarStyles from '../../../styles/local/components/navbar.module.css'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { WL_ADDRESS } from '../../../data'
import { serializeError } from 'eth-rpc-errors'
import Spinner from '../../atoms/Spinner'

const CONTRACT_ADDRESS = '0xD85EbB24bc0C2fcD6901cc9aE7409e41d4a9E0a3'

const Hero: NextPage = ({ isClicked, handleClick }: any) => {
  // Constants
  const MINT_PRICE = 0.08

  const [walletAddress, setWalletAddress] = useState('')
  const [mintQuantity, setMintQuantity] = useState(1)
  const [signer, setSigner] = useState<any>(null)
  const [mintErrorMessage, setMintErrorMessage] = useState(
    'Connect wallet before trying to mint'
  )
  const [mintMessage, setMintMessage] = useState('')
  const [mintLoading, setMintLoading] = useState(false)

  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider, // required
      options: {
        infuraId: '1d3fc459897045008abf38b545f4444e' // required
      }
    }
  }

  const [windowWandH, setWAndH] = useState({
    width: 0,
    height: 0
  })

  const maxMint = useMemo(() => {
    const isWL = WL_ADDRESS.find((ad) => ad === walletAddress)
    if (isWL) return 8

    return 10
  }, [walletAddress])

  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window
    setWAndH({
      width,
      height
    })
  }, [])

  const onConnectWallet = async () => {
    try {
      const web3Modal = new Web3Modal({
        network: 'mainnet', // optional
        cacheProvider: true, // optional
        providerOptions // required
      })
      const instance = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(instance)
      const signer = provider.getSigner()

      const network = await provider.getNetwork()
      if (network.chainId !== 1) {
        throw new Error('Wrong network: Switch network to Ethereum Mainnet')
      }

      const address = await signer.getAddress()
      setWalletAddress(address)
      setSigner(signer)
      setMintErrorMessage('')
    } catch (error: any) {
      setMintErrorMessage(error.message)
    }
  }

  const numberIncrease = (sub: boolean) => {
    if (sub && mintQuantity !== 1) {
      return setMintQuantity(mintQuantity - 1)
    }
    if (!sub && mintQuantity !== maxMint) {
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
      const transaction = await contract.publicSaleMint(mintQuantity, {
        value: ethers.utils.parseEther(totalPrice.toString())
      })
      await transaction.wait()

      setMintMessage(`🎉🎉🎉 Congrats, you minted ${mintQuantity} token(s)!`)
    } catch (error: any) {
      setMintLoading(false)
      const serializedError: any = serializeError(error)
      if (serializedError.data) {
        return setMintErrorMessage(
          serializedError.data.originalError.error.message
        )
      }
      console.log(serializedError.message)
      return setMintErrorMessage(serializedError.message)
    }
    setMintLoading(false)
  }

  const walletAddressExist = useMemo(() => {
    return Boolean(walletAddress)
  }, [walletAddress])

  return (
    <>
      <nav className={[navBarStyles.nav, 'list-unstyled'].join(' ')}>
        <ul className="flex  wrapper justify-between my-auto">
          <div className="flex z-50">
            <div
              className={isClicked ? 'hidden' : 'my-auto z-50'}
              onClick={handleClick}
            >
              <img src="images/navbar/bar.svg" alt="hamburger button" />
            </div>
            <figure className="absolute top-0 z-0 left-16 xl:hidden">
              <img
                src="images/vectors/swinging-monkey.svg"
                alt="swinging monkey"
              />
            </figure>
            <figure className="hidden absolute top-0 z-0 left-16 xl:left-52 xl:block">
              <img
                src="images/vectors/swinging-monkey2.svg"
                alt="swinging monkey"
              />
            </figure>
          </div>
          {/* hamburger button */}
          <figure className="absolute top-0 left-0 z-0 xl:hidden">
            <img src="images/vectors/vector1.svg" alt="monkey swing" />
          </figure>
          <figure className="hidden absolute top-0 left-0 z-0 xl:block">
            <img src="images/vectors/vector2.svg" alt="monkey swing" />
          </figure>
          <li className="my-auto lg:ml-28">
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
          </li>

          <div className=" flex items-center">
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
              <ConnectButton
                onClick={onConnectWallet}
                className="flex justify-center bg-white border-green2 border-2 items-center"
              >
                Connect wallet
              </ConnectButton>
            )}
            <a
              href="https://discord.gg/hazemonkeynft"
              className="flex justify-center items-center bg-green5 py-2 px-4 rounded-lg ml-4"
            >
              <img src="images/socials/discord-light.svg" alt="join discord" />
            </a>
          </div>
        </ul>
      </nav>

      <main className={[styles.sectionContainer, 'relative'].join(' ')}>
        <div
          className={[
            styles.sectionContent,
            'flex flex-col items-center pt-20 pb-12 lg:pt-14 lg:pb-9 w-full h-full relative wrapper'
          ].join(' ')}
        >
          <div className="flex flex-col items-center text-center">
            <img src="images/vectors/weed3.svg" alt="weed" className="mb-6" />
            <h1 className="mb-6">Haze Monkey Society</h1>
            <p className="mb-8">
              4,200 Haze Monkeys making an impact in society through the
              metaverse.
            </p>

            <form className=" w-full md:w-1/2 lg:w-1/2">
              {mintMessage && (
                <p className="mb-6 text-green-500">{mintMessage}</p>
              )}
              <section className="mb-4 w-full">
                <span className=" text-sm w-full text-green-800 inline-block font-bold text-left">
                  Max mint - {maxMint}
                </span>
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
              </section>

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
                <span className=" mt-4 inline-block text-red-600">
                  {mintErrorMessage}
                </span>
              )}
            </form>
          </div>
        </div>
        <Slide />
      </main>
    </>
  )
}

const MintTimeIcon = styled.span`
  background: white;
  border-radius: 32px;
  // width: 119px;
  height: 32px;
  font: 11px var(--roobert-bold);
  letter-spacing: 0.05rem;
  font-weight: 600;
`

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

const ConnectButton = styled.button`
  border-radius: 12px;
  width: 151.39px;
  height: 51px;
`

const StyledProfilePicture = styled.img`
  width: 40px;
  height: 40px;
`

export default Hero
