import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ClockIcon, MapPinIcon, PhoneIcon } from "@/components/Icons";
import { BUSINESS, SITE_URL } from "@/data/store";

export const metadata: Metadata = {
  title: "About Us | London Men's Wear — Trusted Suit Shop in Kanpur",
  description:
    "Learn about London Men's Wear at House No. 335, Railbazar, Cantt, Kanpur. Discover our curated suitings, ethnic wear, team, and in-house tailoring workshop.",
  openGraph: {
    title: "About London Men's Wear | Suit Shop in Railbazar, Kanpur",
    description:
      "Meet the team behind London Men's Wear in Railbazar, Cantt, Kanpur — fine menswear fabrics, readymade attire, and custom alterations.",
    url: `${SITE_URL}/about`,
    images: ["/images/owner.jpg"],
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Page Header */}
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Our Heritage &amp; Craft
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
            About London Men&apos;s Wear, Kanpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-300">
            Located at House No. 335, Railbazar, Cantt, Kanpur, London
            Men&apos;s Wear is built on a straightforward promise: combine
            dependable fabrics with attentive personal service and an exact,
            tailored fit.
          </p>
        </div>

        {/* Owner & Team Story */}
        <section className="mt-12 grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold-500/30">
              <Image
                src="/images/owner.jpg"
                alt="Owner and team at London Men's Wear suit shop in Kanpur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl font-semibold text-cream-50">
              Personal Attention From Fabric Selection to Final Press
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-cream-300 sm:text-base">
              Walking into a menswear shop shouldn&apos;t feel rushed. Whether
              you are shopping for a wedding suit length, a crisp formal shirt,
              or a festive kurta pajama set, our family-run store gives you
              unhurried guidance on weave, colour, and seasonal comfort.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream-300 sm:text-base">
              Because we run an in-house tailoring and alteration workshop right
              inside our Railbazar showroom, every garment is measured, pinned,
              and finished under one roof — saving you multiple trips across
              Kanpur.
            </p>
          </div>
        </section>

        {/* Storefront & Workshop Grid */}
        <section className="mt-16 grid gap-8 md:grid-cols-2">
          <article className="overflow-hidden rounded-sm border border-navy-800 bg-navy-900">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/shop-night.jpg"
                alt="Evening view of London Men's Wear suit shop in Kanpur open until 10 PM"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl font-semibold text-cream-50">
                Our Showroom in Railbazar, Cantt
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream-300">
                Conveniently positioned in Railbazar near Kanpur Cantt, our
                brightly lit store welcomes walk-in shoppers seven days a week,
                from 10:00 AM until 10:00 PM.
              </p>
            </div>
          </article>

          <article className="overflow-hidden rounded-sm border border-navy-800 bg-navy-900">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src="/images/tailoring.jpg"
                alt="In-house tailoring and alteration workshop at London Men's Wear Kanpur"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="font-serif text-2xl font-semibold text-cream-50">
                Our In-House Tailoring Workshop
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-cream-300">
                Great clothing comes alive in the fit. Our experienced master
                tailor handles sleeve tapering, trouser hems, waist adjustments,
                and bespoke measurements with care.
              </p>
            </div>
          </article>
        </section>

        {/* Visit Info Banner */}
        <section className="mt-16 rounded-sm border border-gold-500/30 bg-navy-900 p-8">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Address
                </h3>
                <p className="mt-1 text-sm text-cream-300">
                  {BUSINESS.address.full}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Timings
                </h3>
                <p className="mt-1 text-sm text-cream-300">{BUSINESS.timings}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
              <div>
                <h3 className="font-serif text-lg font-semibold text-cream-50">
                  Direct Contact
                </h3>
                <p className="mt-1 text-sm text-cream-300">
                  <a href={BUSINESS.phoneHref} className="hover:text-gold-400">
                    {BUSINESS.phoneDisplay}
                  </a>
                </p>
                <Link
                  href="/collections"
                  className="mt-2 inline-block text-xs font-semibold tracking-wider text-gold-400 uppercase hover:underline"
                >
                  Browse Collections →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
