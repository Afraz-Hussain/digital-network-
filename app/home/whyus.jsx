"use client";

import {
  ArrowRight,
  FileText,
  ShieldCheck,
  SlidersHorizontal,
  Timer,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const features = [
  {
    icon: Timer,
    title: "Leads While They're Fresh",
    description:
      "Quote requests reach you in real time, so your team can call while the shipping need is top of mind and get in first for the booking.",
  },
  {
    icon: UserCheck,
    title: "Customers Ready to Ship",
    description:
      "We focus on people actively requesting auto transport quotes, so your sales time goes into real conversations, not cold outreach.",
  },
  {
    icon: SlidersHorizontal,
    title: "Plans That Fit Your Brokerage",
    description:
      "Choose the lead types and volume that match your goals, and adjust your plan as your business changes.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Contact Details",
    description:
      "Leads go through validation checks to improve contact accuracy, so fewer of your calls end up at wrong numbers.",
  },
  {
    icon: FileText,
    title: "Clear Pricing & Terms",
    description:
      "See your lead options, pricing and service terms upfront, so you know exactly what you're getting before you start.",
  },
  {
    icon: TrendingUp,
    title: "A Partner in Your Growth",
    description:
      "Less time hunting for inquiries, more time closing deals. Our lead solutions grow with you as your brokerage scales.",
  },
];

/* Moves a soft spotlight to follow the cursor inside each card */
function handleSpotlight(e) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function WhyChooseUs() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061B35] px-5 py-20 sm:px-8 lg:px-16 lg:py-28">
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-[#1879D8]/25 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/15 blur-[130px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#FE8A01] shadow-[0_0_10px_#FE8A01]" />
            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/80">
              Why Choose Digital Network
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-black leading-tight tracking-tight text-white sm:text-4xl lg:text-[52px] lg:leading-[1.1]">
            More Bookings Start With{" "}
            <span className="bg-gradient-to-r from-[#FE8A01] to-[#FFB459] bg-clip-text text-transparent">
              Better Leads.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Every booking starts with reaching the right customer at the right moment. Digital
            Network delivers timely, verified auto transport leads so your brokerage can spend
            less time searching and more time closing.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                onMouseMove={handleSpotlight}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#FE8A01]/40 hover:bg-white/[0.06] sm:p-8"
              >
                {/* Cursor spotlight */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(320px circle at var(--x) var(--y), rgba(254,138,1,0.12), transparent 60%)",
                  }}
                />

                {/* Top glow line */}
                <span className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#FE8A01] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#FE8A01]/10 text-[#FE8A01] ring-1 ring-[#FE8A01]/25 transition-all duration-300 group-hover:bg-[#FE8A01] group-hover:text-white group-hover:shadow-[0_10px_30px_-8px_rgba(254,138,1,0.7)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-bold tabular-nums text-white/20 transition-colors duration-300 group-hover:text-[#FE8A01]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-white">{feature.title}</h3>

                  <p className="mt-3 text-[15px] leading-relaxed text-white/60">
                    {feature.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA band */}
        <div className="relative mt-14 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-[#1879D8]/25 via-white/[0.05] to-[#FE8A01]/20 p-8 backdrop-blur sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                Ready to grow your brokerage?
              </h3>
              <p className="mt-2 text-white/65">
                Talk to our team and find the lead solution that fits your business.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center gap-4 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_10px_30px_-10px_rgba(254,138,1,0.9)] transition-all duration-300 hover:bg-[#E97900]"
              >
                Explore Our Lead Solutions
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" />
                </span>
              </a>
              <a
                href="#pricing"
                className="text-sm font-bold text-white underline decoration-white/30 underline-offset-4 transition hover:text-[#FE8A01] hover:decoration-[#FE8A01]"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}