import { 
    IoGlobeOutline, 
    IoPhonePortraitOutline, 
    IoSearchOutline, 
    IoLocationOutline, 
    IoShareSocialOutline, 
    IoColorPaletteOutline, 
    IoVideocamOutline, 
    IoCartOutline 
} from 'react-icons/io5';

const Services = () => {
    return (
        <section id="services" className="services section bg-darker">
            <div className="container">
                <div className="section-header reveal-up">
                    <h2>Our <span className="text-gradient">Services</span></h2>
                    <p>Comprehensive digital solutions tailored for your business needs.</p>
                </div>
                <div className="services-grid">
                    <div className="service-card reveal-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                        <div className="icon-box"><IoGlobeOutline /></div>
                        <h3>Website Development</h3>
                        <p>Custom, high-performing websites to establish your online presence.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                        <div className="icon-box"><IoPhonePortraitOutline /></div>
                        <h3>Mobile App Dev</h3>
                        <p>Intuitive and powerful mobile applications for iOS and Android.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                        <div className="icon-box"><IoSearchOutline /></div>
                        <h3>SEO</h3>
                        <p>Rank higher on search engines and attract organic traffic.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.4s' } as React.CSSProperties}>
                        <div className="icon-box"><IoLocationOutline /></div>
                        <h3>Google Business Profile</h3>
                        <p>Setup & optimization for local search dominance.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.1s' } as React.CSSProperties}>
                        <div className="icon-box"><IoShareSocialOutline /></div>
                        <h3>Social Media</h3>
                        <p>Management, marketing & targeted Meta ads to reach your audience.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.2s' } as React.CSSProperties}>
                        <div className="icon-box"><IoColorPaletteOutline /></div>
                        <h3>Graphic Design</h3>
                        <p>Logos, posters, banners, and complete brand identity design.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.3s' } as React.CSSProperties}>
                        <div className="icon-box"><IoVideocamOutline /></div>
                        <h3>Photo & Video</h3>
                        <p>Professional product photography, shooting, editing, and Reels.</p>
                    </div>
                    <div className="service-card reveal-up" style={{ '--delay': '0.4s' } as React.CSSProperties}>
                        <div className="icon-box"><IoCartOutline /></div>
                        <h3>E-commerce & Custom</h3>
                        <p>Store setups, custom software, email & WhatsApp marketing.</p>
                    </div>
                </div>
                
                <div className="services-list-compact reveal-up">
                    <p><strong>Also Offering:</strong> PPT & Presentation Design, YouTube Channel Management, Content Writing & Copywriting, Domain & Hosting Setup, Website Maintenance & Support.</p>
                </div>
            </div>
        </section>
    );
};

export default Services;
