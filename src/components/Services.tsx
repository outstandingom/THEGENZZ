import { useEffect } from 'react';

declare const gsap: any;

const services = [
  { icon: "🌐", title: "Website Development", desc: "Custom, high-performing websites that convert." },
  { icon: "📱", title: "Mobile App Development", desc: "Intuitive iOS & Android applications." },
  { icon: "🔍", title: "SEO", desc: "Rank higher on search engines organically." },
  { icon: "📍", title: "Google Business Profile", desc: "Setup & optimization for local dominance." },
  { icon: "📲", title: "Social Media Management", desc: "Consistent, strategic brand presence." },
  { icon: "📢", title: "Social Media Marketing", desc: "Targeted Meta Ads and paid campaigns." },
  { icon: "🎨", title: "Graphic Designing", desc: "Stunning visuals that captivate your audience." },
  { icon: "🖼️", title: "Poster & Banner Design", desc: "Print and digital collateral that pops." },
  { icon: "🏷️", title: "Logo & Brand Identity", desc: "Memorable logos and brand systems." },
  { icon: "📊", title: "PPT & Presentations", desc: "Professional decks that win pitches." },
  { icon: "📸", title: "Product Photography", desc: "High-quality shots for e-com & marketing." },
  { icon: "🎥", title: "Video Shooting & Editing", desc: "Cinematic video content production." },
  { icon: "🎬", title: "Reels & Content Creation", desc: "Viral-worthy short-form content." },
  { icon: "▶️", title: "YouTube Management", desc: "Channel growth, SEO, and scheduling." },
  { icon: "✍️", title: "Content Writing", desc: "Copywriting that sells and engages." },
  { icon: "📧", title: "Email Marketing", desc: "Campaigns that drive conversions." },
  { icon: "💬", title: "WhatsApp Marketing", desc: "Direct messaging at scale." },
  { icon: "🛒", title: "E-commerce Store Setup", desc: "Full online store build and launch." },
  { icon: "⚙️", title: "Custom Software", desc: "Bespoke business software solutions." },
  { icon: "🚀", title: "Digital Marketing & Leads", desc: "Full-funnel lead generation strategies." },
  { icon: "🌍", title: "Domain & Hosting Setup", desc: "Reliable hosting and domain management." },
  { icon: "🛠️", title: "Website Maintenance", desc: "Ongoing support and updates." },
];

const Services = () => {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".services-head .eyebrow, .services-head .section-title, .services-head p", {
      opacity: 0, y: 30, duration: 0.9, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ".services-head", start: "top 80%" }
    });

    gsap.from(".s-card", {
      opacity: 0, y: 50, scale: 0.95,
      duration: 0.7, stagger: 0.04, ease: "power3.out",
      scrollTrigger: { trigger: ".services-grid", start: "top 85%" }
    });
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-head">
        <div>
          <div className="eyebrow">What we do · 22 services</div>
          <h2 className="section-title">Everything digital,<br />under <em>one roof</em>.</h2>
        </div>
        <p>From your first logo to a full-scale digital campaign — we handle every pixel, every line of code, every strategy.</p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div className="s-card" key={i}>
            <span className="s-icon">{s.icon}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
