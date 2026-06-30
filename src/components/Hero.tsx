import { useEffect } from 'react';

declare const gsap: any;
declare const ScrollTrigger: any;

const cardImages = [
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop&crop=faces&q=80",
  "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=600&fit=crop&crop=faces&q=80",
];

const cardData = [
  { rot: -9, depth: 14 },
  { rot: -5, depth: 10 },
  { rot: -2, depth: 8 },
  { rot: 3, depth: 12 },
  { rot: 0, depth: 6 },
  { rot: 4, depth: 11 },
  { rot: 7, depth: 9 },
  { rot: -4, depth: 13 },
];

const Hero = () => {
  useEffect(() => {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Initial states
    gsap.set("#nav", { opacity: 0, y: -20 });
    gsap.set(".small-team .word > span", { y: "105%" });
    gsap.set(".big-results .letter", { y: 80, opacity: 0 });
    gsap.set("#subline", { opacity: 0, y: 20 });

    // Apply card initial states
    document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
      const rot = parseFloat(card.dataset.rot || "0");
      gsap.set(card, { y: -800, rotation: rot + 25, opacity: 0, scale: 0.7 });
    });

    // Intro timeline
    const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
    intro
      .to("#nav", { opacity: 1, y: 0, duration: 0.8 }, 0.1)
      .to(".small-team .word > span", {
        y: "0%", duration: 0.9, stagger: 0.08, ease: "power3.out"
      }, 0.3)
      .to(".big-results .letter", {
        y: 0, opacity: 1, duration: 0.9, stagger: 0.05, ease: "back.out(1.6)"
      }, 0.55)
      .to(".card", {
        y: 0, opacity: 1, scale: 1,
        rotation: (_i: number, el: HTMLElement) => parseFloat(el.dataset.rot || "0"),
        duration: 1.1,
        stagger: { each: 0.08, from: "center" },
        ease: "back.out(1.4)"
      }, 0.8)
      .to("#subline", { opacity: 1, y: 0, duration: 0.8 }, 1.6);

    // Continuous float on cards
    document.querySelectorAll<HTMLElement>(".card").forEach((card, i) => {
      const rot = parseFloat(card.dataset.rot || "0");
      gsap.to(card, {
        y: `+=${8 + (i % 3) * 5}`,
        rotation: rot + (i % 2 === 0 ? 1.5 : -1.5),
        duration: 3 + (i % 4) * 0.5,
        delay: 1.8 + i * 0.1,
        ease: "sine.inOut", yoyo: true, repeat: -1
      });
    });

    // Mouse parallax on cards
    const heroEl = document.querySelector(".hero") as HTMLElement;
    let mx = 0, my = 0, tx = 0, ty = 0;

    const onMove = (e: MouseEvent) => {
      const r = heroEl.getBoundingClientRect();
      mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    const onLeave = () => { mx = 0; my = 0; };

    heroEl.addEventListener("mousemove", onMove);
    heroEl.addEventListener("mouseleave", onLeave);

    let animId: number;
    function parallax() {
      tx += (mx - tx) * 0.05;
      ty += (my - ty) * 0.05;
      document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
        const d = parseFloat(card.dataset.depth || "8");
        card.style.translate = `${tx * d}px ${ty * d * 0.5}px`;
      });
      animId = requestAnimationFrame(parallax);
    }
    parallax();

    // Card hover 3D lift
    document.querySelectorAll<HTMLElement>(".card").forEach((card) => {
      const onCardMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, {
          rotateX: -py * 16, rotateY: px * 16,
          scale: 1.12, zIndex: 20,
          duration: 0.4, ease: "power2.out",
          transformPerspective: 700, overwrite: "auto"
        });
      };
      const onCardLeave = () => {
        gsap.to(card, {
          rotateX: 0, rotateY: 0, scale: 1,
          duration: 0.8, ease: "elastic.out(1, 0.6)", overwrite: "auto"
        });
      };
      card.addEventListener("mousemove", onCardMove);
      card.addEventListener("mouseleave", onCardLeave);
    });

    // Scroll: Cards fan out, "big results" scales
    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: 0.8,
      onUpdate: (self: any) => {
        const p = self.progress;
        gsap.set(".big-results", { scale: 1 + 0.15 * p, opacity: 1 - 0.4 * p });
        gsap.set(".small-team", { y: -60 * p, opacity: 1 - p * 1.5 });
        const moves = [
          { x: -260, y: -40, rot: -25 },
          { x: -200, y: 20, rot: -18 },
          { x: -120, y: 80, rot: -10 },
          { x: -40, y: 120, rot: -4 },
          { x: 40, y: 120, rot: 4 },
          { x: 120, y: 80, rot: 12 },
          { x: 200, y: 20, rot: 22 },
          { x: 260, y: -40, rot: 28 }
        ];
        document.querySelectorAll<HTMLElement>(".card").forEach((card, i) => {
          const m = moves[i];
          const rest = parseFloat(card.dataset.rot || "0");
          gsap.set(card, { x: m.x * p, y: m.y * p, rotation: rest + m.rot * p });
        });
        gsap.set("#subline", { opacity: 1 - p * 2 });
      }
    });

    // Big results hover
    const bigWrap = document.querySelector(".big-results-wrap");
    const onEnter = () => {
      gsap.to(".big-results .letter", { y: -8, duration: 0.5, stagger: 0.03, ease: "back.out(1.6)" });
    };
    const onLeaveBig = () => {
      gsap.to(".big-results .letter", { y: 0, duration: 0.6, stagger: 0.03, ease: "elastic.out(1, 0.6)" });
    };
    bigWrap?.addEventListener("mouseenter", onEnter);
    bigWrap?.addEventListener("mouseleave", onLeaveBig);

    return () => {
      heroEl.removeEventListener("mousemove", onMove);
      heroEl.removeEventListener("mouseleave", onLeave);
      bigWrap?.removeEventListener("mouseenter", onEnter);
      bigWrap?.removeEventListener("mouseleave", onLeaveBig);
      cancelAnimationFrame(animId);
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    };
  }, []);

  const bigResultsLetters = "big results".split("").map((char, i) => (
    <span className="letter" key={i}>{char === " " ? "\u00A0" : char}</span>
  ));

  return (
    <section className="hero">
      <h1 className="small-team" id="smallTeam">
        <span className="word"><span>Digital</span></span>&nbsp;
        <span className="word"><span>agency,</span></span>
      </h1>

      <div className="big-results-wrap">
        <div className="big-results" id="bigResults">
          {bigResultsLetters}
        </div>
      </div>

      <div className="cards-row" id="cardsRow">
        {cardData.map((cd, i) => (
          <div
            key={i}
            className={`card card-${i + 1}`}
            data-rot={cd.rot}
            data-depth={cd.depth}
          >
            <img src={cardImages[i]} alt="" />
          </div>
        ))}
      </div>

      <div className="subline" id="subline">
        <a href="#services" className="arrow-pill">
          Explore our services
          <span className="ar">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </span>
        </a>
        <div className="subline-text">22+ services. 60+ shipped projects. Zero filler.</div>
      </div>
    </section>
  );
};

export default Hero;
