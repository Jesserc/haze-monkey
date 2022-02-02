import Accordion from './accordion'
import styles from '../../../styles/local/components/faq.module.css'

const Faq = () => {
  return (
    <section className={[styles.sectionContainer].join(' ')}>
      <div
        className={[styles.sectionContent, 'w-full lg:w-3/4 mx-auto'].join(' ')}
      >
        <h1 className="text-center">FAQs</h1>
        <Accordion />
      </div>
    </section>
  )
}

export default Faq
