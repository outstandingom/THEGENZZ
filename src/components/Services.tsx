import { useReveal } from '../hooks/useReveal';

const services = [
  { icon: "globe-outline", title: "Website Development", desc: "Custom, high-performing websites that convert." },
  { icon: "phone-portrait-outline", title: "Mobile App Development", desc: "Intuitive iOS & Android applications." },
  { icon: "search-outline", title: "SEO", desc: "Rank higher on search engines organically." },
  { icon: "location-outline", title: "Google Business Profile", desc: "Setup & optimization for local dominance." },
  { icon: "share-social-outline", title: "Social Media Management", desc: "Consistent, strategic brand presence." },
  { icon: "megaphone-outline", title: "Social Media Marketing", desc: "Targeted Meta Ads and paid campaigns." },
  { icon: "color-palette-outline", title: "Graphic Designing", desc: "Stunning visuals that captivate your audience." },
  { icon: "images-outline", title: "Poster & Banner Design", desc: "Print and digital collateral that pops." },
  { icon: "prism-outline", title: "Logo & Brand Identity", desc: "Memorable logos and brand systems." },
  { icon: "pie-chart-outline", title: "PPT & Presentations", desc: "Professional decks that win pitches." },
  { icon: "camera-outline", title: "Product Photography", desc: "High-quality shots for e-com & marketing." },
  { icon: "videocam-outline", title: "Video Shooting & Editing", desc: "Cinematic video content production." },
  { icon: "film-outline", title: "Reels & Content Creation", desc: "Viral-worthy short-form content." },
  { icon: "logo-youtube", title: "YouTube Management", desc: "Channel growth, SEO, and scheduling." },
  { icon: "create-outline", title: "Content Writing", desc: "Copywriting that sells and engages." },
  { icon: "mail-outline", title: "Email Marketing", desc: "Campaigns that drive conversions." },
  { icon: "logo-whatsapp", title: "WhatsApp Marketing", desc: "Direct messaging at scale." },
  { icon: "cart-outline", title: "E-commerce Store Setup", desc: "Full online store build and launch." },
  { icon: "cog-outline", title: "Custom Software", desc: "Bespoke business software solutions." },
  { icon: "rocket-outline", title: "Digital Marketing & Leads", desc: "Full-funnel lead generation strategies." },
  { icon: "earth-outline", title: "Domain & Hosting Setup", desc: "Reliable hosting and domain management." },
  { icon: "construct-outline", title: "Website Maintenance", desc: "Ongoing support and updates." },
];

const Services = () => {
  useReveal();

  return (
    <section className="section-padding" id="services">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-subtitle">Our Expertise</div>
          <h2 className="section-title">Everything digital, <span className="text-gradient">under one roof</span></h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className="service-card glass-panel reveal" style={{ transitionDelay: `${(i % 4) * 50}ms` }}>
              <div className="service-icon">
                {/* @ts-ignore */}
                <ion-icon name={s.icon}></ion-icon>
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
