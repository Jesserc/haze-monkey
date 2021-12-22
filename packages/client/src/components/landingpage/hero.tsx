import { NextPage } from "next";
import styles from "../../styles/local/components/hero.module.css"

const Hero: NextPage = () => {
    return (
       <section className={[styles.sectionContainer, "relative"].join(" ")}>
            <div className={[styles.sectionContent, "flex flex-col lg:flex-row relative"].join(" ")}>
                <div className="flex justify-center relative">
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left mx-auto">
                        <img 
                            src="images/vectors/weed3.svg" 
                            alt="weed" 
                            className="mb-6"
                            />
                        <h1 className="mb-6">The OG Hazed Monkeys</h1>
                        <p className="mb-6">
                           The first residence of Hazron.
                        </p>
                        {/* <button className="app-btn">Mint NFT</button> */}
                        <button className="coming-soon flex items-center justify-center">Mint NFT <span  className="flex items-center justify-center ml-2">COMING SOON</span></button>
                    </div>
                </div>
                <figure className={["relative", styles.artWrap].join(" ")}>
                    <img
                        src="images/arts/art1.svg" 
                        className={["m-0", styles.nft ].join(" ")}
                        alt="NFTs"
                     />
                     <img
                        src="images/arts/art2.svg" 
                        className={["m-0", styles.nft ].join(" ")}
                        alt="NFTs"
                     />
                     <img
                        src="images/arts/art3.svg" 
                        className={["m-0", styles.nft ].join(" ")}
                        alt="NFTs"
                     />
                     <img
                        src="images/arts/art4.svg" 
                        className={["m-0", styles.nft ].join(" ")}
                        alt="NFTs"
                     />
                     <img
                        src="images/arts/art5.svg" 
                        className={["m-0", styles.nft ].join(" ")}
                        alt="NFTs"
                     />
                </figure>  
            </div> 
            <div className="relative z-0">
                <img 
                src="images/vectors/grass.svg" 
                alt="grass" 
                className="min-w-full absolute -bottom-5 sm:-bottom-10 lg:-bottom-12 xl:-bottom-1 2xl:-bottom-40 z-0"
                />
            </div>
            
       </section>     
    );
}
    
export default Hero;
