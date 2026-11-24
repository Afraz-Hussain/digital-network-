"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Flame,
  Globe,
  Headphones,
  Minus,
  PhoneCall,
  Plus,
  ShieldCheck,
  Ship,
  Sparkles,
  Truck,
  UserRound,
  Users,
  Wallet,
  Layers,
  Tag,
  MessageCircle,
} from "lucide-react";

/* WhatsApp number: digits only with country code (US = 1) */
const WHATSAPP_NUMBER = "17342622139";
const MINIMUM_ORDER = 300;

const pricingSections = [
  {
    id: "domestic",
    tab: "Domestic Leads",
    title: "Domestic Car Transport Leads",
    subtitle: "Customers shipping vehicles within the U.S.",
    icon: Truck,
    products: [
      {
        id: "cheap-shared",
        name: "Shared Leads",
        price: 2.75,
        brokers: "Shared with up to 10 brokers",
        icon: Users,
        description:
          "The most budget-friendly option. Best for experienced sales teams that can call fast and follow up consistently.",
        featured: false,
      },
      {
        id: "premium",
        name: "Premium Leads",
        price: 5,
        brokers: "Shared with up to 4 brokers",
        icon: UserRound,
        description:
          "A balanced choice for small and midsized brokerages that want less competition at a fair price.",
        featured: true,
      },
      {
        id: "exclusive",
        name: "Exclusive Leads",
        price: 20,
        brokers: "Sent to 1 broker only",
        icon: ShieldCheck,
        description:
          "Every lead is yours alone. Ideal if you want the full chance to win each customer without other brokers calling.",
        featured: false,
      },
    ],
  },
  {
    id: "calls",
    tab: "Live Calls",
    title: "Domestic Car Shipping Calls",
    subtitle: "Talk to customers live, the moment they call.",
    icon: PhoneCall,
    products: [
      {
        id: "live-calls",
        name: "Live Transfer Calls",
        price: 25,
        unit: "calls",
        brokers: "Sent to 1 broker only",
        icon: PhoneCall,
        description:
          "Customers are connected straight to your team by phone. Perfect for brokers who close best in a live conversation and can answer quickly.",
        featured: true,
      },
    ],
  },
  {
    id: "specialty",
    tab: "Specialty",
    title: "Specialty Shipping Leads",
    subtitle: "Heavy equipment, RVs and boats.",
    icon: Ship,
    hot: true,
    products: [
      {
        id: "heavy-haul",
        name: "Heavy Haul Leads",
        price: 25,
        brokers: "Sent to 1 broker only",
        icon: Truck,
        extra: "Heavy equipment, RV & boat transport",
        description:
          "Specialized shipments that often come with different pricing and stronger margins. Great for brokers with the right carrier network.",
        featured: false,
        specialty: true,
      },
    ],
  },
  {
    id: "international",
    tab: "International",
    title: "International Auto Shipping Leads",
    subtitle: "Customers shipping vehicles overseas.",
    icon: Globe,
    products: [
      {
        id: "international-shared",
        name: "Shared International",
        price: 2.5,
        brokers: "Shared with up to 4 brokers",
        icon: Users,
        description:
          "An affordable way into international shipping for brokers ready to handle a competitive market.",
        featured: false,
      },
      {
        id: "international-exclusive",
        name: "Exclusive International",
        price: 10,
        brokers: "Sent to 1 broker only",
        icon: ShieldCheck,
        description:
          "International leads delivered to you alone, for brokerages building a focused overseas sales pipeline.",
        featured: true,
      },
    ],
  },
];

/* Facts taken from the pricing data — no invented numbers */
const highlights = [
  { icon: Layers, value: "7", label: "Lead Packages" },
  { icon: Tag, value: "$2.50", label: "Starting Per Lead" },
  { icon: ShieldCheck, value: "1 Broker", label: "Exclusive Options" },
  { icon: Wallet, value: "$300", label: "Minimum Order" },
];

const steps = [
  {
    icon: Layers,
    title: "Choose Your Leads",
    description:
      "Compare domestic, specialty and international packages and pick what fits your team and budget.",
  },
  {
    icon: MessageCircle,
    title: "Send Your Order",
    description:
      "Set your quantity, check the estimated total and send your order to us on WhatsApp in one click.",
  },
  {
    icon: CheckCircle2,
    title: "Confirm & Start Closing",
    description:
      "We confirm pricing, availability and delivery details, then your leads start coming in.",
  },
];

const money = (amount) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  });

const minQty = (price) => Math.ceil(MINIMUM_ORDER / price);

const dotBg = (color, size = 24) => ({
  backgroundImage: `radial-gradient(circle, ${color} 1px, transparent 1px)`,
  backgroundSize: `${size}px ${size}px`,
});

