/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import styles from '../../styles/local/components/footer.module.css'

const Footer: NextPage = () => {
  return (
    <footer className={[styles.sectionContainer, 'relative'].join(' ')}>
      <section className={[styles.sectionContent, 'wrapper '].join(' ')}>
        <div className="flex flex-col items-center">
          <div className={styles.logoWrap}>
            <img
              className={styles.logo}
              src="images/logo2.svg"
              alt="hazed monkeys"
            />
          </div>
          <p>All rights reserved 2021</p>
          <figure className="flex flex-row justify-center">
            <a
              href="https://twitter.com/HazeMonkeyNFT"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="mr-10"
                src="images/socials/twitter.svg"
                alt="twitter"
              />
            </a>
            <a
              href="https://instagram.com/hazemonkeynft?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="mr-10"
                src="images/socials/instagram.svg"
                alt="instagram"
              />
            </a>
            <a
              href="https://discord.gg/hazemonkeynft"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className=""
                src="images/socials/discord.svg"
                alt="discord"
              />
            </a>
          </figure>
        </div>
        <div className="flex justify-center items-end">
          <img src="images/vectors/weed.svg" alt="weed" />
        </div>
        <div className="flex justify-center absolute bottom-0 w-8 lg:w-12  mr-4 mb-4 lg:mr-12 lg:mb-12 right-0 items-end">
          <a href="https://raritysniper.com/" rel="noreferrer noopenner">
            <img
              src="images/raritysniperlogo/logo3-white.png"
              alt="raritysniper"
            />
          </a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
