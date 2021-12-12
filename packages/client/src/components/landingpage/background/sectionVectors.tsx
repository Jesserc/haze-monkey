import { NextPage } from "next";
import styles from "../../../styles/local/components/bgvectors.module.css"

const SectionVectors: NextPage = () => {
    return ( 
        <div className={[styles.bgVectors, "relative"].join(" ")}>
            <img src="images/vectors/star1.svg" alt="background vectors" />
            <img src="images/vectors/planet.svg" alt="background vectors" />
            <img src="images/vectors/rocket1.svg" alt="background vectors" />
            <img src="images/vectors/star1.svg" alt="background vectors" className="hidden"/>
            <img src="images/vectors/star3.svg" alt="background vectors" />
            <img src="images/vectors/star2.svg" alt="background vectors" className=""/>
            <img src="images/vectors/star4.svg" alt="background vectors" />
            <img src="images/vectors/star5.svg" alt="background vectors" className="" />
            <img src="images/vectors/star6.svg" alt="background vectors" />
            <img src="images/vectors/star7.svg" alt="background vectors" className="hidden" />
            <img src="images/vectors/moon1.svg" alt="background vectors" className="hidden xl:block" />
        </div>
    );
}
 
export default SectionVectors;