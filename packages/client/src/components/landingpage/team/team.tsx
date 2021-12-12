import { NextPage } from "next";
import styles from "../../../styles/local/components/team.module.css"
import Members from "./members";

const Team: NextPage = ({}) => {
    
    return ( 
        <section className={[styles.sectionContainer].join(" ")}>
            <Members />           
        </section>
    );
}
 
export default Team;