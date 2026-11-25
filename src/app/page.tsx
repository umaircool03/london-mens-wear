import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/FaqSection";
import {
  ArrowRightIcon,
  ClockIcon,
  MapPinIcon,
  PhoneIcon,
  ScissorsIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BUSINESS, COLLECTIONS, SITE_URL } from "@/data/store";

export const metadata: Metadata = {
  title: "London Men's Wear | Best Suit & Menswear Shop in Railbazar, Kanpur",
  description:
    "Visit London Men's Wear, a premier suit shop in Kanpur at House No. 335, Railbazar, Cantt. Shop suitings, waistcoats, shirts, kurta pajama, ethnic wear & tailoring.",
  openGraph: {
    title: "London Men's Wear | Best Suit & Menswear Shop in Railbazar, Kanpur",
    description:
      "Fine suitings, waistcoats, shirts, kurta pajama, ethnic wear, and expert tailoring in Railbazar, Cantt, Kanpur. Open all days 10 AM–10 PM.",
    url: SITE_URL,
    images: ["/images/shop-day.jpg"],
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gold-500/20 bg-navy-950">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 sm:px-6 lg:grid-cols-12 lg:py-20">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-sm border border-gold-500/40 bg-navy-900 px-3 py-1 text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
              Railbazar · Cantt · Kanpur
            </p>
            <h1 className="mt-5 font-serif text-4xl leading-tight font-semibold tracking-tight text-cream-50 sm:text-5xl lg:text-6xl">
              Classic Menswear &amp; Precision Tailoring in{" "}
              <span className="text-gold-400">Kanpur</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-cream-300 sm:text-lg">
              Welcome to <strong className="text-cream-50">London Men&apos;s Wear</strong> — your neighbourhood suit shop in Kanpur for fine suitings, structured waistcoats, crisp formal shirts, festive kurta pajama, wedding ethnic wear, and in-house alterations.
            </p>

            {/* Primary Hero CTAs */}
            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3.5 text-xs font-semibold tracking-widest text-navy-950 uppercase transition hover:bg-gold-400"
              >
                <PhoneIcon className="h-4 w-4" />
                Call Now
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-emerald-500/60 bg-emerald-600/90 px-6 py-3.5 text-xs font-semibold tracking-widest text-white uppercase transition hover:bg-emerald-500"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
              <a
                href={BUSINESS.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-gold-500/60 bg-navy-900 px-6 py-3.5 text-xs font-semibold tracking-widest text-gold-400 uppercase transition hover:bg-navy-800"
              >
                <MapPinIcon className="h-4 w-4" />
                Get Directions
              </a>
            </div>

            {/* Opening Hours & Location Highlight */}
            <div className="mt-8 grid gap-4 border-t border-navy-800 pt-6 sm:grid-cols-2">
              <div className="flex items-start gap-3">
                <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <div>
                  <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                    Opening Hours
                  </p>
                  <p className="mt-0.5 text-sm text-cream-100">
                    {BUSINESS.timings}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                <div>
                  <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                    Store Address
                  </p>
                  <p className="mt-0.5 text-sm text-cream-100">
                    House No. 335, Railbazar, Cantt, Kanpur
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-gold-500/30 shadow-2xl shadow-black/60">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/shop-day.jpg"
                  alt="London Men's Wear suit shop in Kanpur exterior at House No. 335 Railbazar Cantt"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-gold-500/20 bg-navy-900/95 px-5 py-3.5">
                <p className="text-xs font-medium tracking-wide text-cream-100">
                  House No. 335, Railbazar, Cantt, Kanpur ·{" "}
                  <span className="text-gold-400">
                    Suitings · Waistcoats · Shirts · Ethnic · Alterations
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Collections Preview */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
                Curated Wardrobe
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
                Our Menswear Collections
              </h2>
            </div>
            <Link
              href="/collections"
              className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold-400 uppercase transition hover:text-gold-300"
            >
              Explore All Collections
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {COLLECTIONS.map((item) => (
              <Link
                key={item.id}
                href={`/collections#${item.id}`}
                className="group overflow-hidden rounded-sm border border-navy-800 bg-navy-900 transition hover:border-gold-500/50"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
                    {item.subtitle}
                  </p>
                  <h3 className="mt-1.5 font-serif text-2xl font-semibold text-cream-50">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-cream-300">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}

            {/* 6th Card: In-House Alteration & Tailoring */}
            <Link
              href="/alteration-and-tailoring"
              className="group overflow-hidden rounded-sm border border-gold-500/35 bg-navy-900 transition hover:border-gold-400"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src="/images/tailoring.jpg"
                  alt="In-house master tailor working at London Men's Wear suit shop in Kanpur"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
                  <ScissorsIcon className="h-3.5 w-3.5" />
                  In-House Workshop
                </p>
                <h3 className="mt-1.5 font-serif text-2xl font-semibold text-cream-50">
                  Alteration &amp; Tailoring
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream-300">
                  Precision sleeve, waist, trouser, and ethnic fittings crafted
                  directly inside our Railbazar store for an effortless bespoke
                  silhouette.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Heritage & Store Experience Split Section */}
      <section className="border-t border-navy-800 bg-navy-900/40 py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-navy-700">
              <Image
                src="/images/owner.jpg"
                alt="Owner and team inside London Men's Wear suit shop in Kanpur"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-navy-700 sm:mt-8">
              <Image
                src="/images/interior.jpg"
                alt="Fabric showroom interior at London Men's Wear Railbazar Kanpur"
                fill
                sizes="(max-width: 640px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
              Personalised Service
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
              Honest Fabric Advice, Tailored Fit, Fair Pricing
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream-300 sm:text-base">
              Whether you are preparing for a family wedding in Kanpur, picking
              out crisp office shirts, or looking for a sharp waistcoat to pair
              with your Eid kurta, our team takes the time to match fabric,
              colour, and proportion to your build.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cream-100">
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                In-house master tailoring for quick, accurate adjustments
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                Steps away from Kanpur Cantt &amp; Kanpur Central Railway Station
              </li>
              <li className="flex items-center gap-2.5">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
                Open every single day from 10:00 AM to 10:00 PM
              </li>
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-sm border border-gold-500/60 px-5 py-3 text-xs font-semibold tracking-widest text-gold-400 uppercase transition hover:bg-gold-500 hover:text-navy-950"
              >
                Read Our Story
              </Link>
              <Link
                href="/contact"
                className="rounded-sm bg-navy-800 px-5 py-3 text-xs font-semibold tracking-widest text-cream-50 uppercase transition hover:bg-navy-700"
              >
                Visit Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <FaqSection />

      {/* Bottom Visit Us CTA */}
      <section className="border-t border-gold-500/20 bg-navy-900 py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:items-center">
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
              Open All Days · 10 AM – 10 PM
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold text-cream-50 sm:text-3xl">
              Visit London Men&apos;s Wear at Railbazar, Cantt, Kanpur
            </h2>
            <p className="mt-1 text-sm text-cream-300">
              {BUSINESS.address.full} · Phone: {BUSINESS.phoneDisplay}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3 text-xs font-semibold tracking-widest text-navy-950 uppercase transition hover:bg-gold-400"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-sm border border-gold-500/60 px-6 py-3 text-xs font-semibold tracking-widest text-gold-400 uppercase transition hover:bg-navy-800"
            >
              Directions &amp; Map
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
