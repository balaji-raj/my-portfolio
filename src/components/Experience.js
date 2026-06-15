import React from "react";

function Experience() {
  return (
    <section className="experience">
      <h2>Experience</h2>

      <details className="role" open>
        <summary>
          <strong>Technical Manager</strong> — HCL Technologies <span style={{marginLeft: 8}}>Jan 2022 – Present</span>
        </summary>
        <ul>
          <li>Led modernization of support portal by migrating legacy Angular to Angular 14 and React.</li>
          <li>Integrated SAP UI5 with Fiori and optimized Java APIs, improving ticket resolution speed by 30%.</li>
          <li>Directed cross-functional teams and ownership of product roadmaps.</li>
          <li>Implemented performance improvements: code-splitting, caching, resilient endpoints.</li>
        </ul>
      </details>

      <details className="role">
        <summary>
          <strong>Senior Associate</strong> — Cognizant Technology Solutions <span style={{marginLeft: 8}}>Aug 2019 – Jan 2022</span>
        </summary>
        <ul>
          <li>Developed UI components using Angular and React for enterprise applications.</li>
          <li>Collaborated on unit testing, performance tuning, and deployment automation.</li>
        </ul>
      </details>

      <details className="role">
        <summary>
          <strong>Lead Engineer</strong> — Prodapt Solutions <span style={{marginLeft: 8}}>Nov 2015 – Aug 2019</span>
        </summary>
        <ul>
          <li>Designed dashboards with Tableau and QlikView for telecom clients.</li>
          <li>Led UI development projects focusing on responsiveness and accessibility.</li>
        </ul>
      </details>

      <details className="role">
        <summary>
          <strong>Associate Software Developer</strong> — Banca Sella <span style={{marginLeft: 8}}>Jun 2015 – Sep 2015</span>
        </summary>
        <ul>
          <li>Built UI components with Angular and JavaScript; integrated microservices backends.</li>
        </ul>
      </details>

      <details className="role">
        <summary>
          <strong>Software Developer</strong> — SPI Technologies <span style={{marginLeft: 8}}>Feb 2014 – May 2015</span>
        </summary>
        <ul>
          <li>Developed applications using Spring, Angular 1.x, HTML5, and jQuery.</li>
        </ul>
      </details>

      <details className="role">
        <summary>
          <strong>Java & HTML5 Programmer</strong> — Azimuth India <span style={{marginLeft: 8}}>Sep 2012 – Jan 2014</span>
        </summary>
        <ul>
          <li>Built web applications using Java, HTML5, and JavaScript.</li>
        </ul>
      </details>
    </section>
  );
}

export default Experience;