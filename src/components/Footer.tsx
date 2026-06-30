const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-logo">
          <span className="logo-dot"></span>
          the <span className="logo-accent">genzz</span>
        </div>
        <p className="footer-copy">&copy; {new Date().getFullYear()} The genzz Digital Solutions Agency. All rights reserved.</p>
        <div className="footer-contact">
          <a href="tel:+918435610586">📞 +91 8435610586</a>
          <a href="https://wa.me/918435610586" className="whatsapp-btn" target="_blank" rel="noreferrer">
            💬 Chat on WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
