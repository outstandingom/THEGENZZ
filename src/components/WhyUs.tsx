import { useEffect } from 'react';

declare const gsap: any;

const WhyUs = () => {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".why-inner > *", {
      opacity: 0, y: 40, duration: 0.9, stagger: 0.15, ease: "power3.out",
      scrollTrigger: { trigger: ".why-section", start: "top 75%" }
    });
  }, []);

  const reasons = [
    { title: "Professional & Creative Team", desc: "Experts dedicated to delivering top-notch digital solutions." },
    { title: "Affordable Pricing", desc: "Premium quality services that fit your budget perfectly." },
    { title: "Fast Delivery", desc: "We value your time and ensure prompt project completion." },
    { title: "Customized Solutions", desc: "Strategies tailored specifically to your business goals." },
    { title: "Complete Business Growth Support", desc: "We are your partners in scaling your brand successfully." },
  ];

  return (
    <section className="why-section" id="why-us">
      <div className="why-inner">
        <div>
          <div className="eyebrow">Why us · Five reasons</div>
          <h2 className="section-title">Why businesses<br />choose <em>The genzz</em>.</h2>
          <p style={{ fontSize: '15px', lineHeight: 1.55, color: 'var(--ink-soft)', maxWidth: 420, marginTop: 16 }}>
            Whether you're a Startup, Business Owner, Institute, NGO, or Personal Brand — we help you build a powerful online presence and reach more customers.
          </p>
        </div>
        <ul className="why-list">
          {reasons.map((r, i) => (
            <li key={i}>
              <div className="why-check">✓</div>
              <div>
                <h4>{r.title}</h4>
                <p>{r.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyUs;
