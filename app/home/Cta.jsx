export default function ContactCTA() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=Inter:wght@400;500;600;700&display=swap');

        .dn-cta {
          position: relative;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1fr 400px;
          min-height: 440px;
          font-family: 'Inter', sans-serif;
        }

        /* truck bg */
        .dn-cta__bg {
          position: absolute;
          inset: 0;
          background-image: url('/imgs/truck1.jpg');
          background-size: cover;
          background-position: center 55%;
          opacity: 0.09;
        }

        /* ── LEFT PANEL ── */
        .dn-cta__left {
          position: relative;
          z-index: 2;
          background: linear-gradient(108deg, #07111F 60%, rgba(7,17,31,0.88) 100%);
          padding: 72px 56px 72px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .dn-cta__left::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: #0170D5;
        }

        .dn-cta__eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }
        .dn-cta__eyebrow-dash {
          width: 28px; height: 2px;
          background: #E99239;
          flex-shrink: 0;
        }
        .dn-cta__eyebrow-text {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.16em;
          color: #E99239;
          text-transform: uppercase;
        }

        .dn-cta__headline {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: clamp(40px, 5vw, 66px);
          line-height: 0.95;
          text-transform: uppercase;
          color: #fff;
          margin-bottom: 24px;
          max-width: 560px;
        }

        .dn-cta__body {
          font-size: 15.5px;
          line-height: 1.72;
          color: #9BB4CC;
          max-width: 480px;
          font-weight: 400;
        }

        /* ── RIGHT PANEL ── */
        .dn-cta__right {
          position: relative;
          z-index: 2;
          background: #E99239;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 56px 48px 56px 52px;
        }
        .dn-cta__right::before {
          content: '';
          position: absolute;
          inset: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 18px,
            rgba(0,0,0,0.04) 18px,
            rgba(0,0,0,0.04) 19px
          );
        }

        .dn-cta__right-inner {
          position: relative;
          z-index: 1;
          width: 100%;
        }

        .dn-cta__right-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          color: rgba(0,0,0,0.5);
          text-transform: uppercase;
          margin-bottom: 18px;
        }
        .dn-cta__right-heading {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          font-size: 30px;
          color: #07111F;
          text-transform: uppercase;
          line-height: 1.1;
          margin-bottom: 10px;
        }
        .dn-cta__right-sub {
          font-size: 13.5px;
          color: rgba(0,0,0,0.55);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 280px;
        }

        .dn-cta__btn-primary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
          background: #07111F;
          color: #fff;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 16px 24px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          margin-bottom: 12px;
          transition: background 0.2s, transform 0.15s;
          clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%);
        }
        .dn-cta__btn-primary:hover {
          background: #0170D5;
          transform: translateX(3px);
        }

        .dn-cta__btn-arrow {
          width: 28px; height: 28px;
          border: 1.5px solid rgba(255,255,255,0.3);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .dn-cta__btn-sep {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 10px 0;
          color: rgba(0,0,0,0.3);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
        }
        .dn-cta__btn-sep::before,
        .dn-cta__btn-sep::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(0,0,0,0.15);
        }

        .dn-cta__btn-secondary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          width: 100%;
          background: transparent;
          color: #07111F;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 16px 24px;
          border: 2px solid rgba(0,0,0,0.25);
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }
        .dn-cta__btn-secondary:hover {
          background: rgba(0,0,0,0.08);
          border-color: rgba(0,0,0,0.5);
          transform: translateX(3px);
        }
        .dn-cta__btn-secondary .dn-cta__btn-arrow {
          border-color: rgba(0,0,0,0.25);
        }

        .dn-cta__trust {
          position: absolute;
          bottom: 20px;
          left: 52px;
          display: flex;
          align-items: center;
          gap: 8px;
          color: rgba(0,0,0,0.38);
          font-size: 10.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
        }
        .dn-cta__trust-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: rgba(0,0,0,0.3);
          flex-shrink: 0;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 860px) {
          .dn-cta {
            grid-template-columns: 1fr;
          }
          .dn-cta__left { padding: 52px 32px 48px; }
          .dn-cta__right { padding: 44px 32px 56px; }
          .dn-cta__trust { left: 32px; }
        }
        @media (max-width: 480px) {
          .dn-cta__left { padding: 44px 24px 40px; }
          .dn-cta__right { padding: 36px 24px 52px; }
          .dn-cta__trust { left: 24px; }
        }
      `}</style>

      <section className="dn-cta">
        <div className="dn-cta__bg" />

        {/* LEFT */}
        <div className="dn-cta__left">
          <div className="dn-cta__eyebrow">
            <div className="dn-cta__eyebrow-dash" />
            <span className="dn-cta__eyebrow-text">Digital Network Platform</span>
          </div>

          <h2 className="dn-cta__headline">
            Grow Your<br />Auto Transport<br />Business
          </h2>

          <p className="dn-cta__body">
            Stop chasing cold leads. Digital Network connects you directly
            with verified shippers so your brokerage spends time closing,
            not prospecting.
          </p>
        </div>

        {/* RIGHT */}
        <div className="dn-cta__right">
          <div className="dn-cta__right-inner">
            <div className="dn-cta__right-label">Start today</div>
            <div className="dn-cta__right-heading">
              Choose your<br />next move
            </div>
            <p className="dn-cta__right-sub">
              Order leads instantly or talk to our team about a custom
              solution for your brokerage.
            </p>

            <a href="/order-leads" className="dn-cta__btn-primary">
              Order Leads Now
              <span className="dn-cta__btn-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>

            <div className="dn-cta__btn-sep">or</div>

            <a href="/contact" className="dn-cta__btn-secondary">
              Talk to Our Team
              <span className="dn-cta__btn-arrow">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="#07111F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>

          <div className="dn-cta__trust">
            <div className="dn-cta__trust-dot" />
            No contracts &nbsp;·&nbsp; Cancel anytime &nbsp;·&nbsp; Real-time delivery
          </div>
        </div>
      </section>
    </>
  );
}