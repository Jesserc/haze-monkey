import { NextPage } from "next";
import styles from "../../styles/local/components/hero.module.css"

const Hero: NextPage = () => {
    return (
       <section className={[styles.sectionContainer, "relative"].join(" ")}>
            <div className={[styles.sectionContent, "flex flex-col lg:flex-row relative"].join(" ")}>
                <div className="flex justify-center relative">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left mx-auto lg:justify-center xl:justify-start xl:py-20 2xl:justify-center">
                        <img 
                            src="images/vectors/weed3.svg" 
                            alt="weed" 
                            className="mb-6"
                            />
                        <h1 className="mb-6">The OG Stoned Monkeys.</h1>
                        <p className="mb-6">
                            The first residence of the JUNGLE.
                        </p>
                        <button className="app-btn">Mint NFT</button>
                    </div>
                </div>
                <figure className="relative xl:h-full">
                    <img
                        src="images/hero/nft1.png" 
                        className={["min-w-full sm:min-w-min mx-auto z-0 lg:min-w-full lg:w-full h-full", styles.nft ].join(" ")}
                        alt="NFTs"
                     />
                </figure>  
            </div> 
            <div className="relative z-0">
                <img 
                src="images/vectors/grass.svg" 
                alt="grass" 
                className="min-w-full absolute -bottom-5 sm:-bottom-10 lg:-bottom-12 xl:-bottom-20 2xl:-bottom-40 z-0"
                />
            </div>
            
       </section>     
    );
}
    
export default Hero;
