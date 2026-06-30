import { useReveal } from '../hooks/useReveal';

const projects = [
  {
    name: "GrowHaz",
    url: "https://growhaz.com/",
    display: "growhaz.com",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop&q=80",
  },
  {
    name: "Jaiswal Restaurant",
    url: "https://jaiswalrestaurant.com/",
    display: "jaiswalrestaurant.com",
    img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=450&fit=crop&q=80",
  },
  {
    name: "Khandelwal Borewells",
    url: "https://khandelwalborewells.in/",
    display: "khandelwalborewells.in",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=450&fit=crop&q=80",
  },
  {
    name: "Prayas Samaj Sevi Sanstha",
    url: "https://prayassamajsevisanstha.org/",
    display: "prayassamajsevisanstha.org",
    img: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=450&fit=crop&q=80",
  },
  {
    name: "Dinesh Jagwani Academy",
    url: "https://www.dineshjagwanicinematographyacademy.com/",
    display: "dineshjagwanicinematographyacademy.com",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=450&fit=crop&q=80",
  },
];

const Projects = () => {
  useReveal();

  return (
    <section className="projects-section section-padding" id="projects">
      <div className="container">
        <div className="section-header reveal">
          <div className="section-subtitle">Our Portfolio</div>
          <h2 className="section-title">Projects that <span className="text-gradient">speak for us</span></h2>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <a key={i} href={p.url} target="_blank" rel="noreferrer" className="project-card reveal" style={{ transitionDelay: `${i * 100}ms` }}>
              <img src={p.img} alt={p.name} />
              <div className="project-overlay">
                <h3 className="project-title">{p.name}</h3>
                <span className="project-link">
                  {p.display}
                  {/* @ts-ignore */}
                  <ion-icon name="open-outline"></ion-icon>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
