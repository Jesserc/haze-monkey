/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import styles from '../../../styles/local/components/navbar.module.css'
import WalletConnectProvider from '@walletconnect/web3-provider'
import styled from 'styled-components'
import { ethers } from 'ethers'
import { WL_ADDRESS } from '../../../data'
import Web3Modal from 'web3modal'

const TopBar = ({ isClicked, handleClick }: any) => {
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

  return (
    <section className={[styles.nav, 'list-unstyled'].join(' ')}>
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
              className="flex justify-center bg-white border-black border-green2 border-2 items-center"
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
    </section>
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

const ConnectButton = styled.button`
  border-radius: 12px;
  width: 151.39px;
  height: 51px;
`

const StyledProfilePicture = styled.img`
  width: 40px;
  height: 40px;
`

export default TopBar
