import React, { useEffect, useRef, useState } from "react";
import { initMagnetoEffect } from "../animations/buttonAnimations";
import { Link, Links, useParams  } from 'react-router-dom';
import HeroImage from '../assets/hero.jpg'
import fitzone from '../assets/fitzone.png'
import projects from "../data/projects";

const Projeact_info = () => {

  const magnetoRef = useRef(null);
  const textRef = useRef(null);
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));
  const [selectedImage, setSelectedImage] = useState(project ? project.images[0] : null);

  if (!project) return <p>Project not found!</p>;

  useEffect(() => {
    const cleanup = initMagnetoEffect(magnetoRef, textRef);
    return cleanup;
  }, []);

  return (
    <div className='w-full'>
      <div className="relative h-dvh w-full">

        <img
          src={HeroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />


        <div className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-black text-4xl md:text-5xl lg:text-7xl mb-4 hero-title">
            {project.title}
          </h1>
          <p className="max-w-2xl hero-subtitle font-source text-3xl font-normal my-5">
            {project.description}
          </p>
          <Link to={project.github_Link} target="_blank" rel="noopener noreferrer">
            <button ref={magnetoRef} className="magneto">
              <span ref={textRef} className='text'>Project Link</span>
            </button>
          </Link>
        </div>
      </div>


      <div className="w-full flex flex-col gap-4 justify-center my-8 pb-2 px-4 sm:px-8 md:px-12 lg:px-[72px] xl:px-40">
        {/* Big Image */}
        {selectedImage && (
          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-3xl overflow-hidden border border-gray-300 shadow-md mb-4">
            <img
              src={selectedImage}
              alt="Main Project"
              className="w-full h-full object-cover transition-all duration-500"
            />
          </div>
        )}

        {/* Small images */}
        <div className="flex flex-wrap gap-4 justify-center">
          {project.images.map((img, index) => (
            <div
              key={index}
              className={`w-[80px] sm:w-[100px] md:w-[120px] h-[60px] sm:h-[70px] md:h-[80px] rounded-[10px] overflow-hidden border-2 ${
                selectedImage === img ? "border-purple-500" : "border-gray-300"
              } shadow-md cursor-pointer`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>


    {/* Project Overview */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-18 xl:px-32 my-12">
        <h2 className="font-semibold text-2xl font-source text-[var(--light-gray-text)]">Project Overview</h2>
        
        {project.overview.split("\n").map((paragraph, index) => (
          <p key={index} className="font-source mt-4">{paragraph}</p>
        ))}

        {project.overview_Fontend && project.overview_Fontend.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold text-xl font-source mb-2">Frontend</h3>
            <ul className="list-disc list-inside font-source text-[var(--light-gray-text)] px-4 sm:px-6 md:px-8">
              {project.overview_Fontend.map((item, index) => (
                <li key={index} className="mt-1">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.overview_backend && project.overview_backend.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-xl font-source mb-2">Backend</h3>
            <ul className="list-disc list-inside font-source text-[var(--light-gray-text)] px-4 sm:px-6 md:px-8">
              {project.overview_backend.map((item, index) => (
                <li key={index} className="mt-1">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.overview_Key_Features && project.overview_Key_Features.length > 0 && (
          <div className="mt-6">
            <h3 className="font-semibold text-xl font-source mb-2">Key Features</h3>
            <ul className="list-disc list-inside font-source text-[var(--light-gray-text)] px-4 sm:px-6 md:px-8">
              {project.overview_Key_Features.map((item, index) => (
                <li key={index} className="mt-1">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Tools Used */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-18 xl:px-32 mb-8">
        <h2 className="font-semibold text-2xl font-source text-[var(--light-gray-text)] mb-6">Tools Used</h2>
        <div className="flex flex-wrap gap-4 cursor-default">
          {project.tech.map((skill) => (
            <span
              key={skill}
              className="bg-[var(--light-gray)] text-gray-800 px-3 sm:px-4 py-2 rounded-[10px] shadow text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Source Link */}
      <div className="w-full px-4 sm:px-8 md:px-12 lg:px-18 xl:px-32 mb-8">
        <h2 className="font-semibold text-2xl font-source text-[var(--light-gray-text)] mb-6">See Live</h2>
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <a
            href={project.github_Link}
            target="_blank"
            rel="noopener noreferrer"
            className="normal-btn text-center"
          >
            Source Code
          </a>
          <Link
            to="/contact"
            className="px-6 py-3 bg-[var(--black-color)] text-[var(--white-color)] font-bold text-lg rounded-2xl border border-transparent hover:border-[var(--purpal-color)] hover:text-[var(--black-color)] hover:bg-[var(--white-color)] transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer text-center inline-block mt-6"
          >
            Contact Me
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Projeact_info
