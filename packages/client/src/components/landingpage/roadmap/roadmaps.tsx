import { NextPage } from "next";
import { roadmaps } from "../data/roadmapdata";
import styles from "../../../styles/local/components/roadmap.module.css"

const Roadmap: NextPage = () => {
    const roadmap = roadmaps.map(item => {
        return (
            <div key={item.id} className={["relative flex flex-col", styles.roadmap].join(" ")}> 
                <div className={styles.roadmapItem}>
                    <h2 className="mb-4">{item.header}</h2>
                    <p className="mb-10">{item.content}</p>
                    <div className={["mb-24", styles.underline].join(" ")}></div>
                </div> 
                <img 
                    src={item.percentage} 
                    alt="roadmap percentage" 
                    className="absolute -top-10 w-40 xl:w-auto xl:top-0"
                />
                
            </div>
        )
    })
    return (  
        <section className={[styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <h1 className="text-center">Our Roadmap</h1>
                {roadmap}
            </div>   
        </section>
    );
}
 
export default Roadmap;