// eslint-disable-next-line
import React, { useState } from "react";

const experiences = [
  {
    role: "Technical Manager",
    company: "HCL Technologies",
    period: "Jan 2022 – Present",
    bullets: [
      "Led modernization of support portal by migrating legacy Angular to modern frameworks.",
      "Integrated SAP UI5 with Fiori and optimized backend APIs, improving ticket resolution speed by 30%.",
      "Directed cross-functional teams and maintained product roadmaps.",
      "Implemented performance improvements: code-splitting, caching, and resilient endpoints."
    ]
  },
  {
    role: "Senior Associate",
    company: "Cognizant Technology Solutions",
    period: "Aug 2019 – Jan 2022",
    bullets: [
      "Developed UI components using Angular and React for enterprise applications.",
      "Contributed to unit testing, performance tuning, and deployment automation."
    ]
  },
  {
    role: "Lead Engineer",
    company: "Prodapt Solutions",
    period: "Nov 2015 – Aug 2019",
    bullets: [
      "Designed dashboards with Tableau and QlikView for telecom clients.",
      "Led UI development focusing on responsiveness and accessibility."
    ]
  },
  {
    role: "Associate Software Developer",
    company: "Banca Sella",
    period: "Jun 2015 – Sep 2015",
    bullets: [
      "Built UI components with Angular and JavaScript; integrated microservices backends."
    ]
  },
  {
    role: "Software Developer",
    company: "SPI Technologies",
    period: "Feb 2014 – May 2015",
    bullets: [
      "Developed applications using Spring, Angular 1.x, HTML5, and jQuery."
    ]
  },
  {
    role: "Java & HTML5 Programmer",
    company: "Azimuth India",
    period: "Sep 2012 – Jan 2014",
    bullets: [
      "Built web applications using Java, HTML5, and JavaScript."
    ]
  }
];

function Experience() {
  const [openIndex, setOpenIndex] = useState(0); // first open by default

  function toggleIndex(i) {
    setOpenIndex(prev => (prev === i ? -1 : i));
  }

  return (
    <section className="experience container" id="experience" aria-label="experience">
      <h2>Experience</h2>
      <div className="accordion" role="tablist">
        {experiences.map((e, idx) => (
          <div className="accordion-item" key={e.role + idx}>
            <div className="accordion-header">
              <button
                aria-expanded={openIndex === idx}
                aria-controls={`panel-${idx}`}
                id={`header-${idx}`}
                onClick={() => toggleIndex(idx)}
                >
                <div>
                  <strong>{e.role}</strong> — <span style={{color:"#6b7280"}}>{e.company}</span>
                </div>
                <div style={{fontSize: "0.9rem", color:"#6b7280"}}>{e.period}</div>
              </button>
            </div>
            {openIndex === idx && (
              <div
                id={`panel-${idx}`}
                role="region"
                aria-labelledby={`header-${idx}`}
                className="accordion-panel"
              >
                <ul>
                  {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
