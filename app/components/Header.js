"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  FileText,
  Lock,
  Menu,
  MessageCircle,
  Phone,
  PhoneCall,
  RotateCcw,
  ShieldCheck,
  Star,
  Wrench,
  CalendarX,
  X,
} from "lucide-react";

/* Contact details — change here if needed */
const PHONE_DISPLAY = "+1 (734) 262-2139";
const PHONE_TEL = "+17342622139";
const WHATSAPP_NUMBER = "17342622139";

const navLinks = [
  { name: "Home", href: "/" },

  {
    name: "Services",
    children: [
      {
        name: "Lead Quality",
        href: "/ourleads/lead-quality",
        icon: ShieldCheck,
        desc: "What makes a good lead",
      },
      {
        name: "Premium Leads",
        href: "/ourleads/premium-leads",
        icon: Star,
        desc: "Shared with up to 4 brokers",
      },
      {
        name: "Exclusive Leads",
        href: "/ourleads/exclusive-premium-leads",
        icon: Lock,
        desc: "Delivered to you only",
      },
      {
        name: "Hot Live Call Transfer Leads",
        href: "/ourleads/Hot-Live-Call-Transfer-Leads",
        icon: PhoneCall,
        desc: "Customers transferred by phone",
      },
      {
        name: "Car Service Leads",
        href: "/ourleads/car-service",
        icon: Wrench,
        desc: "Vehicle owners needing service",
      },
    ],
    footer: { name: "Compare all packages", href: "/product-pricing" },
  },
  { name: "All Leads", href: "/leads" },
  { name: "Exclusive Leads", href: "/exclusive-leads" },
  // { name: "Freight Shipping", href: "/freight-shipping" },
  {
    name: "Our Policies",
    children: [
      {
        name: "Privacy Policy",
        href: "/privacypolicy",
        icon: ShieldCheck,
        desc: "How we collect and use your information",
      },
      {
        name: "Refund Policy",
        href: "/refundpolicy",
        icon: RotateCcw,
        desc: "Fees, cancellations, and claims",
      },
        {
        name: "Cancellation Policy",
        href: "/cancellationpolicy",
        icon: CalendarX,
        desc: "Fees, cancellations, and claims",
      },
      {
        name: "Terms & Conditions",
        href: "/terms-and-conditions",
        icon: FileText,
        desc: "Rules for using our services",
      },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Name of the open dropdown ("Services", "Our Policies") or null
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileMenu, setMobileMenu] = useState(null);
  const closeTimer = useRef(null);

  const isActive = (href) => (href === "/" ? pathname === "/" : pathname?.startsWith(href));
  const groupActive = (link) => link.children?.some((c) => isActive(c.href));

  // Shrink + shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menus when the route changes
  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  // Lock page scroll while the mobile drawer is open + close on Escape
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // Small delay so the dropdown doesn't flicker when moving the mouse
  const openDropdown = (name) => {
    clearTimeout(closeTimer.current);
    setOpenMenu(name);
  };
  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 150);
  };

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* ───── Top bar ───── */}
        <div
          className={`overflow-hidden bg-[#061B35] text-white transition-all duration-300 ${
            scrolled ? "max-h-0" : "max-h-12"
          }`}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2.5 text-xs sm:text-sm">
            <p className="hidden items-center gap-2 text-white/70 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FE8A01]" />
              Auto transport leads for brokers · Packages from $2.50 / lead
            </p>
            <div className="flex w-full items-center justify-between gap-5 sm:w-auto sm:justify-end">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2 font-semibold transition hover:text-[#FE8A01]"
              >
                <Phone size={14} className="text-[#FE8A01]" />
                {PHONE_DISPLAY}
              </a>
            
            </div>
          </div>
        </div>

        {/* ───── Main bar ───── */}
        <div
          className={`border-b transition-all duration-300 ${
            scrolled
              ? "border-slate-200/80 bg-white/85 shadow-[0_10px_30px_-15px_rgba(6,27,53,0.25)] backdrop-blur-xl"
              : "border-slate-100 bg-white"
          }`}
        >
          <div
            className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 ${
              scrolled ? "py-2.5" : "py-4"
            }`}
          >
            <Link href="/" className="inline-flex shrink-0 items-center" aria-label="Digital Network LLC home">
              <Image
                src="/imgs/logo.webp"
                alt="Digital Network LLC"
                width={200}
                height={90}
                priority
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled ? "h-11" : "h-14"
                }`}
              />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden items-center gap-1 lg:flex">
              {navLinks.map((link) =>
                link.children ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => openDropdown(link.name)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenMenu((p) => (p === link.name ? null : link.name))}
                      aria-expanded={openMenu === link.name}
                      aria-haspopup="true"
                      className={`group relative flex items-center gap-1.5 rounded-full px-4 py-2 text-[15px] font-semibold transition ${
                        openMenu === link.name || groupActive(link)
                          ? "text-[#FE8A01]"
                          : "text-[#061B35] hover:text-[#FE8A01]"
                      }`}
                    >
                      {link.name}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          openMenu === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={`absolute right-0 top-full w-[360px] pt-4 transition-all duration-200 ${
                        openMenu === link.name
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-2 opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden rounded-2xl border border-slate-100 bg-white p-2 shadow-[0_25px_60px_-20px_rgba(6,27,53,0.35)]">
                        {link.children.map((child) => {
                          const Icon = child.icon;
                          const active = isActive(child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`group/item flex items-center gap-4 rounded-xl p-3 transition ${
                                active ? "bg-[#FE8A01]/10" : "hover:bg-[#F5F8FC]"
                              }`}
                            >
                              <span
                                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition ${
                                  active
                                    ? "bg-[#FE8A01] text-white"
                                    : "bg-[#1879D8]/10 text-[#1879D8] group-hover/item:bg-[#FE8A01] group-hover/item:text-white"
                                }`}
                              >
                                <Icon size={19} />
                              </span>
                              <span className="min-w-0 flex-1">
                                <span className="block text-sm font-bold text-[#061B35]">
                                  {child.name}
                                </span>
                                <span className="block text-xs text-slate-500">{child.desc}</span>
                              </span>
                              <ArrowRight
                                size={16}
                                className="-translate-x-1 text-[#FE8A01] opacity-0 transition group-hover/item:translate-x-0 group-hover/item:opacity-100"
                              />
                            </Link>
                          );
                        })}

                        {link.footer && (
                          <Link
                            href={link.footer.href}
                            className="mt-2 flex items-center justify-between rounded-xl bg-[#061B35] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#0E2A4D]"
                          >
                            {link.footer.name}
                            <ArrowRight size={16} className="text-[#FE8A01]" />
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`group relative rounded-full px-4 py-2 text-[15px] font-semibold transition ${
                      isActive(link.href) ? "text-[#FE8A01]" : "text-[#061B35] hover:text-[#FE8A01]"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0.5 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#FE8A01] transition-all duration-300 ${
                        isActive(link.href) ? "w-5" : "w-0 group-hover:w-5"
                      }`}
                    />
                  </Link>
                )
              )}

              <Link
                href="/contact"
                className="group ml-3 inline-flex items-center gap-2 rounded-full bg-[#FE8A01] py-2 pl-5 pr-2 text-[15px] font-bold text-white shadow-[0_8px_20px_-8px_rgba(254,138,1,0.8)] transition hover:bg-[#E97900]"
              >
                Contact Us
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#FE8A01] transition-transform group-hover:translate-x-0.5">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 text-[#061B35] transition hover:border-[#FE8A01] hover:text-[#FE8A01] lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* ───── Mobile drawer ───── */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${mobileOpen ? "visible" : "invisible"}`}
        aria-hidden={!mobileOpen}
      >
        {/* Overlay */}
        <div
          onClick={() => setMobileOpen(false)}
          className={`absolute inset-0 bg-[#061B35]/50 backdrop-blur-sm transition-opacity duration-300 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Panel */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
            <Image
              src="/imgs/logo.webp"
              alt="Digital Network LLC"
              width={160}
              height={72}
              className="h-10 w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-[#061B35] transition hover:bg-[#FE8A01] hover:text-white"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name} className="py-1">
                  <button
                    type="button"
                    onClick={() => setMobileMenu((p) => (p === link.name ? null : link.name))}
                    aria-expanded={mobileMenu === link.name}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3.5 font-semibold transition ${
                      mobileMenu === link.name || groupActive(link)
                        ? "bg-[#FE8A01]/10 text-[#FE8A01]"
                        : "text-[#061B35] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        mobileMenu === link.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      mobileMenu === link.name
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mt-1 space-y-1 pl-2">
                        {link.children.map((child) => {
                          const Icon = child.icon;
                          const active = isActive(child.href);
                          return (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileOpen(false)}
                              className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition ${
                                active ? "text-[#FE8A01]" : "text-slate-600 hover:bg-slate-50"
                              }`}
                            >
                              <span
                                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                  active ? "bg-[#FE8A01] text-white" : "bg-[#1879D8]/10 text-[#1879D8]"
                                }`}
                              >
                                <Icon size={17} />
                              </span>
                              {child.name}
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`my-1 flex items-center justify-between rounded-xl px-4 py-3.5 font-semibold transition ${
                    isActive(link.href)
                      ? "bg-[#FE8A01]/10 text-[#FE8A01]"
                      : "text-[#061B35] hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                  {isActive(link.href) && <span className="h-2 w-2 rounded-full bg-[#FE8A01]" />}
                </Link>
              )
            )}
          </nav>

          <div className="space-y-3 border-t border-slate-100 p-5">
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#FE8A01] px-5 py-3.5 font-bold text-white transition hover:bg-[#E97900]"
            >
              Contact Us
              <ArrowRight size={17} />
            </Link>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-[#061B35]"
              >
                <Phone size={15} className="text-[#FE8A01]" />
                Call
              </a>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-semibold text-[#061B35]"
              >
                <MessageCircle size={15} className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}