import React, { useEffect } from "react";
import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

import NavBar from './components/NavBar'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/contact'
import Footer from './components/Footer';
import Projeact_info from './pages/Projeact_info';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();

  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [location]);

  return (
    <>
    <ScrollToTop />
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projeact_info" element={<Projeact_info />} />
      </Routes>
    <Footer />
    </>
  )
}

export default App
