import React, { useRef } from "react";

const projects = [
  {
    title: "Broadcom AAI",
    description: "Developed UI components, API endpoints, and CI/CD pipelines.",
    technologies: ["React", "Node.js", "Azure DevOps"],
    outcome: "Improved deployment velocity and UI consistency."
  },
  {
    title: "Verizon Portal",
    description: "Built responsive UI and created microservices endpoints.",
    technologies: ["Angular", "Spring Boot", "Docker"],
    outcome: "Delivered a scalable user portal with mobile-first experience."
  },
  {
    title: "DnB NG4",
    description: "Migrated legacy Angular app to modern stack and optimized performance.",
    technologies: ["Angular", "TypeScript", "Performance Tuning"],
    outcome: "Reduced load times by 40% and improved user engagement."
  },
  {
    title: "C&W Global Dashboard",
    description: "Designed interactive dashboards for KPIs and reporting.",
    technologies: ["React", "Tableau", "QlikView"],
    outcome: "Enabled better executive decision-making with near real-time KPIs."
  },
  {
    title: "911-NET",
    description: "Enhanced emergency call workflows to improve dispatcher efficiency.",
    technologies: ["React", "REST APIs"],
    outcome: "Streamlined flows and reduced average handling time."
  }
];

function Projects() {
  const rowRef = useRef(null);

  const scrollBy = (delta) => {
    if (rowRef.current) {
      rowRef.current.scrollBy({ left: delta, behavior: "smooth" });
    }
  };

  return (
    <section className="projects container" id="projects" aria-label="projects">
      <h2>Key Projects</h2>

      <div className="cards-wrapper">
        <div className="row-controls" aria-hidden="false">
          <button onClick={() => scrollBy(-360)} aria-label="Scroll projects left">‹</button>
          <button onClick={() => scrollBy(360)} aria-label="Scroll projects right">›</button>
        </div>

        <div className="cards-row" ref={rowRef}>
          {projects.map(p => (
            <div key={p.title} className="card project-card" tabIndex="0">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <p className="tech"><strong>Tech:</strong> {p.technologies.join(", ")}</p>
              <p><strong>Outcome:</strong> {p.outcome}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
