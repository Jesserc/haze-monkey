import { NextPage } from "next";
import styles from "../../../styles/local/components/rewardvectors.module.css"

const SectionVectors: NextPage = () => {
    return ( 
        <section className={[styles.bgVectors, "relative"].join(" ")}>
            <img src="images/vectors/weed2.svg" alt="background vectors" />
            <img src="images/vectors/arrow1.svg" alt="background vectors" className="hidden xl:block"/>
            <img src="images/vectors/arrow2.svg" alt="background vectors" />
        </section>
    );
}
 
export default SectionVectors;