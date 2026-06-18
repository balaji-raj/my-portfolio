// eslint-disable-next-line
function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div className="brand" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/profile.jpg" alt="Balaji Rajendran" className="avatar" />
          <div>
            <div className="name">Balaji Rajendran</div>
            <div className="tagline">Technical Manager • Cloud & Full Stack Specialist</div>
          </div>
        </div>

        <nav className="main-nav" aria-label="Primary">
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
