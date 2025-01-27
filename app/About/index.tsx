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
            </div>

        </div>

    )
}

export default About;