import { NextPage } from "next";
import styles from "../../../styles/local/components/rewards.module.css"
import { rewards } from "../data/rewards";
import Reward1 from "./reward1";
import Reward2 from "./reward2";
import SectionVectors from "./sectionVectors";
const Reward: NextPage = () => {
    return ( 
        <section className={styles.sectionContainer}>
            <div className={[styles.sectionContent, "flex flex-col xl:flex-row wrapper relative"].join(" ")}>
                <SectionVectors />
                <article>
                    <h1>Holder’s Reward</h1>
                    <p className="my-10">
                        Buying into the collection gives you ownership of your stoner. 
                        Not only do you get access to owning a rare piece of art, 
                        but you also become a member of the community which gives you access to a lot of benefits, 
                        which include;
                    </p>
                </article>
                <div className="flex flex-col xl:flex-row">
                    <article>
                        <Reward1 />
                    </article>
                    <article>
                        <Reward2 />
                    </article> 
                </div>
            </div>
        </section>
    );
}
 
export default Reward;