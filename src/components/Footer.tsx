import { IoCallOutline, IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io5';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="glow glow-3"></div>
            <div className="container footer-cta reveal-up">
                <h2>Let's grow your business together!</h2>
                <p>Ready to dominate the digital landscape? Contact The genzz Digital Solutions Agency today.</p>
                <div className="footer-contact">
                    <a href="tel:+918435610586" className="contact-link">
                        <IoCallOutline style={{marginRight: '8px'}} /> +91 8435610586
                    </a>
                    <a href="https://wa.me/918435610586" className="btn btn-primary btn-lg mt-4">
                        Chat on WhatsApp <IoLogoWhatsapp style={{marginLeft: '8px'}} />
                    </a>
                </div>
            </div>
            <div className="container footer-bottom">
                <div className="footer-logo">The <span>genzz</span></div>
                <p>&copy; {new Date().getFullYear()} The genzz Digital Solutions Agency. All rights reserved.</p>
                <div className="social-links">
                    <a href="#"><IoLogoInstagram /></a>
                    <a href="#"><IoLogoFacebook /></a>
                    <a href="#"><IoLogoLinkedin /></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
