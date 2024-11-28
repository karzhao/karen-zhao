'use client';

import Navbar from "./Navbar";
import Image from "next/image"
import TypingEffect from "./TypingEffect";
import ViewGitHubButton from "./ViewGitHubButton";
import ViewLinkedInButton from "./ViewLinkedInButton";


const Hero = () => {
    return (
        <div id="main" className="bg-teal-950">
            <Navbar />
            <div className="min-h-screen grid grid-rows-2 justify-center">
                <div className="grid grid-cols-2 gap-10 flex-grow">
                    <div className="flex items-center justify-center self-end">
                        <Image src={"/pusheen-typing.gif"} priority className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" width="498" height="329" alt="A cute cat coding" />
                    </div>
                    <div className="font-serif flex items-center text-3xl text-gray-300">
                        <TypingEffect words={["Hello, I'm Karen!", "I am interested in: ", "Software Engineering ... ", "and Math "]} />
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center mt-4 self-center">
                    <h3 className="mt-5 text-lg font-bold font-sans-serif text-center text-gray-300">
                        SBU &#39;27 — B.S. in Computer Science, B.S. in Applied Mathematics
                    </h3>
                    <div className="mt-10 min-w-max flex gap-4 items-start">
                        <ViewGitHubButton />
                        <ViewLinkedInButton />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;