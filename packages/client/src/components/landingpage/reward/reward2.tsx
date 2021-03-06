import { rewards } from '../data/rewards'
import styles from '../../../styles/local/components/rewards.module.css'
import { NextPage } from 'next'

const Reward2: NextPage = () => {
  return (
    <>
      {rewards.map((item) => {
        return item.id >= 7 && item.id <= 14 ? (
          <div key={item.id} className={[styles.reward, 'mb-12'].join(' ')}>
            <p className="mb-2.5">{item.reward}</p>
            <div></div>
          </div>
        ) : null
      })}
    </>
  )
}

export default Reward2
