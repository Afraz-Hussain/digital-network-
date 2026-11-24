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
  User,
} from "lucide-react";

/* WhatsApp number: digits only, with country code (US = 1). No spaces, dashes or + sign. */
const WHATSAPP_NUMBER = "17342622139";
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

const WhatsAppIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.1 0C5.55 0 .22 5.33.22 11.88c0 2.1.55 4.16 1.6 5.98L.12 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.88-5.33 11.88-11.88a11.8 11.8 0 0 0-3.47-8.44ZM12.1 21.78a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.65-.24-.38a9.84 9.84 0 0 1-1.52-5.26c0-5.47 4.45-9.92 9.92-9.92a9.85 9.85 0 0 1 7.02 2.91 9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.46 9.89-9.94 9.89Zm5.45-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.67-2.08-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.28.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.26.48 1.69.61.71.22 1.36.19 1.87.11.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
  </svg>
);

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

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
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
              lead solution. Your inquiry goes straight to us on WhatsApp.
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
              href={`tel:+${WHATSAPP_NUMBER}`}
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
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur transition hover:border-[#25D366]/50 hover:bg-white/10"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] shadow-lg shadow-[#25D366]/30">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs text-white/55">Chat with us</span>
                <span className="block text-sm font-bold">WhatsApp</span>
              </span>
            </a>
          </div>

          <div className="mt-5 flex items-center gap-2 text-xs text-white/50">
            <Clock className="h-4 w-4" />
            Our team replies to WhatsApp inquiries as quickly as possible.
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
            Fill in a few details. WhatsApp will open with your inquiry ready to send.
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
              <WhatsAppIcon className="relative h-5 w-5" />
              <span className="relative">
                <span className="sm:hidden">Send via WhatsApp</span>
                <span className="hidden sm:inline">Send Inquiry via WhatsApp</span>
              </span>
              <ArrowRight className="relative h-5 w-5 transition-transform group-hover:translate-x-1" />
            </button>

            {sent ? (
              <p className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-4 py-3 text-center text-sm font-medium text-emerald-700">
                <CheckCircle2 className="h-4 w-4 shrink-0" />
                WhatsApp opened. Press <strong>Send</strong> there to deliver your inquiry.
              </p>
            ) : (
              <p className="text-center text-xs leading-5 text-slate-500">
                WhatsApp will open with your details filled in. Just press Send.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}