const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <a href="#" className="nav-logo">the genzz</a>
        
        <p className="footer-text">
          &copy; {new Date().getFullYear()} The genzz Digital Solutions Agency. All rights reserved.
        </p>
        
        <div className="footer-socials">
          <a href="https://wa.me/918435610586" target="_blank" rel="noreferrer" title="WhatsApp">
            {/* @ts-ignore */}
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a href="tel:+918435610586" title="Call Us">
            {/* @ts-ignore */}
            <ion-icon name="call-outline"></ion-icon>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
