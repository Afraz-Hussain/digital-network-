import {
  Zap,
  ShieldCheck,
  Target,
  TrendingUp,
  SlidersHorizontal,
  Clock3,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Truck,
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
];

const benefits = [
  "Leads delivered fast so you can call first",
  "Quality screening on leads where applicable",
  "Packages for small teams and large brokerages",
  "Domestic and international shipping inquiries",
];

export default function RealTimeLeads() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
        
      {/* Introduction */}
      <section className="relative bg-slate-50 px-5 py-16 sm:px-8 sm:py-24">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-orange-100/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-semibold text-orange-700">
              <Zap size={16} />
              Real-Time Auto Transport Leads
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Fresh Auto Transport Leads From{" "}
              <span className="text-orange-500">Digital Network</span>
            </h1>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Digital Network connects auto transport brokers with people
              who are ready to ship a vehicle. Our lead packages are built
              around fast delivery, useful customer details and options that
              fit the way your team sells.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              In auto transport, the first broker to call often wins the
              booking. That&apos;s why our leads reach you quickly, giving
              your team the best chance to connect while the customer is
              still deciding.
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Want less competition? With our exclusive packages, each lead
              is meant to go to one broker instead of several. Please confirm
              package terms and availability with our team before you order.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/product-pricing"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
              >
                See Lead Pricing
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 transition hover:border-orange-400 hover:text-orange-600"
              >
                Speak With Our Team
              </a>
            </div>
          </div>

          {/* Visual feature panel */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-orange-100/70 blur-xl" />

            <div className="relative overflow-hidden rounded-3xl bg-[#0b2946] p-7 text-white shadow-2xl sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500">
                <Truck size={30} />
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-orange-300">
                Built for brokers
              </p>

              <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">
                More conversations. More bookings.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Pick a package, call new inquiries quickly and turn more
                shipping quotes into confirmed jobs for your brokerage.
              </p>

              <div className="mt-8 space-y-4 border-t border-white/15 pt-6">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-orange-400"
                    />
                    <p className="text-sm leading-6 text-slate-200">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Why Digital Network
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Leads Designed to Help Your Team Close More Shipments
            </h2>

            <p className="mt-5 leading-7 text-slate-600">
              Everything your sales team needs to reach vehicle shipping
              customers at the right moment.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className={`group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-orange-200 hover:shadow-xl hover:shadow-slate-900/5 ${
                    index === 3 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-600 transition group-hover:bg-orange-500 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}

            <article className="flex flex-col justify-between rounded-2xl bg-slate-50 p-7">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b2946] text-white">
                  <Headphones size={24} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  Help When You Need It
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Not sure which package to choose? Our team will walk you
                  through lead types and pricing and help you find the best
                  fit for your sales operation.
                </p>
              </div>

              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-semibold text-orange-600 transition hover:text-orange-700"
              >
                Get in Touch
                <ArrowRight size={17} />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* Exclusive leads explanation */}
      <section className="bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">
              Shared vs. Exclusive Leads
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Choose the Lead Type That Fits Your Strategy
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Shared leads are a cost-effective way to keep your pipeline
              full. Exclusive leads give one broker the chance to work an
              inquiry without competing callers. The best option depends on
              your budget, team size and sales style.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Whatever you choose, quick follow-up, clear communication and
              a dependable sales process are what turn leads into loyal
              customers.
            </p>

            <a
              href="/product-pricing"
              className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#0b2946] px-6 py-3 font-semibold text-white transition hover:bg-orange-500"
            >
              Compare Packages
              <ArrowRight size={18} />
            </a>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <div className="flex items-start gap-4 border-b border-slate-100 pb-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <Clock3 size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Call New Leads Quickly
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Set up a simple routine so every new inquiry gets a fast
                  first call.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 border-b border-slate-100 py-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <ShieldCheck size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Know What You&apos;re Getting
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Check how your leads are shared, which customer details are
                  included and what screening applies to your package.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <TrendingUp size={23} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">
                  Grow a Reliable Pipeline
                </h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Track your follow-ups, review what works and keep
                  improving your results month after month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#071c32] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-white">
            <Headphones size={28} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">
            Ready When You Are
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Start Getting Auto Transport Leads With Digital Network
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Questions about pricing, packages, lead delivery or connecting
            leads to your CRM? Reach out to Digital Network and our team will
            help you get set up.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-orange-500 px-7 py-3 font-semibold text-white transition hover:bg-orange-600"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </a>

            <a
              href="/product-pricing"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}