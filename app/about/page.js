import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BadgeDollarSign,
  CheckCircle2,
  Clock,
  Crown,
  Headphones,
  Lock,
  Mail,
  PackageCheck,
  Phone,
  PhoneCall,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Star,
  Target,
  Users,
  Wrench,
  Zap,
} from "lucide-react";

export const metadata = {
  title: "About Us | Digital Network LLC",
  description:
    "Digital Network LLC helps auto transport brokers grow with shared, premium, exclusive, and live call transfer leads. Packages from $2.50 per lead.",
};

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const LEGAL_NAME = "Digital Network LLC";
const PHONE_DISPLAY = "+1 (734) 262-2139";
const PHONE_TEL = "+17342622139";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox

/* Facts taken from the site's own pricing and service pages */
const stats = [
  { value: "$2.50", label: "Lead packages from", sub: "per lead" },
  { value: "7", label: "Lead products", sub: "domestic, international & calls" },
  { value: "Up to 4", label: "Brokers per premium lead", sub: "fewer competitors per lead" },
  { value: "1", label: "Broker per exclusive lead", sub: "delivered to you only" },
];

const products = [
  {
    icon: Star,
    title: "Premium Leads",
    desc: "Shared with up to 4 brokers, so you compete with fewer companies for each customer.",
    price: "$5.00",
    unit: "lead",
    href: "/ourleads/premium-leads",
  },
  {
    icon: Lock,
    title: "Exclusive Leads",
    desc: "Delivered to you only. No competition on the customer once the lead is yours.",
    price: "$20.00",
    unit: "lead",
    href: "/ourleads/exclusive-premium-leads",
    featured: true,
  },
  {
    icon: PhoneCall,
    title: "Hot Live Call Transfers",
    desc: "Customers transferred straight to your phone while they're ready to talk.",
    price: "$25.00",
    unit: "call",
    href: "/ourleads/Hot-Live-Call-Transfer-Leads",
  },
  {
    icon: Wrench,
    title: "Car Service Leads",
    desc: "Vehicle owners looking for service, a growing opportunity beyond transport.",
    price: null,
    unit: null,
    href: "/ourleads/car-service",
  },
];

const steps = [
  {
    icon: ShoppingCart,
    title: "Choose your package",
    desc: "Pick shared, premium, exclusive, or live call leads, and the volume that fits your brokerage.",
  },
  {
    icon: PackageCheck,
    title: "Place your order",
    desc: "Confirm your package with our team. Pricing and terms are clear before you pay.",
  },
  {
    icon: Zap,
    title: "Receive your leads",
    desc: "Leads are delivered according to your package, so your sales team can start calling.",
  },
  {
    icon: Target,
    title: "Follow up & book",
    desc: "Contact customers quickly, quote with confidence, and turn leads into shipments.",
  },
];

