import React, { useEffect, useRef } from "react";
import { initMagnetoEffect } from "../animations/buttonAnimations";
import { Link, Links } from 'react-router-dom';
import HeroImage from '../assets/hero.jpg'
import fitzone from '../assets/fitzone.png'

const Projeact_info = () => {

  const magnetoRef = useRef(null);
  const textRef = useRef(null);

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
           Dopefolio
          </h1>
          <p className="max-w-2xl hero-subtitle font-source text-3xl font-normal my-5">
            This page contains the case study of Dopefolio Open-Source Project which includes the Project Overview, Tools Used and Live Links to the official product.
          </p>
          <Link to="/">
            <button ref={magnetoRef} className="magneto">
              <span ref={textRef} className='text'>Project Link</span>
            </button>
          </Link>
        </div>
      </div>

      {/*project Image Section*/}
      <div className="w-full flex flex-wrap gap-4 justify-center my-8 px-14">
        <div className="w-[450px] h-[250px] rounded-3xl overflow-hidden border border-gray-300 shadow-md">
          <img src={fitzone} alt="Fitzone 1" className="w-full h-full object-cover" />
        </div>

        <div className="w-[450px] h-[250px] rounded-3xl overflow-hidden border border-gray-300 shadow-md">
          <img src={fitzone} alt="Fitzone 2" className="w-full h-full object-cover" />
        </div>

        <div className="w-[450px] h-[250px] rounded-3xl overflow-hidden border border-gray-300 shadow-md">
          <img src={fitzone} alt="Fitzone 3" className="w-full h-full object-cover" />
        </div>

        <div className="w-[450px] h-[250px] rounded-3xl overflow-hidden border border-gray-300 shadow-md">
          <img src={fitzone} alt="Fitzone 3" className="w-full h-full object-cover" />
        </div>

        <div className="w-[450px] h-[250px] rounded-3xl overflow-hidden border border-gray-300 shadow-md">
          <img src={fitzone} alt="Fitzone 3" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Project orver View*/}
      <div className="w-full px-32 my-12">
        <h2 className='font-semibold text-2xl font-source text-[var(--light-gray-text)] '>Project Overview</h2>
        <p className='font-source mt-6'>
            Dopefolio is an Open-Source project which is a simple and clean multi-page portfolio website template for developers. I created this project for developers to quickly build a good-looking and fast-performing multi-page portfolio without having to code their portfolio from scratch.
          </p>

          <p className='font-source  mt-4'>
            Since the launch of this project, it has received more than 2k stars on GitHub and it has also got featured on hundreds of sites. CSS-Tricks.com has also featured this template as the hottest frontend tool of 2021 in one of their articles which you can find here.
          </p>

          <p className='font-source mt-4'>
            Dopefolio is now being used by thousands of developers globally and it has helped many people in landing jobs & opportunities which makes me happy that my creation is helping other people in building their careers.
          </p>

          <p className='font-source mt-4'>
            It has many other features like Dopefolio's repo contains a playground link which people can use to test the template with different theme colours to find their own preferred primary colour for the template.
          </p>

          <p className='font-source mt-4'>
            Feel free to check out the Project by visiting the Project Link.
          </p>
      </div>

      {/*Tools Used*/}
      <div className="w-full px-32 mb-8">
        <h2 className='font-semibold text-2xl font-source text-[var(--light-gray-text)] mb-6'>Tools Used</h2>
        <div className="flex flex-wrap gap-4 cursor-default">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[var(--light-gray)] text-gray-800 px-4 py-2 rounded-[10px] shadow text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
      </div>

      {/*Souce Link*/}
      <div className="w-full px-32 mb-8">
        <h2 className="font-semibold text-2xl font-source text-[var(--light-gray-text)] mb-6">
          See Live
        </h2>
        <div className="flex gap-4">
          <Link
            to="/source-code"
            className="bg-[var(--purpal-color)] text-[var(--light-gray-text)] px-4 py-2 rounded-2xl hover:bg-purple-800 transition"
          >
            Source Code
          </Link>
          <Link
            to="/contact"
            className="border border-[var(--purpal-color)] text-[var(--purpal-color)] px-4 py-2 rounded-2xl hover:bg-[var(--purpal-color)] hover:text-white transition"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Projeact_info
