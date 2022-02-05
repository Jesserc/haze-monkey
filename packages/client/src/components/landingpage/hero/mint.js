// import { connect } from "../../redux/blockchain/blockchainActions";

const Mint = ({
    mintAmount,
    addToast, 
    dispatch, 
    blockchain, 
    fetchData,
    claimingNft,
    setClaimingNft, 
    CONFIG
}) => {
    // mint web3 function
    const mintNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    // toast notification
    addToast(`Minting your ${CONFIG.NFT_NAME}...`, {
        appearance: "success",
        autoDismiss: true,
    });
    setClaimingNft(true);
    blockchain.smartContract.methods
    // mint accepts 2 parameters, mintAmount and stake which is a boolean
      .claim(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })

    //   handle mint error
      .once("error", (err) => {
        console.log(err);
        // setFeedback("Sorry, something went wrong please try again later.");
        addToast("Sorry, something went wrong please try again later.", {
            appearance: "error",
            autoDismiss: true,
        });
        setClaimingNft(false);
      })
    //   handle mint success
      .then((receipt) => {
        console.log(receipt);
        addToast(`WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`, {
            appearance: "success",
            autoDismiss: true,
        });
        setClaimingNft(false);
        // fetch blockchain data
        dispatch(fetchData(blockchain.account));
      });
  };

    return ( 
        <button 
            onClick={(e)=>{
                e.preventDefault()
                mintNFTs()
            }}
            disabled={claimingNft ? 1 : 0}
                className="app-btn">
            {claimingNft ? 'Busy' : 'Mint'}
        </button>
    );
}
 
export default Mint;