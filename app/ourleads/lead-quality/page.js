import Image from "next/image";
import {
  ArrowRight,
  ChartNoAxesCombined,
  CheckCircle2,
  ClipboardCheck,
  Clock3,
  Handshake,
  Search,
  ShieldCheck,
  Target,
  Truck,
  UserRound,
  Users,
} from "lucide-react";

const challenges = [
  {
    icon: Search,
    title: "Customers Are Hard to Find",
    description:
      "Attracting shipping customers on your own takes time, marketing skill and steady investment. Buying leads gives you a faster way to reach people who already asked for a quote.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Marketing Costs Add Up",
    description:
      "Websites, ads, SEO and constant testing get expensive fast. Comparing lead costs with your current marketing helps you spend your budget where it works best.",
  },
  {
    icon: Clock3,
    title: "Timing Is Everything",
    description:
      "Shipping customers often decide quickly. A simple routine for receiving and calling new inquiries helps your team make the most of every lead.",
  },
];

const leadBenefits = [
  {
    icon: Truck,
    title: "Real Shipping Inquiries",
    description: "Leads come from people looking for vehicle transport, not random website traffic.",
  },
  {
    icon: ClipboardCheck,
    title: "Helpful Customer Details",
    description:
      "When provided, leads can include contact info, pickup and delivery locations, vehicle details and timing.",
  },
  {
    icon: Users,
    title: "Options for Every Team",
    description:
      "Shared, premium, exclusive, live call and specialty leads, so you can match your budget and capacity.",
  },
  {
    icon: Handshake,
    title: "Ready for Follow-Up",
    description:
      "Plug new inquiries straight into your sales workflow and start conversations right away.",
  },
];

const packages = [
  {
    icon: Users,
    name: "Shared",
    brokers: "Up to 10 brokers",
    level: 1,
    text: "Lowest cost per lead. Speed and strong follow-up matter most.",
  },
  {
    icon: UserRound,
    name: "Premium",
    brokers: "Up to 4 brokers",
    level: 2,
    text: "Less competition at a balanced price for growing teams.",
    featured: true,
  },
  {
    icon: ShieldCheck,
    name: "Exclusive",
    brokers: "1 broker only",
    level: 3,
    text: "Higher cost per lead, but every inquiry is yours alone.",
  },
];

const steps = [
  {
    title: "Pick Your Lead Type",
    description: "Choose a package that fits your budget, competition level and team size.",
  },
  {
    title: "Receive Your Leads",
    description:
      "Delivery and customer details depend on your package and the terms you confirm with us.",
  },
  {
    title: "Call Quickly",
    description: "Reach out fast, understand the shipment and explain your service clearly.",
  },
  {
    title: "Track Your Results",
    description:
      "Measure contact rates, quotes, bookings and cost per booking to see which package works best.",
  },
];

const dots = (color, size = 24) => ({
  backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
  backgroundSize: `${size}px ${size}px`,
});

function Eyebrow({ children, light, center }) {
  return (
    <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
      <span className="h-px w-10 bg-[#FE8A01]" />
      <span
        className={`text-xs font-bold uppercase tracking-[0.25em] ${
          light ? "text-[#FE8A01]" : "text-[#FE8A01]"
        }`}
      >
        {children}
      </span>
      {center && <span className="h-px w-10 bg-[#FE8A01]" />}
    </div>
  );
}

