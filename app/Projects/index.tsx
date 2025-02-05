'use client'
import ProjectEntries, { ProjectElement, PROJECTS } from "./ProjectEntries";
const Projects = () => {
    return (
        <div id="projects">
            <h1 className="font-bold text-gray-300 text-4xl flex justify-center my-10">
                Projects
            </h1>
            <div className="flex flex-col items-center">
                {PROJECTS.map((project) => (
                    <ProjectEntries
                        key={project.title}
                        {...project}
                    />
                ))}
            </div>
            <div className="my-10">
            </div>
        </div>

    )
}

export default Projects;