/* eslint-disable @next/next/no-img-element */ 
import { useState, useEffect } from 'react'
import { NextPage } from 'next'
import Mint from './mint'
import styles from '../../../styles/local/components/hero.module.css'
import Slide from './heroslide'
import { useToasts } from "react-toast-notifications";
import { fetchData } from '../../../redux/data/dataActions'
import { useDispatch, useSelector } from "react-redux";


const Hero = () => {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const { addToast } = useToasts();
  const [mintAmount, setMintAmount] = useState(1);
  const [claimingNft, setClaimingNft] = useState(false);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
    NAME: "",
    SYMBOL: "",
    ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  },[blockchain.account]);
  return (
    <section className={[styles.sectionContainer, 'relative'].join(' ')}>
      <div
        className={[
          styles.sectionContent,
          'flex flex-col items-center pt-20 pb-12 lg:pt-14 lg:pb-9 w-full h-full relative wrapper'
        ].join(' ')}
      >
        <div className="flex flex-col items-center text-center">
          <img src="images/vectors/weed3.svg" alt="weed" className="mb-6" />
          <h1 className="mb-6">Haze Monkey Society</h1>
          <p className="mb-6">
            4,200 Haze Monkeys making an impact in society through the
            metaverse.
          </p>
          
          <Mint 
            mintAmount={mintAmount}
            setMintAmount={setMintAmount}
            CONFIG={CONFIG}
            addToast={addToast}
            dispatch={dispatch}
            blockchain={blockchain}
            fetchData={fetchData}
            claimingNft={claimingNft}
            setClaimingNft={setClaimingNft}
          />
        </div>
      </div>
      <Slide />
    </section>
  )
}

export default Hero
