import { useEffect } from 'react';

declare const gsap: any;

const Team = () => {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".team-head .eyebrow, .team-head .section-title, .team-head p", {
      opacity: 0, y: 30, duration: 0.9, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ".team-head", start: "top 80%" }
    });

    gsap.from(".t-card", {
      opacity: 0, y: 80, scale: 0.9,
      rotation: (_i: number) => (_i % 2 === 0 ? -3 : 3),
      duration: 1, stagger: 0.12, ease: "back.out(1.3)",
      scrollTrigger: { trigger: ".team-grid", start: "top 80%" }
    });
  }, []);

  return (
    <section className="team-section" id="team">
      <div className="team-head">
        <div>
          <div className="eyebrow">The Crew · Two strong</div>
          <h2 className="section-title">Founder &<br /><em>Co-Founder</em>.</h2>
        </div>
        <p>Every project we ship has our direct attention. No middle layer, no handoffs — just the founders doing the work they love.</p>
      </div>

      <div className="team-grid">
        <div className="t-card">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=540&fit=crop&crop=faces&q=80"
            alt="Founder"
          />
          <div className="t-meta">
            <div className="nm">Founder</div>
            <div className="rl">The genzz · CEO</div>
          </div>
        </div>
        <div className="t-card">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=540&fit=crop&crop=faces&q=80"
            alt="Co-Founder"
          />
          <div className="t-meta">
            <div className="nm">Co-Founder</div>
            <div className="rl">The genzz · CTO</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
