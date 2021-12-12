import { NextPage } from "next";
import { members } from "../data/team";
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react'

const Members: NextPage = () => {
    const [ref] = useKeenSlider<HTMLDivElement>({
        slides: {
        perView: 1.5,
        spacing: 10,
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
        <div ref={ref} className="keen-slider">
          {team}  
        </div>  
    );
}
 
export default Members;