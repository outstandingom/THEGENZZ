import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
        if (!mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    };

    const closeMenu = () => {
        setMobileMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
        e.preventDefault();
        closeMenu();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = document.querySelector('.navbar')?.clientHeight || 0;
            const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container nav-container">
                    <a href="#" className="logo" onClick={(e) => handleNavClick(e, '#home')}>The <span>genzz</span></a>
                    <nav className="nav-links">
                        <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                        <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
                        <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                        <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')}>Why Us</a>
                    </nav>
                    <a href="https://wa.me/918435610586" className="btn btn-primary nav-cta">Let's Talk</a>
                    <button className="mobile-menu-btn" aria-label="Toggle Menu" onClick={toggleMenu}>
                        <IoMenuOutline />
                    </button>
                </div>
            </header>

            <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`}>
                <button className="close-menu-btn" aria-label="Close Menu" onClick={toggleMenu}>
                    <IoCloseOutline />
                </button>
                <nav className="mobile-links">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>Home</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, '#services')}>Services</a>
                    <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')}>Projects</a>
                    <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')}>Why Us</a>
                    <a href="https://wa.me/918435610586" className="btn btn-primary">Let's Talk</a>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
