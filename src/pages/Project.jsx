import React from 'react'
import fitzone from '../assets/fitzone.png'

const Project = () => {
  return (
   <div className="w-full px-12  h-full">
    <div data-aos="fade-right" data-aos-delay="200" className="mt-16 mb-10">
      <h2 className="text-4xl text-[var(--light-gray-text)] font-bold">Projects.</h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-15 mb-15 cursor-pointer">
      {[1, 2, 3, 4].map((item, index) => (
        <div data-aos="fade-up" data-aos-delay="400" key={index} className="relative rounded-2xl overflow-hidden shadow-lg group">
          <img
            src={fitzone}
            alt="Fitzone"
            className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
          />

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>

          <div className="absolute inset-0 z-10 flex flex-col py-6 justify-end items-start text-left px-4 text-white opacity-0 group-hover:opacity-100 transition duration-600">
            <h2 className="text-2xl font-semibold mb-2 border-b-2 border-white pb-1 inline-block">Fitzone</h2>
            <p className="text-base font-light font-source mb-4">Fitzone is a complete fitness center solution web project.</p>
            <div className="flex flex-wrap justify-center gap-2">
              {["HTML", "CSS", "JavaScript"].map((skill) => (
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
      ))}
    </div>
  </div>


  )
}

export default Project
