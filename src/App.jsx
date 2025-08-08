import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Project from './pages/Project'
import Contact from './pages/contact'
import Footer from './components/Footer';
import Projeact_info from './pages/Projeact_info';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
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
