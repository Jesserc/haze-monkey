import styles from '../../../styles/local/components/navbar.module.css'
import Link from 'next/link';
import { gsap } from 'gsap/dist/gsap.js';
import { TweenLite, Power3 } from 'gsap/dist/gsap.js';
import { useEffect, useRef } from 'react';
import Connect from '../connect'
import Discord from './discord'

export let listRef;
const NavList = ({ isClicked, handleClick }) => {
    listRef = useRef(null)
    let slideUp = () => {

        console.log("rex")
    }
    
    // useEffect(()=>{
    //     console.log(listRef.children[0], listRef.children[1], listRef.children[2])
    //         slideUp = () => {
    //             TweenLite.staggerFrom([listRef.children[0], listRef.children[1], listRef.children[2]], 0.5, {
    //                 opacity: 0, y: 15, ease: Power3.easeOut
    //             }, .4)
    //         }
    //         isClicked ? slideUp() : null;
    // }, [])

 


    
    return ( 
        <section>
            <nav className={isClicked ? [styles.navWrapper].join(" ") : "invisible" }>
                <ul className={isClicked ? "flex flex-col wrapper" : "hidden"}>
                    <li className="flex justify-start ">
                        <div className={ isClicked ? ""  : "hidden" } onClick={handleClick}>
                            <img 
                                src="images/navbar/x.svg" 
                                alt="hamburger button"
                                className="W-4 lg:w-5"
                            />
                        </div>
                    </li>
                    <ul 
                        // ref={el => listRef = el}
                        className={
                            ["flex flex-col mb-32 justify-center xl:justify-end ", 
                            styles.navList].join(" ")}>
                        <li onClick={handleClick}><Link href="#about"> About </Link></li>
                        <li onClick={handleClick}><Link href="#roadmap"> Roadmap </Link></li>
                        <li onClick={handleClick}><Link href="#team"> Team </Link></li>
                        <div 
                            onClick={handleClick}
                            className='lg:hidden'>
                            <Discord 
                                isClicked={isClicked}
                            />
                        </div>
                        
                    </ul>
                    <li className="relative">
                        <img 
                            src="images/vectors/weed2.svg" 
                            alt="weed"
                            className={isClicked ? "absolute right-0 bottom-36 lg:bottom-96 2xl:justify-center": 'invisible'}
                         />
                    </li>  
                </ul>
            </nav>
        </section> 
    );
}
export default NavList;