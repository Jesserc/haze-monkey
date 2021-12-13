import styles from '../../../styles/local/components/navbar.module.css'
import Link from 'next/link';

const NavList = ({ isClicked, handleClick }) => {
    return ( 
        <section>
            <nav className={isClicked ? [styles.navWrapper].join(" ") : "hidden" }>
                <ul className="flex flex-col wrapper">
                    <li className="flex justify-start ">
                        <div className={ isClicked ? ""  : "hidden" } onClick={handleClick}>
                            <img 
                                src="images/navbar/x.svg" 
                                alt="hamburger button"
                                className="W-4 lg:w-10"
                            />
                        </div>
                    </li>
                <ul className={["flex flex-col mb-32 justify-center xl:justify-end ", styles.navList].join(" ")}>
                        <li><Link href="/"> Story </Link></li>
                        <li><Link href="/"> Roadmap </Link></li>
                        <li><Link href="/"> Team </Link></li>
                    </ul>
                    <li className="relative">
                        <img 
                            src="images/vectors/weed2.svg" 
                            alt="weed"
                            className="absolute right-0 bottom-36 lg:bottom-96 2xl:justify-center"
                         />
                    </li>  
                </ul>
            </nav>
        </section> 
    );
}
export default NavList;