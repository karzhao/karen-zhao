'use client'
import Image from 'next/image';

export default function About() {
    /* image data */
    const pictures_of_me = [
       { src: "/karen-running-fall.jpg", width: 1076, height: 1434, alt: "picture of me running in the fall" },
       { src: "/karen.jpeg", width: 914, height: 1200, alt: "picture of me on a cruise" },
         { src: "/karen-restaurant.jpg", width: 695, height: 1183, alt: "picture of me at a restaurant" },
         { src: "/karen-running-.5.jpg", width: 3024, height: 4032, alt: "picture of me in CA running" },   
    ];
    const school = { src: "/stony-brook-university.jpg", width: 1600, height: 1066, alt: "Stony Brook University" };
    
    return (
        /* 200vh wrapper = 100vh pinned + 100vh scroll up half (me) half (school) block */
        <section
            id="about"
            className="relative min-h-[200vh] scroll-mt-15"
            >

                {/* 1. pinned bio section: 100vh */}
            <div className="sticky top-0 z-0 h-screen flex flex-col items-center
                   justify-center bg-teal-900 space-y-10">
                 <h1 className="font-bold text-gray-300 text-4xl flex justify-center">
                    About
                </h1>
                <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl px-6">
                    <Image
                        src="/my-face.png"
                        width={500}
                        height={500}
                        priority
                        alt="picture of me"
                        className="border-4 rounded-md w-[55vw] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                />

                <ul className="text-gray-300 [font-size:clamp(1rem,2.2vw,1.6rem)] leading-relaxed">
                    <li><strong>Name:</strong> Karen Zhao</li>
                    <li><strong>Location:</strong> Queens, NY</li>
                    <li><strong>College:</strong> Stony Brook University</li>
                    <li><strong>Expected Graduation:</strong> May 2027</li>
                    <li className="mt-4">In my free time I like to:</li>
                    <ul className="ml-6 list-disc">
                        <li>Go on runs ⛅⛰️🌲🌼</li>
                        <li>Read 📖</li>
                        <li>Program 💻</li>
                    </ul>
                </ul>
                </div>
            </div>

                {/* 2. scroll up screen 100vh */}

            <div className="relative z-0 h-screen w-full grid grid-rows-2 bg-teal-900">

                {/* top half – four photos */}
                <div
                    /* one row on desktop, wraps into 2×2 below md */
                    className="grid grid-cols-4 md:grid-cols-4 sm:grid-cols-2 h-full gap-0"
                >
                    {pictures_of_me.map(({ src, alt, width, height }) => (
                        <Image
                        key={src}
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        sizes="25vw" /* each image takes 25% of the width */
                        className=" object-cover"
                        />
                    ))}
                </div>

                {/* bottom half school */}
                <div className="relative h-full">
                <Image
                    src={school.src}
                    alt={school.alt}
                    fill
                    /* “fill” lets Next/Image stretch to the div; object-cover keeps aspect */
                    sizes="100vw"
                    className="object-cover"
                />
                </div>
            </div>
        </section>

    )
}