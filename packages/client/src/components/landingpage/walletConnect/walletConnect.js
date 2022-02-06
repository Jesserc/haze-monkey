// import Web3 from "web3";
// import Web3Modal from "web3modal";
// import WalletConnectProvider from "@walletconnect/web3-provider";
// // import walletConnectMobile from "../../components/images/download.svg"

// // import qr from '../images/qr-code.png'
// // web3 modal configuration 

// let provider;
// let web3Modal
//     const providerOptions = {
//         walletconnect: {
//             display: {
//                 // logo: walletConnectMobile,
//                 name: "WalletConnect",
//                 description: "Scan with WalletConnect to connect"
//             },
//             package: WalletConnectProvider,
//             options: {
//                 infuraId: "f4f8b5a14ff74915b23dda902c929730",
//             },   
//         }
//     };
        
//     if (typeof window !== "undefined") {
//             web3Modal = new Web3Modal({
//             // network: "mainnet",
//             cacheProvider: false,
//             providerOptions,
//             theme: 'light',
//         });
//     }
   

//     const WalletConnect = async () => {

//         provider = await web3Modal.connect();
//         const web3 = new Web3(provider);
//         // Subscribe to accounts change
//         provider.on("accountsChanged", (accounts) => {
//             console.log(accounts);
//         });

//         // Subscribe to chainId change
//         provider.on("chainChanged", (chainId) => {
//             console.log(chainId);
//         });

//         // Subscribe to provider connection
//         provider.on("connect", (chainId) => {
//             console.log(chainId);
//         });

//         // Subscribe to provider disconnection
//         provider.on("disconnect", (error) => {
//             console.log("disconnected");
//         });
//         //return provider;

//         provider.on('error', (err) => {
//             console.log(err);
//         })

//         return web3;
//     }

//   const getProvider = () => {
//     return provider;
//   }

//   // const disconnectWallet = () => {
//   //   //await provider.close();
//   //     const web3Modal = new Web3Modal({ cacheProvider: true });
//   //     web3Modal.clearCachedProvider();
//   //   }

// export default WalletConnect;

// export{provider};

// // export {disconnectWallet};