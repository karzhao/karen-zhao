import React from "react";
import Link from 'next/link';
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // swiper styles :D
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

export interface ProjectElement {
    thumbnail?: string[];
    imgWidth?: number; 
    imgHeight?: number;
    title: string;
    date: string;
    description: string;
    repo: string;
    link: string;
    tools?: string;
}

export const PROJECTS = [
    {
        thumbnail: ["/thumbnails/Hack-n-Snacks-1.png", 
            "/thumbnails/Hack-n-Snacks-2.png", 
            "/thumbnails/Hack-n-Snacks-3.png", 
            "/thumbnails/Hack-n-Snacks-4.png", 
            "/thumbnails/Hack-n-Snacks-5.png"],
        imgWidth: 1916,
        imgHeight: 1196,
        title: "Hack 'N Snacks",
        date: "February 2025",
        description: 
            "2nd in Best Beginner Hacks at HopperHacks\na 2D platformer that teaches players about nutrition through exploring levels and encountering variety of foods, learning about their calories and nutrients as they go. At the end, they receive a nutrition summary based on what they ate.",
        repo: "https://github.com/karenz710/HackAndSnacks",
        link: "https://devpost.com/software/hack-n-snack",
    },
    {
        thumbnail: ["/thumbnails/portfolio.png"],
        imgWidth: 3000,
        imgHeight: 1938,
        title: "Portfolio Website",
        date: "November 2024",
        description:
            "This very website using TypeScript and React",
        repo: "https://github.com/karenz710/karen-zhao",
        link: "#",
        tools: "React, TypeScript",
    },
    {
        thumbnail: ["/thumbnails/playlist-app.jpg"],
        title: "Android Playlist App",
        date: "November 2024",
        description:
            "An android app to manage a playlist including features to add, remove, play, shuffle, clear and navigate songs with a cursor-based system.",
        repo: "https://github.com/karenz710/playlist",
        link: "#",
        tools: "Java, Android SDK"
    },
    {
        thumbnail: ["/thumbnails/elephant.jpg"],
        title: "Robotic Drawing Elephant",
        date: "December 2023",
        description:
            "2nd Best Toy Robot\nIn a team of 4, designed and developed an interactive, autonomous toy elephant as a creative companion for children. The toy draws different drawings based on detected colors and flaps its ears after drawing. Implemented an inverse kinematics algorithm to control the 5-bar linkage system.",
        repo: "#",
        link: "#",
        tools: "Arduino,",
    },

];


const ProjectEntries = ({
    thumbnail,
    imgWidth,
    imgHeight,
    title,
    date,
    description,
    repo,
    link,
}: ProjectElement) => {
    return (
        <div className="w-full max-w-4xl h-96 mb-8 bg-emerald-700/30 rounded-lg border border-gray-300">
            <div className="grid grid-cols-2 h-full">
                {/* Left Side: IMAGE carousel :)*/}
                <div className="relative w-full h-full">
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation // enables arrows
                        pagination={{ clickable: true }} // dots
                        loop // circular array !
                        grabCursor // swiping
                        className="h-full"    
                    >
                        {thumbnail?.map((imgSrc, index) => (
                            <SwiperSlide key={index}>
                                <Image
                                    src={imgSrc || "/thumbnails/default-thumbnail.png"}
                                    alt={title}
                                    width={imgWidth || 600}
                                    height={imgHeight || 400}
                                    objectFit="contain"
                                    className="absolute inset-0 w-full h-full object-contain p-4"
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/*Right Side: CONTENT */}
                <div className="p-3 flex flex-col mr-5">
                    {/* Title*/}{/* Date and Git*/}
                    <div className="flex flex-col items-center justify-center mb-4">
                        <h2 className="text-xl font-bold text-gray-300 mb-1">{title}</h2>
                        <div className="flex items-center gap-3">
                            <span className="text-gray-300 text-sm">{date}</span>
                            {repo !== "#" && (
                                <Link href={repo}>
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-medium text-emerald-900 hover:bg-gray-300">
                                        <IoLogoGithub size={24} />
                                    </button>
                                </Link>
                            )}
                            {link !== "#" && (
                                <Link href={link}>
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-medium text-emerald-900 hover:bg-gray-300">
                                        <FaLink size={18}/>
                                    </button>
                                </Link>
                            )}
                        </div>
                        <hr className="border-b-[1.5px] border-teal-900 my-1 w-full" />
                        <div className="overflow-auto">
                            <p className="mt-2 text-gray-300 text-center leading-relaxed">
                                {description.split("\n").map((line, index) => (
                                    <React.Fragment key={index}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                ))}</p>
                        </div>
                    </div>
                    {/* Tech stack*/}
                    <div> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectEntries;