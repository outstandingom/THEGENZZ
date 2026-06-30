import { useEffect } from 'react';

declare const gsap: any;

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
    display: "dineshjagwani...",
    img: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&h=450&fit=crop&q=80",
  },
];

const Projects = () => {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".projects-head .eyebrow, .projects-head .section-title, .projects-head p", {
      opacity: 0, y: 30, duration: 0.9, stagger: 0.1, ease: "power3.out",
      scrollTrigger: { trigger: ".projects-head", start: "top 80%" }
    });

    gsap.from(".p-card", {
      opacity: 0, y: 80, scale: 0.9,
      rotation: (_i: number) => (_i % 2 === 0 ? -3 : 3),
      duration: 1, stagger: 0.1, ease: "back.out(1.3)",
      scrollTrigger: { trigger: ".projects-grid", start: "top 80%" }
    });
  }, []);

  return (
    <section className="projects-section" id="projects">
      <div className="projects-head">
        <div>
          <div className="eyebrow">Our work · Five shipped</div>
          <h2 className="section-title">Projects that<br /><em>speak for us</em>.</h2>
        </div>
        <p>Real businesses, real results. Each project below was designed and built end-to-end by The genzz team.</p>
      </div>

      <div className="projects-grid">
        {projects.map((p, i) => (
          <a className="p-card" key={i} href={p.url} target="_blank" rel="noreferrer">
            <img src={p.img} alt={p.name} />
            <div className="p-meta">
              <span className="p-name">{p.name}</span>
              <span className="p-link">
                {p.display}
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
