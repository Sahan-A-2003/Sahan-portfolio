import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, changeInterval = 3000 }) => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const handleClick = () => {
    navigate(`/project/${project.id}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % project.images.length
        );
        setFade(true);
      }, 300); 
    }, changeInterval);

    return () => clearInterval(interval);
  }, [project.images.length, changeInterval]);

  return (
    <div
      onClick={handleClick}
      className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer h-[350px]"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <img
        src={project.images[currentImageIndex]}
        alt={project.title}
        className={`w-full h-full object-cover transform transition-opacity duration-500 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      />

      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition duration-300"></div>

      <div className="absolute inset-0 z-10 flex flex-col py-6 justify-end items-start text-left px-4 text-white opacity-0 group-hover:opacity-100 transition duration-600">
        <h2 className="text-2xl font-semibold mb-2 border-b-2 border-white pb-1 inline-block">
          {project.title}
        </h2>
        <p className="text-base font-light font-source mb-4">
          {project.short_Description}
        </p>
        <div className="flex flex-wrap justify-start gap-2">
          {project.tech.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="bg-[var(--light-gray)] text-gray-800 px-4 py-1 rounded-lg text-sm font-medium shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
