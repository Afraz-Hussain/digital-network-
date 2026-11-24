import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Fast Lead Delivery",
    description:
      "Inquiries reach you soon after a customer submits them, so your team can call while interest is high.",
  },
  {
    icon: ShieldCheck,
    title: "Screened for Quality",
    description:
      "We check for duplicate submissions and possible spam, so your team wastes less time on dead ends.",
  },
  {
    icon: Target,
    title: "Customers Who Need Shipping",
    description:
      "Our leads come from people actively looking for auto transport, not random website visitors.",
  },
  {
    icon: Search,
    title: "Focused Marketing",
    description:
      "We run campaigns aimed at car shipping and vehicle transport audiences, so you don't have to.",
  },
  {
    icon: Users,
    title: "Shared or Exclusive",
    description:
      "Pick shared leads to keep costs low or exclusive leads for less competition. Mix based on your goals.",
  },
  {
    icon: TrendingUp,
    title: "More Time to Sell",
    description:
      "Skip the prospecting and spend your day quoting, following up and building customer relationships.",
  },
];

const steps = [
  {
    icon: Search,
    title: "A Customer Requests a Quote",
    text: "Someone searching for vehicle shipping finds our campaigns and submits an inquiry.",
  },
  {
    icon: ShieldCheck,
    title: "We Screen the Lead",
    text: "The inquiry is checked for relevance, duplicates and suspicious details before it reaches you.",
  },
  {
    icon: MessageCircle,
    title: "You Call & Close",
    text: "Your team contacts the customer, discusses their shipment and works toward a booking.",
  },
];

const dots = (color, size = 24) => ({
  backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
  backgroundSize: `${size}px ${size}px`,
});

