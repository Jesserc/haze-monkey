import { NextPage } from 'next'
import { roadmaps } from '../data/roadmapdata'
import styles from '../../../styles/local/components/roadmap.module.css'

const Roadmap: NextPage = () => {
  const roadmap = roadmaps.map((item) => {
    return (
      <div
        key={item.id}
        className={['relative flex flex-col', styles.roadmap].join(' ')}
      >
        <div className={styles.roadmapItem}>
          <p className="mb-10">{item.content}</p>
          <div className={['mb-12', styles.underline].join(' ')}></div>
        </div>
      </div>
    )
  })
  return (
    <section
      id="roadmap"
      className={[styles.sectionContainer, 'bg-green2'].join(' ')}
    >
      <div className={[styles.sectionContent, 'wrapper'].join(' ')}>
        <h1 className="text-center">Our Roadmap</h1>
        {roadmap}
      </div>
    </section>
  )
}

export default Roadmap
