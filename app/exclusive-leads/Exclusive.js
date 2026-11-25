import {
  ArrowRight,
  CarFront,
  CheckCircle2,
  Clock3,
  Headphones,
  ShieldCheck,
  SlidersHorizontal,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Lead Delivery",
    description:
      "New quote requests are sent to you moments after a customer submits them, so your team can call while the customer is still comparing options.",
  },
  {
    icon: ShieldCheck,
    title: "Screened for Quality",
    description:
      "We check leads for duplicates, missing details and invalid contact information where possible, so your team spends less time on dead ends.",
  },
  {
    icon: Target,
    title: "Customers Who Need Shipping",
    description:
      "We use focused marketing channels to reach people actively searching for vehicle shipping, then pass their inquiries on to your brokerage.",
  },
  {
    icon: TrendingUp,
    title: "Fuel for Your Sales Pipeline",
    description:
      "A steady flow of inquiries gives your team more chances to quote, follow up and close. Results still depend on your sales process and market conditions.",
  },
  {
    icon: SlidersHorizontal,
    title: "Lead Types for Every Budget",
    description:
      "Pick from shared, premium and exclusive leads, live call transfers and specialty shipping leads, and mix them to match your goals.",
  },
  {
    icon: Headphones,
    title: "Help When You Need It",
    description:
      "Not sure which package to choose? Our team will walk you through lead types and pricing and help you find the best fit.",
    link: { href: "/contact", label: "Get in touch" },
  },
];

const benefits = [
  "Leads delivered fast so you can call first",
  "Quality screening where applicable",
  "Domestic and international inquiries",
];

/* Illustration only — clearly labelled as sample data in the UI */
const sampleLeads = [
  { car: "Sedan", route: "Dallas, TX → Miami, FL", time: "Just now", tag: "Exclusive" },
  { car: "SUV", route: "Phoenix, AZ → Denver, CO", time: "2 min ago", tag: "Premium" },
  { car: "Pickup Truck", route: "Chicago, IL → Atlanta, GA", time: "5 min ago", tag: "Shared" },
];

const comparison = [
  { label: "Cost per lead", shared: "Lower", exclusive: "Higher" },
  { label: "Brokers per lead", shared: "Several", exclusive: "Just you" },
  { label: "Competition", shared: "Speed matters most", exclusive: "No other brokers" },
  { label: "Best for", shared: "High-volume teams", exclusive: "Focused closers" },
];

const tips = [
  { icon: Clock3, title: "Call New Leads Quickly", text: "A fast first call on every new inquiry." },
  {
    icon: ShieldCheck,
    title: "Know What You're Getting",
    text: "Check sharing, details and screening for your package.",
  },
  { icon: TrendingUp, title: "Grow a Reliable Pipeline", text: "Track follow-ups and keep improving." },
];