export default function LeadGenerationPage() {
  return (
    <main className="overflow-hidden bg-white text-[#061B35]">
      <style>{`
        @keyframes lgDots { to { background-position-x: 16px; } }
        .lg-flow {
          background-image: radial-gradient(circle, #FE8A01 2px, transparent 2.5px);
          background-size: 16px 6px;
          background-repeat: repeat-x;
          background-position: 0 center;
          animation: lgDots .9s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) { .lg-flow { animation: none; } }
      `}</style>

      {/* ═════════════════ HERO ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35]">
        <Image
          src="/imgs/truck3.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-30 object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061B35] via-[#061B35]/90 to-[#061B35]/50" />
        <div className="absolute inset-0 -z-10 opacity-[0.12]" style={dots("#fff", 26)} />
        <div className="pointer-events-none absolute -left-40 top-1/4 -z-10 h-[460px] w-[460px] rounded-full bg-[#FE8A01]/20 blur-[130px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-[400px] w-[400px] rounded-full bg-[#1879D8]/25 blur-[130px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-8 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE8A01] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE8A01]" />
              </span>
              Auto Transport Lead Generation
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              Stop Chasing Customers.
              <span className="block bg-gradient-to-r from-[#FE8A01] to-[#FFB459] bg-clip-text text-transparent">
                Let Them Find You.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Digital Network brings auto transport brokers a steady flow of customers who
              are ready to ship, so your team can focus on quoting and closing instead of
              prospecting.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/product-pricing"
                className="group inline-flex items-center gap-4 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                Explore Pricing
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-bold text-white underline decoration-white/30 underline-offset-4 transition hover:text-[#FE8A01] hover:decoration-[#FE8A01]"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Glass card */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#FE8A01]/25 to-[#1879D8]/25 blur-2xl" />
            <div className="relative overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border-[24px] border-[#FE8A01]/15" />

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-white shadow-lg shadow-[#FE8A01]/40">
                <Clock size={26} />
              </div>

              <h2 className="mt-7 text-2xl font-extrabold text-white sm:text-3xl">
                Win Back Your Time
              </h2>
              <p className="mt-3 leading-relaxed text-white/65">
                We handle the marketing and screening. You spend your hours talking to
                customers and growing your brokerage.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Inquiries from real shipping customers",
                  "Shared and exclusive lead options",
                  "Screened for duplicates and spam",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm font-medium text-white/90"
                  >
                    <CheckCircle2 size={18} className="shrink-0 text-[#FE8A01]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ INTRO ═════════════════ */}
      <section className="relative px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#1879D8]/[0.07] blur-[110px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#FE8A01]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
                The Challenge
              </span>
            </div>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
              Finding Customers Shouldn&apos;t{" "}
              <span className="text-[#FE8A01]">Eat Up Your Day</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Running ads, building landing pages and filtering out junk inquiries takes
              time, money and know-how. For a busy brokerage, that work pulls attention away
              from sales and daily operations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Digital Network takes that load off your plate. We generate inquiries from
              people who need vehicle shipping, screen them, and deliver them to your team
              quickly.
            </p>

            <Link
              href="/lead-quality"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border-2 border-[#061B35] px-6 py-3 text-sm font-bold text-[#061B35] transition hover:bg-[#061B35] hover:text-white"
            >
              How We Check Lead Quality
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Image with gradient backdrop */}
          <div className="relative pb-8 pr-8 sm:pb-10 sm:pr-10">
            <div className="absolute bottom-0 left-12 right-0 top-12 overflow-hidden rounded-[32px] bg-gradient-to-br from-[#1879D8] via-[#0E4F95] to-[#061B35]">
              <div className="absolute inset-0" style={dots("rgba(255,255,255,0.35)", 18)} />
              <div className="absolute bottom-0 left-0 h-1.5 w-1/2 bg-[#FE8A01]" />
            </div>
            <div
              className="absolute -left-6 -top-6 h-28 w-28 opacity-80"
              style={{
                backgroundImage: "radial-gradient(circle, #FE8A01 2px, transparent 2px)",
                backgroundSize: "16px 16px",
              }}
            />

            <div className="relative h-[340px] overflow-hidden rounded-[28px] border-[6px] border-white shadow-[0_30px_70px_-20px_rgba(6,27,53,0.45)] sm:h-[440px]">
              <Image
                src="/imgs/truck3.jpg"
                alt="Auto transport truck on the road"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/70 to-transparent" />
              <div className="absolute inset-x-5 bottom-5 flex items-center gap-3 rounded-2xl border border-white/20 bg-white/10 px-5 py-4 backdrop-blur-md">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FE8A01] text-white">
                  <Target size={20} />
                </span>
                <p className="text-sm font-bold text-white">
                  You sell. We bring the customers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ BENEFITS ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#F5F8FC] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-60" style={dots("rgba(24,121,216,0.18)", 28)} />
        <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/10 blur-[120px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-8 bg-[#FE8A01]" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
                Why Digital Network
              </span>
              <span className="h-px w-8 bg-[#FE8A01]" />
            </div>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Lead Generation Built Around{" "}
              <span className="text-[#FE8A01]">Your Business</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Everything is designed to get your sales team in front of the right customers,
              faster.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, i) => {
              const Icon = benefit.icon;
              return (
                <article
                  key={benefit.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_-15px_rgba(6,27,53,0.15)] transition-all duration-500 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_25px_50px_-20px_rgba(6,27,53,0.35)]"
                >
                  <div className="absolute inset-0 translate-y-[101%] bg-gradient-to-br from-[#0E4F95] to-[#061B35] transition-transform duration-500 ease-out group-hover:translate-y-0" />
                  <span className="absolute right-6 top-4 text-6xl font-black text-[#061B35]/[0.05] transition-colors duration-500 group-hover:text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1879D8] to-[#0E4F95] text-white shadow-lg shadow-[#1879D8]/25 transition-all duration-500 group-hover:from-[#FE8A01] group-hover:to-[#E97900] group-hover:shadow-[#FE8A01]/30">
                      <Icon size={26} />
                    </div>
                    <h3 className="mt-6 text-xl font-extrabold text-[#061B35] transition-colors duration-500 group-hover:text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600 transition-colors duration-500 group-hover:text-white/75">
                      {benefit.description}
                    </p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-1 w-0 bg-[#FE8A01] transition-all duration-500 group-hover:w-full" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ PROCESS ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-[#1879D8]/25 blur-[140px]" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              From Quote Request to Your Phone
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              Three simple steps between a customer&apos;s inquiry and your next booking.
            </p>
          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            {/* Animated dotted connector (desktop) */}
            <div className="lg-flow absolute left-[17%] right-[17%] top-[64px] z-[1] hidden h-[6px] md:block" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center transition hover:-translate-y-1 hover:border-[#FE8A01]/40 hover:bg-white/[0.07]"
                >
                  <div className="relative z-[2] mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#061B35] ring-1 ring-white/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-white shadow-[0_10px_30px_-8px_rgba(254,138,1,0.8)]">
                      <Icon size={24} />
                    </span>
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-black text-[#061B35]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ CTA ═════════════════ */}
      <section className="relative isolate overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <Image src="/imgs/truck3.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FE8A01]/95 via-[#E97900]/90 to-[#061B35]/90" />
        <div className="absolute inset-0 -z-10 opacity-20" style={dots("#fff", 22)} />

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/80">
              Let&apos;s Get Started
            </p>
            <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-5xl">
              Ready for More Shipping Customers?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Talk to Digital Network about lead types, pricing and the best fit for your
              brokerage. No pressure, just clear answers.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#061B35] shadow-xl transition hover:-translate-y-0.5"
            >
              Talk to Our Team
              <ArrowRight size={18} className="text-[#FE8A01] transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/product-pricing"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}