/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import styles from '../../../styles/local/components/hero.module.css'
import Slide from './heroslide'
import { useToasts } from "react-toast-notifications";
const images: string[] = [
  // 'https://res.cloudinary.com/lab88/image/upload/v1640809393/website/e761092a-c9f8-418f-810e-b4139b04cd18_k7vhl0',
  // 'https://res.cloudinary.com/lab88/image/upload/v1640809390/website/d294ca30-c5c4-406e-9caf-c2ec76f3ca95_uabib1',
  // 'https://res.cloudinary.com/lab88/image/upload/v1640809390/website/c5f1d1b7-76dc-450d-a05d-88f9fa82db9a_ll0gu8',
  // 'https://res.cloudinary.com/lab88/image/upload/v1640809390/website/8a6dde98-1daa-4ac2-9390-7847db4ee78d_irspzi'
  //   'https://res.cloudinary.com/lab88/image/upload/v1640809390/website/a41495aa-c654-4789-bc45-d06f38fffc74_vulaq9',
]

const Hero: NextPage = () => {
  const { addToast } = useToasts();
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
          <p className="mb-6">The first residence of Hazron.</p>
          {/* <button className="app-btn">Mint NFT</button> */}
          <button className="coming-soon bg-white cursor-not-allowed flex items-center justify-center">
            Mint NFT{' '}
            <span className="flex items-center justify-center ml-2">
              COMING SOON
            </span>
          </button>
        </div>
        {/* <div className="relative lg:w-1/2 flex flex-wrap">
          {images.map((img) => (
            <img key={img} src={img} className=" w-1/2" alt="NFTs" />
          ))}
        </div> */}
      </div>
      {/* <div className="relative z-0">
        <img
          src="images/vectors/grass.svg"
          alt="grass"
          className="min-w-full absolute bottom-0 z-0"
        />
      </div> */}
      <Slide />
    </section>
  )
}

export default Hero
