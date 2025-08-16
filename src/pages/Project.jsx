import React from 'react'
import fitzone from '../assets/fitzone.png'
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Project = () => {
  return (
   <div className="w-full px-12  h-full">
    <div data-aos="fade-right" data-aos-delay="200" className="mt-16 mb-10">
      <h2 className="text-4xl text-[var(--light-gray-text)] font-bold">Projects.</h2>
    </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-15 mb-15">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
  </div>


  )
}

export default Project
