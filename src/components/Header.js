import React from "react";

function Header() {
  return (
    <header className="header">
      <div className="header-inner" style={{display: "flex", alignItems: "center", gap: "1rem"}}>
        <img
          src="/profile.jpg"
          alt="Balaji Rajendran"
          style={{width: 120, height: 120, objectFit: "cover", borderRadius: "50%"}}
        />
        <div>
          <h1>Balaji Rajendran</h1>
          <h2 style={{marginTop: 4}}>Technical Manager • Cloud & Frontend Specialist</h2>
          <p style={{margin: "8px 0"}}>
            Technical Manager with 14 years of experience in frontend, backend, cloud services, and DevOps. <br></br>Proven expertise in React, Angular, Node.js, Java and cloud integrations (AWS, Azure). <br></br>
            Skilled in team leadership, stakeholder management, and project delivery. Successfully modernized enterprise portals, optimized APIs, and implemented scalable authentication flows, improving performance, accessibility, and user experience. <br></br>
            Strong mentor with a track record of coaching teams to achieve organizational goals.
          </p>
          <p style={{margin: 0}}>
            <a href="mailto:balaji7863@gmail.com">balaji7863@gmail.com</a> •
            <a href="tel:+919790266780" style={{marginLeft: 6}}> +91 97902 66780</a> • Chennai, India
          </p>
          <p style={{marginTop: 8}}>
            <a href="https://www.linkedin.com/in/balaji-rajendran-5684b961" target="_blank" rel="noreferrer">LinkedIn</a>
            {" • "}
            <a href="https://github.com/balaji-raj" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;