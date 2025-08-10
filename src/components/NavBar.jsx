import React from 'react'
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg'

const NavBar = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-12 py-3 flex justify-between items-center">
        {/* Left: Logo + Name */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Profile}
              alt="Sahan Asantha"
              className="w-15 h-15 rounded-full border-none object-cover"
            />
            <h2 className="text-2xl cursor-pointer font-bold text-gray-800 tracking-wide">
              SAHAN ASANTHA
            </h2>
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <nav className="flex items-center gap-11">
          <Link to="/" className="navbar-option">Home</Link>
          <Link to="/about" className="navbar-option">About</Link>
          <Link to="/projects" className="navbar-option">Projects</Link>
          <Link to="/contact" className="navbar-option">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
