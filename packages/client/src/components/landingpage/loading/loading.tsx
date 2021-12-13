import styles from "../../../styles/local/components/loading.module.css"
import { NextPage } from "next";

const Loading: NextPage = () => {
    return (
        <section className={[styles.sectionContainer, "relative"].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                    
            </div>
        </section>
    );
}
 
export default Loading;