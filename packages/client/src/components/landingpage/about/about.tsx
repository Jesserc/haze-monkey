import JungleTree from './leaves'
import styles from '../../../styles/local/components/about.module.css'
import { NextPage } from 'next'
import Video from './video'
const About: NextPage = () => {
  return (
    <section
      id="about"
      className={[styles.sectionContainer, 'relative'].join(' ')}
    >
      <JungleTree />
      <div
        className={[
          styles.sectionContent,
          'wrapper text-center relative z-1'
        ].join(' ')}
      >
        <h2 className="mb-10 w-3/4 sm:w-2/4 lg:w-1/3 mx-auto">
          About the project
        </h2>
        <p className="mb-10 sm:w-3/4 xl:w-2/4 mx-auto">
          Haze Monkey Society is an NFT collection focused on building a no-code
          platform aimed at empowering NFT creators and artists with a Web3
          company in Africa.
        </p>

        <p className="mb-10 sm:w-3/4 xl:w-2/4 mx-auto">
          We are also making a community-driven animation series, where the
          holders will vote and get rewarded for participating in the production
          process.
        </p>

        <p className="mb-10 sm:w-3/4 xl:w-2/4 mx-auto">
          In line with United Nations Sustainable Development Goals, Haze Monkey
          Society is planting over 420,000 trees over the next 5years by
          collaborating with the community, experts, and existing green
          organizations to make this possible.
        </p>
      </div>
      <Video />
    </section>
  )
}

export default About