/* ───────────────────────── Quantity calculator ───────────────────────── */
function Calculator({ product, value, onChange, onCommit }) {
  const min = minQty(product.price);
  const qty = Math.max(min, Number(value) || 0);
  const total = qty * product.price;

  return (
    <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-5">
      <div className="flex items-center justify-between">
        <label htmlFor={`qty-${product.id}`} className="text-sm font-bold text-[#061B35]">
          How many {product.unit || "leads"}?
        </label>
        <span className="text-xs text-slate-400">Min. {min}</span>
      </div>

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={qty <= min}
          onClick={() => onCommit(qty - 1)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-[#FE8A01] hover:text-[#FE8A01] disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Minus size={16} />
        </button>
        <input
          id={`qty-${product.id}`}
          type="number"
          inputMode="numeric"
          min={min}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onBlur={() => onCommit(qty)}
          className="h-11 w-full min-w-0 rounded-xl border border-slate-200 bg-white px-3 text-center text-lg font-extrabold text-[#061B35] outline-none transition focus:border-[#FE8A01] focus:ring-4 focus:ring-[#FE8A01]/10"
        />
        <button
          type="button"
          aria-label="Increase quantity"
          onClick={() => onCommit(qty + 1)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-[#FE8A01] hover:text-[#FE8A01]"
        >
          <Plus size={16} />
        </button>
      </div>

      <div className="mt-4 flex items-end justify-between border-t border-dashed border-slate-200 pt-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            Estimated total
          </p>
          <p className="text-2xl font-black text-[#061B35]">{money(total)}</p>
        </div>
        <span className="rounded-full bg-[#FE8A01]/10 px-3 py-1 text-xs font-bold text-[#FE8A01]">
          {qty} {product.unit || "leads"}
        </span>
      </div>
    </div>
  );
}

/* ───────────────────────── Product card ───────────────────────── */
function ProductCard({ product, wide, value, onChange, onCommit, onOrder }) {
  const Icon = product.icon;
  const featured = product.featured;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-[28px] p-[2px] transition-all duration-300 hover:-translate-y-1.5 ${
        featured
          ? "bg-gradient-to-br from-[#FE8A01] via-[#FFB459] to-[#1879D8] shadow-[0_30px_60px_-25px_rgba(254,138,1,0.55)]"
          : "bg-slate-200/70 shadow-[0_20px_45px_-25px_rgba(6,27,53,0.3)] hover:bg-gradient-to-br hover:from-[#1879D8]/60 hover:to-[#FE8A01]/60"
      }`}
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 z-10 inline-flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#FE8A01] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-white shadow-lg shadow-[#FE8A01]/40">
          <Sparkles size={12} />
          Most Popular
        </span>
      )}

      <div
        className={`flex h-full flex-col gap-7 rounded-[26px] bg-white p-7 ${
          wide ? "lg:flex-row lg:items-stretch lg:gap-10 lg:p-9" : ""
        }`}
      >
        {/* Info */}
        <div className={`flex flex-1 flex-col ${wide ? "lg:justify-center" : ""}`}>
          <div className="flex items-start justify-between gap-3">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${
                featured
                  ? "bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-white shadow-lg shadow-[#FE8A01]/30"
                  : "bg-[#1879D8]/10 text-[#1879D8] group-hover:bg-[#1879D8] group-hover:text-white"
              }`}
            >
              <Icon size={26} />
            </div>
            {product.specialty && (
              <span className="rounded-full bg-[#FE8A01]/10 px-3 py-1 text-xs font-bold text-[#FE8A01] ring-1 ring-[#FE8A01]/20">
                Specialty
              </span>
            )}
          </div>

          <h3 className="mt-6 text-xl font-extrabold text-[#061B35]">{product.name}</h3>

          <div className="mt-2 flex items-baseline gap-1.5">
            <span className="text-5xl font-black tracking-tight text-[#061B35]">
              {money(product.price)}
            </span>
            <span className="text-sm font-semibold text-slate-400">
              / {product.unit === "calls" ? "call" : "lead"}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-500">{product.description}</p>

          <ul className="mt-5 space-y-2.5">
            <li className="flex items-center gap-3 text-sm font-medium text-[#061B35]">
              <CheckCircle2 size={18} className="shrink-0 text-[#FE8A01]" />
              {product.brokers}
            </li>
            <li className="flex items-center gap-3 text-sm font-medium text-[#061B35]">
              <Headphones size={18} className="shrink-0 text-[#FE8A01]" />
              Dedicated customer support
            </li>
            {product.extra && (
              <li className="flex items-center gap-3 text-sm font-medium text-[#061B35]">
                <CheckCircle2 size={18} className="shrink-0 text-[#FE8A01]" />
                {product.extra}
              </li>
            )}
          </ul>
        </div>

        {/* Order */}
        <div className={`mt-auto ${wide ? "lg:mt-0 lg:w-[340px] lg:shrink-0" : ""}`}>
          <Calculator product={product} value={value} onChange={onChange} onCommit={onCommit} />

          <button
            type="button"
            onClick={onOrder}
            className={`group/btn mt-4 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-xl px-5 font-bold text-white transition-all duration-300 active:scale-[0.98] ${
              featured
                ? "bg-gradient-to-r from-[#FE8A01] to-[#F59A1F] shadow-[0_12px_30px_-10px_rgba(254,138,1,0.8)] hover:shadow-[0_16px_36px_-10px_rgba(254,138,1,0.95)]"
                : "bg-[#061B35] hover:bg-[#FE8A01]"
            }`}
          >
            Order Now
            <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-1" />
          </button>
          <p className="mt-2.5 text-center text-xs text-slate-400">
            Opens WhatsApp · We confirm before you pay
          </p>
        </div>
      </div>
    </article>
  );
}

/* ───────────────────────── Page ───────────────────────── */
export default function ProductPricingPage() {
  const [quantities, setQuantities] = useState({
    "cheap-shared": 120,
    premium: 60,
    exclusive: 15,
    "live-calls": 15,
    "heavy-haul": 12,
    "international-shared": 120,
    "international-exclusive": 30,
  });

  // Free typing; the minimum is applied on blur / +/- clicks
  const setRaw = (id, v) => setQuantities((q) => ({ ...q, [id]: v }));
  const commit = (product, v) =>
    setQuantities((q) => ({
      ...q,
      [product.id]: Math.max(minQty(product.price), parseInt(v, 10) || 0),
    }));

  const orderProduct = (product) => {
    const qty = Math.max(minQty(product.price), Number(quantities[product.id]) || 0);
    const text = [
      "Hello Digital Network! I'd like to place a lead order.",
      "",
      `Product: ${product.name}`,
      `Price per ${product.unit === "calls" ? "call" : "lead"}: ${money(product.price)}`,
      `Quantity: ${qty}`,
      `Estimated total: ${money(qty * product.price)}`,
      "",
      "Please share the next steps.",
    ].join("\n");
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <main className="bg-white text-[#061B35]">
      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section className="relative isolate flex min-h-[640px] flex-col justify-center overflow-hidden lg:min-h-[720px]">
        <img
          src="/imgs/truck2.jpg"
          alt="Car carrier truck on the highway"
          className="absolute inset-0 -z-30 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#061B35] via-[#061B35]/85 to-[#061B35]/30" />
        <div className="absolute inset-x-0 bottom-0 -z-20 h-48 bg-gradient-to-t from-[#061B35] to-transparent" />
        <div className="absolute inset-0 -z-10 opacity-[0.12]" style={dotBg("#fff", 26)} />
        <div className="pointer-events-none absolute -left-40 top-1/3 -z-10 h-[460px] w-[460px] rounded-full bg-[#FE8A01]/20 blur-[130px]" />

        <div className="mx-auto w-full max-w-7xl px-6 py-24 sm:px-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE8A01] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE8A01]" />
              </span>
              Digital Network Lead Pricing
            </div>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[68px]">
              Simple Pricing.
              <span className="block bg-gradient-to-r from-[#FE8A01] to-[#FFB459] bg-clip-text text-transparent">
                Serious Leads.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Shared, premium, exclusive and live call leads for domestic and international
              auto transport. Pick a package, set your quantity and see your total instantly.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="#pricing"
                className="group inline-flex items-center gap-4 rounded-full bg-[#FE8A01] py-2 pl-7 pr-2 text-sm font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                View All Packages
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform group-hover:translate-x-1">
                  <ArrowRight size={16} />
                </span>
              </a>
              <a
                href="#how-it-works"
                className="text-sm font-bold text-white underline decoration-white/30 underline-offset-4 transition hover:text-[#FE8A01] hover:decoration-[#FE8A01]"
              >
                How ordering works
              </a>
            </div>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
            {highlights.map((h) => {
              const Icon = h.icon;
              return (
                <div
                  key={h.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-md"
                >
                  <Icon size={18} className="text-[#FE8A01]" />
                  <p className="mt-3 text-2xl font-black text-white">{h.value}</p>
                  <p className="text-xs font-medium text-white/55">{h.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <ChevronDown
          size={26}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/40"
        />
      </section>

      {/* ═══════════════════════ PRICING ═══════════════════════ */}
      <section
        id="pricing"
        className="relative scroll-mt-28 overflow-hidden bg-[#F5F8FC] px-6 pb-24 pt-16 sm:px-10"
      >
        <div className="pointer-events-none absolute inset-0 opacity-60" style={dotBg("rgba(24,121,216,0.18)", 28)} />
        <div className="pointer-events-none absolute -right-40 top-40 h-[500px] w-[500px] rounded-full bg-[#1879D8]/10 blur-[130px]" />
        <div className="pointer-events-none absolute -left-40 bottom-40 h-[500px] w-[500px] rounded-full bg-[#FE8A01]/10 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#FE8A01]" />
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
                  Transparent Pricing
                </span>
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Choose the Right Package
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Compare lead types, set your quantity and get an instant estimate. We confirm
                final pricing with you before any order is placed.
              </p>
            </div>

            <div className="flex items-center gap-4 rounded-2xl bg-[#061B35] px-6 py-5 text-white shadow-xl shadow-[#061B35]/20">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FE8A01]/15">
                <Wallet size={24} className="text-[#FE8A01]" />
              </span>
              <div>
                <p className="text-xs font-medium text-white/55">Minimum order</p>
                <p className="text-3xl font-black leading-none">{money(MINIMUM_ORDER)}</p>
              </div>
            </div>
          </div>

          {/* Category tabs */}
          <nav className="mt-10 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {pricingSections.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-[#061B35] shadow-sm transition hover:border-[#FE8A01] hover:text-[#FE8A01]"
                >
                  <Icon size={16} />
                  {s.tab}
                  {s.hot && <Flame size={14} className="text-[#FE8A01]" />}
                </a>
              );
            })}
          </nav>

          {/* Sections */}
          <div className="mt-16 space-y-20">
            {pricingSections.map((section) => {
              const SectionIcon = section.icon;
              const single = section.products.length === 1;
              return (
                <div key={section.id} id={section.id} className="scroll-mt-32">
                  <div className="mb-10 flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1879D8] to-[#0E4F95] text-white shadow-lg shadow-[#1879D8]/30">
                      <SectionIcon size={22} />
                    </span>
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                          {section.title}
                        </h3>
                        {section.hot && (
                          <span className="inline-flex items-center gap-1 rounded-full bg-[#FE8A01] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                            <Flame size={12} />
                            Hot
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-sm text-slate-500">{section.subtitle}</p>
                    </div>
                  </div>

                  <div
                    className={`grid gap-8 ${
                      single
                        ? "grid-cols-1"
                        : section.products.length === 2
                        ? "md:grid-cols-2 lg:mx-auto lg:max-w-5xl"
                        : "md:grid-cols-2 xl:grid-cols-3"
                    }`}
                  >
                    {section.products.map((product) => (
                      <ProductCard
                        key={product.id}
                        product={product}
                        wide={single}
                        value={quantities[product.id]}
                        onChange={(v) => setRaw(product.id, v)}
                        onCommit={(v) => commit(product, v)}
                        onOrder={() => orderProduct(product)}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center text-xs leading-6 text-slate-400">
            Per-lead prices may change with market conditions, demand and availability. Please
            confirm current pricing and lead details with our team before placing your order.
          </p>
        </div>
      </section>

      {/* ═══════════════════════ HOW IT WORKS ═══════════════════════ */}
      <section
        id="how-it-works"
        className="relative isolate scroll-mt-28 overflow-hidden bg-[#061B35] px-6 py-24 sm:px-10"
      >
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
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              Simple Process
            </p>
            <h2 className="mt-4 text-3xl font-black text-white sm:text-4xl lg:text-5xl">
              Ordering Takes Minutes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60">
              No account needed. Pick a package, send your order and we handle the rest.
            </p>
          </div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-3">
            {/* Connector line (desktop) */}
            <div className="absolute left-[16%] right-[16%] top-10 hidden h-px border-t-2 border-dashed border-white/15 md:block" />

            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center backdrop-blur transition hover:-translate-y-1 hover:border-[#FE8A01]/40 hover:bg-white/[0.07]"
                >
                  <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#061B35] ring-1 ring-white/10">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-white shadow-[0_10px_30px_-8px_rgba(254,138,1,0.8)]">
                      <Icon size={24} />
                    </span>
                    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[11px] font-black text-[#061B35]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-xl font-extrabold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ FINAL CTA ═══════════════════════ */}
      <section className="relative isolate overflow-hidden px-6 py-24 sm:px-10">
        <img
          src="/imgs/truck2.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FE8A01]/95 via-[#E97900]/90 to-[#061B35]/90" />
        <div className="absolute inset-0 -z-10 opacity-20" style={dotBg("#fff", 22)} />

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 text-center lg:flex-row lg:text-left">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
              Not Sure Which Package Fits?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-white/85">
              Tell us about your brokerage and we&apos;ll help you pick the right lead type
              and volume for your goals.
            </p>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                "Hello Digital Network! I need help choosing a lead package."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-8 py-4 font-bold text-[#061B35] shadow-xl transition hover:-translate-y-0.5"
            >
              <MessageCircle size={18} className="text-[#25D366]" />
              Chat on WhatsApp
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-8 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Back to Pricing
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}