import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  FileText,
  Gauge,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Star,
  User,
  Users,
} from "lucide-react";

/* WhatsApp number: digits only with country code (US = 1) */
const WHATSAPP_NUMBER = "17342622139";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Digital Network! I'm interested in Premium Leads."
)}`;

/* Same figures as the pricing page */
const PRICE = 5;
const MAX_BROKERS = 4;
const MIN_ORDER = 300;
const MIN_LEADS = Math.ceil(MIN_ORDER / PRICE);

const spectrum = [
  { icon: Users, name: "Shared", brokers: "Up to 10 brokers", price: "$2.75" },
  { icon: Star, name: "Premium", brokers: `Up to ${MAX_BROKERS} brokers`, price: `$${PRICE}`, active: true },
  { icon: ShieldCheck, name: "Exclusive", brokers: "1 broker only", price: "$20" },
];

const reasons = [
  {
    icon: Gauge,
    title: "Less Competition",
    text: `Each lead goes to ${MAX_BROKERS} brokers at most, so you're not fighting a crowd for every customer.`,
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    text: "Leads reach you soon after the customer asks for a quote, while interest is still high.",
  },
  {
    icon: FileText,
    title: "Useful Shipment Details",
    text: "When provided, you'll see the vehicle, route and timing so you can quote with confidence.",
  },
  {
    icon: BadgeCheck,
    title: "Fair Price Point",
    text: "More focused than shared leads, without the higher cost of fully exclusive ones.",
  },
];

const personas = [
  {
    icon: User,
    title: "Independent Brokers",
    text: "Get a steady flow of quality inquiries without paying exclusive prices.",
  },
  {
    icon: Rocket,
    title: "Growing Teams",
    text: "Keep a small sales team busy with leads that have less competition.",
  },
  {
    icon: Building2,
    title: "Established Operations",
    text: "Add premium leads next to your own marketing to keep the pipeline full.",
  },
];

const faqs = [
  {
    q: "What is a premium lead?",
    a: `A vehicle shipping quote request that is shared with no more than ${MAX_BROKERS} brokers. It sits between our shared and exclusive packages.`,
  },
  {
    q: "What's the minimum order?",
    a: `Orders start at $${MIN_ORDER}. At $${PRICE} per lead, that's ${MIN_LEADS} premium leads.`,
  },
  {
    q: "Can I order other lead types too?",
    a: "Yes. Many brokers combine premium leads with shared, exclusive or live call packages. Our team can help you plan the right mix.",
  },
  {
    q: "Are bookings guaranteed?",
    a: "No. Leads give your team the opportunity, but results depend on your follow-up speed, sales process and market conditions.",
  },
  {
    q: "Can prices change?",
    a: "Per-lead prices may change with demand and availability. We always confirm the current price with you before you order.",
  },
];

