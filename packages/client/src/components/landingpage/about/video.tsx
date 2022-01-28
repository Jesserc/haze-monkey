import { NextPage } from "next"
import { useState } from "react"

const Video:NextPage = () => {
    // const [play, isPlaying] = useState(false)
    // const  handlePlay = () => {
    //     isPlaying(!play)
    // }
    return (
        <section className="bg-green4 flex justify-center wrapper pb-28">
            <video
                poster="images/about/video.svg"
                controls={true}
                className="w-4/4 lg:w-5/6 rounded-lg">
                <source 
                    src="videos/hazemonkeys.mp4"
                    type="video/mp4"
                />
            </video>
        </section>
    )

}

export default Video