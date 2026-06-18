import React from "react";

function Contact() {
  return (
    <section className="contact container" id="contact" aria-labelledby="contact-heading">
      <h2 id="contact-heading">Contact</h2>

      <div className="contact-grid">
        <div className="contact-info" aria-label="Contact information">
          <h3>Get in touch</h3>
          <p><strong>Email:</strong> <a href="mailto:balaji7863@gmail.com">balaji7863@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+919790266780">+91 97902 66780</a></p>
          <p><strong>Location:</strong> Chennai, India</p>
          <p>
            <a href="https://www.linkedin.com/in/balaji-rajendran-5684b961" target="_blank" rel="noreferrer">LinkedIn</a>
            {" • "}
            <a href="https://github.com/balaji-raj" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
