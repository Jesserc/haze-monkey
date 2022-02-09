/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/local/components/arts.module.css'
import { arts } from '../data/arts'
import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { imageOptimizer } from '../../../../utils/imageOptimizer'
gsap.registerPlugin(ScrollTrigger)

const Art2 = () => {
  let divRef = useRef(null)
  let sectionRef = useRef(null)

  useEffect(() => {
    console.log(divRef.children)
    gsap.to(divRef.children, {
      x: -1000,
      // xPercent: -100 * (divRef.length - 1),
      // ease: 'none',
      scrollTrigger: {
        trigger: sectionRef,
        // pin: true,
        scrub: 1,
        snap: 1 / (divRef.length - 1)
      }
    })
  }, [])

  return (
    <>
      <section
        ref={(el) => (sectionRef = el)}
        className={[styles.sectionContainer].join(' ')}
      >
        <div
          ref={(el) => (divRef = el)}
          className={[styles.sectionContent, ''].join(' ')}
        >
          {arts.map((item) => {
            return (
              <img
                className="border-2 border-black"
                src={imageOptimizer(item.art)}
                alt={'NFTs ' + item.id}
                key={item.id}
              />
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Art2
