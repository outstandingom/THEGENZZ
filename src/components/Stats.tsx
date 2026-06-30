import { useReveal } from '../hooks/useReveal';

const Stats = () => {
  useReveal();

  return (
    <section className="section-padding" id="stats">
      <div className="container">
        <div className="glass-panel reveal" style={{ padding: '60px 20px' }}>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-num">60+</div>
              <div className="stat-label">Projects Shipped</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">22+</div>
              <div className="stat-label">Services Offered</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">50+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
