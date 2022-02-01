import Link from 'next/link';
import styles from '../../../styles/local/components/navbar.module.css'
import Connect from '../connect';


const TopBar = ({ isClicked, handleClick }) => {
    return ( 
        <section className={[styles.nav,  "list-unstyled"].join(" ")}>
            <ul className="flex  wrapper justify-between my-auto">
                <div className="flex z-50">
                    <div 
                        className={ isClicked ? "hidden"  : "my-auto z-50" } 
                        onClick={handleClick}
                    >
                        <img
                            src="images/navbar/bar.svg"
                            alt="hamburger button"
                        />
                    </div>
                    <figure className="absolute top-0 z-0 left-16 xl:hidden">
                        <img 
                            src="images/vectors/swinging-monkey.svg" 
                            alt="swinging monkey" 
                        />
                    </figure>
                     <figure className="hidden absolute top-0 z-0 left-16 xl:left-52 xl:block">
                        <img 
                            src="images/vectors/swinging-monkey2.svg" 
                            alt="swinging monkey" 
                        />
                    </figure>
                </div>
                 {/* hamburger button */}
                <figure className="absolute top-0 left-0 z-0 xl:hidden">
                    <img 
                        src="images/vectors/vector1.svg" 
                        alt="monkey swing" 
                    />
                </figure>
                <figure className="hidden absolute top-0 left-0 z-0 xl:block">
                    <img 
                        src="images/vectors/vector2.svg" 
                        alt="monkey swing" 
                    />
                </figure>
                <li className="my-auto lg:ml-65">
                    <Link href="/" >
                        <a className="">
                            <img 
                                src="/images/logo.svg" 
                                alt="logo" 
                                className="logo" 
                                id="logo" 
                                width={33.21} 
                                height={31} 
                            />
                        </a>
                    </Link>
                </li>
                <li className="hidden lg:flex">
                    <Connect />
                    <button className={[styles.discord, "flex justify-center items-center"].join(" ")}>
                        <img 
                            src="images/socials/discord-light.svg" 
                            alt="join discord"  
                            className="mr-2.5" 
                        />
                        <a 
                            href="https://discord.gg/s87D89PqHp"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Join Discord
                        </a>
                    </button>
                </li>
            </ul>
        </section>
     );
}
export default TopBar;
