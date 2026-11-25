"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  BadgeCheck,
  ShieldCheck,
  Luggage,
  Car,
  CalendarClock,
  CalendarX,
  Wrench,
  CreditCard,
  Handshake,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ArrowUp,
  AlertCircle,
  CalendarDays,
  Clock,
  ChevronDown,
  Check,
  X,
  Fuel,
  Receipt,
  FileSignature,
  RotateCcw,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const LEGAL_NAME = "Digital Network LLC";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox
const PHONE_DISPLAY = "(415) 808-5210"; // TODO: confirm this is Digital Network's number
const PHONE_LINK = "tel:+14158085210";
const ADDRESS_LINES = ["35 Sunflower Ridge Rd S.", "Setauket, NY 11720-3710"]; // TODO: confirm address
const CONTACT_PATH = "/contact";
const TERMS_PATH = "/terms-and-conditions";
const LAST_UPDATED = "November 25, 2026";

/* ─────────────────────────────────────────────
   Small content helpers
───────────────────────────────────────────── */
function Bullets({ items, tone = "default" }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          {tone === "dont" ? (
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <X size={10} strokeWidth={3} />
            </span>
          ) : tone === "do" ? (
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check size={10} strokeWidth={3} />
            </span>
          ) : (
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ icon: Icon = AlertCircle, tone = "blue", children }) {
  const styles =
    tone === "amber"
      ? "border-amber-200 bg-amber-50 [&_svg]:text-amber-600"
      : "border-blue-100 bg-blue-50 [&_svg]:text-blue-600";
  return (
    <div className={`flex items-start gap-3 rounded-xl border p-4 text-slate-700 ${styles}`}>
      <Icon size={18} className="mt-1 shrink-0" />
      <div>{children}</div>
    </div>
  );
}

function FeeBadge({ amount, label }) {
  return (
    <div className="inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white py-2 pl-2 pr-4 shadow-sm">
      <span className="rounded-lg bg-slate-950 px-3 py-1.5 text-lg font-extrabold tabular-nums text-white">
        {amount}
      </span>
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
}

function StatCard({ value, label, sub }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
      <p className="text-xl font-extrabold tracking-tight text-slate-900 tabular-nums">{value}</p>
      <p className="mt-1 text-sm font-semibold text-slate-800">{label}</p>
      {sub && <p className="mt-0.5 text-xs leading-5 text-slate-500">{sub}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Policy sections
───────────────────────────────────────────── */
const sections = [
  {
    id: "carrier-authorization",
    icon: BadgeCheck,
    title: "Carrier Authorization",
    content: (
      <>
        <p>
          The carrier and driver, jointly and separately, are authorized to
          operate and transport your motor vehicle between its pickup location
          and the destination set forth on the auto transport order contract.
        </p>
      </>
    ),
  },
  {
    id: "insurance",
    icon: ShieldCheck,
    title: "Insurance Coverage",
    content: (
      <>
        <p>
          Trucking damage claims are covered by the carrier&apos;s insurance as
          follows:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <StatCard
            value="$100K–$250K"
            label="Cargo insurance"
            sub="Per load, provided by the carrier"
          />
          <StatCard
            value="$750,000"
            label="Public liability & property damage"
            sub="Minimum coverage (3/4 of a million dollars)"
          />
          <StatCard
            value="15 days"
            label="Claims deadline"
            sub="Written claim must be submitted within 15 days of delivery"
          />
        </div>
        <Callout icon={FileSignature} tone="amber">
          <p>
            <span className="font-semibold text-slate-900">Important:</span> All
            claims must be noted and signed for at the time of delivery, and
            submitted in writing within 15 days of delivery.
          </p>
        </Callout>
      </>
    ),
  },
  {
    id: "personal-property",
    icon: Luggage,
    title: "Personal Property",
    content: (
      <>
        <div className="flex flex-wrap gap-3">
          <FeeBadge amount="100 lbs" label="Maximum personal items" />
          <FeeBadge amount="Trunk" label="Only location allowed" />
        </div>
        <Bullets
          items={[
            "Luggage and personal property must be confined to the trunk.",
            "No heavy articles, and the total must not exceed 100 lbs.",
            "The carrier is not liable for damage caused to the vehicle by excessive or improper loading of personal items.",
          ]}
        />
      </>
    ),
  },
  {
    id: "vehicle-condition",
    icon: Car,
    title: "Vehicle Condition Requirements",
    content: (
      <>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50/50 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
              <Check size={16} /> Your vehicle must be
            </p>
            <div className="mt-3 text-sm">
              <Bullets
                tone="do"
                items={[
                  "Tendered to the carrier in good running condition.",
                  "Fueled with no more than a half tank.",
                ]}
              />
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-medium text-slate-600">
              <Fuel size={14} className="text-emerald-600" />
              Max fuel level: ½ tank
            </div>
          </div>
          <div className="rounded-2xl border border-rose-200 bg-rose-50/50 p-5">
            <p className="flex items-center gap-2 text-sm font-semibold text-rose-800">
              <X size={16} /> Carrier is not liable for damage from
            </p>
            <div className="mt-3 text-sm">
              <Bullets
                tone="dont"
                items={[
                  "Leaking fluids.",
                  "Freezing.",
                  "Exhaust systems.",
                  "Antennas not tied down.",
                ]}
              />
            </div>
          </div>
        </div>
        <p>
          Any claim for loss or damage must be noted and signed on the
          condition report at the time of delivery.
        </p>
      </>
    ),
  },
  {
    id: "rescheduling",
    icon: CalendarClock,
    title: "Rescheduling and Availability",
    content: (
      <>
        <FeeBadge amount="$75" label="Rescheduling fee" />
        <p>
          If a carrier is sent out and the vehicle isn&apos;t ready as indicated
          by the shipper, an additional $75.00 rescheduling fee will apply.
        </p>
        <p>
          {LEGAL_NAME} must be notified if the shipper will be unavailable for
          pickup or delivery. In that case, the shipper must have an alternate
          representative take their place as shipper.
        </p>
        <Callout icon={AlertCircle} tone="amber">
          If for any reason the vehicle becomes unavailable during a scheduled
          pickup window after an order has been placed, {LEGAL_NAME} has the
          right to cancel the order with no refund.
        </Callout>
      </>
    ),
  },
  {
    id: "pickup-delivery",
    icon: CalendarX,
    title: "Pickup and Delivery Schedule",
    content: (
      <>
        <FeeBadge amount="$200" label="Cancellation administration fee" />
        <p>
          {LEGAL_NAME} agrees to provide a carrier to transport your vehicle as
          promptly as possible in accordance with your instructions, but cannot
          guarantee pickup or delivery on a specified date.
        </p>
        <p>
          An administration fee of $200 will be charged for orders canceled
          prior to one week after the requested available pickup date.
        </p>
        <p>
          {LEGAL_NAME} does not agree to pay for your rental of a vehicle, nor
          shall it be liable for failure of mechanical or operating parts of
          your vehicle.
        </p>
      </>
    ),
  },
  {
    id: "non-operational",
    icon: Wrench,
    title: "Non-Operational Vehicle Fee",
    content: (
      <>
        <FeeBadge amount="$150" label="Non-operational vehicle fee" />
        <Bullets
          items={[
            "A $150.00 non-operational fee will be charged for all non-running vehicles.",
            `This fee will be included in the final quote you receive from ${LEGAL_NAME}.`,
            "If the vehicle becomes non-operational during transport, this fee will be added to the original quote.",
          ]}
        />
      </>
    ),
  },
  {
    id: "payment-terms",
    icon: CreditCard,
    title: "Payment and Agreement Terms",
    content: (
      <>
        <p>
          The shipper warrants that they will pay the quoted price due to{" "}
          {LEGAL_NAME} for delivered vehicles, and will not seek to charge back
          a credit card.
        </p>
        <p>
          This agreement and any shipment under it are subject to all terms and
          conditions of the carrier&apos;s tariff and the uniform straight bill
          of lading, copies of which are available at the office of the
          carrier.
        </p>
        <p>
          This agreement supersedes all prior written or oral representations
          of {LEGAL_NAME}, constitutes the entire agreement between the shipper
          and {LEGAL_NAME}, and may not be changed except in writing signed by
          an officer of {LEGAL_NAME}.
        </p>
        <Callout icon={AlertCircle} tone="amber">
          {LEGAL_NAME} has authorization to cancel an order at any time.
        </Callout>
      </>
    ),
  },
  {
    id: "exclusive-service",
    icon: Handshake,
    title: "Exclusive Service Agreement",
    content: (
      <>
        <p>
          The client agrees not to contract any other broker or carrier during
          the time period that corresponds with their selected shipping option.
        </p>
        <Callout icon={Receipt} tone="amber">
          Any client found working with another broker or carrier during this
          period is subject to a non-refundable deposit fee.
        </Callout>
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Information",
    content: (
      <>
        <p>
          For questions about this refund and cancellation policy, please
          contact us:
        </p>
        <div className="overflow-hidden rounded-2xl border border-slate-200">
          <div className="bg-slate-950 px-5 py-4">
            <p className="font-semibold text-white">{LEGAL_NAME}</p>
            <p className="text-xs text-slate-400">Customer support</p>
          </div>
          <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <div className="flex items-start gap-3 p-5">
              <MapPin size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <div className="text-sm leading-6 text-slate-700">
                {ADDRESS_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={PHONE_LINK}
              className="group flex items-start gap-3 p-5 transition hover:bg-blue-50/50"
            >
              <Phone size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <div className="text-sm">
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                  Phone
                </span>
                <span className="font-semibold text-slate-900 group-hover:text-blue-700">
                  {PHONE_DISPLAY}
                </span>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex min-w-0 items-start gap-3 p-5 transition hover:bg-blue-50/50"
            >
              <Mail size={18} className="mt-0.5 shrink-0 text-blue-600" />
              <div className="min-w-0 text-sm">
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                  Email
                </span>
                <span className="block truncate font-semibold text-slate-900 group-hover:text-blue-700">
                  {CONTACT_EMAIL}
                </span>
              </div>
            </a>
          </div>
        </div>
      </>
    ),
  },
];

const feeSummary = [
  { icon: CalendarClock, value: "$75", label: "Rescheduling fee", desc: "If the vehicle isn't ready when the carrier arrives.", href: "#rescheduling" },
  { icon: CalendarX, value: "$200", label: "Cancellation fee", desc: "Administration fee on qualifying canceled orders.", href: "#pickup-delivery" },
  { icon: Wrench, value: "$150", label: "Non-running vehicle", desc: "Added for vehicles that don't run.", href: "#non-operational" },
  { icon: FileSignature, value: "15 days", label: "Damage claims", desc: "Note at delivery, submit in writing within 15 days.", href: "#insurance" },
];

/* ─────────────────────────────────────────────
   Hooks
───────────────────────────────────────────── */
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return progress;
}

const sectionIds = sections.map((s) => s.id);

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function RefundPolicyPage() {
  const active = useActiveSection(sectionIds);
  const progress = useScrollProgress();
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const activeIndex = Math.max(0, sectionIds.indexOf(active));
  const activeTitle = sections[activeIndex].title;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-1">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 40%, transparent 100%)",
          }}
        />
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-16 sm:px-10 sm:pb-24 sm:pt-20">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200">Refund Policy</span>
          </nav>

          <div className="mt-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <RotateCcw size={14} />
              Refunds &amp; Cancellations
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Refund{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Everything you need to know about fees, cancellations, insurance
              coverage, and claims when you ship your vehicle with{" "}
              <span className="font-semibold text-white">{COMPANY}</span>.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <CalendarDays size={15} className="text-blue-400" />
                Last updated
                <span className="font-semibold text-white">{LAST_UPDATED}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <Clock size={15} className="text-blue-400" />
                About 5 min read
              </span>
              <a
                href={PHONE_LINK}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
              >
                <Phone size={15} className="text-blue-400" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ FEES AT A GLANCE ══════════════ */}
      <section className="relative z-10 -mt-10 px-6 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {feeSummary.map(({ icon: Icon, value, label, desc, href }) => (
              <a key={label} href={href} className="group bg-white p-6 transition hover:bg-slate-50">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={19} />
                  </span>
                  <ArrowRight size={16} className="text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
                </div>
                <p className="mt-4 text-3xl font-extrabold tracking-tight tabular-nums text-slate-900">
                  {value}
                </p>
                <p className="mt-1 font-semibold text-slate-900">{label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-500">{desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ MAIN CONTENT ══════════════ */}
      <section className="px-6 py-16 sm:px-10 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[260px_1fr]">
          {/* Mobile TOC */}
          <div className="sticky top-1 z-30 -mx-6 border-b border-slate-200 bg-white/90 px-6 py-3 backdrop-blur lg:hidden">
            <button
              type="button"
              onClick={() => setMobileTocOpen((v) => !v)}
              className="flex w-full items-center justify-between gap-3 text-left"
              aria-expanded={mobileTocOpen}
            >
              <span className="min-w-0">
                <span className="block text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-600">
                  On this page
                </span>
                <span className="block truncate text-sm font-medium text-slate-900">
                  {String(activeIndex + 1).padStart(2, "0")} · {activeTitle}
                </span>
              </span>
              <ChevronDown
                size={18}
                className={`shrink-0 text-slate-500 transition ${mobileTocOpen ? "rotate-180" : ""}`}
              />
            </button>
            {mobileTocOpen && (
              <nav className="mt-3 max-h-[60vh] space-y-0.5 overflow-y-auto pb-1">
                {sections.map((s, i) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    onClick={() => setMobileTocOpen(false)}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                      active === s.id
                        ? "bg-blue-50 font-medium text-blue-700"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    <span className="w-5 text-xs tabular-nums text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.title}
                  </a>
                ))}
              </nav>
            )}
          </div>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                On this page
              </p>
              <nav className="mt-5 border-l border-slate-200">
                {sections.map((s, i) => {
                  const isActive = active === s.id;
                  return (
                    <a
                      key={s.id}
                      href={`#${s.id}`}
                      className={`-ml-px flex items-start gap-3 border-l-2 py-2 pl-4 pr-2 text-sm leading-5 transition ${
                        isActive
                          ? "border-blue-600 font-medium text-slate-900"
                          : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-800"
                      }`}
                    >
                      <span
                        className={`w-5 shrink-0 text-xs tabular-nums leading-5 ${
                          isActive ? "text-blue-600" : "text-slate-400"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {s.title}
                    </a>
                  );
                })}
              </nav>

              <div className="mt-8 rounded-2xl bg-slate-950 p-5 text-white">
                <p className="text-sm font-semibold">Need help with an order?</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Call or email us about refunds, cancellations, or claims.
                </p>
                <a
                  href={PHONE_LINK}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
                >
                  <Phone size={15} />
                  {PHONE_DISPLAY}
                </a>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/5"
                >
                  <Mail size={15} />
                  Email us
                </a>
              </div>
            </div>
          </aside>

          {/* Policy body */}
          <div className="min-w-0">
            <div className="mb-12 flex items-start gap-4 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                <RotateCcw size={20} />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Before you book, please read this policy.</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  This policy explains the fees, cancellation rules, insurance
                  coverage, and claim procedures that apply when you ship a
                  vehicle through {LEGAL_NAME}. Placing an order means you agree
                  to these terms. See also our{" "}
                  <Link href={TERMS_PATH} className="font-medium text-blue-600 underline-offset-4 hover:underline">
                    Terms and Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {sections.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article key={s.id} id={s.id} className="scroll-mt-24 py-10 first:pt-0 last:pb-0">
                    <header className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-blue-600 shadow-sm">
                        <Icon size={20} />
                      </span>
                      <div>
                        <p className="text-xs font-semibold tabular-nums tracking-[0.18em] text-blue-600">
                          SECTION {String(i + 1).padStart(2, "0")}
                        </p>
                        <h2 className="mt-0.5 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                          {s.title}
                        </h2>
                      </div>
                    </header>
                    <div className="mt-6 space-y-5 text-[15px] leading-7 text-slate-600 sm:pl-[60px]">
                      {s.content}
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500">
              <p className="flex items-center gap-2">
                <AlertCircle size={15} className="text-slate-400" />
                Last updated {LAST_UPDATED}
              </p>
              <a
                href="#top"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition hover:text-blue-600"
              >
                Back to top
                <ArrowUp size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="px-6 pb-20 sm:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-slate-950 px-8 py-12 sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-cyan-400/10 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-300">
                Questions about a refund?
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Talk to the {COMPANY} team
              </h2>
              <p className="mt-3 text-slate-400">
                We&apos;re here to help with cancellations, rescheduling, and
                damage claims.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={PHONE_LINK}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
              >
                <Phone size={17} />
                Call us
              </a>
              <Link
                href={CONTACT_PATH}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:bg-white/5"
              >
                Contact page
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}