export default function Premiumleads() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#061B35]">
      {/* ═════════════════ HERO ═════════════════ */}
      <section className="relative isolate bg-gradient-to-b from-[#F5F8FC] to-white px-6 pb-24 pt-20 sm:px-10 lg:pb-32 lg:pt-28">
        <div className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[520px] w-[520px] rounded-full bg-[#FE8A01]/15 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 top-40 -z-10 h-[420px] w-[420px] rounded-full bg-[#1879D8]/10 blur-[130px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FE8A01]/30 bg-white px-4 py-2 text-sm font-bold text-[#E97900] shadow-sm">
              <Star size={15} className="fill-[#FE8A01] text-[#FE8A01]" />
              Premium Leads
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-[60px]">
              The Sweet Spot Between{" "}
              <span className="text-[#1879D8]">Price</span> and{" "}
              <span className="text-[#FE8A01]">Competition.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Premium leads from Digital Network are shared with only a few brokers, giving
              you a real shot at every customer without paying exclusive prices.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/product-pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FE8A01] px-8 py-4 font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.8)] transition hover:bg-[#E97900]"
              >
                Order Premium Leads
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 font-bold text-[#061B35] transition hover:border-[#25D366] hover:text-[#128C7E]"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Price ticket */}
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[32px] bg-[#FE8A01]" />
            <div className="relative overflow-hidden rounded-[32px] bg-[#061B35] p-8 text-white shadow-2xl sm:p-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1879D8]/40 blur-3xl" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em]">
                    Most Popular
                  </span>
                  <Star size={22} className="fill-[#FE8A01] text-[#FE8A01]" />
                </div>

                <p className="mt-8 text-sm font-semibold text-white/60">Premium lead</p>
                <p className="mt-1 flex items-baseline gap-2">
                  <span className="text-7xl font-black tracking-tight">${PRICE}</span>
                  <span className="text-lg font-semibold text-white/50">/ lead</span>
                </p>

                {/* Ticket tear line */}
                <div className="relative my-8 border-t-2 border-dashed border-white/15">
                  <span className="absolute -left-14 -top-4 h-8 w-8 rounded-full bg-[#F5F8FC]" />
                  <span className="absolute -right-14 -top-4 h-8 w-8 rounded-full bg-[#F5F8FC]" />
                </div>

                <ul className="space-y-3.5">
                  {[
                    `Shared with up to ${MAX_BROKERS} brokers`,
                    "Fast delivery after each quote request",
                    "Dedicated customer support",
                    `Min. order $${MIN_ORDER} (${MIN_LEADS} leads)`,
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-medium text-white/85">
                      <CheckCircle2 size={18} className="shrink-0 text-[#FE8A01]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ WHERE PREMIUM FITS ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Where Premium Fits
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Fewer Brokers Than Shared. Lower Cost Than Exclusive.
            </h2>
          </div>

          <div className="relative mt-14">
            {/* Spectrum bar */}
            <div className="absolute left-[16%] right-[16%] top-8 hidden h-1.5 rounded-full bg-gradient-to-r from-slate-200 via-[#FE8A01] to-[#061B35] md:block" />

            <div className="relative grid gap-5 md:grid-cols-3">
              {spectrum.map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.name} className="text-center">
                    <span
                      className={`relative mx-auto flex items-center justify-center rounded-full border-4 border-white shadow-lg ${
                        s.active
                          ? "h-16 w-16 bg-[#FE8A01] text-white shadow-[#FE8A01]/40"
                          : "h-16 w-16 bg-slate-100 text-slate-500"
                      }`}
                    >
                      <Icon size={24} className={s.active ? "fill-white" : ""} />
                    </span>
                    <div
                      className={`mt-5 rounded-2xl p-6 ${
                        s.active
                          ? "bg-[#061B35] text-white shadow-[0_25px_50px_-20px_rgba(6,27,53,0.5)] md:-mt-1 md:scale-105"
                          : "border border-slate-200 bg-white"
                      }`}
                    >
                      <p className={`text-lg font-extrabold ${s.active ? "text-[#FE8A01]" : ""}`}>
                        {s.name}
                        {s.active && (
                          <span className="ml-2 rounded-full bg-white/10 px-2 py-0.5 align-middle text-[10px] font-bold uppercase tracking-wider text-white/70">
                            This page
                          </span>
                        )}
                      </p>
                      <p className={`mt-1 text-3xl font-black ${s.active ? "text-white" : ""}`}>
                        {s.price}
                        <span className={`ml-1 text-sm font-semibold ${s.active ? "text-white/50" : "text-slate-400"}`}>
                          / lead
                        </span>
                      </p>
                      <p className={`mt-2 text-sm ${s.active ? "text-white/70" : "text-slate-500"}`}>
                        {s.brokers}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ WHY PREMIUM (bento) ═════════════════ */}
      <section className="bg-[#F5F8FC] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {/* Large intro card */}
          <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-[#1879D8] to-[#061B35] p-9 text-white lg:row-span-2">
            <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full border-[36px] border-white/10" />
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Why Premium
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight">
              Built for Brokers Who Want Better Odds
            </h2>
            <p className="mt-5 leading-relaxed text-white/75">
              Shared leads can feel like a race against a crowd. Premium leads narrow the
              field, so your quick call and good service have more room to win the booking.
            </p>
            <p className="mt-4 leading-relaxed text-white/75">
              It&apos;s a great starting point for brokerages that want quality without
              stretching their budget.
            </p>
            <Link
              href="/product-pricing"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#061B35] transition hover:-translate-y-0.5"
            >
              See all packages
              <ArrowRight size={16} className="text-[#FE8A01] transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group rounded-[28px] border border-slate-200/70 bg-white p-8 transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-25px_rgba(6,27,53,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FE8A01]/10 text-[#FE8A01] transition group-hover:rotate-6 group-hover:bg-[#FE8A01] group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{r.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ═════════════════ WHO IT'S FOR ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                Who It&apos;s For
              </p>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                A Good Fit for Most Brokerages
              </h2>
            </div>
            <p className="max-w-md text-slate-600">
              Whether you work alone or run a full sales floor, premium leads scale with you.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {personas.map((p, i) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 p-8 transition hover:border-[#1879D8]/40"
                >
                  <span className="absolute -right-3 -top-6 text-[120px] font-black leading-none text-[#1879D8]/[0.06] transition group-hover:text-[#1879D8]/10">
                    {i + 1}
                  </span>
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#061B35] text-white transition group-hover:bg-[#1879D8]">
                    <Icon size={24} />
                  </div>
                  <h3 className="relative mt-6 text-xl font-extrabold">{p.title}</h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{p.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ FAQ ═════════════════ */}
      <section className="bg-[#F5F8FC] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">FAQ</p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Premium Leads, Explained
            </h2>
            <p className="mt-4 text-slate-600">
              Still have a question? Our team is happy to help.
            </p>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-bold text-[#1879D8] hover:underline"
            >
              <MessageCircle size={18} />
              Chat with us
            </a>
          </div>

          <div className="space-y-3">
            {faqs.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className="group rounded-2xl border border-slate-200 bg-white px-6 py-5 transition open:border-[#FE8A01]/40 open:shadow-[0_15px_35px_-20px_rgba(6,27,53,0.3)]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold [&::-webkit-details-marker]:hidden">
                  {f.q}
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 transition group-open:rotate-180 group-open:bg-[#FE8A01] group-open:text-white">
                    <ChevronDown size={16} />
                  </span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ CTA ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-24">
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 overflow-hidden rounded-[32px] bg-gradient-to-r from-[#FE8A01] to-[#F59A1F] p-9 sm:p-12 lg:grid-cols-[1fr_auto]">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative">
            <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">
              Ready to Try Premium Leads?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-white/90">
              Start with {MIN_LEADS} leads for ${MIN_ORDER} and see how they work for your team.
            </p>
          </div>
          <div className="relative flex flex-col gap-3 sm:flex-row">
            <Link
              href="/product-pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#061B35] px-7 py-4 font-bold text-white transition hover:bg-[#0E2A4D]"
            >
              Order Now
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 font-bold text-[#061B35] transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}