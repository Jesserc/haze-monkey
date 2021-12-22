import { NextPage } from "next";
import Accordion from "./accordion";
import styles from "../../../styles/local/components/faq.module.css"

const Faq: NextPage = () => {
    return(
        <section className={[styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <h1 className="text-center">FAQs</h1>
                <Accordion />  
            </div>
        </section>
    )
    
}

export default Faq