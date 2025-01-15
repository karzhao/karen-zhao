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
                    <ul className="text-lg leading-loose tracking-wider text-left list-inside text-gray-300">
                        <li>Name: Karen Zhao</li>
                        <li>Location: Queens, NY</li>
                        <li>College: Stony Brook University, NY</li>
                        <li>Expected Graduation Date: May 2026</li>
                        <li>In my free time I like to:</li>
                        <ul className="leading-snug ml-20">
                            <li>Go on runs ⛅⛰️🌲🌼  </li>
                            <li>Read 📖 </li>
                            <li>Program 💻 </li>
                        </ul>
                    </ul>
                </div>
                <div className="flex justify-center mt-10"> 
                    <figure className="flex-shrink-0 w-full max-w-md overflow-hidden"> 
                        <Image src={"/picture-running.jpg"} width="3020" height="625" alt="Running" /> 
                    </figure> 
                </div>
            </div>

        </div>

    )
}

export default About;