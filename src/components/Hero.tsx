import { IoArrowForwardOutline } from 'react-icons/io5';

const Hero = () => {
    return (
        <section id="home" className="hero section">
            <div className="glow glow-1"></div>
            <div className="glow glow-2"></div>
            <div className="container hero-container grid-2">
                <div className="hero-content reveal-left">
                    <div className="badge">🚀 Your Complete Digital Growth Partner</div>
                    <h1 className="hero-title">Elevate Your Brand with <span className="text-gradient">The genzz</span></h1>
                    <p className="hero-desc">Looking to grow your business online? We provide end-to-end digital solutions to help your brand stand out, attract customers, and increase sales.</p>
                    <div className="hero-actions">
                        <a href="#services" className="btn btn-primary btn-lg">Explore Services <IoArrowForwardOutline style={{marginLeft: '8px'}} /></a>
                        <a href="https://wa.me/918435610586" className="btn btn-outline btn-lg">Contact Us</a>
                    </div>
                </div>
                <div className="hero-visual reveal-right">
                    <div className="glass-card visual-card">
                        <div className="card-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="card-body">
                            <div className="mockup-chart">
                                <div className="bar bar-1"></div>
                                <div className="bar bar-2"></div>
                                <div className="bar bar-3"></div>
                                <div className="bar bar-4"></div>
                            </div>
                            <h3>Digital Growth</h3>
                            <p>Scaling businesses effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
