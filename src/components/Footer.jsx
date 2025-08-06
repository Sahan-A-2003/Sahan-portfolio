import React from 'react'
import blogImage from '../assets/blog-white.png'
import githubImage from '../assets/github-white.png'
import linkedinImage from '../assets/linkedin-white.png'
import youtubeImage from '../assets/yt-white.png'

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-[var(--purpal-color)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
       
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4 font-source">SAHAN ASANTHA</h2>
          <p className="text-gray-300 text-lg max-w-md font-source">
            A Full-Stack Web Developer focused on crafting responsive and intuitive
            Frontend experiences that contribute to the success of modern Web Applications.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h3 className="text-xl font-semibold mb-4">Social</h3>
          <div className="flex items-center gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={linkedinImage}
                alt="LinkedIn"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={youtubeImage}
                alt="YouTube"
                className="w-8 h-8 "
              />
            </a>

            <a
              href="https://your-blog.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={blogImage}
                alt="Blog"
                className="w-8 h-8"
              />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img
                src={githubImage}
                alt="GitHub"
                className="w-8 h-8"
              />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-gray-500 my-6" />

      <div className="text-center text-sm text-gray-400">
        © Copyright 2025 . Made by <span className="font-semibold text-white">SAHAN ASANTHA</span>
      </div>
    </footer>
  )
}

export default Footer
