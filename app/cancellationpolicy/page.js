"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CalendarX,
  CalendarClock,
  Ban,
  Handshake,
  Package,
  RotateCcw,
  Mail,
  Phone,
  MessageSquare,
  ArrowRight,
  ArrowUp,
  AlertCircle,
  CalendarDays,
  Clock,
  ChevronDown,
  XCircle,
  ClipboardList,
  Receipt,
  FileText,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const LEGAL_NAME = "Digital Network LLC";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox
const PHONE_DISPLAY = "+1 (734) 262-2139"; // same number as the site header
const PHONE_LINK = "tel:+17342622139";
const CONTACT_PATH = "/contact";
const REFUND_PATH = "/policies/refundpolicy";
const TERMS_PATH = "/terms-and-conditions";
const LAST_UPDATED = "November 25, 2026";

/* ─────────────────────────────────────────────
   Small content helpers
───────────────────────────────────────────── */
function Bullets({ items }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ icon: Icon = AlertCircle, tone = "blue", children }) {
  const styles =
    tone === "amber"
      ? "border-amber-200 bg-amber-50 [&>svg]:text-amber-600"
      : "border-blue-100 bg-blue-50 [&>svg]:text-blue-600";
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

/* ─────────────────────────────────────────────
   Policy sections
───────────────────────────────────────────── */
const sections = [
  {
    id: "overview",
    icon: FileText,
    title: "Overview",
    content: (
      <>
        <p>
          This Cancellation Policy explains how to cancel an order with{" "}
          {LEGAL_NAME} (&ldquo;{COMPANY},&rdquo; &ldquo;we,&rdquo; or
          &ldquo;us&rdquo;), which fees may apply, and when we may cancel an
          order ourselves.
        </p>
        <p>
          It works together with our{" "}
          <Link href={REFUND_PATH} className="font-medium text-blue-600 underline-offset-4 hover:underline">
            Refund Policy
          </Link>{" "}
          and{" "}
          <Link href={TERMS_PATH} className="font-medium text-blue-600 underline-offset-4 hover:underline">
            Terms and Conditions
          </Link>
          . If anything here conflicts with a written agreement or order
          confirmation you received from us, that agreement applies.
        </p>
      </>
    ),
  },
  {
    id: "how-to-cancel",
    icon: ClipboardList,
    title: "How to Cancel an Order",
    content: (
      <>
        <p>To request a cancellation, contact our team directly:</p>
        <ol className="grid gap-3">
          {[
            {
              t: "Contact us",
              d: `Call ${PHONE_DISPLAY} or email ${CONTACT_EMAIL}.`,
            },
            {
              t: "Share your order details",
              d: "Include the name on the order and your order or confirmation details so we can find it quickly.",
            },
            {
              t: "Get confirmation",
              d: "We'll confirm the cancellation and let you know whether any fee applies under this policy.",
            },
          ].map((step, i) => (
            <li key={step.t} className="flex items-start gap-4 rounded-xl border border-slate-200 p-4">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-slate-900">{step.t}</p>
                <p className="mt-0.5 text-sm leading-6 text-slate-600">{step.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </>
    ),
  },
  {
    id: "cancellation-fee",
    icon: CalendarX,
    title: "Cancellation Fee",
    content: (
      <>
        <FeeBadge amount="$200" label="Administration fee" />
        <p>
          An administration fee of $200 will be charged for orders canceled
          prior to one week after the requested available pickup date.
        </p>
        <p>
          {LEGAL_NAME} agrees to provide a carrier as promptly as possible in
          accordance with your instructions, but cannot guarantee pickup or
          delivery on a specified date.
        </p>
      </>
    ),
  },
  {
    id: "rescheduling",
    icon: CalendarClock,
    title: "Rescheduling Instead of Canceling",
    content: (
      <>
        <FeeBadge amount="$75" label="Rescheduling fee" />
        <p>
          If a carrier is sent out and the vehicle isn&apos;t ready as indicated
          by the shipper, an additional $75.00 rescheduling fee will apply.
        </p>
        <p>
          If you will be unavailable for pickup or delivery, you must notify{" "}
          {LEGAL_NAME} and have an alternate representative take your place as
          shipper.
        </p>
      </>
    ),
  },
  {
    id: "cancellation-by-us",
    icon: Ban,
    title: `Cancellations by ${COMPANY}`,
    content: (
      <>
        <p>{LEGAL_NAME} may cancel an order in the following situations:</p>
        <Bullets
          items={[
            `${LEGAL_NAME} has authorization to cancel an order at any time.`,
            "If for any reason the vehicle becomes unavailable during a scheduled pickup window after an order has been placed, we have the right to cancel the order with no refund.",
          ]}
        />
        <Callout icon={AlertCircle} tone="amber">
          Please make sure your vehicle is ready and available for the
          scheduled pickup window to avoid a cancellation without refund.
        </Callout>
      </>
    ),
  },
  {
    id: "exclusive-period",
    icon: Handshake,
    title: "Exclusive Service Period",
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
    id: "lead-services",
    icon: Package,
    title: "Lead Packages and Call Transfers",
    content: (
      <>
        <p>For brokers buying leads or live call transfers from {COMPANY}:</p>
        <Bullets
          items={[
            "Cancellation of an ongoing or recurring service, if offered, must follow the cancellation procedure communicated at the time of purchase.",
            "Because leads and call transfers are time-sensitive, refunds are not automatically available once delivery or service performance has occurred, except where required by law or expressly agreed otherwise.",
            "Requests about a lead or call that doesn't meet your product's stated requirements should be submitted within the review period in your order confirmation or product-specific policy.",
          ]}
        />
      </>
    ),
  },
  {
    id: "refunds",
    icon: RotateCcw,
    title: "Refunds After Cancellation",
    content: (
      <>
        <p>
          Whether any amount is refunded after a cancellation depends on the
          product, the timing of the cancellation, and the fees above. Full
          details are in our Refund Policy.
        </p>
        <Link
          href={REFUND_PATH}
          className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <RotateCcw size={18} />
            </span>
            <span>
              <span className="block font-semibold text-slate-900 group-hover:text-blue-700">
                Read our Refund Policy
              </span>
              <span className="block text-sm text-slate-500">
                Fees, insurance coverage, and claims
              </span>
            </span>
          </span>
          <ArrowRight size={18} className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
        </Link>
      </>
    ),
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: (
      <>
        <p>
          For questions about this cancellation policy or to cancel an order,
          contact {LEGAL_NAME}:
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          <a
            href={PHONE_LINK}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Phone size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                Phone
              </span>
              <span className="block truncate font-semibold text-slate-900 group-hover:text-blue-700">
                {PHONE_DISPLAY}
              </span>
            </span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
              <Mail size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                Email
              </span>
              <span className="block truncate font-semibold text-slate-900 group-hover:text-blue-700">
                {CONTACT_EMAIL}
              </span>
            </span>
          </a>
          <Link
            href={CONTACT_PATH}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
              <MessageSquare size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                Contact form
              </span>
              <span className="flex items-center gap-1 font-semibold text-slate-900 group-hover:text-blue-700">
                Send a message
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>
      </>
    ),
  },
];

const summary = [
  { icon: CalendarX, value: "$200", label: "Cancellation fee", desc: "Administration fee on qualifying canceled orders.", href: "#cancellation-fee" },
  { icon: CalendarClock, value: "$75", label: "Rescheduling fee", desc: "If the vehicle isn't ready when the carrier arrives.", href: "#rescheduling" },
  { icon: XCircle, value: "No refund", label: "Vehicle unavailable", desc: "If the vehicle isn't available in the pickup window.", href: "#cancellation-by-us" },
  { icon: Phone, value: "Call us", label: "To cancel", desc: "Phone or email us with your order details.", href: "#how-to-cancel" },
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
export default function CancellationPolicyPage() {
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
            <span className="text-slate-200">Cancellation Policy</span>
          </nav>

          <div className="mt-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <CalendarX size={14} />
              Orders &amp; Cancellations
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Cancellation{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              How to cancel or reschedule an order with{" "}
              <span className="font-semibold text-white">{COMPANY}</span>, which
              fees apply, and when an order may be canceled by us.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <CalendarDays size={15} className="text-blue-400" />
                Last updated
                <span className="font-semibold text-white">{LAST_UPDATED}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <Clock size={15} className="text-blue-400" />
                About 4 min read
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

      {/* ══════════════ AT A GLANCE ══════════════ */}
      <section className="relative z-10 -mt-10 px-6 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {summary.map(({ icon: Icon, value, label, desc, href }) => (
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
                <p className="text-sm font-semibold">Need to cancel an order?</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Call or email us with your order details.
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
            <div className="mb-12 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                <CalendarX size={20} />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Thinking of canceling?</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                  Contact us as early as possible. Fees can depend on when you
                  cancel and whether a carrier has already been dispatched.
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
                Need to make a change?
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Talk to the {COMPANY} team
              </h2>
              <p className="mt-3 text-slate-400">
                We can help you cancel, reschedule, or find the best option for
                your order.
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