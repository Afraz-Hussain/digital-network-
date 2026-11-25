"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  BadgeDollarSign,
  Truck,
  Car,
  ShieldCheck,
  CalendarCheck,
  Search,
  Plus,
  Phone,
  Mail,
  ArrowRight,
  MessageSquareText,
  FileText,
  RotateCcw,
  CalendarX,
  X,
  HelpCircle,
  LayoutGrid,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const PHONE_DISPLAY = "+1 (734) 262-2139";
const PHONE_TEL = "+17342622139";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox

/* ─────────────────────────────────────────────
   FAQ content
   Answers marked "TODO: confirm" are general
   wording — check them against how you operate.
───────────────────────────────────────────── */
const categories = [
  {
    id: "pricing",
    title: "Booking & Pricing",
    icon: BadgeDollarSign,
    faqs: [
      {
        q: "How much does it cost to ship a car?",
        a: "The price depends on the distance and route, the size and type of your vehicle, whether it runs, open or enclosed transport, and how flexible your dates are. Request a free quote with your pickup and delivery locations and vehicle details, and we'll give you a price for your specific shipment.",
      },
      {
        q: "How do I get a quote?",
        a: `Call us at ${PHONE_DISPLAY}, email ${CONTACT_EMAIL}, or send a message through our contact page. Include your pickup and delivery locations, the vehicle's year, make and model, whether it runs, and your preferred dates.`,
        link: { href: "/contact", label: "Go to the contact page" },
      },
      {
        q: "When do I pay for the service?",
        a: "Your payment terms are explained when you book and in your order confirmation. Under our policy, you agree to pay the quoted price for delivered vehicles and not to charge back a credit card.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No. We explain fees up front. A few fees apply only in specific situations, and they're listed in our policies:",
        list: [
          "$150 non-operational fee for vehicles that don't run (included in your quote, or added if the vehicle stops running during transport).",
          "$75 rescheduling fee if a carrier is sent and the vehicle isn't ready.",
          "$200 administration fee for qualifying cancellations.",
        ],
        link: { href: "/policies/refundpolicy", label: "Read our Refund Policy" },
      },
      {
        q: "Can I get a discount for multiple vehicles?",
        // TODO: confirm whether you offer a multi-vehicle discount
        a: "If you're shipping more than one vehicle, tell us when you request your quote and we'll price the vehicles together as one shipment.",
      },
    ],
  },
  {
    id: "service",
    title: "Service & Delivery",
    icon: Truck,
    faqs: [
      {
        q: "How long does car shipping take?",
        a: "Transit time depends mainly on distance and route, plus carrier availability and weather. We'll give you an estimate with your quote. We arrange pickup and delivery as promptly as possible, but we can't guarantee pickup or delivery on a specific date.",
      },
      {
        q: "Do you provide door-to-door service?",
        // TODO: confirm
        a: "In most cases, yes. The carrier picks up and delivers as close to your addresses as a large truck can safely and legally reach. If your street isn't accessible, the driver may arrange to meet you at a nearby location, such as a large parking lot.",
      },
      {
        q: "What's the difference between open and enclosed transport?",
        // TODO: confirm you offer both
        a: "Open transport carries your vehicle on an open trailer, like the ones you see on the highway. It's the most common and most affordable option. Enclosed transport carries your vehicle inside a covered trailer, protecting it from weather and road debris. It costs more and is popular for luxury, classic, and exotic cars.",
      },
      {
        q: "Can I track my vehicle during transport?",
        // TODO: confirm how you provide status updates
        a: "Yes. Contact our team at any time while your vehicle is in transit and we'll give you an update on its status.",
      },
      {
        q: "What if my vehicle is delayed?",
        a: "Delays can happen because of weather, traffic, road conditions, or mechanical issues with the truck. If your shipment is delayed, contact us and we'll update you. Please note that we can't guarantee specific pickup or delivery dates, and we don't cover the cost of a rental vehicle.",
      },
    ],
  },
  {
    id: "preparation",
    title: "Vehicle Preparation",
    icon: Car,
    faqs: [
      {
        q: "How should I prepare my car for shipping?",
        a: "A little preparation helps your shipment go smoothly:",
        list: [
          "Wash the car so its condition is easy to inspect, and take your own photos.",
          "Leave no more than a half tank of fuel.",
          "Keep personal items in the trunk only, up to 100 lbs.",
          "Retract or tie down the antenna.",
          "Check for fluid leaks, and make sure the car is in good running condition (or tell us if it doesn't run).",
        ],
      },
      {
        q: "Can I leave personal items in my car?",
        a: "Yes, with limits. Luggage and personal items must be kept in the trunk, with no heavy articles, and must not exceed 100 lbs. The carrier isn't liable for damage caused by excessive or improper loading of personal items, so we recommend removing anything valuable.",
      },
      {
        q: "What if my car doesn't run?",
        a: "We can still ship it. A $150 non-operational fee applies to all non-running vehicles and is included in your final quote, so please tell us when you book. If the vehicle stops running during transport, the fee is added to the original quote.",
      },
      {
        q: "Do I need to be present for pickup and delivery?",
        a: "You or someone you choose should be there. If you can't be available, you must let us know and have an alternate representative take your place. They'll check the vehicle's condition and sign the condition report.",
      },
      {
        q: "What documents do I need?",
        // TODO: confirm
        a: "For most shipments within the US, you'll need your booking confirmation, the car keys, and a photo ID for whoever releases and receives the vehicle. If any other documents are needed for your shipment, we'll let you know when you book.",
      },
    ],
  },
  {
    id: "insurance",
    title: "Insurance & Safety",
    icon: ShieldCheck,
    faqs: [
      {
        q: "Is my vehicle insured during transport?",
        a: "Yes. Trucking damage claims are covered by the carrier's cargo insurance of $100,000 to $250,000 per load, plus a minimum of $750,000 in public liability and property damage coverage.",
      },
      {
        q: "What happens if my car is damaged?",
        a: "Inspect your vehicle carefully at delivery. Any damage must be noted and signed on the condition report at the time of delivery, and the claim must be submitted in writing within 15 days of delivery.",
      },
      {
        q: "How do I file a damage claim?",
        a: "Follow these steps:",
        list: [
          "Inspect the vehicle with the driver at delivery.",
          "Note any damage on the condition report and sign it before the driver leaves.",
          "Take clear photos of the damage.",
          `Send your claim in writing within 15 days of delivery, with your order details and photos, to ${CONTACT_EMAIL}.`,
        ],
      },
      {
        q: "Are your drivers licensed and experienced?",
        // TODO: confirm
        a: "We work with carriers who are authorized to transport vehicles and who carry the insurance coverage described above.",
      },
      {
        q: "What safety measures do you take?",
        // TODO: confirm
        a: "Your vehicle's condition is recorded on a condition report at pickup and at delivery, it's covered by the carrier's insurance during transport, and our team is available to answer questions while it's on the road.",
      },
    ],
  },
  {
    id: "booking",
    title: "Booking Process",
    icon: CalendarCheck,
    faqs: [
      {
        q: "How far in advance should I book?",
        // TODO: add a recommended number of days if you have one
        a: "The earlier the better. Booking ahead gives us more time to find a carrier on your route, especially during busy seasons.",
      },
      {
        q: "Can I change my pickup or delivery date?",
        a: "Yes. Contact us as early as possible. If a carrier has already been sent and the vehicle isn't ready, a $75 rescheduling fee applies.",
      },
      {
        q: "What if I need to cancel my booking?",
        a: "Contact us as soon as possible. A $200 administration fee is charged for orders canceled prior to one week after the requested available pickup date. Full details are in our Cancellation Policy.",
        link: { href: "/policies/cancellationpolicy", label: "Read our Cancellation Policy" },
      },
      {
        q: "Do you ship to all 50 states?",
        // TODO: confirm
        a: "We arrange vehicle shipping throughout the continental United States. Shipping to Alaska or Hawaii needs extra arrangements, so contact us for a quote.",
      },
      {
        q: "Can you ship internationally?",
        // TODO: confirm
        a: "Contact us with your destination country and vehicle details, and we'll let you know what options are available.",
      },
    ],
  },
];

