import React from "react";

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
  return (
    <section className="projects">
      <h2>Key Projects</h2>
      <div style={{display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1rem"}}>
        {projects.map(p => (
          <div key={p.title} className="project-card" style={{border: "1px solid #ddd", padding: "1rem", borderRadius: 8}}>
            <h3>{p.title}</h3>
            <p style={{margin: "6px 0"}}>{p.description}</p>
            <p style={{margin: "6px 0"}}><strong>Tech:</strong> {p.technologies.join(", ")}</p>
            <p style={{margin: "6px 0"}}><strong>Outcome:</strong> {p.outcome}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;