"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Mail,
  Lock,
  Eye,
  Database,
  Users,
  FileText,
  AlertCircle,
  ArrowRight,
  ArrowUp,
  Cookie,
  Baby,
  ExternalLink,
  Scale,
  RefreshCw,
  BadgeCheck,
  Clock,
  CalendarDays,
  ChevronDown,
  Ban,
  UserCheck,
  MessageSquare,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const LEGAL_NAME = "Digital Network LLC";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox
const CONTACT_PATH = "/contact";
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

function LabeledList({ items }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item.label}
          className="rounded-xl border border-slate-200 bg-slate-50/70 p-4"
        >
          <p className="text-sm font-semibold text-slate-900">{item.label}</p>
          <p className="mt-1 text-sm leading-6 text-slate-600">{item.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Policy sections
───────────────────────────────────────────── */
const sections = [
  {
    id: "information-we-collect",
    icon: Database,
    title: "Personal Information We Collect",
    content: (
      <>
        <p>
          {COMPANY} may collect personal information when you visit our
          website, submit a contact form, request information about our auto
          transport lead services, ask about pricing, or communicate with our
          team.
        </p>
        <p>Depending on how you interact with us, this may include:</p>
        <Bullets
          items={[
            "Your name and business name.",
            "Email address and telephone number.",
            "Business contact details.",
            "Information about your interest in our lead generation products and services.",
            "Details included in messages, inquiries, or other communications you send us.",
          ]}
        />
        <p>
          We collect personal information that you voluntarily provide or that
          is otherwise collected through our website in accordance with
          applicable law. You can browse parts of our website without providing
          personal information, but some services or features may require
          specific details so we can respond to your request.
        </p>
      </>
    ),
  },
  {
    id: "non-personal-information",
    icon: Eye,
    title: "Non-Personal Information",
    content: (
      <>
        <p>
          When you visit our website, certain technical information may be
          collected automatically. It helps us understand how visitors use the
          site and where we can improve its performance.
        </p>
        <p>This information may include:</p>
        <Bullets
          items={[
            "Browser type and version.",
            "Device type and operating system.",
            "IP address and general location information derived from it.",
            "Pages visited and time spent on the website.",
            "Referring websites and general browsing activity.",
            "Technical information about your connection.",
          ]}
        />
        <p>
          We may use this information in aggregated form to analyze website
          traffic, troubleshoot technical issues, and improve the visitor
          experience.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies and Tracking Technologies",
    content: (
      <>
        <p>
          Our website may use cookies and similar technologies to support site
          functionality, remember certain preferences, analyze visitor
          activity, and improve our services.
        </p>
        <p>
          Cookies are small files stored by your browser that allow a website
          to recognize certain information about your visit.
        </p>
        <p>
          You can manage or disable cookies through your browser settings.
          Depending on your choices, some website features may not work as
          intended.
        </p>
        <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-slate-700">
          <BadgeCheck size={18} className="mt-1 shrink-0 text-blue-600" />
          <p>
            Where required by applicable law, we will request your consent
            before using non-essential cookies or tracking technologies.
          </p>
        </div>
      </>
    ),
  },
  {
    id: "how-we-use",
    icon: FileText,
    title: "How We Use Your Information",
    content: (
      <>
        <p>
          {COMPANY} may use the information we collect for legitimate business
          purposes, including:
        </p>
        <LabeledList
          items={[
            {
              label: "Responding to inquiries",
              desc: "Answering questions, providing requested information, and assisting with service-related requests.",
            },
            {
              label: "Providing our services",
              desc: "Explaining our lead generation products, processing requests, preparing quotations, and coordinating orders.",
            },
            {
              label: "Communicating with you",
              desc: "Sending service updates, responding to messages, and sharing information relevant to your inquiries.",
            },
            {
              label: "Improving our website",
              desc: "Understanding visitor behavior, improving navigation, evaluating performance, and resolving technical issues.",
            },
            {
              label: "Maintaining security",
              desc: "Detecting suspicious activity, preventing misuse, and protecting our website and business operations.",
            },
            {
              label: "Meeting legal obligations",
              desc: "Complying with applicable laws, regulations, and lawful requests from relevant authorities.",
            },
          ]}
        />
        <p>
          We use personal information for purposes consistent with the reason
          it was collected, or for other purposes permitted by applicable law.
        </p>
      </>
    ),
  },
  {
    id: "how-we-protect",
    icon: Lock,
    title: "How We Protect Your Information",
    content: (
      <>
        <p>
          We take reasonable technical and organizational measures designed to
          protect personal information against unauthorized access, loss,
          misuse, alteration, or disclosure.
        </p>
        <p>
          These measures may include access controls, secure data handling
          practices, and appropriate safeguards for information stored or
          transmitted through our website and business systems.
        </p>
        <p>
          However, no method of transmitting information over the internet or
          storing electronic data is completely secure. While we work hard to
          protect your information, we cannot guarantee absolute security.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    icon: Users,
    title: "Sharing and Disclosure of Information",
    content: (
      <>
        <p>
          {COMPANY} does not sell personal information in exchange for money.
          We may disclose information in limited circumstances when necessary
          to operate our business, provide requested services, or comply with
          legal requirements.
        </p>
        <p>Information may be shared with:</p>
        <LabeledList
          items={[
            {
              label: "Service providers",
              desc: "Companies that help us operate our website, manage communications, process payments where applicable, maintain systems, or provide analytics.",
            },
            {
              label: "Business partners",
              desc: "Where appropriate and permitted by law, relevant partners when necessary to provide a service you requested or support a business transaction.",
            },
            {
              label: "Legal authorities",
              desc: "When disclosure is required by law, legal process, or a valid request from an authorized authority.",
            },
            {
              label: "Business transfers",
              desc: "In connection with a merger, acquisition, restructuring, or transfer of business assets, subject to applicable privacy requirements.",
            },
          ]}
        />
        <p>
          We take reasonable steps to ensure that third parties handling
          personal information on our behalf are subject to appropriate
          confidentiality and security obligations.
        </p>
      </>
    ),
  },
  {
    id: "childrens-privacy",
    icon: Baby,
    title: "Children's Privacy",
    content: (
      <>
        <p>
          {COMPANY}&apos;s website and services are intended for businesses and
          adults. They are not designed to target children under the age of 13.
        </p>
        <p>
          We do not knowingly collect personal information directly from
          children under 13. If we become aware that such information has been
          collected without appropriate authorization, we will take reasonable
          steps to delete it as required by applicable law.
        </p>
        <p>
          A parent or legal guardian who believes a child has provided personal
          information to us may contact us using the details below.
        </p>
      </>
    ),
  },
  {
    id: "third-party-sites",
    icon: ExternalLink,
    title: "Third-Party Websites and Services",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms, or
          services. These operate independently and may have their own privacy
          policies and data collection practices.
        </p>
        <p>
          {COMPANY} does not control the privacy practices of third-party
          websites. We encourage you to review their privacy policies before
          providing personal information to those services.
        </p>
        <p>
          Including an external link does not necessarily imply endorsement of
          that website or its privacy practices.
        </p>
      </>
    ),
  },
  {
    id: "your-rights",
    icon: Scale,
    title: "Your Privacy Rights and Choices",
    content: (
      <>
        <p>
          Depending on your location and applicable law, you may have rights
          concerning your personal information, including the right to:
        </p>
        <Bullets
          items={[
            "Request access to personal information we hold about you.",
            "Ask us to correct inaccurate or incomplete information.",
            "Request deletion of certain personal information.",
            "Withdraw consent where processing is based on consent.",
            "Opt out of marketing emails by following the unsubscribe instructions provided.",
            "Object to or restrict certain types of processing where applicable.",
            "Submit a privacy-related complaint to the relevant authority.",
          ]}
        />
        <p>
          These rights are subject to applicable legal requirements and
          exceptions. To submit a request, contact us using the details in the{" "}
          <a href="#contact" className="font-medium text-blue-600 underline-offset-4 hover:underline">
            Contact Us
          </a>{" "}
          section. We may need to verify your identity before processing
          certain requests.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    icon: RefreshCw,
    title: "Changes to This Privacy Policy",
    content: (
      <>
        <p>
          {COMPANY} may update this Privacy Policy from time to time to reflect
          changes in our business practices, website features, legal
          obligations, or privacy requirements.
        </p>
        <p>
          When we make changes, we will update the &ldquo;Last Updated&rdquo;
          date at the top of this page. Where required by law, we will provide
          additional notice or obtain consent for material changes.
        </p>
        <p>
          We encourage you to review this page periodically to stay informed
          about how we handle personal information.
        </p>
      </>
    ),
  },
  {
    id: "acceptance",
    icon: ShieldCheck,
    title: "Your Acceptance of This Policy",
    content: (
      <>
        <p>
          By accessing or using the {COMPANY} website, you acknowledge this
          Privacy Policy and its terms.
        </p>
        <p>
          If you do not agree with this policy, please discontinue use of the
          website. Where consent is legally required for a particular activity,
          using the website alone will not replace the need to obtain that
          consent.
        </p>
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
          If you have questions about this Privacy Policy, want to make a
          privacy-related request, or need more information about our data
          practices, please reach {LEGAL_NAME} through either of the following:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
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
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-white">
              <MessageSquare size={18} />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">
                Contact form
              </span>
              <span className="flex items-center gap-1 font-semibold text-slate-900 group-hover:text-blue-700">
                Send us a message
                <ArrowRight size={14} className="transition group-hover:translate-x-0.5" />
              </span>
            </span>
          </Link>
        </div>
        <p>
          We will review privacy-related inquiries and respond as appropriate
          under applicable law.
        </p>
      </>
    ),
  },
];

const highlights = [
  {
    icon: Ban,
    title: "We don't sell your data",
    desc: "Your personal information is never sold for money.",
    href: "#sharing",
  },
  {
    icon: Lock,
    title: "Protected by safeguards",
    desc: "Reasonable technical and organizational security measures.",
    href: "#how-we-protect",
  },
  {
    icon: UserCheck,
    title: "You stay in control",
    desc: "Access, correct, or delete your information on request.",
    href: "#your-rights",
  },
  {
    icon: Cookie,
    title: "Cookie choices",
    desc: "Manage cookies anytime from your browser settings.",
    href: "#cookies",
  },
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
export default function PrivacyPolicyPage() {
  const active = useActiveSection(sectionIds);
  const progress = useScrollProgress();
  const [mobileTocOpen, setMobileTocOpen] = useState(false);

  const activeIndex = sectionIds.indexOf(active);
  const activeTitle = sections[activeIndex]?.title ?? sections[0].title;

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Reading progress */}
      <div className="fixed inset-x-0 top-0 z-50 h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* ══════════════ HERO ══════════════ */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {/* grid texture */}
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
          {/* breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <span className="text-slate-600">/</span>
            <span className="text-slate-200">Privacy Policy</span>
          </nav>

          <div className="mt-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <ShieldCheck size={14} />
              Legal &amp; Privacy
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Privacy{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Policy
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              At <span className="font-semibold text-white">{COMPANY}</span>, we
              respect your privacy and are committed to protecting the personal
              information you share with us. This page explains what we collect,
              why, and the choices you have.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <CalendarDays size={15} className="text-blue-400" />
                Last updated
                <span className="font-semibold text-white">{LAST_UPDATED}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <Clock size={15} className="text-blue-400" />
                About 6 min read
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ AT A GLANCE ══════════════ */}
      <section className="relative z-10 -mt-10 px-6 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, desc, href }) => (
              <a
                key={title}
                href={href}
                className="group bg-white p-6 transition hover:bg-slate-50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={19} />
                </span>
                <p className="mt-4 font-semibold text-slate-900">{title}</p>
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
              <nav className="relative mt-5 border-l border-slate-200">
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
                <p className="text-sm font-semibold">Questions about your data?</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Our team is happy to help with any privacy request.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold transition hover:bg-blue-500"
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
                <ShieldCheck size={20} />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Your privacy matters to us.</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600">
                  This policy explains how {LEGAL_NAME} (&ldquo;{COMPANY},&rdquo;
                  &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;)
                  collects, uses, and protects the information you share when
                  using our website or auto transport lead generation services.
                  By using our website, you acknowledge that you have read this
                  Privacy Policy.
                </p>
              </div>
            </div>

            <div className="divide-y divide-slate-200">
              {sections.map((s, i) => {
                const Icon = s.icon;
                return (
                  <article
                    key={s.id}
                    id={s.id}
                    className="scroll-mt-24 py-10 first:pt-0 last:pb-0"
                  >
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
                Privacy questions?
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Talk to the {COMPANY} team
              </h2>
              <p className="mt-3 text-slate-400">
                We&apos;ll review your inquiry and respond as required under
                applicable law.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]"
              >
                <Mail size={17} />
                Email us
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