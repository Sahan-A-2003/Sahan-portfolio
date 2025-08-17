import React, { useEffect, useRef } from "react";
import { initMagnetoEffect } from "../animations/buttonAnimations";
import { Link } from "react-router-dom";
import backGrounImage from "../assets/hero.jpg";

const Contact = () => {
  const magnetoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const cleanup = initMagnetoEffect(magnetoRef, textRef);
    return cleanup;
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 pb-10 px-8 md:px-14 lg:px-[72px] xl:px-40 relative overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <img
          src={backGrounImage}
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Content Container */}
      <div
        data-aos="fade"
        data-aos-delay="200"
        className="relative z-10 w-full  text-black text-center mb-8 px-4 py-6 sm:py-8 cursor-pointer bg-transparent hover:bg-black hover:text-white transition-colors duration-300 rounded-lg"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-source my-3">
          Contact Me
        </h2>
        <p className="font-source text-sm sm:text-base md:text-lg">
          Feel free to contact me by submitting the form below and I will get
          back to you as soon as possible.
        </p>
      </div>

      {/* Form Card */}
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative z-10 bg-white bg-opacity-90 shadow-lg rounded-xl w-full max-w-4xl px-4 sm:px-6 md:px-8 py-6 sm:py-8"
      >
        <form
          className="space-y-5 sm:space-y-6"
          method="POST"
          aria-label="Contact form"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              placeholder="Enter Your Name.."
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 ring-[var(--purpal-color)] transition duration-200 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              placeholder="Enter Your Email Address.."
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 ring-[var(--purpal-color)] transition duration-200 text-sm sm:text-base"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm sm:text-base font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              placeholder="Enter Your Message.."
              className="w-full px-3 sm:px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--purpal-color)] resize-none transition duration-200 text-sm sm:text-base"
            ></textarea>
          </div>

          <div className="text-center flex justify-center">
            <Link to="/">
              <button type="submit" ref={magnetoRef} className="magneto">
                <span ref={textRef} className="text">
                  Submit
                </span>
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
