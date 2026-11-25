import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  Headphones,
  Lock,
  MessageCircle,
  PhoneCall,
  Truck,
  User,
  X,
} from "lucide-react";

/* WhatsApp number: digits only with country code (US = 1) */
const WHATSAPP_NUMBER = "17342622139";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Digital Network! I'm interested in Exclusive Leads."
)}`;
const MIN_ORDER = 300;

/* Same figures as the pricing page */
const tiers = [
  { name: "Shared", brokers: 10, price: "$2.75" },
  { name: "Premium", brokers: 4, price: "$5" },
  { name: "Exclusive", brokers: 1, price: "$20", you: true },
];

const packages = [
  {
    icon: Truck,
    name: "Domestic Exclusive",
    price: 20,
    text: "Customers shipping vehicles within the U.S., delivered to you alone.",
  },
  {
    icon: Globe,
    name: "International Exclusive",
    price: 10,
    text: "Customers shipping vehicles overseas, delivered to you alone.",
  },
];

const without = [
  "Several brokers call the same customer",
  "The customer compares quotes from everyone",
  "You race to call first, every single time",
  "Price often becomes the only thing that matters",
];

const withExclusive = [
  "The lead goes to one broker: you",
  "You can take time to understand the shipment",
  "Your service and expertise can make the sale",
  "Every follow-up is your own conversation",
];

const benefits = [
  {
    icon: Lock,
    title: "Yours Alone",
    text: "Each exclusive lead is sent to a single broker. Nobody else from Digital Network gets the same contact.",
  },
  {
    icon: PhoneCall,
    title: "A Calmer First Call",
    text: "Without a crowd of callers, you can focus on listening and giving a thoughtful quote instead of rushing.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    text: "Leads reach you soon after a customer requests a quote, while their interest is still high.",
  },
  {
    icon: FileText,
    title: "Shipment Details Included",
    text: "When the customer provides them, you'll see vehicle, route and timing details before you call.",
  },
  {
    icon: Headphones,
    title: "Real Support",
    text: "Our team helps you understand your package and get the most out of every lead you receive.",
  },
];

export default function ExclusiveLeadsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#061B35]">
      <style>{`
        @keyframes exGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(254,138,1,.55); } 50% { box-shadow: 0 0 0 10px rgba(254,138,1,0); } }
        .ex-you { animation: exGlow 2s ease-out infinite; }
        @media (prefers-reduced-motion: reduce) { .ex-you { animation: none; } }
      `}</style>

      {/* ═════════════════ HERO ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35] px-6 py-24 sm:px-10 lg:py-32">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-[520px] w-[520px] rounded-full bg-[#FE8A01]/20 blur-[140px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 -z-10 h-[480px] w-[480px] rounded-full bg-[#1879D8]/25 blur-[140px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FE8A01] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white">
              <Lock size={14} />
              Exclusive Leads
            </span>

            <h1 className="mt-7 text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              One Lead.
              <br />
              One Broker.
              <br />
              <span className="text-[#FE8A01]">You.</span>
            </h1>

            <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/65">
              Exclusive leads from Digital Network go to a single broker. No other companies
              calling the same customer, just a direct conversation with someone who wants to
              ship a vehicle.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/product-pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FE8A01] px-8 py-4 font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                Order Exclusive Leads
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Talk to Our Team
              </a>
            </div>
          </div>

          {/* "Who calls this customer?" visual */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.04] p-7 backdrop-blur sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">
              Who calls this customer?
            </p>

            <div className="mt-7 space-y-6">
              {tiers.map((t) => (
                <div key={t.name}>
                  <div className="flex items-center justify-between">
                    <p className={`font-bold ${t.you ? "text-[#FE8A01]" : "text-white"}`}>
                      {t.name}
                    </p>
                    <p className="text-sm text-white/50">
                      {t.brokers === 1 ? "1 broker" : `Up to ${t.brokers} brokers`} · {t.price}/lead
                    </p>
                  </div>
                  <div
                    className={`mt-3 flex flex-wrap gap-2 rounded-2xl p-3 ${
                      t.you ? "bg-[#FE8A01]/10 ring-1 ring-[#FE8A01]/40" : "bg-white/[0.03]"
                    }`}
                  >
                    {Array.from({ length: t.brokers }).map((_, i) =>
                      t.you ? (
                        <span
                          key={i}
                          className="ex-you inline-flex items-center gap-2 rounded-full bg-[#FE8A01] py-1.5 pl-1.5 pr-4 text-sm font-bold text-white"
                        >
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#FE8A01]">
                            <User size={15} />
                          </span>
                          Only you
                        </span>
                      ) : (
                        <span
                          key={i}
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/50"
                        >
                          <User size={16} />
                        </span>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ WITHOUT vs WITH ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Why It Matters
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Stop Racing the Crowd
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              With shared leads, you never know how many other brokers are calling. Exclusive
              leads change how the first conversation starts.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Crowded lead
              </p>
              <h3 className="mt-2 text-2xl font-extrabold text-slate-500">Everyone calls</h3>
              <ul className="mt-7 space-y-4">
                {without.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-500">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-200">
                      <X size={14} className="text-slate-500" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative overflow-hidden rounded-3xl bg-[#061B35] p-8 text-white shadow-[0_30px_60px_-25px_rgba(6,27,53,0.55)] sm:p-10">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FE8A01]/25 blur-3xl" />
              <p className="relative text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                Exclusive lead
              </p>
              <h3 className="relative mt-2 text-2xl font-extrabold">Only you call</h3>
              <ul className="relative mt-7 space-y-4">
                {withExclusive.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <CheckCircle2 size={22} className="mt-0.5 shrink-0 text-[#FE8A01]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ BENEFITS (sticky list) ═════════════════ */}
      <section className="bg-[#F5F8FC] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              What You Get
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              What Exclusive Means for Your Business
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              When a customer hears from just one broker, the relationship starts on a better
              footing.
            </p>
            <Link
              href="/product-pricing"
              className="group mt-8 inline-flex items-center gap-2 font-bold text-[#1879D8]"
            >
              See pricing
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="divide-y divide-slate-200 rounded-3xl bg-white px-7 shadow-[0_20px_50px_-30px_rgba(6,27,53,0.35)] ring-1 ring-slate-200/70 sm:px-10">
            {benefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="group flex gap-6 py-8">
                  <div className="flex flex-col items-center">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#061B35] text-white transition group-hover:bg-[#FE8A01]">
                      <Icon size={24} />
                    </span>
                    <span className="mt-2 text-xs font-bold text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold">{b.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ PACKAGES ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Exclusive Packages
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Domestic or International
            </h2>
            <p className="mt-4 text-slate-600">
              Both are delivered to one broker only. Minimum order is ${MIN_ORDER}.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {packages.map((p) => {
              const Icon = p.icon;
              const minLeads = Math.ceil(MIN_ORDER / p.price);
              return (
                <div
                  key={p.name}
                  className="group relative overflow-hidden rounded-3xl border-2 border-slate-200 p-8 transition hover:border-[#FE8A01] sm:p-10"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FE8A01]/10 text-[#FE8A01] transition group-hover:bg-[#FE8A01] group-hover:text-white">
                      <Icon size={26} />
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#061B35] px-3 py-1 text-xs font-bold text-white">
                      <Lock size={12} />1 broker
                    </span>
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold">{p.name}</h3>
                  <p className="mt-2 text-slate-600">{p.text}</p>
                  <p className="mt-6 flex items-baseline gap-1.5">
                    <span className="text-5xl font-black tracking-tight">${p.price}</span>
                    <span className="font-semibold text-slate-400">/ lead</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Minimum {minLeads} leads (${MIN_ORDER})
                  </p>
                  <Link
                    href="/product-pricing"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#061B35] px-6 py-4 font-bold text-white transition group-hover:bg-[#FE8A01]"
                  >
                    Order {p.name}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Prices may change with demand and availability. We confirm the current price with
            you before every order.
          </p>
        </div>
      </section>

      {/* ═════════════════ CTA ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35] px-6 py-20 sm:px-10 lg:py-24">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FE8A01]/20 blur-[120px]" />

        <div className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FE8A01] text-white shadow-[0_15px_35px_-10px_rgba(254,138,1,0.8)]">
            <Lock size={28} />
          </span>
          <h2 className="mt-7 text-3xl font-black leading-tight text-white sm:text-5xl">
            Stop Guessing. <span className="text-[#FE8A01]">Start Closing.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/65">
            Give your team a direct path to the customer. Talk to us about exclusive leads for
            your brokerage.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/product-pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE8A01] px-8 py-4 font-bold text-white transition hover:bg-[#E97900]"
            >
              Order Exclusive Leads
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
          <p className="mx-auto mt-8 max-w-xl text-xs leading-5 text-white/40">
            Exclusive leads remove competition from other Digital Network clients but do not
            guarantee bookings. Results depend on your follow-up and sales process.
          </p>
        </div>
      </section>
    </main>
  );
}