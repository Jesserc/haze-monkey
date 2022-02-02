/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import { faq } from '../data/accordion'
import styles from '../../../styles/local/components/faq.module.css'

const Accordion = ({}) => {
  const [isActive, setActive] = useState<boolean>(false)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  const FAQ = faq.map((item, i) => {
    const handleClick: () => void = () => {
      setActive(!isActive)
      i === item.id ? setActiveIndex(i) : null
    }
    return (
      <article
        key={item.id}
        className={
          activeIndex === item.id && isActive
            ? 'bg-green5 p-10 pb-0 transition-all'
            : 'p-6 lg:p-10 pb-0 transition-all'
        }
      >
        <div className="flex justify-between mb-12" onClick={handleClick}>
          <h2 className="w-3/4">{item.question}</h2>
          <button className="outline-none">
            <img
              src={
                activeIndex === item.id && isActive
                  ? 'images/faq/arrowup.svg'
                  : 'images/faq/arrowdown.svg'
              }
              alt="collapse button"
              width="21px"
              height="9px"
            />
          </button>
        </div>
        {activeIndex === item.id && isActive && (
          <p className="mb-14">{item.answer}</p>
        )}
        <div className={['mb-14', styles.underline].join(' ')}></div>
      </article>
    )
  })

  return <>{FAQ}</>
}

export default Accordion
