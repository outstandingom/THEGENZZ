import { useReveal } from '../hooks/useReveal';

const reasons = [
  { icon: "star-outline", title: "Professional & Creative Team", desc: "Experts dedicated to delivering top-notch digital solutions." },
  { icon: "wallet-outline", title: "Affordable Pricing", desc: "Premium quality services that fit your budget perfectly." },
  { icon: "flash-outline", title: "Fast Delivery", desc: "We value your time and ensure prompt project completion." },
  { icon: "options-outline", title: "Customized Solutions", desc: "Strategies tailored specifically to your business goals." },
  { icon: "trending-up-outline", title: "Complete Business Growth", desc: "We are your partners in scaling your brand successfully." },
];

const WhyUs = () => {
  useReveal();

  return (
    <section className="section-padding" id="why-us">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-subtitle">Why Choose Us</div>
          <h2 className="section-title">Why businesses choose <span className="text-gradient">The genzz</span></h2>
        </div>

        <div className="features-grid">
          {reasons.map((r, i) => (
            <div key={i} className="feature-item reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="feature-icon">
                {/* @ts-ignore */}
                <ion-icon name={r.icon}></ion-icon>
              </div>
              <div className="feature-content">
                <h3>{r.title}</h3>
                <p>{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
