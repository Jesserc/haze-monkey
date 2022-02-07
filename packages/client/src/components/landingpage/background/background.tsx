import { NextPage } from 'next'
import styles from '../../../styles/local/components/background.module.css'
import SectionVectors from './sectionVectors'

const Background: NextPage = () => {
  return (
    <section className={[styles.sectionContainer, 'relative'].join(' ')}>
      <div
        className={[
          styles.sectionContent,
          'flex flex-col xl:flex-row wrapper'
        ].join(' ')}
      >
        <SectionVectors />
        <div className="w-2/4">
          <h1 className="mb-2">150 Light-years away</h1>
          <h2 className="mb-14">Our Background Story</h2>
        </div>
        <div className="md:w-3/4 lg:w-3/4">
          <p className="mb-10">
            150 light-years away, in an experimental planet created by Elun Mosk
            called Hazron, a magnificent specie of specially bred monkeys needed
            absolutely nothing to survive other than haze and chilled vibes. On
            a planet, where everything was dope and ganga, there was every
            single specie of haze you can think of on Hazron. What's most
            fascinating is the diverse forms of which the haze took, they even
            existed in form of tall palm trees and beautiful swines.
          </p>
          <p className="mb-10">
            At the heart of Hazron stood the eternal kush, a plant which was the
            sole source of eternal happiness and balance in all of the universe.
            This made the monkeys live in perfect peace, harmony and balance for
            millenia. World peace, which has been an impossible task to achieve
            for thousands of years by humanity has literally been in Hazron
            since day one, and the only reason was the Eternal kush and of
            course haze. Everything changed when an advanced civilization of
            humanoids attacked, destroying their planet and wiping almost 99% of
            their global population in search of the Eternal kush.
          </p>
          <p className="mb-10">
            The very last surviving species of haze monkeys face an ultimate
            challenge of saving their species and rebuilding their planet, while
            also fighting off an unassailable enemy. They receive support from a
            twin specie from an alternate universe but will the OG monkeys
            succeed in saving their planet and restoring Hazron? find out in our
            project lineup!
          </p>
          <p className="mb-10">
            Get ready for the wildest story in the history of the metaverse!
          </p>
        </div>
      </div>
    </section>
  )
}

export default Background
