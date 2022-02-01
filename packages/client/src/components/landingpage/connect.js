import { connect } from "../../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import styles from '../../styles/local/components/navbar.module.css'

const Connect = () => {
    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);

    const handleConnect = (e) => {
        if (typeof window !== "undefined") {
            e.preventDefault()
            blockchain.account == undefined ? 
            dispatch(connect()) : null
        } 
    }
    return ( 
        <button 
            onClick={handleConnect}
            className={
                [styles.connect, 
                `flex justify-center items-center outline-none 
                bg-transparent border-2 lg:border-green1 
                lg:rounded-xl lg:w-36 lg:h-12.5 lg:text-green1 
                font-semibold lg:mr-3`]
                .join(" ")}
        >
            {blockchain.account == undefined ? "Connect Wallet" : blockchain.account.slice(0, 8)}
        </button>
     );
}
export default Connect;