"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Mail,
  Lock,
  ShieldCheck,
  Users,
  CreditCard,
  Package,
  PhoneCall,
  RefreshCcw,
  AlertTriangle,
  Scale,
  Handshake,
  Eye,
  Link2,
  AlertCircle,
  ArrowRight,
  ArrowUp,
  Truck,
  Gavel,
  CalendarDays,
  Clock,
  ChevronDown,
  Target,
  Share2,
  Crown,
  MessageSquare,
  Check,
  X,
} from "lucide-react";

/* ─────────────────────────────────────────────
   Company details — update these in one place
───────────────────────────────────────────── */
const COMPANY = "Digital Network";
const LEGAL_NAME = "Digital Network LLC";
const CONTACT_EMAIL = "info@digitalnetwork.com"; // TODO: replace with the real inbox
const CONTACT_PATH = "/contact";
const PRIVACY_PATH = "/privacy-policy";
const LAST_UPDATED = "November 25, 2026";

/* ─────────────────────────────────────────────
   Small content helpers
───────────────────────────────────────────── */
function Bullets({ items, tone = "default" }) {
  return (
    <ul className="grid gap-2.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          {tone === "dont" ? (
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <X size={10} strokeWidth={3} />
            </span>
          ) : tone === "do" ? (
            <span className="mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check size={10} strokeWidth={3} />
            </span>
          ) : (
            <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
          )}
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Callout({ icon: Icon = AlertCircle, children }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4 text-slate-700">
      <Icon size={18} className="mt-1 shrink-0 text-blue-600" />
      <div>{children}</div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Terms sections
───────────────────────────────────────────── */
const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          These Terms and Conditions are an agreement between you and{" "}
          {LEGAL_NAME} (&ldquo;{COMPANY},&rdquo; &ldquo;we,&rdquo;
          &ldquo;us,&rdquo; or &ldquo;our&rdquo;) covering your use of our
          website, products, and services.
        </p>
        <p>
          By browsing our website, submitting an inquiry, placing an order, or
          using any of our services, you confirm that you have read and
          understood these terms and agree to follow them.
        </p>
        <p>
          If you use our services on behalf of a company or other business
          entity, you confirm that you are authorized to accept these terms on
          its behalf.
        </p>
      </>
    ),
  },
  {
    id: "our-services",
    icon: Truck,
    title: "Our Services",
    content: (
      <>
        <p>
          {COMPANY} provides lead generation solutions that help auto transport
          brokers, vehicle shipping companies, and related businesses connect
          with prospective customers.
        </p>
        <p>Our services may include:</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {[
            "Shared auto transport leads",
            "Premium lead packages",
            "Exclusive auto transport leads",
            "Live call transfers",
            "International vehicle shipping leads",
            "Heavy haul leads",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50/70 px-3.5 py-2.5 text-sm font-medium text-slate-800"
            >
              <Check size={15} className="shrink-0 text-blue-600" />
              {item}
            </div>
          ))}
        </div>
        <p>
          We may also offer other lead generation products introduced on our
          website. Availability, pricing, delivery method, and features can
          vary by product or package. We reserve the right to update, modify,
          suspend, or discontinue any service, subject to applicable law and
          any existing order commitments.
        </p>
      </>
    ),
  },
  {
    id: "eligibility",
    icon: Users,
    title: "User Eligibility and Responsibilities",
    content: (
      <>
        <p>
          You must be legally capable of entering into a binding agreement to
          purchase our services. When using {COMPANY}, you agree to:
        </p>
        <Bullets
          tone="do"
          items={[
            "Provide accurate and complete information when placing an order.",
            "Keep your account and business contact details up to date, where applicable.",
            "Use leads and services only for lawful business purposes.",
            "Follow applicable privacy, marketing, consumer protection, and telecommunications laws.",
            "Respect the rights and privacy of prospective customers.",
            "Make sure your employees or representatives who use our services comply with these terms.",
          ]}
        />
        <p>
          You are responsible for ensuring that your business is properly
          authorized or licensed to provide the transportation or brokerage
          services you advertise.
        </p>
      </>
    ),
  },
  {
    id: "orders-payments",
    icon: CreditCard,
    title: "Orders and Payments",
    content: (
      <>
        <p>
          Orders for {COMPANY} products and services are subject to the
          pricing, package details, minimum purchase requirements, and order
          terms presented at the time of purchase. Before submitting an order,
          please review the selected products, quantities, prices, and any
          applicable conditions.
        </p>
        <p>Unless otherwise stated in writing:</p>
        <Bullets
          items={[
            "Prices are listed in the currency shown on the applicable pricing page or order confirmation.",
            "Minimum order amounts or quantity requirements may apply to certain products.",
            "Additional charges, taxes, or payment processing fees may apply where disclosed or required by law.",
            "An order may require confirmation before it is considered accepted.",
            "You must provide valid payment information and pay amounts due according to the agreed payment terms.",
          ]}
        />
        <p>
          We reserve the right to correct pricing or listing errors and to
          contact you if an order needs clarification. If an error materially
          affects your order, we will work with you on an appropriate
          resolution, subject to applicable law.
        </p>
      </>
    ),
  },
  {
    id: "lead-quality",
    icon: Package,
    title: "Lead Quality and Delivery",
    content: (
      <>
        <p>
          {COMPANY} aims to provide lead generation products that help
          businesses find potential vehicle shipping customers and sales
          opportunities. Lead details and delivery times may vary depending on
          the product, source, availability, and package selected.
        </p>
        <p>You acknowledge that:</p>
        <Bullets
          items={[
            "A lead is a potential sales opportunity and does not guarantee a completed booking or sale.",
            "Customer requirements, availability, responsiveness, and purchase decisions may change.",
            "The accuracy and completeness of individual lead details may vary.",
            "Delivery timing depends on the agreed product and delivery method.",
            "You are responsible for reviewing and managing leads after delivery.",
          ]}
        />
        <Callout icon={Target}>
          We do not guarantee a specific conversion rate, number of completed
          shipments, revenue level, or return on investment unless expressly
          agreed in writing.
        </Callout>
      </>
    ),
  },
  {
    id: "shared-exclusive",
    icon: ShieldCheck,
    title: "Shared and Exclusive Leads",
    content: (
      <>
        <p>
          {COMPANY} may offer different lead distribution models, including
          shared and exclusive leads.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                <Share2 size={17} />
              </span>
              <p className="font-semibold text-slate-900">Shared Leads</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              May be supplied to more than one eligible business, according to
              the package purchased. Buying a shared lead does not give you
              exclusive rights to contact the prospective customer.
            </p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
                <Crown size={17} />
              </span>
              <p className="font-semibold text-slate-900">Exclusive Leads</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Distributed under the exclusivity conditions stated in the
              product description or order confirmation. The scope and duration
              of exclusivity, where offered, depend on that product&apos;s
              terms.
            </p>
          </div>
        </div>
        <p>
          Please review the specific package details before purchasing. We will
          not represent a lead as exclusive unless the applicable product or
          order terms provide for exclusivity.
        </p>
      </>
    ),
  },
  {
    id: "live-transfers",
    icon: PhoneCall,
    title: "Live Call Transfer Services",
    content: (
      <>
        <p>
          {COMPANY} may offer live call transfer services that connect
          prospective customers with participating auto transport businesses.
          Availability, qualification criteria, routing procedures, operating
          hours, and pricing may vary by campaign or package.
        </p>
        <p>By purchasing or using live call transfers, you acknowledge that:</p>
        <Bullets
          items={[
            "Call volume and availability may fluctuate.",
            "A transferred call does not guarantee a booking or sale.",
            "Call quality may depend on the customer's requirements and the information they provide.",
            "You are responsible for answering calls, giving accurate service information, and following up appropriately.",
            "You must comply with applicable telemarketing, call recording, consent, privacy, and do-not-call requirements.",
          ]}
        />
        <p>
          Any specific requirements about call duration, qualification, invalid
          calls, or credits must be stated in the applicable product terms or a
          written agreement.
        </p>
      </>
    ),
  },
  {
    id: "refunds",
    icon: RefreshCcw,
    title: "Refunds and Cancellations",
    content: (
      <>
        <p>
          Refund eligibility depends on the product purchased, the
          circumstances of the request, and any applicable refund policy or
          written agreement.
        </p>
        <p>
          Because lead generation services involve time-sensitive information
          and completed call transfers, refunds are not automatically available
          once delivery or service performance has occurred, except where
          required by law or expressly agreed otherwise.
        </p>
        <ol className="grid gap-3">
          {[
            {
              t: "Contact us",
              d: `If a lead or transferred call doesn't meet the requirements expressly stated for your product, contact ${COMPANY} with your order details and supporting information.`,
            },
            {
              t: "Submit on time",
              d: "Where applicable, send your request within the review period specified in your order confirmation or product-specific policy.",
            },
            {
              t: "We review it",
              d: "Eligible requests are reviewed under the applicable terms. Any approved refund, replacement, or account credit is handled under the relevant policy or agreement.",
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
        <p>
          Cancellation of an ongoing or recurring service, if offered, must
          follow the cancellation procedure communicated at the time of
          purchase.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    icon: AlertTriangle,
    title: "Acceptable Use",
    content: (
      <>
        <p>
          You agree not to use {COMPANY}&apos;s website, products, or services
          to:
        </p>
        <Bullets
          tone="dont"
          items={[
            "Violate applicable laws or regulations.",
            "Misuse, resell, or redistribute lead data contrary to your agreement or applicable law.",
            "Send unlawful, deceptive, unsolicited, or misleading communications.",
            "Harass, threaten, or mislead prospective customers.",
            "Attempt unauthorized access to our systems or interfere with website operations.",
            "Upload or transmit malicious software or harmful material.",
            "Misrepresent your business, services, pricing, or qualifications.",
            "Use customer information in a way that conflicts with applicable privacy or marketing laws.",
          ]}
        />
        <p>
          We may restrict or suspend access to our services if we reasonably
          believe a user has violated these terms, subject to applicable law
          and any relevant contractual obligations.
        </p>
      </>
    ),
  },
  {
    id: "intellectual-property",
    icon: Lock,
    title: "Intellectual Property",
    content: (
      <>
        <p>
          All website content, branding, logos, text, graphics, design
          elements, and other materials owned by or licensed to {COMPANY} are
          protected by applicable intellectual property laws.
        </p>
        <p>
          You may view and use our website for legitimate business purposes.
          You may not reproduce, republish, distribute, modify, sell, or
          commercially exploit our website content or branding without prior
          written permission, except where permitted by law.
        </p>
        <p>
          Purchasing a lead or service does not transfer ownership of{" "}
          {COMPANY}&apos;s intellectual property.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    icon: Link2,
    title: "Third-Party Services and Links",
    content: (
      <>
        <p>
          Our website may link to external websites or rely on third-party
          providers for functions such as communications, payment processing,
          hosting, or analytics.
        </p>
        <p>
          Third-party services may be governed by their own terms and privacy
          policies. {COMPANY} does not control all third-party services and is
          not responsible for their independent policies, availability, or
          operations, except where liability cannot be excluded under
          applicable law.
        </p>
        <p>
          Your use of third-party services is subject to the terms that apply
          to those services.
        </p>
      </>
    ),
  },
  {
    id: "disclaimer",
    icon: AlertCircle,
    title: "Disclaimer of Warranties",
    content: (
      <>
        <p>
          To the extent permitted by law, our website and services are provided
          on an &ldquo;as available&rdquo; basis.
        </p>
        <p>
          We make reasonable efforts to maintain our website and provide
          services as described. However, we do not guarantee that the website
          will always be available, uninterrupted, error-free, or compatible
          with every device or system.
        </p>
        <p>
          We also do not guarantee that leads will result in sales, that every
          prospective customer will respond, or that any particular business
          outcome will be achieved.
        </p>
        <p>
          Nothing in these terms excludes any warranty or consumer right that
          cannot lawfully be excluded.
        </p>
      </>
    ),
  },
  {
    id: "liability",
    icon: Scale,
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the maximum extent permitted by applicable law, {COMPANY} will not
          be liable for indirect, incidental, special, consequential, or
          punitive losses, including lost profits, lost business opportunities,
          or loss of anticipated revenue arising from your use of our website
          or services.
        </p>
        <Callout icon={Scale}>
          To the extent permitted by law, our total liability for a claim
          relating to a specific paid service will not exceed the amount you
          paid for that service during the period relevant to the claim, unless
          a different limit is required by applicable law or expressly agreed
          in writing.
        </Callout>
        <p>
          These limitations do not apply to liabilities that cannot legally be
          limited or excluded.
        </p>
      </>
    ),
  },
  {
    id: "indemnification",
    icon: Handshake,
    title: "Indemnification",
    content: (
      <>
        <p>
          To the extent permitted by law, you agree to indemnify and hold{" "}
          {COMPANY} and its personnel harmless from third-party claims, losses,
          and reasonable expenses arising from your unlawful use of our
          services, your breach of these terms, or your violation of another
          person&apos;s rights.
        </p>
        <p>
          This does not apply to the extent a claim results from {COMPANY}
          &apos;s own conduct for which it is legally responsible.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    icon: Eye,
    title: "Privacy",
    content: (
      <>
        <p>
          Your use of our website and services is also governed by our Privacy
          Policy, which explains how we collect, use, and protect personal
          information.
        </p>
        <Link
          href={PRIVACY_PATH}
          className="group flex items-center justify-between gap-4 rounded-xl border border-slate-200 p-4 transition hover:border-blue-300 hover:bg-blue-50/50"
        >
          <span className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <ShieldCheck size={18} />
            </span>
            <span>
              <span className="block font-semibold text-slate-900 group-hover:text-blue-700">
                Read our Privacy Policy
              </span>
              <span className="block text-sm text-slate-500">
                How {COMPANY} handles your information
              </span>
            </span>
          </span>
          <ArrowRight size={18} className="shrink-0 text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-blue-600" />
        </Link>
      </>
    ),
  },
  {
    id: "changes",
    icon: RefreshCcw,
    title: "Changes to These Terms",
    content: (
      <>
        <p>
          {COMPANY} may revise these Terms and Conditions to reflect changes to
          our services, business practices, or legal obligations.
        </p>
        <p>
          Updated terms will be posted on this page with a revised &ldquo;Last
          Updated&rdquo; date. Where required by law, we will give notice of
          material changes or obtain your consent.
        </p>
        <p>
          Your continued use of our website after revised terms take effect
          means you accept the updated terms, to the extent permitted by law.
          Changes will not retroactively alter existing contractual rights
          where prohibited by law.
        </p>
      </>
    ),
  },
  {
    id: "governing-law",
    icon: Gavel,
    title: "Governing Law",
    content: (
      <>
        <p>
          These Terms and Conditions are governed by the laws applicable to the
          contractual relationship between you and {COMPANY}, subject to any
          mandatory legal protections that apply to you.
        </p>
        <p>
          Any dispute arising from these terms will be handled by the courts or
          other dispute resolution forum with appropriate jurisdiction, as
          determined by applicable law.
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
          Questions about these Terms and Conditions, our lead generation
          products, order requirements, or service policies? Reach{" "}
          {LEGAL_NAME} through either of the following:
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
        <p>We will review your inquiry and respond as appropriate.</p>
      </>
    ),
  },
];

const highlights = [
  {
    icon: Target,
    title: "Leads aren't guaranteed sales",
    desc: "A lead is an opportunity, not a booked shipment.",
    href: "#lead-quality",
  },
  {
    icon: Share2,
    title: "Shared vs. exclusive",
    desc: "Check your package to see how each lead is distributed.",
    href: "#shared-exclusive",
  },
  {
    icon: RefreshCcw,
    title: "Refund reviews",
    desc: "Submit requests within your product's review period.",
    href: "#refunds",
  },
  {
    icon: ShieldCheck,
    title: "Use leads lawfully",
    desc: "Follow privacy, marketing, and do-not-call rules.",
    href: "#acceptable-use",
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
export default function TermsAndConditionsPage() {
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
            <span className="text-slate-200">Terms and Conditions</span>
          </nav>

          <div className="mt-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">
              <Scale size={14} />
              Legal &amp; Compliance
            </span>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
              Terms &amp;{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                Conditions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              The rules for using{" "}
              <span className="font-semibold text-white">{COMPANY}</span>
              &apos;s website and services, including shared, exclusive, and
              premium auto transport leads and live call transfers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <CalendarDays size={15} className="text-blue-400" />
                Last updated
                <span className="font-semibold text-white">{LAST_UPDATED}</span>
              </span>
              <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300">
                <Clock size={15} className="text-blue-400" />
                About 10 min read
              </span>
              <Link
                href={PRIVACY_PATH}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
              >
                <ShieldCheck size={15} className="text-blue-400" />
                Privacy Policy
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════ KEY POINTS ══════════════ */}
      <section className="relative z-10 -mt-10 px-6 sm:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 shadow-xl shadow-slate-900/5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map(({ icon: Icon, title, desc, href }) => (
              <a key={title} href={href} className="group bg-white p-6 transition hover:bg-slate-50">
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
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[270px_1fr]">
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
            <div className="sticky top-10 max-h-[calc(100vh-5rem)] overflow-y-auto pb-6">
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
                      className={`-ml-px flex items-start gap-3 border-l-2 py-1.5 pl-4 pr-2 text-sm leading-5 transition ${
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
                <p className="text-sm font-semibold">Questions about these terms?</p>
                <p className="mt-1 text-xs leading-5 text-slate-400">
                  Our team can help with orders, leads, and policies.
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

          {/* Terms body */}
          <div className="min-w-0">
            <div className="mb-12 flex items-start gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500 text-white">
                <FileText size={20} />
              </span>
              <div>
                <p className="font-semibold text-slate-900">Please read these terms carefully.</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-700">
                  By accessing our website or using our services, you agree to
                  be bound by these Terms and Conditions. If you don&apos;t
                  agree with any part of them, please stop using our website
                  and services.
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
                Have a question?
              </p>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Talk to the {COMPANY} team
              </h2>
              <p className="mt-3 text-slate-400">
                Ask about orders, lead packages, or any of these terms —
                we&apos;ll review your inquiry and respond as appropriate.
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