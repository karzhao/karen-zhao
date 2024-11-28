'use client'
import ProjectEntries, { ProjectElement, PROJECTS } from "./ProjectEntries";
const Projects = () => {
    return (
        <div id="projects">
            <h1 className="font-bold text-gray-300 text-4xl flex justify-center my-10">
                Projects
            </h1>
            <div className="carousel w-full">
                {PROJECTS.map((project: ProjectElement, index: number) =>(
                    <div id={`item${index}`} key={crypto.randomUUID()} className="carousel-item w-full" >
                        <ProjectEntries
                            {...project}
                        />
                    </div>
                ))}
            </div>
            <div className="my-10">
            </div>
        </div>

    )
}

export default Projects;