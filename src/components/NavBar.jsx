import { useState } from "react";
import { Link } from 'react-router-dom';
import Profile from '../assets/profile.jpg'
import { HiMenu, HiX } from "react-icons/hi";

const NavBar = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="w-full px-4 md:px-12 py-3 flex justify-between items-center">

        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Profile}
              alt="Sahan Asantha"
              className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
            />
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 tracking-wide cursor-pointer">
              SAHAN ASANTHA
            </h2>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8 lg:gap-11">
          <Link to="/" className="navbar-option">Home</Link>
          <Link to="/about" className="navbar-option">About</Link>
          <Link to="/projects" className="navbar-option">Projects</Link>
          <Link to="/contact" className="navbar-option">Contact</Link>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setSidebarOpen(true)}>
            <HiMenu className="w-8 h-8 text-gray-800" />
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-50
          ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={() => setSidebarOpen(false)}>
            <HiX className="w-8 h-8 text-gray-800" />
          </button>
        </div>

        <nav className="flex flex-col items-start gap-6 px-6 mt-8">
          <Link to="/" onClick={() => setSidebarOpen(false)} className="navbar-option">Home</Link>
          <Link to="/about" onClick={() => setSidebarOpen(false)} className="navbar-option">About</Link>
          <Link to="/projects" onClick={() => setSidebarOpen(false)} className="navbar-option">Projects</Link>
          <Link to="/contact" onClick={() => setSidebarOpen(false)} className="navbar-option">Contact</Link>
        </nav>
      </div>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </header>
  )
}

export default NavBar
