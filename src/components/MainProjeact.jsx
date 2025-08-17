import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const MainProjeact = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  useEffect(() => {
    const initialIndex = {};
    projects.filter(p => [1, 2, 3].includes(p.id)).forEach(p => {
      initialIndex[p.id] = 0;
    });
    setCurrentImageIndex(initialIndex);

    const interval = setInterval(() => {
      setCurrentImageIndex(prev => {
        const updated = { ...prev };
        projects.filter(p => [1, 2, 3].includes(p.id)).forEach(p => {
          updated[p.id] = (prev[p.id] + 1) % p.images.length;
        });
        return updated;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {projects
        .filter(p => [1, 2, 3].includes(p.id))
        .map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              className={`w-full flex flex-col lg:flex-col xl:flex-row justify-between items-center gap-12 py-12 border-b-2 border-[var(--gray-color)]
                ${isEven ? "xl:flex-row" : "xl:flex-row-reverse"}
              `}
            >
              {/* Project Image */}
              <img
                data-aos="fade-right"
                data-aos-delay="200"
                src={project.images[currentImageIndex[project.id] || 0]}
                alt={`${project.title} Image ${currentImageIndex[project.id] + 1}`}
                className="w-full lg:w-full xl:w-1/2 h-auto max-h-100 object-cover rounded-xl shadow-lg"
              />

              {/* Project Content */}
              <div
                data-aos="fade-left"
                data-aos-delay="200"
                className="text-center lg:text-center xl:text-left w-full lg:w-full xl:w-1/2 mt-6 xl:mt-0 flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-2xl font-bold mb-3 relative inline-block group">
                    <Link 
                      to={`/project/${project.id}`} 
                      state={{ project }}  
                    >
                      {project.title}
                    </Link>
                    <span className="absolute left-0 -bottom-1 w-0 h-1 bg-purple-500 rounded-full transition-all duration-300 group-hover:w-full"></span>
                  </h3>
                  <p className="project-description mb-4">{project.description}</p>
                </div>
                
                <div className="mt-4">
                  <Link to={project.github_Link} target="_blank" rel="noopener noreferrer">
                    <button className="normal-btn">
                      Case Study
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
    </>

  );
};

export default MainProjeact;
