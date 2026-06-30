import { useReveal } from '../hooks/useReveal';

const Hero = () => {
  useReveal();

  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content reveal">
        <div className="hero-badge">
          {/* @ts-ignore */}
          <ion-icon name="rocket-outline"></ion-icon>
          Digital Solutions Agency
        </div>
        
        <h1 className="hero-title">
          Your Complete Digital <br />
          Growth Partner
        </h1>
        
        <p className="hero-desc">
          Looking to grow your business online? We provide end-to-end digital solutions to help your brand stand out, attract customers, and increase sales.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
          <a href="#projects" className="btn-primary">
            View Our Work
            {/* @ts-ignore */}
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </a>
          <a href="#services" className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', boxShadow: 'none', border: '1px solid rgba(255,255,255,0.1)' }}>
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
