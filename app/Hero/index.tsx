'use client';

import Navbar from "./Navbar";
import Image from "next/image"
import TypingEffect from './TypingEffect';


const Hero = () => {
    return (
        <div id="main" >
            <Navbar/>
            <div className="min-h-screen bg-teal-950 grid grid-cols-2 gap-4">
                <div className="flex items-center justify-center">
                    <Image src={"/pusheen-typing.gif"} priority className="max-w-sm rounded-lg shadow-2xl ml-auto mr-auto" width="498" height="329" alt="A cute cat coding" />
                </div>
                <div className="font-serif flex items-center flex-items-start text-3xl text-gray-300"> 
                    <TypingEffect words={["Hello, I'm Karen!", "I am interested in: ", "Software Engineering ... ", "and Math 📖"]} /> 
                </div>
                <div className="justify-center ml-auto mr-auto">

                </div>
            </div> 
        </div>
    )
}

export default Hero;