/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next'
import { members } from '../data/team'
import styles from '../../../styles/local/components/team2.module.css'
import { imageOptimizer } from '../../../../utils/imageOptimizer'

const Team: NextPage = () => {
  return (
    <section id="team" className={[styles.sectionContainer].join(' ')}>
      <div className={[styles.sectionContent, 'wrapper'].join(' ')}>
        <h2 className="text-center mb-12 xl:mb-14">Main Joint</h2>
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6">
          {members.map((member) => {
            return (
              <div key={member.id} className="mx-auto mb-12 ">
                <img
                  src={imageOptimizer(member.image)}
                  alt={member.name}
                  className="mx-auto mb-2"
                />
                <h3>{member.name.toUpperCase()}</h3>
                <p>{member.role}</p>
                <a href={member.twitter} target="_blank" rel="noreferrer">
                  <img
                    src="images/socials/twitter2.svg"
                    alt="twitter"
                    className="mt-4 xl:mb-0"
                  />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Team
