/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { members } from '../data/team'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import styles from '../../../styles/local/components/slide.module.css'
import { ArrowLeft, ArrowRight } from './navigate'
import { useState } from 'react'
import { imageOptimizer } from '../../../../utils/imageOptimizer'

const Slide: NextPage = () => {
  const [currenSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 1.5,
      spacing: 1
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    loop: true,

    breakpoints: {
      '(min-width: 768px)': {
        slides: {
          perView: 3.5,
          spacing: 0
        }
      },
      '(min-width: 1280px)': {
        slides: {
          perView: 4.5,
          spacing: 0
        }
      }
    }
  })

  const team = members.map((member) => {
    return (
      <div className="keen-slider__slide" key={member.id}>
        <img
          src={imageOptimizer(member.image)}
          alt={member.name}
          className="lg:w-full"
        />
      </div>
    )
  })

  return (
    <section>
      <div className={['relative', styles.navigate].join(' ')}>
        <div className="flex">
          {team && (
            <div className="absolute z-10 left-3 lg:left-24 bottom-0 -mb-5 lg:mb-0 lg:top-36 ">
              <ArrowLeft
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
              />
            </div>
          )}
          {team && (
            <div className="absolute z-10 right-3 lg:right-24 bottom-0 -mb-5 lg:mb-0 lg:top-36">
              <ArrowRight
                onClick={(e: any) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
              />
            </div>
          )}
        </div>
        <div className={[styles.sectionContent, 'overflow-hidden '].join(' ')}>
          <div ref={sliderRef} className="keen-slider">
            {team}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Slide
