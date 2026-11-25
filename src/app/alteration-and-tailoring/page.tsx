import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PhoneIcon, ScissorsIcon, WhatsAppIcon } from "@/components/Icons";
import { BUSINESS, SITE_URL, TAILORING_SERVICES } from "@/data/store";

export const metadata: Metadata = {
  title:
    "Alteration & Tailoring Services in Kanpur | London Men's Wear",
  description:
    "In-house suit alteration, trouser hemming, kurta fitting, and bespoke menswear tailoring in Railbazar, Cantt, Kanpur at London Men's Wear.",
  openGraph: {
    title: "Alteration & Tailoring in Railbazar, Kanpur | London Men's Wear",
    description:
      "Fast, accurate garment alterations and tailoring for suits, trousers, shirts, waistcoats, and ethnic wear in Kanpur.",
    url: `${SITE_URL}/alteration-and-tailoring`,
    images: ["/images/tailoring.jpg"],
  },
};

export default function AlterationAndTailoringPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Hero Banner */}
        <section className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
              <ScissorsIcon className="h-4 w-4" />
              In-House Workshop · Kanpur
            </p>
            <h1 className="mt-3 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
              Precision Alteration &amp; Tailoring in Kanpur
            </h1>
            <p className="mt-4 text-base leading-relaxed text-cream-300">
              Even the finest cloth needs the right drape. At London Men&apos;s
              Wear in Railbazar, Cantt, Kanpur, our experienced master tailor
              works right inside the store — delivering crisp sleeve, waist,
              hem, and ethnic fittings with quick turnaround times.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BUSINESS.phoneHref}
                className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-6 py-3 text-xs font-semibold tracking-widest text-navy-950 uppercase transition hover:bg-gold-400"
              >
                <PhoneIcon className="h-4 w-4" />
                Call for Fitting
              </a>
              <a
                href={BUSINESS.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border border-gold-500/60 px-6 py-3 text-xs font-semibold tracking-widest text-gold-400 uppercase transition hover:bg-navy-900"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Tailor Desk
              </a>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold-500/30">
              <Image
                src="/images/tailoring.jpg"
                alt="Master tailor working at sewing machine inside London Men's Wear suit shop in Kanpur"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mt-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
              What We Tailor
            </p>
            <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50">
              Tailoring &amp; Alteration Services
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {TAILORING_SERVICES.map((service) => (
              <article
                key={service.title}
                className="flex flex-col justify-between rounded-sm border border-navy-800 bg-navy-900/70 p-6 transition hover:border-gold-500/40"
              >
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-cream-50">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-300">
                    {service.detail}
                  </p>
                </div>
                <div className="mt-6 border-t border-navy-800 pt-3 text-xs font-semibold tracking-wider text-gold-400 uppercase">
                  Typical Turnaround: {service.turnaround}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 3-Step Fitting Process */}
        <section className="mt-16 rounded-sm border border-gold-500/30 bg-navy-900 p-8 sm:p-10">
          <h2 className="font-serif text-3xl font-semibold text-cream-50">
            How Our Fitting Process Works
          </h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div>
              <p className="font-serif text-4xl font-semibold text-gold-400">
                01
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-cream-50">
                Walk In &amp; Try On
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-300">
                Visit House No. 335, Railbazar, Cantt, Kanpur anytime between 10
                AM and 10 PM with your garment or select one from our racks.
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-gold-400">
                02
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-cream-50">
                Accurate Pinning &amp; Marking
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-300">
                Our tailor checks shoulder line, sleeve drop, waist comfort, and
                trouser break so every millimetre looks natural.
              </p>
            </div>
            <div>
              <p className="font-serif text-4xl font-semibold text-gold-400">
                03
              </p>
              <h3 className="mt-2 font-serif text-xl font-semibold text-cream-50">
                Steam Finish &amp; Final Trial
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-300">
                Pick up your garment neatly pressed and try it on in-store
                before you leave to guarantee complete satisfaction.
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-navy-800 pt-6">
            <Link
              href="/contact"
              className="text-xs font-semibold tracking-widest text-gold-400 uppercase hover:underline"
            >
              View Store Location &amp; Map in Kanpur →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