export default function RealTimeLeads() {
  return (
    <main className="overflow-hidden bg-white text-[#061B35]">
      <style>{`
        @keyframes rtlIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .rtl-row { animation: rtlIn .7s cubic-bezier(.2,.7,.2,1) both; }
        @media (prefers-reduced-motion: reduce) { .rtl-row { animation: none; } }
      `}</style>

      {/* ═════════════════ INTRO ═════════════════ */}
      <section className="relative px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-70 [mask-image:linear-gradient(to_bottom,black,transparent)]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(24,121,216,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(24,121,216,0.08) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2.5 rounded-full bg-[#FE8A01]/10 px-4 py-2 text-sm font-bold text-[#E97900]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FE8A01] opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FE8A01]" />
              </span>
              Real-Time Auto Transport Leads
            </span>

            <h1 className="mt-6 text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-[56px]">
              Fresh Auto Transport Leads From{" "}
              <span className="relative whitespace-nowrap text-[#1879D8]">
                Digital Network
                <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-[#FE8A01]/30" />
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Digital Network connects auto transport brokers with people who are ready to ship
              a vehicle. In this business, the first broker to call often wins the booking, so
              our leads reach you fast.
            </p>

            <ul className="mt-7 space-y-2.5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-[15px] font-medium text-slate-700">
                  <CheckCircle2 size={19} className="shrink-0 text-[#FE8A01]" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/product-pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FE8A01] px-7 py-3.5 font-bold text-white shadow-[0_10px_25px_-10px_rgba(254,138,1,0.8)] transition hover:bg-[#E97900]"
              >
                See Lead Pricing
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-7 py-3.5 font-bold text-[#061B35] transition hover:border-[#1879D8] hover:text-[#1879D8]"
              >
                Speak With Our Team
              </a>
            </div>
          </div>

          {/* Lead feed illustration */}
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full bg-[#1879D8]/10 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-[#FE8A01]/15 blur-2xl" />

            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_30px_70px_-30px_rgba(6,27,53,0.35)] sm:p-7">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Lead inbox
                  </p>
                  <p className="mt-1 text-lg font-extrabold">New quote requests</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-600">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                  Live
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {sampleLeads.map((lead, i) => (
                  <li
                    key={lead.route}
                    className={`rtl-row flex items-center gap-4 rounded-2xl border p-4 ${
                      i === 0
                        ? "border-[#FE8A01]/40 bg-[#FE8A01]/[0.05]"
                        : "border-slate-100 bg-slate-50/60"
                    }`}
                    style={{ animationDelay: `${200 + i * 180}ms` }}
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                        i === 0 ? "bg-[#FE8A01] text-white" : "bg-[#1879D8]/10 text-[#1879D8]"
                      }`}
                    >
                      <CarFront size={20} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="truncate font-bold">{lead.car}</p>
                        <span className="shrink-0 text-xs text-slate-400">{lead.time}</span>
                      </div>
                      <div className="mt-0.5 flex items-center justify-between gap-2">
                        <p className="truncate text-sm text-slate-500">{lead.route}</p>
                        <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[11px] font-bold text-[#1879D8] ring-1 ring-[#1879D8]/20">
                          {lead.tag}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex items-center justify-between rounded-2xl bg-[#061B35] px-5 py-4 text-white">
                <span className="text-sm font-semibold">Call while interest is high</span>
                <Zap size={18} className="text-[#FE8A01]" />
              </div>

              <p className="mt-3 text-center text-[11px] text-slate-400">
                Sample leads for illustration only
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ FEATURES ═════════════════ */}
      <section className="border-t border-slate-100 px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                Why Digital Network
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-[44px]">
                Leads Designed to Help Your Team Close More Shipments
              </h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-600 lg:pb-2">
              Everything your sales team needs to reach vehicle shipping customers at the right
              moment.
            </p>
          </div>

          <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <article key={feature.title} className="group border-t-2 border-slate-100 pt-7">
                  <span className="-mt-[30px] mb-6 block h-[2px] w-0 bg-[#FE8A01] transition-all duration-500 group-hover:w-full" />
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1879D8]/10 text-[#1879D8] transition-colors duration-300 group-hover:bg-[#1879D8] group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-extrabold">{feature.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                    {feature.description}
                  </p>
                  {feature.link && (
                    <a
                      href={feature.link.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#FE8A01] hover:underline"
                    >
                      {feature.link.label}
                      <ArrowRight size={15} />
                    </a>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═════════════════ SHARED vs EXCLUSIVE ═════════════════ */}
      <section className="bg-[#F5F8FC] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Shared vs. Exclusive
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              Choose the Lead Type That Fits Your Strategy
            </h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Shared leads keep your pipeline full at a lower cost. Exclusive leads are meant
              to go to one broker, so you can work each inquiry without competing callers.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Whatever you choose, quick follow-up and a dependable sales process are what turn
              leads into loyal customers. Please confirm package terms and availability with
              our team before you order.
            </p>
            <a
              href="/product-pricing"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#061B35] px-7 py-3.5 font-bold text-white transition hover:bg-[#FE8A01]"
            >
              Compare Packages
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div>
            {/* Comparison table */}
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_50px_-30px_rgba(6,27,53,0.35)]">
              <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-[#061B35] text-sm font-bold text-white">
                <div className="px-5 py-4 text-white/50">Compare</div>
                <div className="px-5 py-4">Shared</div>
                <div className="flex items-center gap-2 bg-[#FE8A01] px-5 py-4">
                  <ShieldCheck size={16} />
                  Exclusive
                </div>
              </div>
              {comparison.map((row, i) => (
                <div
                  key={row.label}
                  className={`grid grid-cols-[1.1fr_1fr_1fr] text-sm ${
                    i % 2 ? "bg-slate-50/70" : "bg-white"
                  }`}
                >
                  <div className="px-5 py-4 font-semibold text-slate-500">{row.label}</div>
                  <div className="px-5 py-4 font-medium">{row.shared}</div>
                  <div className="bg-[#FE8A01]/[0.06] px-5 py-4 font-bold text-[#061B35]">
                    {row.exclusive}
                  </div>
                </div>
              ))}
            </div>

            {/* Tips */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {tips.map((tip) => {
                const Icon = tip.icon;
                return (
                  <div key={tip.title} className="rounded-2xl bg-white p-5 ring-1 ring-slate-200">
                    <Icon size={20} className="text-[#FE8A01]" />
                    <p className="mt-3 text-sm font-bold">{tip.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-500">{tip.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ CTA ═════════════════ */}
      <section className="px-5 py-20 sm:px-8 lg:py-24">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-[#061B35] px-7 py-14 text-center sm:px-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[520px] -translate-x-1/2 rounded-full bg-[#FE8A01]/25 blur-[90px]" />

          <div className="relative">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Ready When You Are
            </p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
              Start Getting Auto Transport Leads With Digital Network
            </h2>
            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/65">
              Questions about pricing, packages, lead delivery or connecting leads to your CRM?
              Our team will help you get set up.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FE8A01] px-7 py-3.5 font-bold text-white transition hover:bg-[#E97900]"
              >
                Contact Our Team
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/product-pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                View Pricing
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}