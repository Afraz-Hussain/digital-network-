import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Globe,
  Headphones,
  Home,
  MessageCircle,
  PackageCheck,
  Plane,
  Search,
  Ship,
  Users,
  Zap,
} from "lucide-react";

/* WhatsApp number: digits only with country code (US = 1) */
const WHATSAPP_NUMBER = "17342622139";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Digital Network! I'm interested in International Leads."
)}`;
const MIN_ORDER = 300;

/* Same figures as the pricing page */
const passes = [
  {
    code: "SHR",
    name: "Shared International",
    price: 2.5,
    brokers: "Up to 4 brokers",
    note: "An affordable way into international shipping for teams ready for a competitive market.",
  },
  {
    code: "EXC",
    name: "Exclusive International",
    price: 10,
    brokers: "1 broker only",
    note: "Delivered to you alone, for brokerages building a focused overseas pipeline.",
    featured: true,
  },
];

const customers = [
  {
    icon: Ship,
    title: "Vehicle Exports",
    text: "Customers sending a car from the U.S. to another country.",
  },
  {
    icon: PackageCheck,
    title: "Vehicle Imports",
    text: "Customers bringing a vehicle into the U.S. from overseas.",
  },
  {
    icon: Home,
    title: "Overseas Moves",
    text: "People relocating abroad who want their vehicle to come with them.",
  },
];

const perks = [
  { icon: Users, title: "Limited Sharing", text: "Up to 4 brokers on shared, just 1 on exclusive." },
  { icon: Zap, title: "Fast Delivery", text: "Leads reach you soon after the customer reaches out." },
  { icon: Search, title: "Focused Marketing", text: "We target people researching international car shipping." },
  { icon: Headphones, title: "Real Support", text: "Our team helps you pick the right package and volume." },
];

const steps = [
  { icon: Search, title: "Customer Researches", text: "Someone looks into shipping a vehicle overseas." },
  { icon: Globe, title: "Finds Our Campaigns", text: "They reach our international shipping marketing." },
  { icon: BadgeCheck, title: "Requests a Quote", text: "They share their details and ask to be contacted." },
  { icon: Zap, title: "Delivered to You", text: "The lead is sent to your team to follow up." },
];

/* Simple decorative route map (illustration, not a real map) */
function RouteMap() {
  const pins = [
    { x: 90, y: 150, label: "USA" },
    { x: 300, y: 95, label: "Europe" },
    { x: 335, y: 250, label: "Africa" },
    { x: 470, y: 135, label: "Asia" },
    { x: 500, y: 300, label: "Australia" },
  ];
  const routes = [
    "M90 150 Q195 40 300 95",
    "M90 150 Q215 300 335 250",
    "M90 150 Q280 -10 470 135",
    "M90 150 Q300 420 500 300",
  ];
  return (
    <svg viewBox="0 0 560 360" className="h-auto w-full" aria-hidden="true">
      <defs>
        <pattern id="dn-dots" width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.4" fill="rgba(255,255,255,0.12)" />
        </pattern>
        <radialGradient id="dn-glow">
          <stop offset="0%" stopColor="#FE8A01" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FE8A01" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="560" height="360" rx="24" fill="url(#dn-dots)" />
      {routes.map((d, i) => (
        <g key={d}>
          <path d={d} fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="2" />
          <path
            d={d}
            fill="none"
            stroke="#FE8A01"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="6 10"
            className="il-route"
            style={{ animationDelay: `${i * 0.4}s` }}
          />
        </g>
      ))}
      {pins.map((p, i) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="22" fill="url(#dn-glow)" opacity={i === 0 ? 0.9 : 0.5} />
          <circle cx={p.x} cy={p.y} r={i === 0 ? 8 : 6} fill={i === 0 ? "#FE8A01" : "#fff"} />
          <text
            x={p.x}
            y={p.y - 16}
            textAnchor="middle"
            fontSize="12"
            fontWeight="700"
            fill={i === 0 ? "#FE8A01" : "rgba(255,255,255,0.75)"}
          >
            {p.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function InternationalLeadsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#061B35]">
      <style>{`
        @keyframes ilDash { to { stroke-dashoffset: -64; } }
        .il-route { animation: ilDash 2.2s linear infinite; }
        @keyframes ilFly { 0% { left: 0%; } 100% { left: 100%; } }
        .il-plane { animation: ilFly 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .il-route, .il-plane { animation: none; } }
      `}</style>

      {/* ═════════════════ HERO ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35] px-6 pb-20 pt-20 sm:px-10 lg:pb-28 lg:pt-28">
        <div className="pointer-events-none absolute -left-40 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#1879D8]/30 blur-[140px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/20 blur-[130px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              <Globe size={14} className="text-[#FE8A01]" />
              International Leads
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[58px]">
              Customers Shipping Cars{" "}
              <span className="text-[#FE8A01]">Across Borders.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Digital Network connects international auto transport brokers with people
              shipping vehicles overseas. Choose shared or exclusive leads and grow your global
              business.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/product-pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FE8A01] px-8 py-4 font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                Order International Leads
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Talk to Our Team
              </a>
            </div>
          </div>

          <div className="relative rounded-[28px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur sm:p-6">
            <RouteMap />
            <div className="mt-2 flex items-center justify-between px-2 text-xs text-white/40">
              <span className="flex items-center gap-2">
                <Plane size={14} className="text-[#FE8A01]" />
                Overseas vehicle shipping
              </span>
              <span>Illustration</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ BOARDING-PASS PACKAGES ═════════════════ */}
      <section className="bg-[#F5F8FC] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Pick Your Package
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Two Ways to Go International
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Both packages have a ${MIN_ORDER} minimum order.
            </p>
          </div>

          <div className="mt-14 space-y-6">
            {passes.map((p) => {
              const minLeads = Math.ceil(MIN_ORDER / p.price);
              return (
                <div
                  key={p.code}
                  className={`group flex flex-col overflow-hidden rounded-[28px] shadow-[0_25px_50px_-25px_rgba(6,27,53,0.35)] transition hover:-translate-y-1 md:flex-row ${
                    p.featured ? "ring-2 ring-[#FE8A01]" : "ring-1 ring-slate-200"
                  }`}
                >
                  {/* Main pass */}
                  <div className="flex-1 bg-white p-7 sm:p-9">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                        Digital Network · Lead Pass
                      </span>
                      {p.featured && (
                        <span className="rounded-full bg-[#FE8A01] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                          Most Popular
                        </span>
                      )}
                    </div>

                    <div className="mt-6 flex items-center gap-4 sm:gap-6">
                      <div>
                        <p className="text-3xl font-black sm:text-4xl">CUST</p>
                        <p className="text-xs font-semibold text-slate-400">Customer abroad</p>
                      </div>
                      <div className="relative h-px flex-1 border-t-2 border-dashed border-slate-300">
                        <Plane
                          size={20}
                          className="il-plane absolute -top-[11px] -translate-x-1/2 text-[#FE8A01]"
                        />
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-black sm:text-4xl">YOU</p>
                        <p className="text-xs font-semibold text-slate-400">Your brokerage</p>
                      </div>
                    </div>

                    <div className="mt-7 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6 sm:grid-cols-3">
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Package
                        </p>
                        <p className="mt-1 font-extrabold">{p.name}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Sharing
                        </p>
                        <p className="mt-1 font-extrabold">{p.brokers}</p>
                      </div>
                      <div className="col-span-2 sm:col-span-1">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                          Minimum
                        </p>
                        <p className="mt-1 font-extrabold">{minLeads} leads</p>
                      </div>
                    </div>
                    <p className="mt-5 text-sm leading-relaxed text-slate-500">{p.note}</p>
                  </div>

                  {/* Stub */}
                  <div
                    className={`relative flex flex-col justify-between gap-6 border-t-2 border-dashed p-7 sm:p-9 md:w-72 md:border-l-2 md:border-t-0 ${
                      p.featured
                        ? "border-[#FE8A01]/40 bg-[#061B35] text-white"
                        : "border-slate-200 bg-white"
                    }`}
                  >
                    <span className="absolute -left-4 -top-4 hidden h-8 w-8 rounded-full bg-[#F5F8FC] md:block" />
                    <span className="absolute -bottom-4 -left-4 hidden h-8 w-8 rounded-full bg-[#F5F8FC] md:block" />
                    <div>
                      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${p.featured ? "text-[#FE8A01]" : "text-slate-400"}`}>
                        {p.code}
                      </p>
                      <p className="mt-2 flex items-baseline gap-1">
                        <span className="text-5xl font-black tracking-tight">${p.price.toFixed(p.price % 1 ? 2 : 0)}</span>
                        <span className={`text-sm font-semibold ${p.featured ? "text-white/50" : "text-slate-400"}`}>
                          / lead
                        </span>
                      </p>
                    </div>
                    <Link
                      href="/product-pricing"
                      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 font-bold transition ${
                        p.featured
                          ? "bg-[#FE8A01] text-white hover:bg-[#E97900]"
                          : "bg-[#061B35] text-white hover:bg-[#FE8A01]"
                      }`}
                    >
                      Order Now
                      <ArrowRight size={17} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Prices may change with demand and availability and are confirmed before every order.
          </p>
        </div>
      </section>

      {/* ═════════════════ WHO THE CUSTOMERS ARE ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                Who You&apos;ll Talk To
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Real People With Overseas Shipments
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600">
              International shipping customers often have more questions about paperwork, ports
              and timelines. A broker who knows the process can make a big difference.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {customers.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#061B35] to-[#0E4F95] p-8 text-white transition hover:-translate-y-1"
                >
                  <Icon
                    size={140}
                    strokeWidth={1}
                    className="pointer-events-none absolute -bottom-6 -right-6 text-white/[0.06] transition group-hover:text-white/10"
                  />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FE8A01] shadow-lg shadow-[#FE8A01]/30">
                    <Icon size={26} />
                  </span>
                  <h3 className="relative mt-6 text-2xl font-extrabold">{c.title}</h3>
                  <p className="relative mt-2 text-white/70">{c.text}</p>
                </div>
              );
            })}
          </div>

          {/* Perks strip */}
          <div className="mt-6 grid gap-px overflow-hidden rounded-3xl bg-slate-200 ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="bg-white p-7">
                  <Icon size={22} className="text-[#1879D8]" />
                  <h3 className="mt-4 font-extrabold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ PROCESS ═════════════════ */}
      <section className="bg-[#F5F8FC] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              The Journey
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              From Their Search to Your Sales Team
            </h2>
          </div>

          <div className="relative mt-16">
            <div className="absolute left-[12%] right-[12%] top-7 hidden border-t-2 border-dashed border-[#1879D8]/30 md:block">
              <Plane size={22} className="il-plane absolute -top-[12px] -translate-x-1/2 text-[#FE8A01]" />
            </div>

            <div className="grid gap-10 md:grid-cols-4 md:gap-6">
              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <div key={s.title} className="relative text-center">
                    <span className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#F5F8FC] bg-[#061B35] text-white shadow-lg">
                      <Icon size={22} />
                    </span>
                    <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                      Stop {i + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-extrabold">{s.title}</h3>
                    <p className="mx-auto mt-2 max-w-[220px] text-sm leading-relaxed text-slate-600">
                      {s.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ CTA ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[#061B35] p-9 sm:p-14">
          <Globe
            size={380}
            strokeWidth={0.6}
            className="pointer-events-none absolute -right-24 -top-24 text-white/[0.06]"
          />
          <div className="pointer-events-none absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#FE8A01]/25 blur-[100px]" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                Ready to Grow <span className="text-[#FE8A01]">Worldwide?</span>
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/70">
                Tell us about your international routes and we&apos;ll help you pick the right
                package and volume.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/product-pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE8A01] px-8 py-4 font-bold text-white transition hover:bg-[#E97900]"
                >
                  View Packages
                  <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-8 py-4 font-bold text-[#061B35] transition hover:-translate-y-0.5"
                >
                  <MessageCircle size={18} className="text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
            </div>

            <ul className="space-y-3">
              {[
                "Shared & exclusive international options",
                "Fast lead delivery",
                "Focused international marketing",
                `$${MIN_ORDER} minimum order`,
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3.5 text-sm font-medium text-white/85"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-[#FE8A01]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-slate-400">
          Leads create sales opportunities but do not guarantee bookings. Results depend on your
          follow-up, sales process and market conditions.
        </p>
      </section>
    </main>
  );
}