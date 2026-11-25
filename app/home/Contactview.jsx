"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageSquareText,
  Phone,
  Send,
  User,
} from "lucide-react";

/* Contact details — change here if needed */
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox
const PHONE_TEL = "+17342622139";
const DISPLAY_PHONE = "+1 (734) 262-2139";

const services = [
  "Exclusive Leads",
  "Premium Leads",
  "Live Call Transfer Leads",
  "Car Service Leads",
  "Freight Shipping",
  "Other",
];

const benefits = [
  "Real-time auto transport leads",
  "Verified customer contact details",
  "Plans that fit your brokerage",
];

/* Input with an icon on the left */
function Field({ id, label, icon: Icon, required, optional, ...props }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 flex items-center gap-1 text-sm font-semibold text-[#061B35]">
        {label}
        {required && <span className="text-[#FE8A01]">*</span>}
        {optional && <span className="text-xs font-medium text-slate-400">(optional)</span>}
      </label>
      <div className="group relative">
        <Icon className="pointer-events-none absolute left-4 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-[#FE8A01]" />
        <input
          id={id}
          name={id}
          required={required}
          className="w-full rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-[#061B35] outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#FE8A01] focus:bg-white focus:ring-4 focus:ring-[#FE8A01]/10"
          {...props}
        />
      </div>
    </div>
  );
}

