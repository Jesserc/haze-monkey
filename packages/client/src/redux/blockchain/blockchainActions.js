// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
// log
import { fetchData } from "../data/dataActions";

let provider;
let web3Modal
  const providerOptions = {
    walletconnect: {
      display: {
        // logo: walletConnectMobile,
        name: "WalletConnect",
        description: "Scan with WalletConnect to connect"
      },
      package: WalletConnectProvider,
      options: {
        infuraId: "f674dc4ebe2e4c589aa4fccfa2a66fbd",
      },   
    }
  };
      
  if (typeof window !== "undefined") {
    web3Modal = new Web3Modal({
    // network: "mainnet",
    cacheProvider: false,
    providerOptions,
    theme: 'light',
});

}


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};


// connect wallet function
export const connect = () => {
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json(); 
    const configResponse = await fetch("config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const CONFIG = await configResponse.json();
    
    const { ethereum } = window;
    const metamaskIsInstalled =  provider ; 
    if (metamaskIsInstalled != 2) {
      provider = await web3Modal.connect();
      Web3EthContract.setProvider(provider);
      let web3 = new Web3(provider);
      // let web3 = new Web3(ethereum);
      try {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });
        const networkId = await provider.request({
          method: "net_version",
        });
        if (networkId == CONFIG.NETWORK.ID) {
          const SmartContractObj = new Web3EthContract(
            abi,
            CONFIG.CONTRACT_ADDRESS
          );
          dispatch(
            connectSuccess({
              account: accounts[0],
              smartContract: SmartContractObj,
              web3: web3,
            })
          );
          // Add listeners start
          provider.on("accountsChanged", (accounts) => {
            dispatch(updateAccount(accounts[0]));
          });
          provider.on("chainChanged", () => {
            window.location.reload();
          });
          // Add listeners end
        } else {
          dispatch(connectFailed(`Change network to ${CONFIG.NETWORK.NAME}.`));
        }
      } catch (err) {
        dispatch(connectFailed("Something went wrong."));
      }
    } else {
      dispatch(connectFailed("Install Metamask."));
    }
  };

};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData (account));
  };
};
