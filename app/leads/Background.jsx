"use client";

import { useEffect, useRef } from "react";

export default function BackgroundText() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Network node animation
    const nodes = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(24, 121, 216, ${0.22 * (1 - dist / 130)})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(24, 121, 216, 0.6)";
        ctx.fill();

        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600&display=swap');

        .dn-hero {
          position: relative;
          min-height: 520px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #061B35;
          font-family: 'Inter', sans-serif;
        }

        /* Truck image layer */
        .dn-hero__img {
          position: absolute;
          inset: 0;
          background-image: url('/imgs/truck6.jpg');
          background-size: cover;
          background-position: center 40%;
          opacity: 0.12;
        }

        /* Gradient overlay — left dark, right slightly revealed */
        .dn-hero__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            105deg,
            #061B35 55%,
            rgba(6, 27, 53, 0.82) 100%
          );
        }

        /* Animated network canvas */
        .dn-hero__canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }

        /* Blue accent bar — far left */
        .dn-hero__bar {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
          background: linear-gradient(180deg, #FE8A01 0%, #1879D8 100%);
        }

        /* Content */
        .dn-hero__content {
          position: relative;
          z-index: 10;
          max-width: 1140px;
          margin: 0 auto;
          padding: 72px 48px 72px 56px;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 0 64px;
          align-items: center;
          width: 100%;
          box-sizing: border-box;
        }

        .dn-hero__left {
          max-width: 680px;
        }

        /* Eyebrow */
        .dn-hero__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
        }
        .dn-hero__eyebrow-line {
          width: 32px;
          height: 2px;
          background: #FE8A01;
          flex-shrink: 0;
        }
        .dn-hero__eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #FE8A01;
          text-transform: uppercase;
        }

        /* Headline */
        .dn-hero__headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(48px, 7vw, 86px);
          line-height: 0.95;
          color: #FFFFFF;
          margin: 0 0 28px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
        }
        .dn-hero__headline em {
          font-style: normal;
          color: #FE8A01;
        }

        /* Body */
        .dn-hero__body {
          font-size: 17px;
          line-height: 1.7;
          color: #8FA8C8;
          max-width: 560px;
          margin: 0 0 40px;
          font-weight: 400;
        }

        /* CTA row */
        .dn-hero__ctas {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }
        .dn-hero__cta-primary {
          display: inline-block;
          background: #FE8A01;
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 14px 32px;
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .dn-hero__cta-primary:hover {
          background: #E97900;
          transform: translateY(-1px);
        }
        .dn-hero__cta-secondary {
          background: transparent;
          color: #8FA8C8;
          font-size: 14px;
          font-weight: 500;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 0;
          text-decoration: none;
          transition: color 0.2s;
        }
        .dn-hero__cta-secondary:hover { color: #fff; }
        .dn-hero__cta-secondary svg { transition: transform 0.2s; }
        .dn-hero__cta-secondary:hover svg { transform: translateX(4px); }

        /* Right stats panel */
        .dn-hero__stats {
          display: flex;
          flex-direction: column;
          gap: 0;
          border-left: 1px solid rgba(24, 121, 216, 0.25);
          padding-left: 48px;
          flex-shrink: 0;
        }
        .dn-hero__stat {
          padding: 20px 0;
          border-bottom: 1px solid rgba(255,255,255,0.06);
        }
        .dn-hero__stat:last-child { border-bottom: none; }
        .dn-hero__stat-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 700;
          font-size: 36px;
          color: #fff;
          line-height: 1;
          margin-bottom: 4px;
        }
        .dn-hero__stat-num span {
          color: #FE8A01;
        }
        .dn-hero__stat-label {
          font-size: 11px;
          font-weight: 500;
          color: #5B7A99;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        /* Bottom strip */
        .dn-hero__strip {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #FE8A01 0%, #1879D8 35%, transparent 70%);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .dn-hero__content {
            grid-template-columns: 1fr;
            padding: 60px 28px;
          }
          .dn-hero__stats {
            flex-direction: row;
            border-left: none;
            border-top: 1px solid rgba(24, 121, 216, 0.25);
            padding-left: 0;
            padding-top: 28px;
            gap: 0;
          }
          .dn-hero__stat {
            flex: 1;
            padding: 0 20px 0 0;
            border-bottom: none;
            border-right: 1px solid rgba(255,255,255,0.06);
          }
          .dn-hero__stat:last-child { border-right: none; }
        }

        @media (max-width: 540px) {
          .dn-hero__stats { flex-direction: column; gap: 16px; }
          .dn-hero__stat { border-right: none; }
          .dn-hero__ctas { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="dn-hero">
        {/* Truck photo at low opacity */}
        <div className="dn-hero__img" />

        {/* Dark gradient */}
        <div className="dn-hero__gradient" />

        {/* Network animation */}
        <canvas ref={canvasRef} className="dn-hero__canvas" />

        {/* Left accent bar */}
        <div className="dn-hero__bar" />

        {/* Bottom line */}
        <div className="dn-hero__strip" />

        {/* Content */}
        <div className="dn-hero__content">
          <div className="dn-hero__left">
            {/* Eyebrow */}
            <div className="dn-hero__eyebrow">
              <div className="dn-hero__eyebrow-line" />
              <span className="dn-hero__eyebrow-text">
                Digital Network · Auto Transport Brokers
              </span>
            </div>

            {/* Headline */}
            <h2 className="dn-hero__headline">
              Drive Your<br />
              Business <em>Forward</em>
            </h2>

            {/* Body */}
            <p className="dn-hero__body">
              Connect with customers who are ready to ship, build
              stronger relationships, and grow your brokerage with
              auto transport leads from Digital Network.
            </p>

            {/* CTAs */}
            <div className="dn-hero__ctas">
              <a href="/product-pricing" className="dn-hero__cta-primary">Get Started</a>
              <a href="/lead-quality" className="dn-hero__cta-secondary">
                See how it works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#8FA8C8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="dn-hero__stats">
            <div className="dn-hero__stat">
              <div className="dn-hero__stat-num">7</div>
              <div className="dn-hero__stat-label">Lead Packages</div>
            </div>
            <div className="dn-hero__stat">
              <div className="dn-hero__stat-num"><span>$</span>2.50</div>
              <div className="dn-hero__stat-label">Starting Per Lead</div>
            </div>
            <div className="dn-hero__stat">
              <div className="dn-hero__stat-num"><span>$</span>300</div>
              <div className="dn-hero__stat-label">Minimum Order</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}