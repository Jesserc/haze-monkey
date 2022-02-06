const Discord = ({isClicked}) => {
    return (
        <button className={["font-semibold h-12.5 w-full rounded-xl bg-white lg:bg-green1 lg:text-white lg:w-38 lg:h-10 flex justify-center items-center"].join(" ")}>
            <img 
            src= {isClicked ? "images/socials/discord-dark.svg" : "images/socials/discord-light.svg"}
                alt="join discord"  
                className="mr-2.5" 
            />
            <a 
                href="https://discord.gg/hazemonkeynft"
                target="_blank"
                rel="noreferrer"
            >
                Join Discord
            </a>
        </button>   
    )
}       

export default Discord