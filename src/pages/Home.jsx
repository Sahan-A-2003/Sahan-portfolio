import React, { useEffect, useRef } from "react";
import { initMagnetoEffect } from "../animations/buttonAnimations";
import { Link, Links } from 'react-router-dom';
import HeroImage from '../assets/hero.jpg'
import bookImage from '../assets/book-dark.svg'
import githubImage from '../assets/github-dark.svg'
import linkedinImage from '../assets/linkedin-dark.svg'
import youtubeImage from '../assets/yt-dark.svg'

import fitzone from '../assets/fitzone.png'

const Home = () => {

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

        <div data-aos="fade-right" data-aos-delay="200" className="absolute top-1/3 left-0 z-30 flex bg-[var(--light-gray)] flex-col rounded-br-3xl rounded-tr-3xl p-4 gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={linkedinImage} alt="LinkedIn" className="w-7 hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={youtubeImage} alt="YouTube" className="w-7 hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={githubImage} alt="GitHub" className="w-7 hover:scale-110 transition" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img src={bookImage} alt="Blog" className="w-7 hover:scale-110 transition" />
          </a>
        </div>

        <div  data-aos="fade-up" data-aos-delay="100" className="absolute z-20 inset-0 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-black text-4xl md:text-5xl lg:text-7xl mb-4 hero-title cursor-default">
            HEY, I'M SAHAN ASANTHA
          </h1>
          <p className="max-w-2xl hero-subtitle font-source text-3xl font-normal my-5 cursor-default">
            A Final-Year Software Engineering Student building full-stack web apps that solve
            everyday challenges and enhance user experiences.
          </p>
          <Link to="/">
            <button ref={magnetoRef} className="magneto">
              <span ref={textRef} className='text'>Project</span>
            </button>
          </Link>
        </div>
      </div>

      <div className="w-full bg-gray-100 py-12 px-6 md:px-40 cursor-default">
        <div data-aos="fade-up" data-aos-delay="200" className="text-center mb-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">About Me</h2>
            <div className="mx-auto w-24 h-1.5 rounded-full bg-[var(--purpal-color)] mb-4"></div>
          </div>
          <p className="text-gray-600 max-w-4xl text-[18px] font-semibold font-source mx-auto">
            Here you’ll find more information about who I am, what I do, and the skills I’ve developed so far in the field of software engineering. I’m passionate about building full-stack web applications, solving real-world problems through code, and continuously learning new technologies to improve my craft.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
        
          <div data-aos="fade-right" data-aos-delay="400" className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get to know me!</h3>
            <p className="about-me">
              I'm a Full-Stack Web Developer with a strong passion for building responsive, user-friendly websites and web applications that deliver real value. Be sure to check out some of my work in the <span className="font-bold text-[var(--purpal-color)]">Projects</span> section.
            </p>
            <p className="about-me">
              When I'm not coding, I enjoy exploring new tech <span className="font-bold text-black">trends</span>, reading about software <span className="font-bold text-black">architecture</span>, and working on side projects that challenge me to think creatively.
            </p>
            <p className="about-me">
              Currently, I’m open to exciting <span className="font-bold text-black">job</span> opportunities where I can learn, contribute, and grow as a developer. If you have an opportunity that matches my skills and interests, don't hesitate to <span className="font-bold text-[var(--purpal-color)]">contact me</span>.
            </p>
            
            <Link to="/contact">
              <button className="mt-6 px-6 py-3 bg-[var(--purpal-color)] text-white font-bold text-lg rounded-2xl transition duration-300 transform hover:scale-105 hover:text-black cursor-pointer text-center">
                Contact Me
              </button>
            </Link>
          </div>

          <div data-aos="fade-left" data-aos-delay="400">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Skills</h3>
            <div className="flex flex-wrap gap-4 cursor-default">
              {["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Laravel", "MySQL", "Git","Github", "Responsive Design", "PHP", ".NET", "Terminal"].map((skill) => (
                <span
                  key={skill}
                  className="bg-[var(--light-gray)] text-gray-800 px-4 py-2 rounded-[10px] shadow text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/*Project section*/}
      <div className="w-full bg-white px-20 md:px-40 my-8 cursor-default">
        <div data-aos="fade-up" data-aos-delay="100" className="w-full text-center my-8 mt-15">
          <div className="text-center my-8">
            <h2 className="text-4xl font-bold text-[var(--light-gray-text)] mb-3">Project</h2>
            <div className="mx-auto w-16 h-1.5 rounded-full bg-[var(--purpal-color)] mb-4"></div>
          </div>
          <p className='max-w-4xl text-[var(--light-gray-text)] text-[18px] font-source mx-auto'>Here you will find some of the personal and University projects that I created with each project containing its own case study</p>
        </div>

        <div className="grid grid-rows-3 mt-10 gap-12">
         
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-18 py-12 border-b-2 border-[var(--gray-color)]">
            <img
              data-aos="fade-right" data-aos-delay="200"
              src={fitzone}
              alt="Project 1"
              className="w-full h-auto md:w-1/2 max-h-80 object-cover rounded-xl shadow-lg"
            />
            <div data-aos="fade-left" data-aos-delay="200" className="text-left md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">Dopefolio</h3>
              <p className="project-description">
                Dopefolio is a successful Open-Source project that I created which has
                been featured on some of the biggest tech sites like CSS-Tricks,
                Hostinger, etc & used by thousands of developers globally.
              </p>
              <Link to="/contact">
                <button className="mt-6 px-6 py-3 bg-[var(--purpal-color)] text-white font-bold text-lg rounded-2xl transition duration-300 transform hover:scale-105 hover:text-black cursor-pointer text-center">
                  Case Study
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row-reverse justify-between items-center gap-8  py-12 border-b-2 border-[var(--gray-color)]">
            <img
              data-aos="fade-left" data-aos-delay="200"
              src={fitzone}
              alt="Project 2"
              className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow-lg"
            />
            <div data-aos="fade-right" data-aos-delay="200" className="text-left md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">DevConnect</h3>
              <p className="project-description">
                DevConnect is a collaborative platform I developed to help developers
                build teams, share ideas, and contribute to open-source projects.
              </p>
              <Link to="/contact">
                <button className="mt-6 px-6 py-3 bg-[var(--purpal-color)] text-white font-bold text-lg rounded-2xl transition duration-300 transform hover:scale-105 hover:text-black cursor-pointer text-center">
                  Case Study
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-18 pt-12 border-none">
            <img
              data-aos="fade-right" data-aos-delay="200"
              src={fitzone}
              alt="Project 3"
              className="w-full md:w-1/2 h-auto object-cover rounded-xl shadow-lg"
            />
            <div data-aos="fade-left" data-aos-delay="200" className="text-left md:w-1/2">
              <h3 className="text-2xl font-bold mb-3">Portfolio Builder</h3>
              <p className="project-description">
                A sleek portfolio builder tool that allows developers and designers to
                showcase their work using modern UI/UX and fully responsive templates.
              </p>
              <Link to="/contact">
                <button className="mt-6 px-6 py-3 bg-[var(--purpal-color)] text-white font-bold text-lg rounded-2xl transition duration-300 transform hover:scale-105 hover:text-black cursor-pointer text-center">
                  Case Study
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
