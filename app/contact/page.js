"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  Clock,
  ArrowRight,
  CheckCircle2,
  Send,
  User,
  Building2,
  Sparkles,
  ClipboardCheck,
  Headphones,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const LEGAL_NAME = "Digital Network LLC";
const PHONE_DISPLAY = "+1 (734) 262-2139";
const PHONE_TEL = "+17342622139";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox

const services = [
  { value: "Cheap Shared Leads", label: "Cheap Shared Leads", price: "$2.75", unit: "lead" },
  { value: "Premium Leads", label: "Premium Leads", price: "$5.00", unit: "lead" },
  { value: "Exclusive Leads", label: "Exclusive Leads", price: "$20.00", unit: "lead" },
  { value: "Auto Transport Calls", label: "Auto Transport Calls", price: "$25.00", unit: "call" },
  { value: "Heavy Haul Leads", label: "Heavy Haul Leads", price: "$25.00", unit: "lead" },
  { value: "Shared International Leads", label: "Shared International", price: "$2.50", unit: "lead" },
  { value: "Exclusive International Leads", label: "Exclusive International", price: "$10.00", unit: "lead" },
  { value: "General Inquiry", label: "General Inquiry", price: null, unit: null },
];

const emptyForm = { name: "", email: "", phone: "", company: "", service: "", message: "" };

/* Business hours: Mon–Fri, 9:00 AM – 6:00 PM Eastern */
function isOpenNow() {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date());
  const weekday = parts.find((p) => p.type === "weekday")?.value;
  const hour = Number(parts.find((p) => p.type === "hour")?.value);
  return !["Sat", "Sun"].includes(weekday) && hour >= 9 && hour < 18;
}

