import React from 'react'
import fitzone from '../assets/fitzone.png'
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Project = () => {
  return (
   <div className="w-full h-full px-4 md:px-6 lg:px-8 xl:px-12">
    <div data-aos="fade-right" data-aos-delay="200" className="mt-16 mb-10">
      <h2 className="text-4xl text-[var(--light-gray-text)] font-bold">Projects.</h2>
    </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 px-2 md:px-4 lg:px-8 xl:px-20 mb-15">
        {projects.map((project, index) => {
          const interval = (index % 2 === 0) ? 5000 : 5500; 
          return <ProjectCard key={project.id} project={project} changeInterval={interval} />;
        })}
      </div>
  </div>


  )
}

export default Project
