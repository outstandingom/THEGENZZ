import { useReveal } from '../hooks/useReveal';

const Team = () => {
  useReveal();

  return (
    <section className="section-padding" id="team" style={{ background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div className="section-header reveal">
          <div className="section-subtitle">The Crew</div>
          <h2 className="section-title">Founder & <span className="text-gradient">Co-Founder</span></h2>
        </div>

        <div className="team-grid">
          <div className="team-card glass-panel reveal">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=540&fit=crop&crop=faces&q=80" alt="Founder" />
            <h3 className="team-name">Founder</h3>
            <p className="team-role">The genzz · CEO</p>
          </div>
          
          <div className="team-card glass-panel reveal" style={{ transitionDelay: '100ms' }}>
            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=540&fit=crop&crop=faces&q=80" alt="Co-Founder" />
            <h3 className="team-name">Co-Founder</h3>
            <p className="team-role">The genzz · CTO</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
