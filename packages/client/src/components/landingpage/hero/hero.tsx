/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'
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
          <div>
            <button className="coming-soon bg-white opacity-30 cursor-not-allowed flex items-center justify-center">
              Mint NFT
            </button>
            <MintTimeIcon className="flex items-center w-full bg-buttonGreen  rounded-full px-4 py-2 justify-center mt-1">
              STARTING 2:20PM (EST), FEB 12
            </MintTimeIcon>
          </div>
        </div>
      </div>
      <Slide />
    </section>
  )
}

const MintTimeIcon = styled.span`
  background: var(--lemon1);
  border-radius: 32px;
  // width: 119px;
  height: 32px;
  font: 11px var(--roobert-bold);
  letter-spacing: 0.05rem;
  font-weight: 600;
`

export default Hero