export default function QuickInquiry() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: services[0],
    area: "",
    message: "",
  });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = [
      "Hello Digital Network! I'd like to make an inquiry.",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Company: ${form.company || "-"}`,
      `Service: ${form.service}`,
      `Areas Served: ${form.area || "-"}`,
      `Message: ${form.message || "No additional message"}`,
    ].join("\n");

    const subject = `New inquiry: ${form.service} — ${form.name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(text)}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F7FAFE] px-4 py-20 sm:px-6 lg:px-10 lg:py-28"
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#1879D8]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FE8A01]/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl overflow-hidden rounded-[32px] bg-white shadow-[0_40px_100px_-30px_rgba(6,27,53,0.35)] ring-1 ring-slate-100 lg:grid-cols-[0.95fr_1.05fr]">
        {/* ================= LEFT PANEL ================= */}
        <div className="relative isolate flex flex-col justify-between overflow-hidden bg-[#061B35] p-8 text-white sm:p-12">
          <Image
            src="/imgs/truck1.jpg"
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="-z-20 object-cover opacity-40"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#061B35]/95 via-[#061B35]/85 to-[#0E4F95]/80" />
          <div
            className="absolute inset-0 -z-10 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="absolute -bottom-24 -right-24 -z-10 h-72 w-72 rounded-full border-[40px] border-[#FE8A01]/15" />

          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#FE8A01] shadow-[0_0_10px_#FE8A01]" />
              Digital Network
            </span>

            <h2 className="mt-7 text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl lg:text-[44px]">
              Let&apos;s Grow Your <span className="text-[#FE8A01]">Brokerage</span> Together.
            </h2>

            <p className="mt-5 max-w-md text-base leading-relaxed text-white/70">
              Tell us what you need and our team will help you find the right auto transport
              lead solution. Your inquiry goes straight to our inbox by email.
            </p>

            <ul className="mt-8 space-y-3.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] font-medium text-white/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#FE8A01]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact cards */}
          <div className="mt-12 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:${PHONE_TEL}`}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition hover:border-[#FE8A01]/50 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FE8A01] shadow-lg shadow-[#FE8A01]/30">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-white/55">Call us</span>
                <span className="block truncate text-sm font-bold">{DISPLAY_PHONE}</span>
              </span>
            </a>

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition hover:border-[#1879D8]/60 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1879D8] shadow-lg shadow-[#1879D8]/30">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-white/55">Email us</span>
                <span className="block truncate text-sm font-bold">{CONTACT_EMAIL}</span>
              </span>
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
            <Clock className="h-4 w-4" />
            Our team replies to email inquiries as quickly as possible.
          </div>
        </div>

        {/* ================= FORM ================= */}
        <div className="p-6 sm:p-10 lg:p-12">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#FE8A01]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              Quick Inquiry
            </span>
          </div>

          <h3 className="mt-4 text-3xl font-black tracking-tight text-[#061B35] sm:text-[34px]">
            How Can We Help You?
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500">
            Fill in a few details. Your email app will open with your inquiry ready to send.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="name" label="Full Name" icon={User} required
                type="text" autoComplete="name" placeholder="John Smith"
                value={form.name} onChange={handleChange}
              />
              <Field
                id="phone" label="Phone Number" icon={Phone} required
                type="tel" autoComplete="tel" placeholder="+1 234 567 8900"
                value={form.phone} onChange={handleChange}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                id="email" label="Email Address" icon={Mail} required
                type="email" autoComplete="email" placeholder="you@company.com"
                value={form.email} onChange={handleChange}
              />
              <Field
                id="company" label="Company Name" icon={Building2} optional
                type="text" autoComplete="organization" placeholder="Your brokerage"
                value={form.company} onChange={handleChange}
              />
            </div>

            {/* Service chips */}
            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-[#061B35]">
                Service Interested In <span className="text-[#FE8A01]">*</span>
              </legend>
              <div className="flex flex-wrap gap-2.5">
                {services.map((s) => {
                  const active = form.service === s;
                  return (
                    <label
                      key={s}
                      className={`cursor-pointer select-none rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 has-[:focus-visible]:ring-4 has-[:focus-visible]:ring-[#FE8A01]/20 ${
                        active
                          ? "border-[#FE8A01] bg-[#FE8A01] text-white shadow-[0_6px_16px_-6px_rgba(254,138,1,0.7)]"
                          : "border-slate-200 bg-white text-slate-600 hover:border-[#FE8A01]/50 hover:text-[#061B35]"
                      }`}
                    >
                      <input
                        type="radio"
                        name="service"
                        value={s}
                        checked={active}
                        onChange={handleChange}
                        className="sr-only"
                      />
                      {s}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <Field
              id="area" label="Areas / Routes You Serve" icon={MapPin} optional
              type="text" placeholder="e.g. Texas, Florida, nationwide"
              value={form.area} onChange={handleChange}
            />

            <div>
              <label htmlFor="message" className="mb-2 flex items-center gap-1 text-sm font-semibold text-[#061B35]">
                Additional Details
                <span className="text-xs font-medium text-slate-400">(optional)</span>
              </label>
              <div className="group relative">
                <MessageSquareText className="pointer-events-none absolute left-4 top-4 h-[18px] w-[18px] text-slate-400 transition-colors group-focus-within:text-[#FE8A01]" />
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us about your lead volume or requirements..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50/70 py-3.5 pl-11 pr-4 text-sm text-[#061B35] outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-[#FE8A01] focus:bg-white focus:ring-4 focus:ring-[#FE8A01]/10"
                />
              </div>
            </div>

            <button
              type="submit"
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl bg-gradient-to-r from-[#FE8A01] to-[#F59A1F] px-6 py-4 font-bold text-white shadow-[0_15px_35px_-12px_rgba(254,138,1,0.8)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-12px_rgba(254,138,1,0.9)] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FE8A01]/30"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <Send className="relative h-5 w-5" />
              <span className="relative">
                <span className="sm:hidden">Send via Email</span>
                <span className="hidden sm:inline">Send Inquiry via Email</span>
              </span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            {sent ? (
              <p className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                Email app opened. Press <strong>Send</strong> there to deliver your inquiry.
              </p>
            ) : (
              <p className="text-center text-xs leading-5 text-slate-500">
                Your email app will open with your details filled in. Just press Send.
              </p>
            )}
            <p className="text-center text-xs text-slate-400">
              Email app not opening? Write to us directly at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-[#1879D8] hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}