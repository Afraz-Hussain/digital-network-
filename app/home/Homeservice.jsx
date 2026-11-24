
"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Crown,
  Lock,
  PhoneCall,
  Truck,
  Wrench,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: BadgeCheck,
    number: "01",
    label: "QUALITY ASSURED",
    title: "Lead Quality",
    description:
      "Every lead is checked for accurate contact details and genuine shipping intent, so your team spends time on real customers.",
    href: "/lead-quality",
  },
  {
    icon: Crown,
    number: "02",
    label: "HIGH INTENT",
    title: "Premium Leads",
    description:
      "High-intent car shipping leads from customers who are ready to book, delivered quickly so you can follow up first.",
    href: "/premium-leads",
  },
  {
    icon: Lock,
    number: "03",
    label: "LESS COMPETITION",
    title: "Exclusive Leads",
    description:
      "Leads shared with fewer companies, giving you less competition and a better chance of turning inquiries into bookings.",
    href: "/exclusive-leads",
  },
  {
    icon: PhoneCall,
    number: "04",
    label: "REAL-TIME CONNECTION",
    title: "Hot Live Call Transfer Leads",
    description:
      "Speak to customers the moment they request a quote. Live calls are transferred straight to your sales team.",
    href: "/live-call-transfer-leads",
  },
  {
    icon: Wrench,
    number: "05",
    label: "AUTOMOTIVE SERVICES",
    title: "Car Service Leads",
    description:
      "Connect with vehicle owners looking for car services and grow your customer base beyond transport.",
    href: "/car-service-leads",
  },
  {
    icon: Truck,
    number: "06",
    label: "FREIGHT SOLUTIONS",
    title: "Freight Shipping",
    description:
      "Reach businesses that need freight moved and expand your brokerage into new shipping opportunities.",
    href: "/freight-shipping",
  },
];

const GAP = 24;

