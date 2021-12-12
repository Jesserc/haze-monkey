import { rewards } from "../data/rewards";
import styles from "../../../styles/local/components/rewards.module.css"
import { NextPage } from "next";

const Reward1: NextPage = () => {
    const reward = rewards.map(item => {
        return item.id >= 0 && item.id < 7 ? (
            <div key={item.id} className={[styles.reward, "mb-12"].join(" ")}>
                <p className="mb-2.5">{item.reward}</p>
                <div></div>
            </div> 
        ): null
    })
    return ( 
        <>
            {reward}
        </>
    );
}
 
export default Reward1;