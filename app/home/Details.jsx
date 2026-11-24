"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, ClipboardList, Handshake, Layers, Zap } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Share Your Goals",
    description:
      "Tell us the lead types, routes and volume you're looking for so we can match leads to your business.",
    color: "blue",
  },
  {
    icon: Layers,
    title: "Pick Your Lead Plan",
    description:
      "Choose exclusive, premium or live call transfer leads, with pricing and terms clear from the start.",
    color: "orange",
  },
  {
    icon: Zap,
    title: "Get Leads in Real Time",
    description:
      "Fresh quote requests reach you as they come in, with validated contact details ready to call.",
    color: "blue",
  },
  {
    icon: Handshake,
    title: "Call, Quote & Close",
    description:
      "Reach out while interest is high, send your quote and turn more inquiries into booked shipments.",
    color: "orange",
  },
];

const tile = {
  blue: "from-[#1879D8] to-[#0E4F95] shadow-[#1879D8]/40",
  orange: "from-[#FE8A01] to-[#E97900] shadow-[#FE8A01]/40",
};

export default function HowItWorks() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Start animations when the section scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`hiw relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-16 lg:py-28 ${
        visible ? "is-visible" : ""
      }`}
    >
      <style>{`
        /* Flowing dots */
        @keyframes dotsX { to { background-position-x: 16px; } }
        @keyframes dotsY { to { background-position-y: 16px; } }
        /* Glowing comet travelling along the line */
        @keyframes cometX { 0% { left: 0%; opacity: 0; } 8% { opacity: 1; } 92% { opacity: 1; } 100% { left: 100%; opacity: 0; } }
        @keyframes stepIn { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: none; } }
        @keyframes ringPulse { 0% { transform: scale(1); opacity: .5; } 100% { transform: scale(1.45); opacity: 0; } }

        .hiw-dots-x {
          background-image: radial-gradient(circle, #1879D8 2px, transparent 2.5px);
          background-size: 16px 6px;
          background-repeat: repeat-x;
          background-position: 0 center;
          animation: dotsX .9s linear infinite;
        }
        .hiw-dots-y {
          background-image: radial-gradient(circle, #1879D8 2px, transparent 2.5px);
          background-size: 6px 16px;
          background-repeat: repeat-y;
          background-position: center 0;
          animation: dotsY .9s linear infinite;
        }

        /* Line draws in once visible */
        .hiw-line-x { transform: scaleX(0); transform-origin: left; transition: transform 1.4s cubic-bezier(.65,0,.35,1) .2s; }
        .hiw-line-y { transform: scaleY(0); transform-origin: top;  transition: transform 1.4s cubic-bezier(.65,0,.35,1) .2s; }
        .hiw.is-visible .hiw-line-x { transform: scaleX(1); }
        .hiw.is-visible .hiw-line-y { transform: scaleY(1); }

        .hiw-comet { opacity: 0; }
        .hiw.is-visible .hiw-comet-x { animation: cometX 3.2s ease-in-out 1.6s infinite; }

        .hiw-step { opacity: 0; }
        .hiw.is-visible .hiw-step { animation: stepIn .8s cubic-bezier(.2,.7,.2,1) both; }

        .hiw-ring { animation: ringPulse 2.2s ease-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .hiw-dots-x, .hiw-dots-y, .hiw-ring, .hiw-comet { animation: none !important; }
          .hiw-line-x, .hiw-line-y { transform: none; transition: none; }
          .hiw-step { opacity: 1; animation: none !important; }
        }
      `}</style>

      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[380px] w-[380px] rounded-full bg-[#1879D8]/[0.07] blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#FE8A01]/[0.08] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="h-px w-8 bg-[#FE8A01]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              How It Works
            </span>
            <span className="h-px w-8 bg-[#FE8A01]" />
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#061B35] sm:text-4xl lg:text-5xl">
            Four Simple Steps to{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FE8A01] to-[#FFA640] bg-clip-text text-transparent">
              More Bookings
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Getting started with Digital Network is quick. Here&apos;s how we connect your
            brokerage with customers who are ready to ship.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-16 lg:mt-20">
          {/* Desktop horizontal line (through icon centres) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[44px] hidden h-[6px] -translate-y-1/2 lg:block">
            <div className="hiw-line-x hiw-dots-x absolute inset-0" />
            <span className="hiw-comet hiw-comet-x absolute top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE8A01] shadow-[0_0_0_4px_rgba(254,138,1,0.2),0_0_18px_4px_rgba(254,138,1,0.6)]" />
          </div>

          <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.title}
                  className="hiw-step group relative flex gap-6 lg:flex-col lg:items-center lg:gap-0 lg:text-center"
                  style={{ animationDelay: `${300 + i * 250}ms` }}
                >
                  {/* Mobile/tablet vertical dotted line to the next step */}
                  {i < steps.length - 1 && (
                    <div className="absolute -bottom-[92px] left-[44px] top-[44px] w-[6px] -translate-x-1/2 lg:hidden">
                      <div className="hiw-line-y hiw-dots-y absolute inset-0" />
                    </div>
                  )}

                  {/* Icon */}
                  <div className="relative h-[88px] w-[88px] shrink-0">
                    {/* White halo so the line passes behind */}
                    <span className="absolute -inset-2 rounded-[28px] bg-white" />
                    <span
                      className={`hiw-ring absolute inset-0 rounded-3xl bg-gradient-to-br ${tile[step.color]}`}
                      style={{ animationDelay: `${i * 0.55}s` }}
                    />
                    <div
                      className={`relative flex h-full w-full items-center justify-center rounded-3xl bg-gradient-to-br text-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-6deg] ${tile[step.color]}`}
                    >
                      <Icon className="h-9 w-9" strokeWidth={1.8} />
                    </div>
                    {/* Step number */}
                    <span className="absolute -right-3 -top-3 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white bg-[#061B35] text-xs font-black text-white shadow-md">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Text */}
                  <div className="pt-1 lg:mt-8 lg:px-2 lg:pt-0">
                    <h3 className="text-xl font-extrabold text-[#061B35] transition-colors duration-300 group-hover:text-[#FE8A01]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(254,138,1,0.9)] transition-all duration-300 hover:bg-[#E97900]"
          >
            Get Started Today
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform duration-300 group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
          <span className="text-sm font-medium text-slate-500">
            Questions? <a href="#contact" className="font-bold text-[#1879D8] hover:underline">Talk to our team</a>
          </span>
        </div>
      </div>
    </section>
  );
}