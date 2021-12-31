import JungleTree from "./leaves";
import styles from "../../../styles/local/components/about.module.css"
// import Art1 from "./art1";
// import Art2 from "./art2";
import { NextPage } from "next";
const About: NextPage = () => {
    return (
        <section id="about" className={[styles.sectionContainer, "relative"].join(" ")}>
            {/* <Art1 /> */}
            <JungleTree />
            <div className={[styles.sectionContent, "wrapper text-center relative z-1"].join(" ")}>
                <h1 className="mb-10 w-3/4 sm:w-2/4 lg:w-1/3 mx-auto">About the project</h1>
                <p className="mb-10 sm:w-3/4 xl:w-2/4 mx-auto">
                    We are focused on decentralising the anime production industry through 
                    a gamified DAO voting system using our series as a stepping stone. This will allow; 
                </p>
                <p className="mb-10  sm:w-3/4 xl:w-2/4 mx-auto">
                    Our community to vote on the possible outcomes of the series through tokens, 
                    Games, and contributions in the community. All NFTs have a chance to appear 
                    as characters in at least one episode. 
                </p>
                <p className="mb-10 sm:w-3/4 xl:w-2/4 mx-auto">
                    A percentage of profit from the animated series will be rewarded to holders. 
                    Our goal is to build an intriguing  Metaverse cinema.
                </p>

                <p className="mb-10 sm:w-3/4 xl:w-2/4 mx-auto">
                   We plan to support UN SDG goals by planting 420K trees through the community 
                   and removing 42.0K pounds of dirt from the sea through the team seas project 
                   in our genesis collection.
                </p>
            </div>
            {/* <Art2 /> */}
        </section>
    );
}
    
export default About;
