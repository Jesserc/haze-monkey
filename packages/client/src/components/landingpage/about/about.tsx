import JungleTree from "./leaves";
import styles from "../../../styles/local/components/about.module.css"
import Art1 from "./art1";
import Art2 from "./art2";
import { NextPage } from "next";
const About: NextPage = () => {
    return (
        <section className={[styles.sectionContainer].join(" ")}>
            <Art1 />
            <JungleTree />
            <div className={[styles.sectionContent, "wrapper text-center"].join(" ")}>
                <h1 className="mb-10 w-3/4 sm:w-2/4 lg:w-1/4 mx-auto">About collection</h1>
                <p className="mb-10 sm:w-3/4 lg:w-2/4 mx-auto">
                    Welcome the OG Stoned Monkeys, the first residence of the JUNGLE. 
                    A collection of 10,000 OG stoned monkeys, randomly generated unique art pieces, 
                    existing freely on the Ethereum blockchain, minted as NFTs. 
                </p>
                <p className="sm:w-3/4 lg:w-2/4 mx-auto">
                    This collection consists of a mixture of hand-drawn unique pieces and 
                    programmatically generated pieces from over 200 traits including expressions, 
                    costumes, skin variations, hairstyles, and more!
                </p>
            </div>
            <Art2 />
        </section>
    );
}
    
export default About;
