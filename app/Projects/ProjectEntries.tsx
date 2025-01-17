import Link from 'next/link';
import Image from 'next/image';
import { IoLogoGithub } from "react-icons/io";

export interface ProjectElement {
    thumbnail?: string
    title: string;
    date: string;
    description: string;
    repo: string;

}

export const PROJECTS = [
    
    {
        thumbnail: "/thumbnails/portfolio.png",
        title: "Portfolio Website",
        date: "November 2024",
        description:
            "This very website using TypeScript and React",
        repo: "https://github.com/karenz710/karen-zhao",
    },
    /*{
        thumbnail: "/thumbnails/recipe-website.png",
        title: "Recipe Website",
        date: "November 2024",
        description:
            "My first website using JavaScript, HTML to share recipes",
        repo: "https://github.com/karenz710/recipe-website",
    },*/
    {
        thumbnail: "/thumbnails/playlist-app.png",
        title: "Android Playlist App",
        date: "November 2024",
        description:
            "An android app to manage a playlist including functions to play, pause, shuffle. A doubly linked list ADT is implemented to represent the playlist, with a cursor for navigating through songs.",
        repo: "https://github.com/karenz710/playlist",
    },
    {
        thumbnail: "/thumbnails/elephant.jpg",
        title: "Robotic Drawing Elephant",
        date: "December 2023",
        description:
            "In a team of 4, developed an interactive autonomous toy elephant using Arduino, sensors, and servo motors. Implemented an inverse-kinematics algorithm to control a 5-bar linkage for drawing based on sensed colors. The toy flaps its ears after drawing.",

        repo: "#",
    },

];


const ProjectEntries = ({
    thumbnail,
    title,
    date,
    description,
    repo,
}: ProjectElement) => {
    return (
        <div className="flex justify-center mb-2 mx-auto">
            <div className="flex justify-center w-full lg:max-w-4xl mb-2 border-2 rounded-lg ">
                <div className="card md:card-side flex">
                    <figure className="flex-shrink-0 w-full max-w-md overflow-hidden">
                        <Image src={thumbnail!} width="1500" height="100" className="p-2"
                            alt="Thumbnail" />
                    </figure>
                    <div className="text-gray-300 card-body w-full">
                        <h2 className="card-title text-center">
                            <p>{title}</p>
                        </h2>
                        <p className="text-center">{date}</p>
                        <p className="text-gray-300">{description}</p>
                        <Link href={repo}>
                            <button className="btn bg-transparent rounded-full p-3 border-1 hover:bg-gray-200 disabled:hidden" disabled={repo === "#"}>
                                <IoLogoGithub size={24}/>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ProjectEntries;