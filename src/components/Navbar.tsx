const ArrowIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="7" y1="17" x2="17" y2="7" />
    <polyline points="7 7 17 7 17 17" />
  </svg>
);

const Navbar = () => {
  return (
    <nav className="nav" id="nav">
      <div className="logo">
        <span className="logo-dot"></span>
        the <span className="logo-accent">genzz</span>
      </div>
      <ul className="nav-links">
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Work</a></li>
        <li><a href="#team">Team</a></li>
        <li><a href="#stats">About</a></li>
      </ul>
      <a href="https://wa.me/918435610586" className="nav-cta-btn" target="_blank" rel="noreferrer">
        Start a project
        <ArrowIcon />
      </a>
    </nav>
  );
};

export default Navbar;