function Field({ id, label, required, icon: Icon, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-[#061B35]">
        {label} {required && <span className="text-[#FE8A01]">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <Icon size={17} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
        )}
        {children}
      </div>
    </div>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm font-medium text-[#061B35] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#FE8A01] focus:ring-4 focus:ring-[#FE8A01]/10";

export default function ContactPage() {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [openNow, setOpenNow] = useState(null); // null until we check on the client

  useEffect(() => {
    setOpenNow(isOpenNow());
    const t = setInterval(() => setOpenNow(isOpenNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function buildMessage() {
    return (
      `Hello ${COMPANY},\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Phone: ${form.phone || "-"}\n` +
      `Company: ${form.company || "-"}\n` +
      `Service Interest: ${form.service}\n\n` +
      `Message:\n${form.message}`
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry: ${form.service || "General"} — ${form.name}`);
    const body = encodeURIComponent(buildMessage());
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  const contactMethods = [
    {
      icon: Phone,
      label: "Call us",
      value: PHONE_DISPLAY,
      href: `tel:${PHONE_TEL}`,
      accent: "bg-[#FE8A01]",
    },
    {
      icon: Mail,
      label: "Email",
      value: CONTACT_EMAIL,
      href: `mailto:${CONTACT_EMAIL}`,
      accent: "bg-[#1879D8]",
    },
    {
      icon: Send,
      label: "Message",
      value: "Fill out the form",
      href: "#contact-form",
      accent: "bg-[#061B35]",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F5F8FC] text-[#061B35]">
      {/* ══════════════ HERO ══════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35]">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 -z-10 h-[420px] w-[520px] rounded-full bg-[#1879D8]/25 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-28 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-36 lg:pt-20">
          {/* Copy */}
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-white/80">Contact</span>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FE8A01]/30 bg-[#FE8A01]/10 px-4 py-1.5 text-sm font-semibold text-[#FFB55C]">
              <Sparkles size={14} />
              We&apos;re here to help
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s grow your{" "}
              <span className="relative whitespace-nowrap text-[#FE8A01]">
                bookings
                <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                  <path d="M2 9C50 3 150 3 198 9" stroke="#FE8A01" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>{" "}
              together
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Have a question about our lead packages or ready to place an
              order? Reach out to the {COMPANY} team — we typically respond
              within one business day.
            </p>

            {/* Quick actions */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${PHONE_TEL}`}
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE8A01] py-2 pl-6 pr-2 font-bold text-white shadow-[0_10px_30px_-10px_rgba(254,138,1,0.8)] transition hover:bg-[#E97900]"
              >
                Call {PHONE_DISPLAY}
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FE8A01] transition group-hover:translate-x-0.5">
                  <Phone size={16} />
                </span>
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-[#1879D8]/60 hover:bg-[#1879D8]/15"
              >
                <Mail size={18} className="text-[#5AA9F0]" />
                Email us
              </a>
            </div>
          </div>

          {/* Image card */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="absolute -inset-3 rotate-2 rounded-[2rem] bg-gradient-to-br from-[#FE8A01]/40 to-[#1879D8]/40 blur-sm" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl">
              <img
                src="/imgs/truck2.jpg"
                alt="Auto transport truck on the highway"
                className="h-72 w-full object-cover sm:h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/90 via-[#061B35]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-4 p-6">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                    {LEGAL_NAME}
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">Auto Transport Lead Generation</p>
                </div>
              </div>
            </div>

            {/* Floating status badge */}
            <div className="absolute -left-4 top-6 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="relative flex h-3 w-3">
                {openNow && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                )}
                <span
                  className={`relative inline-flex h-3 w-3 rounded-full ${
                    openNow === null ? "bg-slate-300" : openNow ? "bg-emerald-500" : "bg-slate-400"
                  }`}
                />
              </span>
              <div>
                <p className="text-sm font-bold text-[#061B35]">
                  {openNow === null ? "Checking hours…" : openNow ? "We're open now" : "Currently closed"}
                </p>
                <p className="text-xs text-slate-500">Mon–Fri · 9 AM–6 PM ET</p>
              </div>
            </div>

            {/* Floating price badge */}
            <div className="absolute -bottom-6 -right-2 hidden items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FE8A01]/10 text-[#FE8A01]">
                <PackageCheck size={20} />
              </span>
              <div>
                <p className="text-xs text-slate-500">Packages from</p>
                <p className="text-lg font-extrabold text-[#061B35]">
                  $2.50<span className="text-sm font-semibold text-slate-400"> / lead</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT METHOD CARDS ══════════════ */}
      <section className="relative z-10 -mt-16 px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {contactMethods.map(({ icon: Icon, label, value, href, external, accent }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_20px_50px_-25px_rgba(6,27,53,0.35)] transition hover:-translate-y-1 hover:border-[#FE8A01]/40"
            >
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white ${accent}`}>
                <Icon size={21} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">{label}</span>
                <span className="mt-0.5 block truncate font-bold text-[#061B35] transition group-hover:text-[#FE8A01]">
                  {value}
                </span>
              </span>
              <ArrowRight size={18} className="shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:text-[#FE8A01]" />
            </a>
          ))}
        </div>
      </section>

      {/* ══════════════ FORM + SIDEBAR ══════════════ */}
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_380px] lg:items-start">
          {/* Form card */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_30px_70px_-35px_rgba(6,27,53,0.35)] sm:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-5 py-16 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50 ring-8 ring-emerald-50/50">
                  <CheckCircle2 size={38} className="text-emerald-500" />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#061B35]">Message ready to send!</h2>
                  <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">
                    Your message has been opened in your email app. Hit send
                    there and our team will get back to you shortly.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm(emptyForm);
                  }}
                  className="mt-2 inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-2.5 text-sm font-semibold text-[#061B35] transition hover:border-[#FE8A01] hover:text-[#FE8A01]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="mb-8 flex flex-col gap-2">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">Get in touch</p>
                  <h2 className="text-2xl font-extrabold tracking-tight text-[#061B35] sm:text-3xl">
                    Send us a message
                  </h2>
                  <p className="text-sm leading-6 text-slate-500">
                    Fill in your details and your email app will open with your message ready to send.
                    Fields marked <span className="font-semibold text-[#FE8A01]">*</span> are required.
                  </p>
                </div>

                <form id="contact-form" onSubmit={handleSubmit} className="scroll-mt-28 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="Full name" required icon={User}>
                      <input id="name" name="name" type="text" required placeholder="John Smith" value={form.name} onChange={handleChange} className={inputClass} />
                    </Field>
                    <Field id="company" label="Company name" icon={Building2}>
                      <input id="company" name="company" type="text" placeholder="Your Brokerage LLC" value={form.company} onChange={handleChange} className={inputClass} />
                    </Field>
                    <Field id="email" label="Email address" required icon={Mail}>
                      <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} className={inputClass} />
                    </Field>
                    <Field id="phone" label="Phone number" icon={Phone}>
                      <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" value={form.phone} onChange={handleChange} className={inputClass} />
                    </Field>
                  </div>

                  {/* Service picker */}
                  <fieldset>
                    <legend className="mb-3 block text-sm font-semibold text-[#061B35]">
                      What are you interested in? <span className="text-[#FE8A01]">*</span>
                    </legend>
                    <div className="grid gap-2.5 sm:grid-cols-2">
                      {services.map((s, i) => {
                        const selected = form.service === s.value;
                        return (
                          <label
                            key={s.value}
                            className={`group relative flex cursor-pointer items-center justify-between gap-3 rounded-xl border px-4 py-3 transition ${
                              selected
                                ? "border-[#FE8A01] bg-[#FE8A01]/5 ring-4 ring-[#FE8A01]/10"
                                : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <input
                              type="radio"
                              name="service"
                              value={s.value}
                              checked={selected}
                              onChange={handleChange}
                              required={i === 0}
                              className="sr-only"
                            />
                            <span className="flex items-center gap-3">
                              <span
                                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                                  selected ? "border-[#FE8A01] bg-[#FE8A01]" : "border-slate-300 bg-white"
                                }`}
                              >
                                {selected && <span className="h-1.5 w-1.5 rounded-full bg-white" />}
                              </span>
                              <span className="text-sm font-semibold text-[#061B35]">{s.label}</span>
                            </span>
                            {s.price && (
                              <span className={`shrink-0 text-sm font-bold tabular-nums ${selected ? "text-[#FE8A01]" : "text-slate-500"}`}>
                                {s.price}
                                <span className="text-xs font-medium text-slate-400">/{s.unit}</span>
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#061B35]">
                      Message <span className="text-[#FE8A01]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Tell us about your business, how many leads you need, and any questions you have…"
                      value={form.message}
                      onChange={handleChange}
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-medium text-[#061B35] outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#FE8A01] focus:ring-4 focus:ring-[#FE8A01]/10"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#FE8A01] px-6 py-4 font-bold text-white shadow-[0_15px_35px_-12px_rgba(254,138,1,0.8)] transition hover:-translate-y-0.5 hover:bg-[#E97900] active:scale-[0.98]"
                  >
                    <Send size={18} />
                    Send via Email
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Email app not opening? Write to us directly at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#1879D8] hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>

                  <p className="flex items-start gap-2 text-xs leading-5 text-slate-400">
                    <ShieldCheck size={14} className="mt-0.5 shrink-0" />
                    Your message opens pre-filled in your email app — nothing is sent until you press send.
                    See our{" "}
                    <Link href="/policies/privacy-policy" className="font-medium text-slate-500 underline underline-offset-2 hover:text-[#FE8A01]">
                      Privacy Policy
                    </Link>
                    .
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-28">
            {/* What happens next */}
            <div className="rounded-3xl bg-[#061B35] p-7 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">What happens next</p>
              <ol className="mt-6 space-y-6">
                {[
                  { icon: Send, title: "You send a message", desc: "Tell us which package you're interested in." },
                  { icon: Headphones, title: "We reach out", desc: "Our team typically replies within one business day." },
                  { icon: ClipboardCheck, title: "Start receiving leads", desc: "We set up your package and get you going." },
                ].map(({ icon: Icon, title, desc }, i, arr) => (
                  <li key={title} className="relative flex gap-4">
                    {i < arr.length - 1 && (
                      <span className="absolute left-5 top-11 h-[calc(100%-0.5rem)] w-px bg-white/15" />
                    )}
                    <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#FE8A01]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-0.5 text-sm leading-6 text-white/60">{desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Business hours */}
            <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 font-bold text-[#061B35]">
                  <Clock size={18} className="text-[#FE8A01]" />
                  Business hours
                </p>
                {openNow !== null && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      openNow ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {openNow ? "Open now" : "Closed"}
                  </span>
                )}
              </div>
              <dl className="mt-5 space-y-3 text-sm">
                <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-3">
                  <dt className="text-slate-500">Monday – Friday</dt>
                  <dd className="font-semibold text-[#061B35]">9:00 AM – 6:00 PM ET</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-slate-500">Saturday – Sunday</dt>
                  <dd className="font-semibold text-slate-400">Closed</dd>
                </div>
              </dl>
              <p className="mt-5 rounded-xl bg-[#F5F8FC] p-4 text-xs leading-5 text-slate-500">
                For inquiries outside business hours, send us an email and
                we&apos;ll respond as soon as possible.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#FE8A01] to-[#E46F00] px-8 py-12 sm:px-14 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-[#061B35]/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Ready to get started?</p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Explore our lead packages
              </h2>
              <p className="mt-3 text-white/85">
                Domestic, international, exclusive, and live call options — starting at $300.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link
                href="/product-pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#061B35] px-7 py-3.5 font-bold text-white transition hover:bg-[#0E2A4D] active:scale-[0.98]"
              >
                View pricing
                <ArrowRight size={17} />
              </Link>
              <a
                href={`tel:${PHONE_TEL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                <Phone size={17} />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}