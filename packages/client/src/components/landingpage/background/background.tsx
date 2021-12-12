import { NextPage } from "next";
import styles from "../../../styles/local/components/background.module.css"
import SectionVectors from "./sectionVectors";

const Background: NextPage = () => {
    return ( 
        <section className={[styles.sectionContainer, "relative"].join(" ")}>
            <div className={[styles.sectionContent, "flex flex-col xl:flex-row wrapper"].join(" ")}>
                <SectionVectors />
                <div className="w-2/4">
                    <h1 className="mb-2">150 Light-years away</h1>
                    <h2 className="mb-14">Our Background Story</h2>
                </div>
                <div className="md:w-3/4 lg:w-3/4">
                    <p className="mb-10">
                        150 light-years away, in an experimental planet created by Elun Mosk, called JUNGLE,
                        10,000 really stoned special breed monkeys needed absolutely nothing to survive other than weed and chill vibes. 
                        On a planet, where everything was dope and ganga, there were every single type & form of weed unimaginable to man;
                        grass weeds, banana-shaped weeds, apple-shaped weeds, you name it … it was there.
                    </p>
                    <p className="mb-10">
                        World peace, which has been an impossible task to achieve for thousands of years by
                        humanity has literally been in the JUNGLE since day one,
                        and the only reason is WEED. These monkeys lived in perfect peace and harmony, a balance so strong it upsets the very laws of physics and defiles the laws of gravity. 
                    </p>
                    <p className="mb-10">
                        Unfortunately, the universe has its way of messing up really great stuff and the laws of physics grew so jealous, 
                        it had to offset that peace and balance. The enemies attacked, poisoning the weed with harmful chemicals
                        that drove the monkeys insane and turned them against each other. Can the OG monkeys protect the jungle and restore balance? find out in our project lineup!
                    </p>
                    <p className="mb-10">
                        Get ready for the wildest story in the history of the metaverse!
                    </p>
                </div>
            </div>
        </section>
    );
}
 
export default Background;