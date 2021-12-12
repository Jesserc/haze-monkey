import { NextPage } from "next";
import styles from "../../../styles/local/components/arts.module.css"
import { arts } from "../data/arts";

const Art1: NextPage = () => {
    const art =  arts.map(item => {
        return item.id >= 10 && item.id < 22 ?  (
            <img src={item.art} alt={"NFTs " + item.id} key={item.id}/>     
        ) : null
    })
    return (
        <section className={[styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "flex max-w-3/4"].join(" ")}>
                {art}
            </div>
        </section>
    );
}
    
export default Art1;
