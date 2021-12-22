import { NextPage } from "next";
import { members } from "../data/team";
import styles from "../../../styles/local/components/team2.module.css"

const Team: NextPage = () => {
    const team = members.map(member => {
        return (
            <div key={member.id}>
                <img 
                    src={member.image} 
                    alt="team member" 
                    className="xl:mr-6 mb-2"
                />
                <h2>{member.name.toUpperCase()}</h2>
                <p>{member.role}</p>
                <a 
                href={member.twitter}
                target="_blank"
                rel="noreferrer"
                >
                    <img 
                        src="images/socials/twitter2.svg" 
                        alt="twitter"
                        className="mt-4 mb-10 xl:mb-0"
                    />
                </a>
            </div>
        )
    })
    return (
        <section id="team" className={[styles.sectionContainer].join(" ")}>
            <div className={[styles.sectionContent, "wrapper"].join(" ")}>
                <h1 className="text-center mb-12 xl:mb-14">Main Joint</h1>
                <div className="flex flex-col justify-center items-center lg:flex-row">
                     {team}
                </div>
            </div>        
        </section>
    )
}
 
export default Team;
