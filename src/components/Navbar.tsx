import { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#" className="nav-logo">
          the genzz
        </a>
        
        <ul className="nav-links">
          <li><a href="#projects">Work</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#stats">Stats</a></li>
        </ul>

        <a href="https://wa.me/918435610586" className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>
          Let's Talk
        </a>

        <button className="mobile-menu-btn">
          {/* @ts-ignore */}
          <ion-icon name="menu-outline"></ion-icon>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
