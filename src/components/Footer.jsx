import React from 'react'
import blogImage from '../assets/blog-white.png'
import githubImage from '../assets/github-white.png'
import linkedinImage from '../assets/linkedin-white.png'
import mediumImage from '../assets/medium.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-[var(--purpal-color)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

        {/* About Section */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-2xl font-bold mb-4 font-source">SAHAN ASANTHA</h2>
          <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0 font-source">
            A Full-Stack Web Developer focused on crafting responsive and intuitive
            Frontend experiences that contribute to the success of modern Web Applications.
          </p>
        </div>

        {/* Social Section */}
        <div className="flex flex-col items-center mt-6 md:mt-8 lg:mt-0">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <div className="flex items-center gap-6 flex-wrap justify-center lg:justify-start">
            <a href="https://www.linkedin.com/in/sahan-asantha" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img src={linkedinImage} alt="LinkedIn" className="w-8 h-8" />
            </a>

            <a href="https://medium.com/@sahan.asantha2003" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img src={mediumImage} alt="YouTube" className="w-8 h-8" />
            </a>

            <a href="https://dev.to/sahan_asantha2003" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img src={blogImage} alt="Blog" className="w-8 h-8" />
            </a>

            <a href="https://github.com/Sahan-A-2003" target="_blank" rel="noopener noreferrer" className="transition-transform duration-300 hover:scale-110">
              <img src={githubImage} alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-500 my-6" />

      <div className="text-center text-sm text-gray-400">
        © Copyright 2025. Made by <span className="font-semibold text-white">SAHAN ASANTHA</span>
      </div>
    </footer>

  )
}

export default Footer
