import styles from "../../../styles/local/components/loading.module.css"

const Loading = ({setLoading, enterJungle}) => {
    return (
        <section onLoad={setLoading(false)} className={[styles.sectionContainer, "relative  flex justify-center items-center"].join(" ")}>
            <div className={[styles.sectionContent, "wrapper text-center"].join(" ")}>
                <h1 className="mb-2">WELCOME TO THE</h1>
                <h2>Hazron</h2>
                <div className="flex justify-center">
                    <img 
                        src="images/loading/loading.gif" 
                        alt="loading animation" 
                        className="xl:w-5"    
                        />
                </div>
            </div>
        </section>
    );
}
 
export default Loading;