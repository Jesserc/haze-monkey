import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: '1d3fc459897045008abf38b545f4444e' // required
    }
  }
}

const connectWallet = async (): Promise<any> => {
  const web3Modal = new Web3Modal({
    network: 'rinkeby', // optional
    cacheProvider: true, // optional
    providerOptions // required
  })
  const instance = await web3Modal.connect()
  const provider = new ethers.providers.Web3Provider(instance)
  const signer = provider.getSigner()
  const address = await signer.getAddress()

  return signer
}

export { connectWallet }
