/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Link from 'next/link'
import styles from '../../../styles/local/components/hero.module.css'
import Slide from './heroslide'

const Hero: NextPage = () => {
  return (
    <section className={[styles.sectionContainer, 'relative'].join(' ')}>
      <div
        className={[
          styles.sectionContent,
          'flex flex-col items-center pt-20 pb-12 lg:pt-14 lg:pb-9 w-full h-full relative wrapper'
        ].join(' ')}
      >
        <div className="flex flex-col items-center text-center">
          <img src="images/vectors/weed3.svg" alt="weed" className="mb-6" />
          <h1 className="mb-6">Haze Monkey Society</h1>
          <p className="mb-6">
            4,200 Haze Monkeys making an impact in society through the
            metaverse.
          </p>
          {/* <button className="app-btn">Mint NFT</button> */}
          <button className="coming-soon bg-white cursor-not-allowed flex items-center justify-center">
            Mint NFT{' '}
            <span className="flex items-center justify-center ml-2">
              COMING FEB 12
            </span>
          </button>
          <div className="text-green-800 underline mt-6">
            {'>>'} <Link href="/presale">Presale (Whitelist only) mint</Link> {'<<'}
          </div>
        </div>
      </div>
      <Slide />
    </section>
  )
}

export default Hero