export default function ServicesSection() {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [active, setActive] = useState(0);
  const [positions, setPositions] = useState(services.length);

  const update = () => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.firstElementChild;
    if (!card) return;

    const step = card.getBoundingClientRect().width + GAP;

    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);

    setActive(Math.min(
      positions - 1,
      Math.max(0, Math.round(el.scrollLeft / step))
    ));

    const visible = Math.max(
      1,
      Math.floor((el.clientWidth + GAP) / step)
    );

    setPositions(Math.max(1, services.length - visible + 1));
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    update();

    const observer = new ResizeObserver(update);
    observer.observe(el);

    window.addEventListener("resize", update);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.firstElementChild;
    const step = card
      ? card.getBoundingClientRect().width + GAP
      : el.clientWidth;

    el.scrollBy({
      left: direction * step,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-[#F7FAFE] px-5 py-20 sm:px-8 lg:px-16 lg:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-48 top-0 h-[500px] w-[500px] rounded-full bg-[#1879D8]/[0.07] blur-[120px]" />

      <div className="pointer-events-none absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-[#FE8A01]/[0.07] blur-[120px]" />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.20]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #1879D8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative mx-auto max-w-7xl">

        {/* SECTION HEADER */}
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <div className="inline-flex items-center gap-3 rounded-full border border-[#1879D8]/15 bg-white px-4 py-2.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-[#FE8A01]" />

              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#1879D8]">
                What We Offer
              </span>
            </div>

            <h2 className="mt-6 text-4xl font-black leading-[1.12] tracking-tight text-[#061B35] sm:text-5xl lg:text-[58px]">
              The Right Leads.
              <span className="block text-[#1879D8]">
                The Right Customers.
              </span>
            </h2>

            <div className="mt-6 flex items-center gap-2">
              <span className="h-1.5 w-14 rounded-full bg-[#FE8A01]" />
              <span className="h-1.5 w-7 rounded-full bg-[#1879D8]" />
              <span className="h-1.5 w-2 rounded-full bg-[#1879D8]/30" />
            </div>

            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              From exclusive leads to live call transfers, Digital Network
              connects your brokerage with opportunities designed to help
              your business move forward.
            </p>

          </div>

          {/* Carousel Controls */}
          <div className="flex shrink-0 items-center gap-3">

            <span className="mr-3 text-sm font-bold text-[#061B35]">
              <span className="text-[#FE8A01]">
                0{Math.min(active + 1, services.length)}
              </span>
              <span className="mx-2 text-slate-300">/</span>
              0{services.length}
            </span>

            <button
              onClick={() => scroll(-1)}
              disabled={!canPrev}
              aria-label="Previous service"
              className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#1879D8]/20 bg-white text-[#1879D8] shadow-sm transition-all duration-300 hover:border-[#1879D8] hover:bg-[#1879D8] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => scroll(1)}
              disabled={!canNext}
              aria-label="Next service"
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE8A01] text-white shadow-lg shadow-[#FE8A01]/25 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97900] disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ChevronRight size={22} />
            </button>

          </div>
        </div>

        {/* SERVICE CARDS */}
        <div
          ref={trackRef}
          onScroll={update}
          className="-mx-2 mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pb-8 pt-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-[390px] w-full shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-[#1879D8]/10 bg-white p-7 shadow-[0_10px_35px_-20px_rgba(6,27,53,0.25)] transition-all duration-500 hover:-translate-y-2 hover:border-[#1879D8]/30 hover:shadow-[0_25px_55px_-20px_rgba(24,121,216,0.25)] sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
              >

                {/* Hover Gradient */}
                <div className="absolute inset-0 translate-y-full bg-gradient-to-br from-[#1879D8] via-[#1265B5] to-[#061B35] transition-transform duration-500 ease-out group-hover:translate-y-0" />

                {/* Number */}
                <span className="absolute -right-1 -top-5 text-[100px] font-black leading-none text-[#1879D8]/[0.055] transition-colors duration-500 group-hover:text-white/[0.08]">
                  {service.number}
                </span>

                <div className="relative z-10 flex flex-1 flex-col">

                  {/* Card Top */}
                  <div className="flex items-center justify-between">

                    <div className="flex h-[66px] w-[66px] items-center justify-center rounded-2xl bg-gradient-to-br from-[#1879D8] to-[#0759A9] shadow-lg shadow-[#1879D8]/20 transition-all duration-500 group-hover:rotate-3 group-hover:scale-110 group-hover:from-[#FE8A01] group-hover:to-[#E97900] group-hover:shadow-[#FE8A01]/30">
                      <Icon className="h-7 w-7 text-white" strokeWidth={1.8} />
                    </div>

                    <span className="rounded-full border border-[#1879D8]/10 bg-[#1879D8]/[0.06] px-3 py-1.5 text-[9px] font-extrabold tracking-[0.12em] text-[#1879D8] transition-colors duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white">
                      {service.label}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-8 text-[22px] font-extrabold leading-snug text-[#061B35] transition-colors duration-500 group-hover:text-white">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 flex-1 text-[14px] leading-[1.9] text-slate-500 transition-colors duration-500 group-hover:text-white/75 sm:text-[15px]">
                    {service.description}
                  </p>

                  {/* Link */}
                  <div className="mt-8 border-t border-slate-100 pt-5 transition-colors duration-500 group-hover:border-white/20">

                    <a
                      href={service.href}
                      className="inline-flex items-center gap-3 text-sm font-extrabold text-[#1879D8] transition-colors duration-300 group-hover:text-[#FE8A01]"
                    >
                      Explore Service

                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1879D8]/10 transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#FE8A01] group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </a>

                  </div>
                </div>

                {/* Bottom Accent */}
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#FE8A01] transition-all duration-500 group-hover:w-full" />

              </article>
            );
          })}
        </div>

        {/* CAROUSEL PROGRESS */}
        <div className="mt-2 flex items-center justify-center gap-2">
          {Array.from({ length: positions }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                const el = trackRef.current;
                const card = el?.firstElementChild;
                if (!el || !card) return;

                const step = card.getBoundingClientRect().width + GAP;

                el.scrollTo({
                  left: i * step,
                  behavior: "smooth",
                });
              }}
              aria-label={`Go to service position ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-10 bg-[#FE8A01]"
                  : "w-2.5 bg-[#1879D8]/20 hover:bg-[#1879D8]/50"
              }`}
            />
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="relative mt-16 overflow-hidden rounded-[26px] bg-gradient-to-r from-[#061B35] via-[#0B3765] to-[#1879D8] px-7 py-9 sm:px-10 lg:px-12">

          <div className="pointer-events-none absolute -right-10 -top-24 h-64 w-64 rounded-full border-[35px] border-white/[0.05]" />

          <div className="relative flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                Let's Grow Together
              </span>

              <h3 className="mt-3 text-2xl font-black text-white sm:text-3xl">
                Find the Right Leads for Your Business.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-7 text-white/70">
                Not sure which lead solution fits your brokerage? Our team
                is ready to help you find the right option.
              </p>
            </div>

            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-xl bg-[#FE8A01] px-7 py-4 text-sm font-extrabold text-white shadow-lg shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E97900]"
            >
              Talk To Our Team
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
