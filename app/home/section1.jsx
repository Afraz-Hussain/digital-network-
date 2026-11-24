"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Truck,
} from "lucide-react";

const sections = [
  {
    eyebrow: "Grow With Digital Network",
    title: "Grow Your Brokerage With Confidence",
    highlight: "Confidence",
    paragraphs: [
      "Digital Network's exclusive lead solutions help you reach customers at the right time with accurate contact information, so you can follow up promptly and confidently.",
      "Whether you specialize in individual vehicle shipments or manage a large transport operation, our approach helps you streamline your sales process and build a stronger position in the auto transport market.",
    ],
    points: [
      "Accurate contact information",
      "Streamlined sales process",
      "Built for single shipments or large operations",
    ],
    badge: {
      title: "Exclusive",
      text: "Lead Solutions",
    },
    image: "/imgs/truck4.jpg",
    button: "Discover Our Solutions",
    reverse: false,
  },
];

/* Dot patterns used for decoration */
const whiteDots = {
  backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1.5px, transparent 1.5px)",
  backgroundSize: "18px 18px",
};
const orangeDots = {
  backgroundImage: "radial-gradient(circle, #FE8A01 2px, transparent 2px)",
  backgroundSize: "16px 16px",
};

function Title({ title, highlight }) {
  const [before, after] = title.split(highlight);
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  // Draw the underline when the heading scrolls into view
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <>
      {before}
      <span ref={ref} className="underline-draw relative inline-block text-[#FE8A01]">
        {highlight}
        <svg
          className="absolute -bottom-2 left-0 w-full overflow-visible"
          viewBox="0 0 200 12"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className={drawn ? "is-drawn" : ""}
            d="M2 9C50 3 150 1 198 7"
            stroke="#1879D8"
            strokeWidth="4"
            strokeLinecap="round"
            pathLength="1"
          />
        </svg>
      </span>
      {after}
      <style>{`
        .underline-draw path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
        }
        .underline-draw path.is-drawn {
          animation: underlineDraw 1.1s cubic-bezier(.65,0,.35,1) .3s forwards;
        }
        /* Redraw on hover */
        h2:hover .underline-draw path.is-drawn {
          animation: underlineRedraw 1s cubic-bezier(.65,0,.35,1) forwards;
        }
        @keyframes underlineDraw   { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @keyframes underlineRedraw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .underline-draw path { stroke-dashoffset: 0; animation: none !important; }
        }
      `}</style>
    </>
  );
}

export default function TransportSections() {
  return (
    <section className="relative overflow-hidden bg-[#F7FAFE] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-48 -top-32 h-[500px] w-[500px] rounded-full bg-[#1879D8]/[0.08] blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-[#FE8A01]/[0.08] blur-[100px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.18] [mask-image:linear-gradient(to_bottom,black,transparent)]"
        style={{
          backgroundImage: "radial-gradient(circle, #1879D8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {sections.map((section) => (
          <div
            key={section.title}
            className="grid items-center gap-16 lg:grid-cols-[1fr_1.05fr] lg:gap-20"
          >
            {/* ================= TEXT ================= */}
            <div className={section.reverse ? "lg:order-2" : ""}>
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-3 rounded-full border border-[#1879D8]/15 bg-white py-2 pl-2 pr-5 shadow-sm">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#FE8A01]">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-[11px] font-extrabold uppercase tracking-[0.17em] text-[#1879D8]">
                  {section.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-7 max-w-xl text-4xl font-black leading-[1.15] tracking-tight text-[#061B35] sm:text-5xl lg:text-[52px]">
                <Title title={section.title} highlight={section.highlight} />
              </h2>

              {/* Description */}
              <div className="mt-8 max-w-xl space-y-5">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-[15px] leading-[1.9] text-slate-600 sm:text-base">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Feature points */}
              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
                {section.points.map((point, index) => (
                  <div
                    key={point}
                    className={`flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1879D8]/30 hover:shadow-md ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1879D8]/10">
                      <CheckCircle2 className="h-4 w-4 text-[#1879D8]" />
                    </span>
                    <span className="text-sm font-semibold text-[#061B35]">{point}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-5 rounded-xl bg-[#FE8A01] py-2.5 pl-7 pr-2.5 text-sm font-extrabold text-white shadow-[0_10px_25px_-10px_rgba(254,138,1,0.7)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97900] hover:shadow-[0_15px_30px_-10px_rgba(254,138,1,0.6)]"
                >
                  {section.button}
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-white text-[#FE8A01] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </a>

                <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                  <ShieldCheck className="h-4 w-4 text-[#1879D8]" />
                  Designed for auto transport brokers
                </div>
              </div>
            </div>

            {/* ================= IMAGE ================= */}
            <div
              className={`relative mx-auto w-full max-w-[640px] pb-8 sm:pb-10 lg:max-w-none ${
                section.reverse ? "pl-8 sm:pl-10 lg:order-1" : "pr-8 sm:pr-10"
              }`}
            >
              {/* Soft glow */}
              <div className="pointer-events-none absolute inset-10 rounded-full bg-[#1879D8]/30 blur-[90px]" />

              {/* Gradient backdrop panel (offset behind the photo) */}
              <div
                className={`absolute bottom-0 top-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1879D8] via-[#0E4F95] to-[#061B35] ${
                  section.reverse ? "left-0 right-12" : "left-12 right-0"
                }`}
              >
                <div className="absolute inset-0" style={whiteDots} />
                <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border-[24px] border-white/10" />
                <div className="absolute bottom-0 left-0 h-1.5 w-1/2 bg-[#FE8A01]" />
              </div>

              {/* Orange dot patch */}
              <div
                className={`absolute -top-6 h-28 w-28 opacity-80 ${
                  section.reverse ? "-right-4" : "-left-6"
                }`}
                style={orangeDots}
              />

              {/* Main photo */}
              <div className="group relative z-10 h-[320px] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_30px_70px_-20px_rgba(6,27,53,0.45)] sm:h-[430px] lg:h-[490px]">
                <Image
                  src={section.image}
                  alt="Professional auto transport truck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/75 via-[#061B35]/5 to-transparent" />

                {/* Live chip */}
                <div className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#061B35] shadow-md backdrop-blur">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE8A01] opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE8A01]" />
                  </span>
                  Real-Time Leads
                </div>

                {/* Glass label */}
                <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md sm:inset-x-5 sm:bottom-5">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                      Digital Network
                    </p>
                    <p className="mt-1 text-lg font-extrabold text-white sm:text-xl">
                      Driving Business Forward
                    </p>
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FE8A01] text-white shadow-lg shadow-[#FE8A01]/30">
                    <Truck className="h-6 w-6" />
                  </div>
                </div>
              </div>

              {/* Floating info card */}
              <div
                className={`absolute top-16 z-20 hidden items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5 pr-5 shadow-[0_20px_45px_-15px_rgba(6,27,53,0.35)] sm:flex ${
                  section.reverse ? "-right-6" : "-left-8"
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1879D8] to-[#0E4F95] shadow-lg shadow-[#1879D8]/30">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-base font-black text-[#061B35]">{section.badge.title}</p>
                  <p className="text-xs font-medium text-slate-500">{section.badge.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}