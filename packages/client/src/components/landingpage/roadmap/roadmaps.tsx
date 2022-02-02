/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { roadmaps } from '../data/roadmapdata'
import styles from '../../../styles/local/components/roadmap.module.css'

const Roadmap: NextPage = () => {
  return (
    <section id="roadmap" className={[styles.sectionContainer].join(' ')}>
      <img
        src="https://res.cloudinary.com/lab88/image/upload/w_auto,dpr_auto,q_auto,f_auto/v1643797028/website/roadmap/roadmap.jpg"
        alt="Roadmap"
        className="w-full"
      />
    </section>
  )
}

export default Roadmap
