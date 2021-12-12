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
                        <img className="mr-10" src="images/socials/twitter.svg" alt="twitter" />
                        <img className="mr-10"src="images/socials/instagram.svg" alt="instagram" />
                        <img className="" src="images/socials/discord.svg" alt="discord" />
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