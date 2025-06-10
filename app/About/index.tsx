'use client'
import Image from 'next/image';
const About = () => {
    return (
        <div id="about" style={{ scrollMarginTop: '70px' }}>
            <div>
                <h1 className="font-bold text-gray-300 text-4xl flex justify-center my-10">
                    About
                </h1>
                <div className="flex flex-col items-center mx-auto w-fit">
                    <div className="flex flex-row items-center gap-10 overflow-x-auto">
                        <Image src={"/my-face.png"} className="w-[500px] border-[3px]" width="700" height="800" alt="picture of me"/>
                        <ul className="text-lg leading-loose tracking-wider text-left list-inside text-gray-300">
                            <li><strong>Name:</strong> Karen Zhao</li>
                            <li><strong>Location:</strong> Queens, NY</li>
                            <li><strong>College:</strong> Stony Brook University, NY</li>
                            <li><strong>Expected Graduation Date:</strong> May 2027</li>
                            <li>In my free time I like to:</li>
                            <ul className="leading-snug ml-20">
                                <li>Go on runs ⛅⛰️🌲🌼  </li>
                                <li>Read 📖 </li>
                                <li>Program 💻 </li>
                            </ul>
                        </ul>
                    </div>
                </div>
                <div className="flex w-full max-w-screen-xl mx-auto my-5">
                    <Image
                        src="/karen-running-fall.jpg"
                        alt="picture of me running in the fall"
                        width={1076}
                        height={1434}
                        className="h-[400px] w-auto object-contain"
                    />
                    <Image
                        src="/karen-cruise.jpeg"
                        alt="picture of me on a cruise"
                        width={1600}
                        height={1200}
                        className="h-[400px] w-auto object-contain"
                    />
                    <Image
                        src="/karen-restaurant.jpg"
                        alt="picture of me at a restaurant"
                        width={695}
                        height={1183}
                        className="h-[400px] w-auto object-contain"
                        />
                    <Image
                        src="/karen-running-.5.jpg"
                        alt="picture of me in CA running"
                        width={3024}
                        height={4032}
                        className="h-[400px] w-auto object-contain"
                        />
                </div>
            </div>

        </div>

    )
}

export default About;