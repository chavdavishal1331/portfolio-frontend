import { useEffect, useState } from "react";
import "./Projects.css";
import API from "../../api/axios";
import { getImageUrl } from "../../utils/imageUrl";

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    API.get("/projects")
      .then(({ data }) => setProjects(data || []))
      .catch(() => {});
  }, []);

  if (projects.length === 0) return null;

  return (
    <section id="projects" className="projects">
      <div className="projects-title">
        <span>My Work</span>
        <h2>Projects</h2>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project._id}>
            {project.image && (
              <img
                src={getImageUrl(project.image)}
                alt={project.title}
                className="project-image"
              />
            )}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">{project.tech}</div>
              <div className="project-buttons">
                {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
