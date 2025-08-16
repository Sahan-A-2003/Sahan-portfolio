import React, { useEffect, useState, useRef } from "react";
import { Link, Links } from 'react-router-dom';
import { initMagnetoEffect } from "../animations/buttonAnimations";

import HeroImage from '../assets/hero.jpg'

const About = () => {

    const magnetoRef = useRef(null);
    const textRef = useRef(null);
  
    useEffect(() => {
      const cleanup = initMagnetoEffect(magnetoRef, textRef);
      return cleanup;
    }, []);
  

  return (
    <div className="w-full">
      <div className="relative h-dvh w-full">

        <img
          src={HeroImage}
          alt="Background"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black opacity-20 z-10" />

        <div  data-aos="fade-up" data-aos-delay="100" className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-black text-4xl md:text-5xl lg:text-7xl mb-4 hero-title cursor-default">
            HEY, I'M SAHAN ASANTHA
          </h1>
          <p className="max-w-2xl hero-subtitle font-source text-3xl font-normal my-5 cursor-default">
            A Final-Year Software Engineering Student building full-stack web apps that solve
            everyday challenges and enhance user experiences.
          </p>
          <Link to="/contact">
            <button ref={magnetoRef} className="magneto">
              <span ref={textRef} className='text'>Contact Me</span>
            </button>
          </Link>
        </div>
      </div>
      
    </div>
  )
}

export default About
