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
          <p className="mb-8">
            4,200 Haze Monkeys making an impact in society through the
            metaverse.
          </p>
          <div>
            <Link href="/mint" passHref>
              <a className="coming-soon text-lg bg-buttonGreen  flex items-center justify-center">
                Mint NFT
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Slide />
    </section>
  )
}

const MintTimeIcon = styled.span`
  background: white;
  border-radius: 32px;
  // width: 119px;
  height: 32px;
  font: 11px var(--roobert-bold);
  letter-spacing: 0.05rem;
  font-weight: 600;
`

export default Hero