const values = [
  {
    icon: BadgeDollarSign,
    title: "Transparent pricing",
    desc: "Our per-lead prices are published on our site. You know what you're paying before you order.",
  },
  {
    icon: Scale,
    title: "Clear lead rules",
    desc: "Shared means shared and exclusive means exclusive. Every package says exactly how leads are distributed.",
  },
  {
    icon: Users,
    title: "Built for brokers",
    desc: "Plans that fit your brokerage, from a first small order to steady, high-volume campaigns.",
  },
  {
    icon: ShieldCheck,
    title: "Quality focused",
    desc: "Real-time auto transport leads with customer contact details, so your team spends time selling.",
  },
  {
    icon: Headphones,
    title: "Responsive support",
    desc: "A real team you can call or email. We typically respond within one business day.",
  },
  {
    icon: Sparkles,
    title: "Room to grow",
    desc: "Add exclusive leads, live transfers, heavy haul, or international leads as your business grows.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#061B35]">
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

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-32 pt-16 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:pb-40 lg:pt-20">
          {/* Copy */}
          <div>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-white/50">
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span className="text-white/25">/</span>
              <span className="text-white/80">About Us</span>
            </nav>

            <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#FE8A01]/30 bg-[#FE8A01]/10 px-4 py-1.5 text-sm font-semibold text-[#FFB55C]">
              <span className="h-2 w-2 rounded-full bg-[#FE8A01] shadow-[0_0_10px_#FE8A01]" />
              About {LEGAL_NAME}
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              We connect brokers with customers{" "}
              <span className="relative whitespace-nowrap text-[#FE8A01]">
                ready to ship
                <svg viewBox="0 0 200 12" className="absolute -bottom-2 left-0 w-full" aria-hidden="true">
                  <path d="M2 9C50 3 150 3 198 9" stroke="#FE8A01" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.6" />
                </svg>
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              {COMPANY} is an auto transport lead generation company. We help
              brokers, carriers, and vehicle shipping businesses find people who
              need to move a vehicle, so your team can spend less time searching
              and more time booking.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/product-pricing"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#FE8A01] py-2 pl-6 pr-2 font-bold text-white shadow-[0_10px_30px_-10px_rgba(254,138,1,0.8)] transition hover:bg-[#E97900]"
              >
                View lead packages
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#FE8A01] transition group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                Talk to our team
              </Link>
            </div>
          </div>

          {/* Image collage */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="grid grid-cols-5 gap-4">
              <div className="relative col-span-3 h-80 overflow-hidden rounded-[1.75rem] border border-white/10 shadow-2xl sm:h-[420px]">
                <Image
                  src="/imgs/truck1.jpg"
                  alt="Car carrier truck loaded with vehicles"
                  fill
                  sizes="(max-width: 1024px) 60vw, 30vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/70 to-transparent" />
              </div>
              <div className="col-span-2 flex flex-col gap-4 pt-10">
                <div className="relative h-48 overflow-hidden rounded-[1.5rem] border border-white/10 shadow-2xl sm:h-60">
                  <Image
                    src="/imgs/truck2.jpg"
                    alt="Auto transport truck on the highway"
                    fill
                    sizes="(max-width: 1024px) 40vw, 20vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-[1.5rem] bg-gradient-to-br from-[#FE8A01] to-[#E46F00] p-5 text-white shadow-2xl">
                  <p className="text-3xl font-extrabold tracking-tight">$2.50</p>
                  <p className="mt-1 text-sm font-medium text-white/85">Lead packages starting price, per lead</p>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <CheckCircle2 size={20} />
              </span>
              <div>
                <p className="text-sm font-bold text-[#061B35]">Real-time leads</p>
                <p className="text-xs text-slate-500">For auto transport brokers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ STATS ══════════════ */}
      <section className="relative z-10 -mt-16 px-5 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-[0_30px_70px_-35px_rgba(6,27,53,0.4)] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white p-7">
              <p className="text-4xl font-extrabold tracking-tight text-[#061B35]">{s.value}</p>
              <p className="mt-2 font-semibold text-[#061B35]">{s.label}</p>
              <p className="mt-0.5 text-sm text-slate-500">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════ WHO WE ARE ══════════════ */}
      <section className="px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              <span className="h-px w-8 bg-[#FE8A01]" />
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              A lead partner that understands the auto transport business
            </h2>
            {/* TODO: add your own story here (when and why the company started, where you're based) */}
            <div className="mt-6 space-y-5 text-[17px] leading-8 text-slate-600">
              <p>
                Finding customers is one of the hardest parts of running a
                brokerage. {COMPANY} was built to make it easier. We generate
                leads from people who are actively looking to ship a vehicle and
                deliver them to brokers who can help.
              </p>
              <p>
                Our packages are designed around how brokers actually work:
                affordable shared leads when you want volume, exclusive leads
                when you want the customer to yourself, and live call transfers
                when you want to talk to a customer right now.
              </p>
            </div>
          </div>

          {/* Mission / vision cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-[#061B35] p-8 text-white sm:row-span-2 sm:flex sm:flex-col sm:justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FE8A01]">
                <Target size={22} />
              </span>
              <div className="mt-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FE8A01]">Our mission</p>
                <p className="mt-3 text-xl font-bold leading-8">
                  To help auto transport brokers grow by connecting them with
                  customers who are ready to ship.
                </p>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-[#F5F8FC] p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1879D8]/10 text-[#1879D8]">
                <Crown size={20} />
              </span>
              <p className="mt-5 font-bold">Our promise</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                Clear pricing, honest lead distribution, and a team that answers
                when you call.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-100 bg-[#F5F8FC] p-7">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FE8A01]/10 text-[#FE8A01]">
                <Users size={20} />
              </span>
              <p className="mt-5 font-bold">Who we serve</p>
              <p className="mt-1.5 text-sm leading-6 text-slate-600">
                Auto transport brokers, vehicle shipping companies, and related
                businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ WHAT WE OFFER ══════════════ */}
      <section className="bg-[#F5F8FC] px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">What we offer</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Lead products for every stage of your brokerage
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              From high-volume shared leads to live customers on the phone,
              choose what fits your sales team.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map(({ icon: Icon, title, desc, price, unit, href, featured }) => (
              <Link
                key={title}
                href={href}
                className={`group relative flex flex-col rounded-3xl p-7 transition duration-300 hover:-translate-y-1.5 ${
                  featured
                    ? "bg-[#061B35] text-white shadow-[0_30px_60px_-25px_rgba(6,27,53,0.7)]"
                    : "border border-slate-200/70 bg-white shadow-sm hover:shadow-[0_30px_60px_-30px_rgba(6,27,53,0.35)]"
                }`}
              >
                {featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#FE8A01] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    No competition
                  </span>
                )}
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl transition ${
                    featured
                      ? "bg-[#FE8A01] text-white"
                      : "bg-[#1879D8]/10 text-[#1879D8] group-hover:bg-[#FE8A01] group-hover:text-white"
                  }`}
                >
                  <Icon size={22} />
                </span>
                <p className="mt-6 text-lg font-bold">{title}</p>
                <p className={`mt-2 flex-1 text-sm leading-6 ${featured ? "text-white/70" : "text-slate-600"}`}>
                  {desc}
                </p>
                <div className={`mt-6 flex items-end justify-between border-t pt-5 ${featured ? "border-white/10" : "border-slate-100"}`}>
                  {price ? (
                    <p className="text-2xl font-extrabold tracking-tight">
                      {price}
                      <span className={`text-sm font-medium ${featured ? "text-white/50" : "text-slate-400"}`}>/{unit}</span>
                    </p>
                  ) : (
                    <p className={`text-sm font-semibold ${featured ? "text-white/70" : "text-slate-500"}`}>Ask for pricing</p>
                  )}
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition group-hover:translate-x-0.5 ${
                      featured ? "bg-white/10 text-white" : "bg-[#F5F8FC] text-[#061B35] group-hover:bg-[#FE8A01] group-hover:text-white"
                    }`}
                  >
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Also available: shared leads from $2.75, heavy haul leads, and
            shared or exclusive international leads.{" "}
            <Link href="/product-pricing" className="font-semibold text-[#1879D8] hover:text-[#FE8A01]">
              Compare all packages →
            </Link>
          </p>
        </div>
      </section>

      {/* ══════════════ HOW IT WORKS ══════════════ */}
      <section className="px-5 py-24 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">How it works</p>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                From order to booked shipment in four steps
              </h2>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 font-semibold text-[#061B35] hover:text-[#FE8A01]"
            >
              Get started today
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ol className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <span className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent lg:block" />
            {steps.map(({ icon: Icon, title, desc }, i) => (
              <li key={title} className="relative">
                <div className="relative flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-100 bg-white text-[#FE8A01] shadow-[0_15px_35px_-20px_rgba(6,27,53,0.4)]">
                    <Icon size={26} />
                  </span>
                  <span className="text-5xl font-extrabold tracking-tight text-slate-100">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="mt-6 text-lg font-bold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════════ WHY BROKERS CHOOSE US ══════════════ */}
      <section className="relative isolate overflow-hidden bg-[#061B35] px-5 py-24 text-white sm:px-8 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.35) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="pointer-events-none absolute -right-40 top-0 -z-10 h-[460px] w-[460px] rounded-full bg-[#FE8A01]/15 blur-3xl" />

        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">Why brokers choose us</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              What you can expect from {COMPANY}
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-[#FE8A01]/40 hover:bg-white/[0.07]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[#FE8A01] transition group-hover:bg-[#FE8A01] group-hover:text-white">
                  <Icon size={22} />
                </span>
                <p className="mt-6 text-lg font-bold">{title}</p>
                <p className="mt-2 text-sm leading-6 text-white/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════ CONTACT STRIP ══════════════ */}
      <section className="px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-3">
          <a
            href={`tel:${PHONE_TEL}`}
            className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FE8A01]/40 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FE8A01] text-white">
              <Phone size={21} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">Call us</span>
              <span className="mt-0.5 block truncate font-bold transition group-hover:text-[#FE8A01]">{PHONE_DISPLAY}</span>
            </span>
          </a>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#FE8A01]/40 hover:shadow-lg"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1879D8] text-white">
              <Mail size={21} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">Email us</span>
              <span className="mt-0.5 block truncate font-bold transition group-hover:text-[#FE8A01]">{CONTACT_EMAIL}</span>
            </span>
          </a>
          <div className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#061B35] text-white">
              <Clock size={21} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-widest text-slate-400">Business hours</span>
              <span className="mt-0.5 block font-bold">Mon–Fri · 9 AM–6 PM ET</span>
            </span>
          </div>
        </div>
      </section>

      {/* ══════════════ BOTTOM CTA ══════════════ */}
      <section className="px-5 pb-24 sm:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-[#FE8A01] to-[#E46F00] px-8 py-14 sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full bg-[#061B35]/20 blur-3xl" />
          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/80">Ready to grow?</p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Let&apos;s fill your pipeline with new customers
              </h2>
              <p className="mt-3 text-white/85">
                Domestic, international, exclusive, and live call options, starting at $300.
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
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 font-bold text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}