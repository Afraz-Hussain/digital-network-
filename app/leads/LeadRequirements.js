import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

const requirements = [
  {
    number: "01",
    title: "A Team Ready to Respond",
    description:
      "Leads convert best when someone picks up fast. Quick calls, clear answers and steady follow-ups build trust from the very first conversation.",
  },
  {
    number: "02",
    title: "Professional Communication",
    description:
      "Clear calls, well-written emails and accurate quotes help your brokerage stand out and give customers the confidence to book.",
  },
  {
    number: "03",
    title: "Solid Auto Transport Knowledge",
    description:
      "Know your routes, carriers and shipping options so you can answer questions, explain next steps and move every inquiry toward a booking.",
  },
];

export default function LeadRequirements() {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-[#FE8A01]/[0.07] blur-[110px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ============ IMAGE ============ */}
        <div className="relative pb-6 pl-6">
          {/* Orange block behind the photo */}
          <div className="absolute bottom-0 left-0 h-2/3 w-2/3 rounded-3xl bg-gradient-to-br from-[#FE8A01] to-[#E97900]" />

          <div className="relative h-[320px] overflow-hidden rounded-3xl shadow-[0_30px_60px_-20px_rgba(6,27,53,0.4)] sm:h-[440px] lg:h-[520px]">
            <Image
              src="/imgs/truck1.jpg"
              alt="Digital Network auto transport solutions"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061B35]/85 via-[#061B35]/10 to-transparent" />

            <div className="absolute inset-x-6 bottom-6 text-white sm:inset-x-8 sm:bottom-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
                Digital Network
              </p>
              <h3 className="mt-2 text-2xl font-extrabold leading-snug sm:text-3xl">
                Better Preparation.
                <br />
                Stronger Results.
              </h3>
            </div>
          </div>
        </div>

        {/* ============ CONTENT ============ */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#FE8A01]" />
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#FE8A01]">
              Is Your Business Ready?
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-black leading-tight tracking-tight text-[#061B35] sm:text-4xl lg:text-[44px]">
            Are Digital Network Leads Right for{" "}
            <span className="text-[#FE8A01]">Your Business?</span>
          </h2>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
            Great leads open the door, but how your team handles them decides the booking.
            Brokerages that get the best results usually have these three things in place.
          </p>

          {/* Numbered list */}
          <ol className="mt-10 space-y-2">
            {requirements.map((item, i) => (
              <li
                key={item.number}
                className="group relative flex gap-5 rounded-2xl p-4 transition-colors duration-300 hover:bg-[#F7FAFE] sm:p-5"
              >
                {/* Connector line to next number */}
                {i < requirements.length - 1 && (
                  <span className="absolute left-[39px] top-[68px] h-[calc(100%-36px)] w-px border-l-2 border-dashed border-slate-200 sm:left-[43px] sm:top-[72px]" />
                )}

                <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-[#FE8A01] bg-white text-sm font-black text-[#FE8A01] transition-all duration-300 group-hover:bg-[#FE8A01] group-hover:text-white group-hover:shadow-[0_8px_20px_-6px_rgba(254,138,1,0.7)]">
                  {item.number}
                </span>

                <div className="pt-1">
                  <h3 className="text-lg font-extrabold text-[#061B35]">{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* Closing note */}
          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#1879D8]/15 bg-[#F7FAFE] p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1879D8]/10">
                <Sparkles className="h-5 w-5 text-[#1879D8]" />
              </span>
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-bold text-[#061B35]">Not sure yet?</span> We&apos;ll help you
                pick a lead plan that fits your team and goals.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#FE8A01]"
            >
              Talk to us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}