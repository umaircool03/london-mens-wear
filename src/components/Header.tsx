"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BUSINESS } from "@/data/store";
import { CloseIcon, MenuIcon, PhoneIcon } from "./Icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/collections", label: "Collections" },
  { href: "/alteration-and-tailoring", label: "Alteration & Tailoring" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-gold-500/20 bg-navy-950/95 backdrop-blur-md">
      {/* Top micro-bar with Kanpur address & timings */}
      <div className="hidden border-b border-navy-800 bg-navy-900/80 px-4 py-1.5 text-xs text-cream-300 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <p>
            House No. 335, Railbazar, Cantt, Kanpur ·{" "}
            <span className="text-gold-400">{BUSINESS.timings}</span>
          </p>
          <div className="flex items-center gap-5">
            <a
              href={BUSINESS.phoneHref}
              className="transition-colors hover:text-gold-400"
            >
              Call: {BUSINESS.phoneDisplay}
            </a>
            <a
              href={`mailto:${BUSINESS.email}`}
              className="transition-colors hover:text-gold-400"
            >
              {BUSINESS.email}
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <Link
          href="/"
          className="group flex flex-col"
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-serif text-xl font-semibold tracking-wider text-cream-50 sm:text-2xl">
            LONDON <span className="text-gold-500">MEN&apos;S WEAR</span>
          </span>
          <span className="text-[10px] tracking-[0.22em] text-cream-300 uppercase">
            Railbazar · Cantt · Kanpur
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                isActive(item.href)
                  ? "text-gold-400"
                  : "text-cream-100 hover:text-gold-400"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={BUSINESS.phoneHref}
            className="hidden items-center gap-2 rounded-sm border border-gold-500/70 bg-gold-500 px-4 py-2 text-xs font-semibold tracking-wider text-navy-950 uppercase transition hover:bg-gold-400 sm:inline-flex"
          >
            <PhoneIcon className="h-3.5 w-3.5" />
            Call Now
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-sm border border-navy-700 p-2 text-cream-50 transition hover:border-gold-500/60 hover:text-gold-400 lg:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-navy-800 bg-navy-950 px-4 py-4 lg:hidden"
        >
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-sm px-3 py-2.5 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "bg-navy-800 text-gold-400"
                    : "text-cream-100 hover:bg-navy-900 hover:text-gold-400"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex gap-2 border-t border-navy-800 pt-3">
              <a
                href={BUSINESS.phoneHref}
                className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-gold-500 px-4 py-2.5 text-xs font-semibold tracking-wider text-navy-950 uppercase"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-sm border border-gold-500/60 px-4 py-2.5 text-xs font-semibold tracking-wider text-gold-400 uppercase"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
