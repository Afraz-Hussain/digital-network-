import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock,
  FileText,
  Headphones,
  Mail,
  MessageCircle,
  MessageSquare,
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOff,
  Target,
  TrendingUp,
  Truck,
  Voicemail,
  Zap,
} from "lucide-react";

/* WhatsApp number: digits only with country code (US = 1) */
const WHATSAPP_NUMBER = "17342622139";
const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hello Digital Network! I'm interested in Live Transfer Calls."
)}`;

/* Same figures as the pricing page */
const PRICE = 25;
const MIN_ORDER = 300;
const MIN_CALLS = Math.ceil(MIN_ORDER / PRICE);

const formFlow = [
  { icon: FileText, text: "Customer fills out a form" },
  { icon: Mail, text: "You see it later and call back" },
  { icon: Voicemail, text: "Voicemail, or they already booked" },
];

const callFlow = [
  { icon: PhoneIncoming, text: "Customer calls about shipping" },
  { icon: PhoneCall, text: "Call is transferred to your line" },
  { icon: MessageSquare, text: "You're talking to them right now" },
];

const steps = [
  {
    icon: PhoneIncoming,
    title: "A Customer Calls",
    text: "Someone who needs to ship a vehicle reaches one of our advertising channels by phone.",
  },
  {
    icon: BadgeCheck,
    title: "Quick Check",
    text: "We confirm they're calling about vehicle shipping before connecting them to you.",
  },
  {
    icon: PhoneCall,
    title: "Transferred to Your Line",
    text: "The live call goes straight to your designated phone number. Your rep picks up.",
  },
  {
    icon: TrendingUp,
    title: "You Quote & Book",
    text: "Talk through the route, vehicle and timing, give your quote and guide them to booking.",
  },
];

const reasons = [
  {
    icon: MessageSquare,
    title: "Real Conversations",
    text: "Talk to customers live instead of waiting on email replies or form callbacks.",
  },
  {
    icon: Clock,
    title: "Perfect Timing",
    text: "You connect while the shipping need is active, not hours or days later.",
  },
  {
    icon: Target,
    title: "One Broker Per Call",
    text: "Each transfer goes to a single brokerage. No one else is on that call.",
  },
  {
    icon: Headphones,
    title: "Personal Service",
    text: "Cover pickup, delivery, vehicle details and price in one friendly call.",
  },
  {
    icon: Zap,
    title: "Boost Your Pipeline",
    text: "Add live calls on top of your shared, premium or exclusive leads.",
  },
  {
    icon: Truck,
    title: "Domestic Shipping",
    text: "Calls from customers shipping vehicles within the U.S.",
  },
];

export default function LiveCallsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#061B35]">
      <style>{`
        @keyframes lcRing { 0% { transform: scale(1); opacity: .55; } 100% { transform: scale(2.2); opacity: 0; } }
        @keyframes lcShake { 0%,100% { transform: rotate(0); } 10%,30% { transform: rotate(-12deg); } 20%,40% { transform: rotate(12deg); } 50% { transform: rotate(0); } }
        .lc-ring { animation: lcRing 2s ease-out infinite; }
        .lc-shake { animation: lcShake 1.6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .lc-ring, .lc-shake { animation: none; } }
      `}</style>

      {/* ═════════════════ HERO ═════════════════ */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#061B35] via-[#0A2B52] to-[#0E4F95] px-6 py-20 sm:px-10 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#FE8A01]/25 blur-[140px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              <PhoneCall size={14} className="text-[#FE8A01]" />
              Live Transfer Calls
            </span>

            <h1 className="mt-7 text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[60px]">
              Your Phone Rings.
              <span className="block text-[#FE8A01]">A Customer Is Ready.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Skip the form fills and email chains. Digital Network transfers callers who want to
              ship a vehicle straight to your sales line, so you can talk to them right away.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/product-pricing"
                className="group inline-flex items-center gap-2 rounded-xl bg-[#FE8A01] px-8 py-4 font-bold text-white shadow-[0_12px_30px_-10px_rgba(254,138,1,0.9)] transition hover:bg-[#E97900]"
              >
                Order Live Calls
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-8 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <MessageCircle size={18} className="text-[#25D366]" />
                Talk to Our Team
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/70">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#FE8A01]" />${PRICE} per call
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#FE8A01]" />1 broker per call
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#FE8A01]" />${MIN_ORDER} minimum ({MIN_CALLS} calls)
              </span>
            </div>
          </div>

          {/* Phone mockup */}
          <div className="relative mx-auto w-[280px] sm:w-[300px]">
            <div className="absolute -inset-10 rounded-full bg-[#1879D8]/30 blur-3xl" />
            <div className="relative rounded-[44px] border-[10px] border-[#0B1220] bg-gradient-to-b from-[#0E2A4D] to-[#061B35] px-6 pb-10 pt-6 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]">
              <div className="mx-auto h-5 w-24 rounded-full bg-[#0B1220]" />

              <p className="mt-10 text-center text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
                Incoming transfer
              </p>
              <p className="mt-2 text-center text-2xl font-extrabold text-white">New Customer</p>
              <p className="mt-1 text-center text-sm text-white/60">Vehicle shipping inquiry</p>

              {/* Ringing avatar */}
              <div className="relative mx-auto mt-10 flex h-24 w-24 items-center justify-center">
                <span className="lc-ring absolute inset-0 rounded-full bg-[#FE8A01]" />
                <span className="lc-ring absolute inset-0 rounded-full bg-[#FE8A01]" style={{ animationDelay: "1s" }} />
                <span className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-[#FE8A01] to-[#E97900] text-white shadow-lg">
                  <Truck size={38} />
                </span>
              </div>

              <div className="mt-8 rounded-2xl bg-white/[0.06] p-4 text-center text-sm text-white/70 ring-1 ring-white/10">
                Transferred by <span className="font-bold text-white">Digital Network</span>
              </div>

              <div className="mt-10 flex items-center justify-around">
                <div className="text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500/90 text-white">
                    <PhoneOff size={22} />
                  </span>
                  <p className="mt-2 text-[11px] text-white/50">Decline</p>
                </div>
                <div className="text-center">
                  <span className="lc-shake flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_25px_rgba(16,185,129,0.6)]">
                    <Phone size={22} />
                  </span>
                  <p className="mt-2 text-[11px] text-white/50">Accept</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-[11px] text-white/40">Illustration</p>
          </div>
        </div>
      </section>

      {/* ═════════════════ FORM vs CALL ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              Why Calls Win
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              A Form Waits. A Call Doesn&apos;t.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Customers who don&apos;t hear back quickly often call the next company on their
              list. Live transfers put you on the phone first.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              { title: "Web form lead", sub: "The slow way", flow: formFlow, live: false },
              { title: "Live transfer call", sub: "The fast way", flow: callFlow, live: true },
            ].map((col) => (
              <div
                key={col.title}
                className={`rounded-3xl p-8 sm:p-10 ${
                  col.live
                    ? "bg-[#061B35] text-white shadow-[0_30px_60px_-25px_rgba(6,27,53,0.55)]"
                    : "border border-slate-200 bg-slate-50"
                }`}
              >
                <p
                  className={`text-sm font-bold uppercase tracking-[0.2em] ${
                    col.live ? "text-[#FE8A01]" : "text-slate-400"
                  }`}
                >
                  {col.sub}
                </p>
                <h3 className={`mt-2 text-2xl font-extrabold ${col.live ? "" : "text-slate-500"}`}>
                  {col.title}
                </h3>

                <ol className="relative mt-8 space-y-6">
                  <span
                    className={`absolute bottom-5 left-5 top-5 w-px border-l-2 border-dashed ${
                      col.live ? "border-[#FE8A01]/50" : "border-slate-300"
                    }`}
                  />
                  {col.flow.map((s) => {
                    const Icon = s.icon;
                    return (
                      <li key={s.text} className="relative flex items-center gap-4">
                        <span
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            col.live
                              ? "bg-[#FE8A01] text-white"
                              : "bg-white text-slate-400 ring-1 ring-slate-200"
                          }`}
                        >
                          <Icon size={18} />
                        </span>
                        <span className={col.live ? "font-medium text-white/90" : "text-slate-500"}>
                          {s.text}
                        </span>
                      </li>
                    );
                  })}
                </ol>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═════════════════ HOW IT WORKS (zigzag timeline) ═════════════════ */}
      <section className="bg-[#F5F8FC] px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
              How It Works
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              From Their Call to Your Line
            </h2>
          </div>

          <div className="relative mt-16">
            <span className="absolute bottom-0 left-6 top-0 w-1 rounded-full bg-gradient-to-b from-[#1879D8] via-[#FE8A01] to-[#061B35] md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-10 md:space-y-4">
              {steps.map((s, i) => {
                const Icon = s.icon;
                const right = i % 2 === 1;
                return (
                  <div key={s.title} className="relative md:grid md:grid-cols-2 md:gap-16">
                    <span className="absolute left-6 top-6 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#F5F8FC] bg-[#061B35] text-sm font-black text-white md:left-1/2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={`ml-16 rounded-3xl bg-white p-7 shadow-[0_15px_40px_-25px_rgba(6,27,53,0.35)] ring-1 ring-slate-200/70 md:ml-0 ${
                        right ? "md:col-start-2" : "md:text-right"
                      }`}
                    >
                      <span
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FE8A01]/10 text-[#FE8A01]`}
                      >
                        <Icon size={20} />
                      </span>
                      <h3 className="mt-4 text-xl font-extrabold">{s.title}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{s.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ REASONS ═════════════════ */}
      <section className="px-6 py-20 sm:px-10 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FE8A01]">
                Why Live Calls
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Built for Teams That Close on the Phone
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                If your reps are at their best in a live conversation, this is the lead type for
                you.
              </p>
            </div>

            <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
              {reasons.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="group flex gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1879D8]/10 text-[#1879D8] transition group-hover:bg-[#1879D8] group-hover:text-white">
                      <Icon size={20} />
                    </span>
                    <div>
                      <h3 className="text-lg font-extrabold">{r.title}</h3>
                      <p className="mt-1.5 text-[15px] leading-relaxed text-slate-600">{r.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═════════════════ PRICE + CTA ═════════════════ */}
      <section className="px-6 pb-24 sm:px-10">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-gradient-to-br from-[#FE8A01] to-[#E97900] p-8 sm:p-12 lg:p-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
          />
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl">
                Ready for Your Phone to Ring?
              </h2>
              <p className="mt-4 max-w-lg text-lg text-white/90">
                Start with {MIN_CALLS} live calls and see how your team performs on the phone.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/product-pricing"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#061B35] px-8 py-4 font-bold text-white transition hover:bg-[#0E2A4D]"
                >
                  Order Live Calls
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
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-2xl">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">
                Live transfer call
              </p>
              <p className="mt-2 flex items-baseline gap-1.5">
                <span className="text-6xl font-black tracking-tight">${PRICE}</span>
                <span className="font-semibold text-slate-400">/ call</span>
              </p>
              <ul className="mt-6 space-y-3 text-sm font-medium">
                {[
                  "1 broker per call",
                  "Transferred to your phone line",
                  "Domestic vehicle shipping",
                  `Min. order $${MIN_ORDER} (${MIN_CALLS} calls)`,
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="shrink-0 text-[#FE8A01]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-6 max-w-3xl text-center text-xs leading-5 text-slate-400">
          Prices may change with demand and availability, and are confirmed before every order.
          Live calls create sales opportunities but do not guarantee bookings.
        </p>
      </section>
    </main>
  );
}