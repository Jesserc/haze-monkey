/* eslint-disable @next/next/no-img-element */
import styles from '../../../styles/local/components/navbar.module.css'
import Link from 'next/link'

const NavList = ({ isClicked, handleClick }) => {
  return (
    <section>
      <nav className={isClicked ? [styles.navWrapper].join(' ') : 'invisible'}>
        <ul className={isClicked ? 'flex flex-col wrapper' : 'hidden'}>
          <li className="flex justify-start ">
            <div className={isClicked ? '' : 'hidden'} onClick={handleClick}>
              <img
                src="images/navbar/x.svg"
                alt="hamburger button"
                className="W-4 lg:w-5"
              />
            </div>
          </li>
          <ul
            className={[
              'flex flex-col mb-32 justify-center xl:justify-end',
              styles.navList
            ].join(' ')}
          >
            <li onClick={handleClick}>
              <Link href="#about"> About </Link>
            </li>
            <li onClick={handleClick}>
              <Link href="#roadmap"> Roadmap </Link>
            </li>
            <li onClick={handleClick}>
              <Link href="#team"> Team </Link>
            </li>
          </ul>
          <li className="relative">
            <img
              src="images/vectors/weed2.svg"
              alt="weed"
              className={
                isClicked
                  ? 'absolute right-0 bottom-36 lg:bottom-96 2xl:justify-center'
                  : 'invisible'
              }
            />
          </li>
        </ul>
      </nav>
    </section>
  )
}
export default NavList
