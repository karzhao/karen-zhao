import React from "react";
import Link from 'next/link';
import { IoLogoGithub } from "react-icons/io";

export interface ProjectElement {
    thumbnail?: string;
    title: string;
    date: string;
    description: string;
    repo: string;
    tools?: string;
}

export const PROJECTS = [
    {
        title: "Hack 'N Snacks",
        date: "February 2025",
        description: 
            "2nd in Best Beginner Hacks at HopperHacks.\nHack 'N Snacks is a 2D platformer that teaches players about nutrition through exploring levels and encountering variety of foods, learning about their calories and nutrients as they go. At the end, they receive a nutrition summary based on what they ate.",
        repo: "https://github.com/karenz710/HackAndSnacks"
    },
    {
        thumbnail: "/thumbnails/portfolio.png",
        title: "Portfolio Website",
        date: "November 2024",
        description:
            "This very website using TypeScript and React",
        repo: "https://github.com/karenz710/karen-zhao",
        tools: "React, TypeScript",
    },
    {
        thumbnail: "/thumbnails/playlist-app.jpg",
        title: "Android Playlist App",
        date: "November 2024",
        description:
            "An android app to manage a playlist including features to add, remove, play, shuffle, clear and navigate songs with a cursor-based system.",
        repo: "https://github.com/karenz710/playlist",
        tools: "Java, Android SDK"
    },
    {
        thumbnail: "/thumbnails/elephant.jpg",
        title: "Robotic Drawing Elephant",
        date: "December 2023",
        description:
            "In a team of 4, designed and developed an interactive, autonomous toy elephant as a creative companion for children. The toy draws different drawings based on detected colors and flaps its ears after drawing. Implemented an inverse kinematics algorithm to control the 5-bar linkage system.",
        repo: "#",
        tools: "Arduino,",
    },

];


const ProjectEntries = ({
    thumbnail,
    title,
    date,
    description,
    repo,
    tools,
}: ProjectElement) => {
    return (
        <div className="w-full max-w-4xl h-96 mb-8 bg-emerald-700/30 rounded-lg border border-gray-300">
            <div className="grid grid-cols-2 h-full">
                {/* Left Side: IMAGE */}
                <div className="relative w-full h-full">
                    <img
                        src={thumbnail}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-contain p-4"
                    />
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
                                    <button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white font-medium text-emerald-900 hover:bg-gray-400">
                                        <IoLogoGithub size={24} />
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