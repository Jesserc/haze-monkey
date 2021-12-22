import { NextPage } from 'next';
import styles from '../../styles/local/components/footer.module.css'

const Footer: NextPage = () => {
    return ( 
        <footer className={[styles.sectionContainer].join(" ")}>
            <section className={[styles.sectionContent, "wrapper "].join(" ")}>
                <div className="flex flex-col items-center">
                    <div className={styles.logoWrap}>
                        <img 
                            className={styles.logo}
                            src="images/hazed-monkeys.svg" alt="hazed monkeys"
                        />
                    </div>
                    <p>All rights reserved 2021</p>
                    <figure className="flex flex-row justify-center">
                        <a 
                            href="https://twitter.com/HazeMonkeyNFT"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="mr-10" src="images/socials/twitter.svg" alt="twitter" />
                        </a>
                        <a 
                            href="https://instagram.com/hazemonkeynft?utm_medium=copy_link"
                            target="_blank"
                            rel="noreferrer"
                        >

                            <img className="mr-10"src="images/socials/instagram.svg" alt="instagram" />
                        </a>
                        <a 
                            href="https://discord.gg/s87D89PqHp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img className="" src="images/socials/discord.svg" alt="discord" />
                        </a>

                    </figure>
                </div>     
                <div className="flex justify-center items-end">
                    <img src="images/vectors/weed.svg" alt="weed" />
                </div>
            </section>
        </footer>   
    );
}
    
export default Footer;
