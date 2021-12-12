import { NextPage } from "next";
import styles from "../../../styles/local/components/team.module.css"
import Members from "./members";
import { members } from "../data/team";


const Team: NextPage = () => {
    
    return ( 
        <section className={[styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent].join(" ")}>
                <div>
                    <h1>Team</h1>
                </div>
                <Members /> 
            </div>
            
        </section>
    );
}
 
export default Team;