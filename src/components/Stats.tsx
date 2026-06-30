import { useEffect } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const Stats = () => {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.from(".stats-inner", {
      opacity: 0, y: 60, scale: 0.97,
      duration: 1.2, ease: "power3.out",
      scrollTrigger: { trigger: ".stats", start: "top 80%" }
    });

    ScrollTrigger.create({
      trigger: ".stats",
      start: "top 75%",
      onEnter: () => {
        document.querySelectorAll<HTMLElement>(".stat-block .num").forEach((el) => {
          const target = parseFloat(el.dataset.count || "0");
          const span = el.querySelector("span");
          if (!span) return;
          gsap.to({ v: 0 }, {
            v: target, duration: 2, ease: "power2.out",
            onUpdate: function (this: any) {
              span.textContent = Math.floor(this.targets()[0].v).toLocaleString();
            }
          });
        });
      },
      once: true
    });
  }, []);

  return (
    <section className="stats" id="stats">
      <div className="stats-inner">
        <h3>Two founders.<br />One <em>tight ship</em>.</h3>
        <div className="stat-block">
          <div className="num" data-count="60"><span>0</span><small>+</small></div>
          <div className="lbl">Projects shipped</div>
        </div>
        <div className="stat-block">
          <div className="num" data-count="22"><span>0</span><small>+</small></div>
          <div className="lbl">Services offered</div>
        </div>
        <div className="stat-block">
          <div className="num" data-count="50"><span>0</span><small>+</small></div>
          <div className="lbl">Happy clients</div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
