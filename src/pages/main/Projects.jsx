import React from "react";
import { projects } from "../../data/data";
import "../../styles/projects.scss";
import "../../styles/index.scss";
import Button from "../../components/Button";

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      {projects.map((project) => (
        <div
          key={project.id}
          className="card"
          style={{
            backgroundImage: project.backgroundImage,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
          }}
        >
          <div className="card-content">
            <h2 className="card-title">{project.title}</h2>
            <Button onClick={() => window.open(project.link, "_blank")}>
              Ir al proyecto
            </Button>
            <div className="card-text">
              {project.tech.split(", ").map((t) => (
                <div key={t}>#{t}</div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
