import { NextPage } from "next"

const Video:NextPage = () => {
    return (
        <section className="bg-green4 flex justify-center wrapper pb-28">
            <video controls className="w-4/4 lg:w-5/6 rounded-lg">
                <source 
                    src="videos/hazemonkeys.mp4"
                    type="video/mp4"
                />
            </video>
        </section>
    )

}

export default Video