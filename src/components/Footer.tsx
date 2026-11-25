import Link from "next/link";
import { BUSINESS } from "@/data/store";
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from "./Icons";

export function Footer() {
  return (
    <footer className="border-t border-gold-500/20 bg-navy-950 text-cream-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand summary */}
          <div>
            <p className="font-serif text-2xl font-semibold tracking-wider text-cream-50">
              LONDON <span className="text-gold-500">MEN&apos;S WEAR</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cream-300">
              A classic menswear and tailoring destination in Railbazar, Cantt,
              Kanpur — offering fine suitings, waistcoats, shirts, kurta pajama,
              ethnic wear, and precision alterations.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {/* Placeholder social links — update URLs when live */}
              <a
                href={BUSINESS.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="London Men's Wear Instagram"
                className="rounded-sm border border-navy-700 px-3 py-1.5 text-xs font-medium tracking-wider text-cream-100 uppercase transition hover:border-gold-500 hover:text-gold-400"
              >
                Instagram
              </a>
              <a
                href={BUSINESS.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="London Men's Wear Facebook"
                className="rounded-sm border border-navy-700 px-3 py-1.5 text-xs font-medium tracking-wider text-cream-100 uppercase transition hover:border-gold-500 hover:text-gold-400"
              >
                Facebook
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="London Men's Wear WhatsApp"
                className="rounded-sm border border-navy-700 px-3 py-1.5 text-xs font-medium tracking-wider text-cream-100 uppercase transition hover:border-gold-500 hover:text-gold-400"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-serif text-lg font-semibold tracking-wide text-gold-400">
              Explore Store
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link href="/" className="transition hover:text-gold-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-gold-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/collections"
                  className="transition hover:text-gold-400"
                >
                  Collections
                </Link>
              </li>
              <li>
                <Link
                  href="/alteration-and-tailoring"
                  className="transition hover:text-gold-400"
                >
                  Alteration &amp; Tailoring
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="transition hover:text-gold-400">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="transition hover:text-gold-400">
                  Style Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="transition hover:text-gold-400">
                  Contact &amp; Directions
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h2 className="font-serif text-lg font-semibold tracking-wide text-gold-400">
              Collections
            </h2>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <Link
                  href="/collections#suitings"
                  className="transition hover:text-gold-400"
                >
                  Suitings &amp; Fabrics
                </Link>
              </li>
              <li>
                <Link
                  href="/collections#waistcoats"
                  className="transition hover:text-gold-400"
                >
                  Waistcoats &amp; Nehru Jackets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections#shirts"
                  className="transition hover:text-gold-400"
                >
                  Formal &amp; Casual Shirts
                </Link>
              </li>
              <li>
                <Link
                  href="/collections#kurta-pajama"
                  className="transition hover:text-gold-400"
                >
                  Kurta Pajama Sets
                </Link>
              </li>
              <li>
                <Link
                  href="/collections#ethnic-wear"
                  className="transition hover:text-gold-400"
                >
                  Wedding Ethnic Wear
                </Link>
              </li>
              <li>
                <Link
                  href="/alteration-and-tailoring"
                  className="transition hover:text-gold-400"
                >
                  In-House Alterations
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Opening Hours */}
          <div>
            <h2 className="font-serif text-lg font-semibold tracking-wide text-gold-400">
              Visit Us in Kanpur
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{BUSINESS.address.full}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon className="h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={BUSINESS.phoneHref}
                  className="font-medium text-cream-50 transition hover:text-gold-400"
                >
                  {BUSINESS.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MailIcon className="h-4 w-4 shrink-0 text-gold-500" />
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="break-all transition hover:text-gold-400"
                >
                  {BUSINESS.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" />
                <span>{BUSINESS.timings}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="gold-divider my-10" />

        <div className="flex flex-col items-center justify-between gap-4 text-xs text-cream-300/80 sm:flex-row">
          <p>
            © 2026 {BUSINESS.name}. All rights reserved. House No. 335,
            Railbazar, Cantt, Kanpur.
          </p>
          <p>Menswear · Suitings · Ethnic Wear · Precision Alterations</p>
        </div>
      </div>
    </footer>
  );
}