const totalQuestions = categories.reduce((n, c) => n + c.faqs.length, 0);

/* JSON-LD for Google rich results */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: categories.flatMap((c) =>
    c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: [f.a, ...(f.list || [])].join(" "),
      },
    }))
  ),
};

/* ─────────────────────────────────────────────
   Accordion item
───────────────────────────────────────────── */
function FaqItem({ faq, open, onToggle, id }) {
  return (
    <div
      className={`rounded-2xl border bg-white transition-all duration-300 ${
        open
          ? "border-[#FE8A01]/40 shadow-[0_20px_45px_-25px_rgba(6,27,53,0.35)]"
          : "border-slate-200/80 hover:border-slate-300"
      }`}
    >
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={`${id}-panel`}
          id={`${id}-button`}
          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
        >
          <span className={`text-[15px] font-semibold leading-6 sm:text-base ${open ? "text-[#FE8A01]" : "text-[#061B35]"}`}>
            {faq.q}
          </span>
          <span
            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
              open ? "rotate-45 bg-[#FE8A01] text-white" : "bg-[#F5F8FC] text-[#061B35]"
            }`}
          >
            <Plus size={17} strokeWidth={2.5} />
          </span>
        </button>
      </h3>

      <div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`grid transition-all duration-300 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 px-5 pb-6 text-[15px] leading-7 text-slate-600 sm:px-6">
            <div className="h-px bg-slate-100" />
            <p>{faq.a}</p>
            {faq.list && (
              <ul className="space-y-2.5">
                {faq.list.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-[10px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FE8A01]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}
            {faq.link && (
              <Link
                href={faq.link.href}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#1879D8] hover:text-[#FE8A01]"
              >
                {faq.link.label}
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function FaqPage() {
  const [query, setQuery] = useState("");
  const [activeCat, setActiveCat] = useState("all");
  const [openIds, setOpenIds] = useState(() => new Set(["pricing-0"]));

  const toggle = (id) =>
    setOpenIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return categories
      .filter((c) => activeCat === "all" || c.id === activeCat)
      .map((c) => ({
        ...c,
        items: c.faqs
          .map((f, i) => ({ ...f, id: `${c.id}-${i}` }))
          .filter(
            (f) =>
              !q ||
              f.q.toLowerCase().includes(q) ||
              f.a.toLowerCase().includes(q) ||
              f.list?.some((l) => l.toLowerCase().includes(q))
          ),
      }))
      .filter((c) => c.items.length > 0);
  }, [query, activeCat]);

  const resultCount = visible.reduce((n, c) => n + c.items.length, 0);
  const allVisibleIds = visible.flatMap((c) => c.items.map((f) => f.id));
  const allOpen = allVisibleIds.length > 0 && allVisibleIds.every((id) => openIds.has(id));

  return (
    <main className="min-h-screen bg-[#F5F8FC] text-[#061B35]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, #000 40%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 70% 70% at 50% 30%, #000 40%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[420px] w-[520px] rounded-full bg-[#1879D8]/25 blur-3xl" />

        <div className="mx-auto max-w-4xl px-5 pb-28 pt-16 text-center sm:px-8 sm:pt-20 lg:pb-32">
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-sm text-white/50">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-white/25">/</span>
            <span className="text-white/80">FAQ</span>
          </nav>

          <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FE8A01]/30 bg-[#FE8A01]/10 px-4 py-1.5 text-sm font-semibold text-[#FFB55C]">
            <HelpCircle size={14} />
            Help Center
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Frequently asked{" "}
            <span className="relative whitespace-nowrap text-[#FE8A01]">
              questions
              <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                <path d="M2 9C50 3 150 3 198 9" stroke="#FE8A01" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
              </svg>
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Everything you need to know about shipping your vehicle with {COMPANY}:
            pricing, preparation, insurance, and booking.
          </p>

          {/* Search */}
          <div className="relative mx-auto mt-10 max-w-2xl">
            <Search size={20} className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search questions, e.g. “insurance” or “cancel”"
              aria-label="Search frequently asked questions"
              className="w-full rounded-2xl border-0 bg-white py-5 pl-14 pr-14 text-base text-[#061B35] shadow-[0_25px_60px_-20px_rgba(0,0,0,0.5)] outline-none ring-4 ring-white/10 transition placeholder:text-slate-400 focus:ring-[#FE8A01]/40"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-[#FE8A01] hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <p className="mt-5 text-sm text-white/50">
            {totalQuestions} answers across {categories.length} topics
          </p>
        </div>
      </section>

      {/* ══════════════ CATEGORY PILLS ══════════════ */}
      <section className="relative z-10 -mt-10 px-5 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex gap-2 overflow-x-auto rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_20px_50px_-25px_rgba(6,27,53,0.35)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[{ id: "all", title: "All topics", icon: LayoutGrid, faqs: { length: totalQuestions } }, ...categories].map(
              ({ id, title, icon: Icon, faqs }) => {
                const active = activeCat === id;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => setActiveCat(id)}
                    className={`flex shrink-0 items-center gap-2.5 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-[#061B35] text-white shadow-md"
                        : "text-slate-600 hover:bg-[#F5F8FC] hover:text-[#061B35]"
                    }`}
                  >
                    <Icon size={17} className={active ? "text-[#FE8A01]" : "text-slate-400"} />
                    {title}
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs tabular-nums ${
                        active ? "bg-white/15 text-white" : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {faqs.length}
                    </span>
                  </button>
                );
              }
            )}
          </div>
        </div>
      </section>

      {/* ══════════════ FAQ LIST + SIDEBAR ══════════════ */}
      <section className="px-5 py-14 sm:px-8 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          {/* List */}
          <div>
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-slate-500">
                {query ? (
                  <>
                    <span className="font-semibold text-[#061B35]">{resultCount}</span>{" "}
                    {resultCount === 1 ? "result" : "results"} for “{query}”
                  </>
                ) : (
                  <>
                    Showing <span className="font-semibold text-[#061B35]">{resultCount}</span> questions
                  </>
                )}
              </p>
              {resultCount > 0 && (
                <button
                  type="button"
                  onClick={() => setOpenIds(allOpen ? new Set() : new Set(allVisibleIds))}
                  className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#061B35] transition hover:border-[#FE8A01] hover:text-[#FE8A01]"
                >
                  {allOpen ? "Collapse all" : "Expand all"}
                </button>
              )}
            </div>

            {visible.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FE8A01]/10 text-[#FE8A01]">
                  <Search size={24} />
                </span>
                <p className="mt-5 text-lg font-bold">No matching questions</p>
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                  Try a different word, or ask our team directly. We&apos;re happy to help.
                </p>
                <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => {
                      setQuery("");
                      setActiveCat("all");
                    }}
                    className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold transition hover:border-[#FE8A01] hover:text-[#FE8A01]"
                  >
                    Clear search
                  </button>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE8A01] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#E97900]"
                  >
                    Ask a question
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-12">
                {visible.map(({ id, title, icon: Icon, items }) => (
                  <div key={id} id={id} className="scroll-mt-28">
                    <div className="mb-5 flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#FE8A01] to-[#F59A1F] text-white shadow-[0_10px_25px_-10px_rgba(254,138,1,0.8)]">
                        <Icon size={22} />
                      </span>
                      <div>
                        <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">{title}</h2>
                        <p className="text-sm text-slate-500">
                          {items.length} {items.length === 1 ? "question" : "questions"}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      {items.map((faq) => (
                        <FaqItem
                          key={faq.id}
                          id={faq.id}
                          faq={faq}
                          open={openIds.has(faq.id)}
                          onToggle={() => toggle(faq.id)}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-3xl bg-[#061B35] p-7 text-white">
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#FE8A01]/25 blur-3xl" />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#FE8A01]">
                <MessageSquareText size={22} />
              </span>
              <p className="relative mt-5 text-xl font-extrabold">Still have questions?</p>
              <p className="relative mt-2 text-sm leading-6 text-white/65">
                Can&apos;t find the answer you&apos;re looking for? Our team is happy to help.
              </p>
              <div className="relative mt-6 space-y-2.5">
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#FE8A01] px-4 py-3 text-sm font-bold transition hover:bg-[#E97900]"
                >
                  <Phone size={16} />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/15 px-4 py-3 text-sm font-semibold transition hover:bg-white/5"
                >
                  <Mail size={16} />
                  Email us
                </a>
              </div>
            </div>

           
          </aside>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#FE8A01] to-[#E46F00] px-8 py-12 sm:px-14 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-[#061B35]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Ready when you are</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Get your free shipping quote
              </h2>
              <p className="mt-3 text-white/85">
                Tell us where your vehicle is going and we&apos;ll take care of the rest.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#061B35] px-7 py-3.5 font-bold text-white transition hover:bg-[#0E2A4D] active:scale-[0.98]"
              >
                Get a quote
                <ArrowRight size={17} />
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={17} />
                Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}