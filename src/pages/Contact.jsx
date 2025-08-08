import React from 'react'
import { Link, Links } from 'react-router-dom';
import backGrounImage from '../assets/hero.jpg'

const contact = () => {
  return (
<div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 py-10 px-4 relative overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <img
      src={backGrounImage}
      alt="Background"
      className="w-full h-full object-cover opacity-30"
    />
  </div>

  {/* Content Container with z-index */}
  <div className="relative z-10 w-full max-w-xl text-black text-center mb-8">
    <h2 className="text-4xl font-bold font-source mb-2">
      Contact Me
    </h2>
    <p className='font-source'>
      Feel free to contact me by submitting the form below and I will get back to you as soon as possible.
    </p>
  </div>

  {/* Form card */}
  <div className="relative z-10 bg-white bg-opacity-90 shadow-lg rounded-xl w-full max-w-xl p-8">
    <form className="space-y-6" method="POST" aria-label="Contact form">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-200"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none transition duration-200"
        ></textarea>
      </div>

      <div className="text-center flex justify-center">
         <Link to="/" >
            <button
            type="submit"
            className="bg-violet-600 hover:bg-violet-700 text-white w-26 h-26 rounded-full font-semibold flex items-center justify-center transition">
              Submit
            </button>
          </Link>
      </div>
    </form>
  </div>
</div>

  )
}

export default contact

