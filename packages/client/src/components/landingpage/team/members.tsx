import { NextPage } from "next";
import { members } from "../data/team";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'
import styles from "../../../styles/local/components/team.module.css"
import { ArrowLeft, ArrowRight } from "./navigate";
import { useState } from "react";

const Members: NextPage = () => {
    const [currenSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        slides: {
        perView: 1.5,
        spacing: 10,
        },
        initial: 0,
            slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel)
        },
        created() {
        setLoaded(true)
        },
        loop: true,
    
        breakpoints: {
            '(min-width: 768px)': {
                slides: {
                    perView: 3.5,
                    spacing: 10,
                }
            },
            '(min-width: 1280px)': {
                slides: {
                    perView: 4.2,
                    spacing: 5,
                }
            }
        },
    })
    const team = members.map(member=> {
        return (
            <div className="keen-slider__slide" key={member.id}>
                <img src={member.image} alt="team member" />
                <h2>{member.name}</h2>
                <a href={member.twitter}>
                    <img 
                        src="images/socials/twitter.svg"
                        alt="twitter" 
                    />
                </a>
            </div>
        )
    })
    return ( 
        <section>
            <div className={["flex justify-between items-center mb-12 xl:mb-14 mx-auto", styles.navigate].join(" ")}>
                <h1>Team</h1>
                <div className="flex ">
                    {team && (
                        <>
                            <ArrowLeft
                                onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            />
                        </>
                    )}
                    {team && (
                        <>
                            <ArrowRight
                                onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            />
                        </>
                    )}
                </div>
            </div>
            <div className={[styles.sectionContent].join(" ")}>
                <div ref={sliderRef} className="keen-slider">
                    {team}  
                </div>
            </div>
            
        </section>
         
    );
}
 
export default Members;