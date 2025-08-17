import React, { useEffect, useState, useRef } from "react";
import { Link, Links } from 'react-router-dom';
import { initMagnetoEffect } from "../animations/buttonAnimations";
import certificates from '../data/Certificates'

import HeroImage from '../assets/hero.jpg'
import skillsAndTools from '../data/Skils&Tools'

const About = () => {

  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const magnetoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cleanup = initMagnetoEffect(magnetoRef, textRef);
    return cleanup;
  }, []);


  return (
    <div className="w-full bg-[var(--white-color)]">
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
            A Final-Year Software Engineering Student specializing in full-stack development. 
          Passionate about building intuitive, user-focused applications, I combine clean design with efficient 
          code to create impactful digital experiences.
          </p>
          <Link to="/contact">
            <button ref={magnetoRef} className="magneto">
              <span ref={textRef} className='text'>Contact Me</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full">
        {/* Deeper Bio */}
        <section className="px-8 md:px-32 pt-16 bg-white text-left">
          <h3 data-aos="fade-right" className="text-left py-8 text-2xl"><span className="text-3xl text-[var(--purpal-color)] px-3">-</span>About Me</h3>
          <p data-aos="fade-left" data-aos-delay="200" className="text-lg max-w-2xl md:max-w-4xl lg:max-w-5xl font-semibold mx-auto leading-relaxed text-[var(--dark-gray-text)] mb-6 font-source">
            Hi, I’m A.G. Sahan Asantha, a final-year undergraduate in Software Engineering with a strong passion for building responsive, user-friendly, and performance-driven web applications. I have a solid foundation in HTML, CSS, JavaScript, and SQL, and I am skilled in using modern frameworks like React, Tailwind CSS, and Laravel to create dynamic and scalable solutions.
          </p>
          <p data-aos="fade-left" data-aos-delay="300" className="text-lg max-w-2xl md:max-w-4xl lg:max-w-5xl font-semibold mx-auto leading-relaxed text-[var(--dark-gray-text)] font-source">
            During my academic journey, I have worked on several university and personal projects, including my final-year graduation project (AIMS – Automated Issue Management System), which challenged me to apply full-stack development, teamwork, and Agile practices in a real-world scenario. These experiences have enhanced my problem-solving skills, strengthened my collaboration in group environments, and deepened my understanding of software engineering principles.
          </p>
          <p data-aos="fade-left" data-aos-delay="400" className="text-lg max-w-2xl md:max-w-4xl lg:max-w-5xl font-semibold mx-auto leading-relaxed text-[var(--dark-gray-text)] font-source pt-5">
            I am eager to start my professional journey and gain hands-on industry experience. With a growth mindset, adaptability, and a strong drive to learn, I am excited to contribute to a team where I can apply my skills, take on challenges, and bring innovative ideas to life. Feel free to explore my portfolio and connect with me!</p>
        </section>

        {/* Skills */}
        <section className="px-8 md:px-32 pt-12 bg-[var(--light-gray-bg)] text-center">
          <h3 data-aos="fade-right" className="text-left py-8 text-2xl"><span className="text-3xl text-[var(--purpal-color)] px-3">-</span>Skills & Tools</h3>
          <div data-aos="fade" data-aos-delay="200" className="flex px-12 flex-wrap gap-4">
            {skillsAndTools.map((skill, index) => (
              <span 
                key={index} 
                className="bg-[var(--light-gray)] text-gray-800 px-6 py-3 rounded-[10px] shadow text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section className="px-8 md:px-32 py-12 bg-white text-center">
          <h3 data-aos="fade-right" className="text-left py-8 text-2xl"><span className="text-3xl text-[var(--purpal-color)] px-3">-</span>Certificates</h3>
          <div className="w-full flex flex-col text-left px-10 gap-6">
            {certificates.slice(0, showAll ? certificates.length : 5).map((cert, i) => (
              <div
                data-aos="fade-up" data-aos-delay="200"
                key={i}
                className="group overflow-hidden rounded-xl py-8 px-6 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelectedCert(cert)}
              >
                <h3 className="font-semibold text-lg relative inline-block pb-2">
                  {cert.title}
                  <span className="absolute left-0 bottom-0 w-25 h-1 rounded-full bg-purple-500"></span>
                </h3>

                <p className="text-gray-500 text-sm mt-4">Skills learned: {cert.skillsLearned}</p>

                <div className="flex justify-between items-end mt-6">
                  <p className="text-gray-500 text-sm">Issued by: {cert.issuedBy}</p>
                  <p className="text-gray-400 text-sm">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {certificates.length > 5 && !showAll && (
            <div className="flex justify-center mt-6">
              <button
                className="px-6 py-2 bg-[var(--light-gray)] text-[var(--black-color)] rounded-2xl font-semibold hover:bg-[var(--gray-color)] duration-400 cursor-pointer "
                onClick={() => setShowAll(true)}
              >
                See More
              </button>
            </div>
          )}

          {/* Modal Popup */}
          {selectedCert && (
            <div
              className="fixed inset-0 z-[9999] bg-black bg-opacity-70 flex justify-center items-center p-4 overflow-auto"
              onClick={() => setSelectedCert(null)}
            >
              <div
                className="bg-white p-4 rounded-xl w-full max-w-3xl relative flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl font-bold"
                  onClick={() => setSelectedCert(null)}
                >
                  &times;
                </button>

                <h3 className="text-xl font-bold mb-4">{selectedCert.title}</h3>
                <p className="text-sm text-gray-500 mb-4">
                  Issued by: {selectedCert.issuedBy} | Date: {selectedCert.date}
                </p>

                <img
                  src={selectedCert.file}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded"
                />
              </div>
            </div>
          )}

          </section>

          {/* Call to Action */}
          <section data-aos="fade" className="px-8 md:px-32 py-16 text-center bg-[var(--purpal-color)] ">
            <p className="text-lg md:text-xl mb-8">
              I’m always excited to collaborate on meaningful projects and create impactful solutions. 
              Whether you have a project in mind or just want to say hi, I’d love to connect!
            </p>

            <div data-aos="fade-right" data-aos-delay="200" className="flex flex-col md:flex-row justify-center gap-6">
              <a
                data-aos="fade-right" data-aos-delay="200"
                href="/projects"
                className="px-6 py-3 bg-[var(--black-color)] text-[var(--white-color)] rounded-2xl font-semibold hover:bg-[var(--white-color)] hover:text-[var(--black-color)] transition-colors duration-500"
              >
                View Projects
              </a>

              <a
                data-aos="fade-left" data-aos-delay="300"
                href="/contact"
                className="px-6 py-3 bg-[var(--white-color)] text-[var(--black-color)] border-0 rounded-2xl font-semibold hover:bg-[var(--black-color)] hover:text-[var(--purpal-color)] transition-colors duration-500"
              >
                Contact Me
              </a>
            </div>
          </section>
        </div>


    </div>
  )
}

export default About
