import { NextPage } from "next";
import styles from "../../../styles/local/components/leaves.module.css"
const JungleTree: NextPage = () => {
    return ( 
        <section className={[styles.jungleTrees, "hidden lg:block"].join(" ")}>
            {/* <img src="images/about/leaves.svg" alt="jungle" /> */}
            <img src="images/about/leaf1.svg" alt="jungle" />
            <img src="images/about/leaf2.svg" alt="jungle" />
            <img src="images/about/leaf3.svg" alt="jungle" />
            <img src="images/about/leaf4.svg" alt="jungle" /> 
            <img src="images/about/swing1.svg" alt="swing" />
            <img src="images/about/swing2.svg" alt="swing" />
            <img src="images/about/swing3.svg" alt="swing" />
        </section>
    );
}
 
export default JungleTree;