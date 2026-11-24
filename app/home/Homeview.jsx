"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_MS = 4000; // auto-slide every 4 seconds

const slides = [
  {
    image: "/imgs/sl01.jpg",
    position: "center", // change to "left", "right", "top" etc. to adjust the crop
    eyebrow: "Premium Auto Transport Leads",
    title: "Auto Transport Leads",
    highlight: "Built For Brokers.",
    description:
      "We've been helping auto transport brokers grow their businesses with quality car shipping leads for over 15 years.",
    tag: "15+ Years of Experience",
  },
  {
    image: "/imgs/sl03.png",
    position: "center",
    eyebrow: "Reliable Shipping Solutions",
    title: "Connect With Carriers.",
    highlight: "Move With Confidence.",
    description:
      "Connect with trusted carriers, streamline your operations, and build a stronger auto transport brokerage.",
    tag: "Reliable Connections",
  },
  {
    image: "/imgs/truck3.jpg",
    position: "center",
    eyebrow: "Quality Leads. Real Growth.",
    title: "Find More Customers.",
    highlight: "Grow Your Business.",
    description:
      "Get quality shipping leads and discover new opportunities to take your auto transport business to the next level.",
    tag: "Business Growth",
  },
];

const pad = (n) => String(n).padStart(2, "0");

export default function Homeview() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % slides.length);
  const prev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <section
      className="relative isolate h-[520px] w-full overflow-hidden bg-[#061B35] sm:h-[560px] lg:h-[600px]"
    >
      <style>{`
        @keyframes heroUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: none; }
        }
        @keyframes heroBar {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        .hero-up  { animation: heroUp .8s cubic-bezier(.2,.7,.2,1) both; }
        .hero-bar { transform-origin: left; animation: heroBar linear forwards; }
        @media (prefers-reduced-motion: reduce) { .hero-up { animation: none; } }
      `}</style>

      {/* Images — every slide fills the exact same frame */}
      {slides.map((item, index) => {
        const active = current === index;
        return (
          <div
            key={item.image}
            className={`absolute inset-0 -z-20 transition-opacity duration-1000 ease-in-out ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 transition-transform duration-[7000ms] ease-out motion-reduce:transition-none ${
                active ? "scale-100" : "scale-110"
              }`}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                priority={index === 0}
                sizes="100vw"
                className="object-cover"
                style={{ objectPosition: item.position }}
              />
            </div>
          </div>
        );
      })}

      {/* Overlays — dark on the left for text, image shows on the right */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061B35] via-[#061B35]/80 to-[#061B35]/10" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-gradient-to-t from-[#061B35] to-transparent" />

      {/* Content */}
      <div className="mx-auto flex h-full max-w-7xl items-center px-6 pb-20 sm:px-10 lg:px-16">
        <div key={current} className="max-w-2xl text-white">
          {/* Eyebrow */}
          <div className="hero-up flex items-center gap-3" style={{ animationDelay: "0ms" }}>
            <span className="h-px w-10 bg-[#FE8A01]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              {slide.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h1
            className="hero-up mt-5 text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "100ms" }}
          >
            {slide.title}
            <span className="mt-1 block text-[#FE8A01]">{slide.highlight}</span>
          </h1>

          {/* Description */}
          <p
            className="hero-up mt-5 max-w-xl text-sm leading-relaxed text-white/75 sm:text-base"
            style={{ animationDelay: "200ms" }}
          >
            {slide.description}
          </p>

          {/* Buttons */}
          <div
            className="hero-up mt-8 flex flex-wrap items-center gap-6"
            style={{ animationDelay: "300ms" }}
          >
            <a
              href="#learn-more"
              className="group inline-flex items-center gap-3 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(254,138,1,0.8)] transition-all duration-300 hover:bg-[#E97900] hover:shadow-[0_14px_36px_-10px_rgba(254,138,1,0.9)]"
            >
              Explore Our Leads
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>

            <a
              href="#learn-more"
              className="group inline-flex items-center gap-2 text-sm font-bold text-white"
            >
              <span className="border-b border-white/40 pb-0.5 transition-colors group-hover:border-[#FE8A01] group-hover:text-[#FE8A01]">
                Learn More
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute inset-x-0 bottom-0">
        <div className="mx-auto flex max-w-7xl items-end gap-6 px-6 pb-6 sm:px-10 lg:px-16">
          <div className="grid flex-1 grid-cols-3 gap-4 sm:gap-8">
            {slides.map((s, i) => {
              const active = current === i;
              return (
                <button
                  key={s.image}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={active ? "true" : undefined}
                  className="group text-left"
                >
                  {/* Progress line */}
                  <span className="relative block h-[2px] w-full overflow-hidden bg-white/20">
                    {active && (
                      <span
                        key={current}
                        className="hero-bar absolute inset-0 bg-[#FE8A01]"
                        style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
                        onAnimationEnd={next}
                      />
                    )}
                  </span>
                  <span className="mt-3 flex items-baseline gap-3">
                    <span
                      className={`text-sm font-bold tabular-nums transition-colors ${
                        active ? "text-[#FE8A01]" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {pad(i + 1)}
                    </span>
                    <span
                      className={`hidden truncate text-sm font-semibold transition-colors sm:block ${
                        active ? "text-white" : "text-white/45 group-hover:text-white/80"
                      }`}
                    >
                      {s.tag}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Arrows */}
          <div className="flex shrink-0 gap-2">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#FE8A01] hover:bg-[#FE8A01]"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition hover:border-[#FE8A01] hover:bg-[#FE8A01]"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}