export default function LeadQuality() {
  return (
    <main className="overflow-hidden bg-white text-[#061B35]">
      <style>{`
        @keyframes lqDots { to { background-position-x: 16px; } }
        .lq-flow {
          background-image: radial-gradient(circle, #FE8A01 2px, transparent 2.5px);
          background-size: 16px 6px;
          background-repeat: repeat-x;
          background-position: 0 center;
          animation: lqDots .9s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) { .lq-flow { animation: none; } }
      `}</style>

      {/* ═════════════════ HERO ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35]">
        <Image src="/imgs/truck1.jpg" alt="" fill priority sizes="100vw" className="-z-30 object-cover" />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061B35] via-[#061B35]/90 to-[#061B35]/55" />
        <div className="absolute inset-0 -z-10 opacity-[0.12]" style={dots("#fff", 26)} />
        <div className="pointer-events-none absolute -right-32 -top-24 -z-10 h-[460px] w-[460px] rounded-full bg-[#FE8A01]/20 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 -z-10 h-[460px] w-[460px] rounded-full bg-[#1879D8]/25 blur-[130px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-8 md:py-32 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <ShieldCheck size={14} className="text-[#FE8A01]" />
              Lead Quality
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              What Makes a
              <span className="block bg-gradient-to-r from-[#FE8A01] to-[#FFB459] bg-clip-text text-transparent">
                Quality Lead?
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              A good lead is more than a name and a number. It&apos;s a real customer with a
              real shipment, delivered fast enough for you to make the call that wins the
              booking.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/60">
              Digital Network helps brokerages of every size add a steady stream of shipping
              inquiries to their existing marketing.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="/product-pricing"
                className="group inline-flex items-center gap-4 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                Explore Lead Packages
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>
              <a
                href="/contact"
                className="text-sm font-bold text-white underline decoration-white/30 underline-offset-4 transition hover:text-[#FE8A01] hover:decoration-[#FE8A01]"
              >
                Speak with our team
              </a>
            </div>
          </div>

          {/* Glass panel: the 4 ingredients */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-br from-[#FE8A01]/25 to-[#1879D8]/25 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/15 bg-white/[0.08] p-8 shadow-2xl backdrop-blur-xl sm:p-10">
              <div className="flex items-center gap-4">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-white shadow-lg shadow-[#FE8A01]/40">
                  <Target size={26} />
                </span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                    The formula
                  </p>
                  <h2 className="text-2xl font-extrabold text-white">A Quality Lead Has…</h2>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  ["Real intent", "A customer who actually needs shipping"],
                  ["Useful details", "Route, vehicle and contact info"],
                  ["Fast delivery", "Reaches you while interest is high"],
                  ["Clear terms", "You know how it's shared upfront"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 transition hover:border-[#FE8A01]/40"
                  >
                    <CheckCircle2 size={20} className="text-[#FE8A01]" />
                    <p className="mt-3 font-bold text-white">{title}</p>
                    <p className="mt-1 text-sm leading-snug text-white/60">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ CHALLENGES ═════════════════ */}
      <section className="relative px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#FE8A01]/[0.07] blur-[110px]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>The Business Challenge</Eyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              You Don&apos;t Have to Build{" "}
              <span className="text-[#FE8A01]">Every Lead Yourself</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              Marketing still matters, but it isn&apos;t the only way to grow. Lead packages
              work alongside SEO, ads and referrals to keep your pipeline full.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {challenges.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-8 shadow-[0_10px_30px_-15px_rgba(6,27,53,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-20px_rgba(6,27,53,0.3)]"
                >
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-[#FE8A01] to-[#1879D8] transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="absolute right-6 top-5 text-5xl font-black text-[#061B35]/[0.05]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FE8A01]/10 text-[#FE8A01] transition-colors duration-300 group-hover:bg-[#FE8A01] group-hover:text-white">
                    <Icon size={26} />
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold">{item.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ WHAT YOU GET ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#F5F8FC] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-60" style={dots("rgba(24,121,216,0.18)", 28)} />
        <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#1879D8]/10 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow>What You Can Expect</Eyebrow>
            <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
              What Our Leads Bring to <span className="text-[#FE8A01]">Your Business</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Every lead gives your sales team a warm starting point. Depending on the
              package, you may know the customer&apos;s vehicle, route and timing before you
              even pick up the phone.
            </p>

            <div className="mt-6 flex gap-4 rounded-2xl border border-[#1879D8]/15 bg-white p-5 shadow-sm">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1879D8]/10">
                <ChartNoAxesCombined size={20} className="text-[#1879D8]" />
              </span>
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-bold text-[#061B35]">Good to know:</span> lead quality,
                intent and contactability can vary. Confirm package details and track your
                results to find the best fit for your operation.
              </p>
            </div>

            <a
              href="/product-pricing"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl border-2 border-[#061B35] px-6 py-3 text-sm font-bold text-[#061B35] transition hover:bg-[#061B35] hover:text-white"
            >
              Compare Packages
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {leadBenefits.map((item, i) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className={`group rounded-3xl border border-slate-200/70 bg-white p-7 shadow-[0_10px_30px_-15px_rgba(6,27,53,0.15)] transition-all duration-300 hover:-translate-y-1 hover:border-[#1879D8]/30 hover:shadow-[0_25px_50px_-20px_rgba(6,27,53,0.3)] ${
                    i % 2 === 1 ? "sm:translate-y-8" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1879D8] to-[#0E4F95] text-white shadow-lg shadow-[#1879D8]/25 transition-all duration-300 group-hover:from-[#FE8A01] group-hover:to-[#E97900]">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ PACKAGE COMPARISON ═════════════════ */}
      <section className="px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#061B35] shadow-[0_40px_100px_-30px_rgba(6,27,53,0.5)]">
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[420px] w-[420px] rounded-full bg-[#1879D8]/25 blur-[120px]" />

          <div className="grid gap-12 p-8 sm:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-16">
            <div>
              <Eyebrow light>Shared vs. Exclusive</Eyebrow>
              <h2 className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl">
                Pick the Balance That Fits Your Team
              </h2>
              <p className="mt-5 leading-relaxed text-white/65">
                Shared leads keep your cost per lead low but other brokers may call the same
                customer, so speed is key. Exclusive leads cost more but remove that
                competition.
              </p>
              <p className="mt-4 leading-relaxed text-white/65">
                Digital Network offers several package types so you can find the right mix of
                price, sharing and follow-up capacity.
              </p>
              <a
                href="/product-pricing"
                className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                View Lead Pricing
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>
            </div>

            <div className="space-y-4">
              {packages.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.name}
                    className={`flex items-center gap-5 rounded-2xl border p-5 transition hover:-translate-y-0.5 ${
                      p.featured
                        ? "border-[#FE8A01]/50 bg-[#FE8A01]/10"
                        : "border-white/10 bg-white/[0.05] hover:border-white/25"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                        p.featured ? "bg-[#FE8A01] text-white" : "bg-white/10 text-white"
                      }`}
                    >
                      <Icon size={22} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-extrabold text-white">{p.name} Leads</h3>
                        <span className="text-xs font-bold text-[#FE8A01]">{p.brokers}</span>
                      </div>
                      <p className="mt-1 text-sm text-white/60">{p.text}</p>
                      {/* Exclusivity meter */}
                      <div className="mt-3 flex gap-1.5" aria-label={`Exclusivity ${p.level} of 3`}>
                        {[1, 2, 3].map((n) => (
                          <span
                            key={n}
                            className={`h-1.5 flex-1 rounded-full ${
                              n <= p.level ? "bg-[#FE8A01]" : "bg-white/10"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
              <p className="pt-1 text-xs text-white/40">Bar shows how exclusive each lead is.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ WORKFLOW ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#F5F8FC] px-6 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="absolute inset-0 -z-10 opacity-60" style={dots("rgba(24,121,216,0.18)", 28)} />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow center>Make Every Lead Count</Eyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Turn Leads Into a <span className="text-[#FE8A01]">Repeatable Process</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              A simple routine helps your team respond fast, follow up well and see what&apos;s
              working over time.
            </p>
          </div>

          <div className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lq-flow absolute left-[12%] right-[12%] top-[36px] z-0 hidden h-[6px] lg:block" />
            {steps.map((step, i) => (
              <article
                key={step.title}
                className="group relative rounded-3xl border border-slate-200/70 bg-white p-7 pt-0 text-center shadow-[0_10px_30px_-15px_rgba(6,27,53,0.15)] mt-9 transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-20px_rgba(6,27,53,0.3)]"
              >
                <span className="relative z-10 mx-auto -mt-0 flex h-[72px] w-[72px] -translate-y-9 items-center justify-center rounded-full border-[6px] border-[#F5F8FC] bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-xl font-black text-white shadow-[0_10px_25px_-8px_rgba(254,138,1,0.8)] transition-transform group-hover:scale-110">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="-mt-3 text-lg font-extrabold">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ FINAL CTA ═════════════════ */}
      <section className="relative isolate overflow-hidden px-6 py-20 sm:px-8 lg:px-10 lg:py-24">
        <Image src="/imgs/truck1.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FE8A01]/95 via-[#E97900]/90 to-[#061B35]/90" />
        <div className="absolute inset-0 -z-10 opacity-20" style={dots("#fff", 22)} />

        <div className="mx-auto max-w-4xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-white ring-1 ring-white/30 backdrop-blur">
            <Handshake size={30} />
          </span>
          <h2 className="mt-6 text-3xl font-black leading-tight text-white sm:text-5xl">
            Find the Lead Package That Fits
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            Our team will walk you through package differences, pricing and delivery so you
            can order with confidence.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/product-pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#061B35] shadow-xl transition hover:-translate-y-0.5"
            >
              Browse Lead Packages
              <ArrowRight size={18} className="text-[#FE8A01] transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Contact Digital Network
            </a>
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-xs leading-5 text-white/70">
            Lead availability, sharing limits, customer details and delivery terms depend on
            the package. Buying leads does not guarantee bookings or conversion rates.
          </p>
        </div>
      </section>
    </main>
  );
}