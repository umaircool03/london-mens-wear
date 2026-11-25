import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { BUSINESS, SITE_URL } from "@/data/store";

export const metadata: Metadata = {
  title:
    "Contact & Directions | London Men's Wear — Railbazar, Cantt, Kanpur",
  description:
    "Contact London Men's Wear at House No. 335, Railbazar, Cantt, Kanpur. Call +91-9935007339, chat on WhatsApp, check opening hours (10 AM–10 PM), or view Google Maps.",
  openGraph: {
    title: "Contact London Men's Wear | Railbazar, Cantt, Kanpur",
    description:
      "Get directions, opening hours, phone, WhatsApp, and enquiry form for London Men's Wear in Kanpur.",
    url: `${SITE_URL}/contact`,
    images: ["/images/shop-day.jpg"],
  },
};

export default function ContactPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Visit or Message Us
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
            Contact London Men&apos;s Wear, Kanpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-300">
            Have a question about suiting fabrics, wedding orders, or same-day
            alterations? Call, WhatsApp, or visit our showroom in Railbazar,
            Cantt, Kanpur.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-12">
          {/* Left column: Store info & quick actions */}
          <div className="space-y-6 lg:col-span-5">
            <div className="rounded-sm border border-navy-800 bg-navy-900/70 p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-cream-50">
                Store Information
              </h2>

              <ul className="mt-6 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                      Address
                    </p>
                    <p className="mt-1 text-cream-100">
                      {BUSINESS.address.full}
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                      Phone
                    </p>
                    <a
                      href={BUSINESS.phoneHref}
                      className="mt-1 inline-block text-base font-semibold text-cream-50 transition hover:text-gold-400"
                    >
                      {BUSINESS.phoneDisplay}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${BUSINESS.email}`}
                      className="mt-1 inline-block break-all text-cream-100 transition hover:text-gold-400"
                    >
                      {BUSINESS.email}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-gold-400 uppercase">
                      Opening Hours
                    </p>
                    <p className="mt-1 text-cream-100">{BUSINESS.timings}</p>
                  </div>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-gold-500 px-4 py-3 text-xs font-semibold tracking-wider text-navy-950 uppercase transition hover:bg-gold-400"
                >
                  <PhoneIcon className="h-4 w-4" />
                  Call Now
                </a>
                <a
                  href={BUSINESS.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-sm bg-emerald-600 px-4 py-3 text-xs font-semibold tracking-wider text-white uppercase transition hover:bg-emerald-500"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right column: Enquiry Form */}
          <div className="rounded-sm border border-navy-800 bg-navy-900/70 p-6 sm:p-8 lg:col-span-7">
            <h2 className="font-serif text-2xl font-semibold text-cream-50">
              Send an Enquiry
            </h2>
            <p className="mt-1 text-sm text-cream-300">
              Share your requirements below and connect directly with our store
              team.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Google Maps Embed */}
        <section className="mt-12 overflow-hidden rounded-sm border border-gold-500/30 bg-navy-900">
          <div className="flex flex-col items-start justify-between gap-3 border-b border-navy-800 px-6 py-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl font-semibold text-cream-50">
                Find Us on Google Maps
              </h2>
              <p className="text-xs text-cream-300">{BUSINESS.address.full}</p>
            </div>
            <a
              href={BUSINESS.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-gold-500/60 px-4 py-2 text-xs font-semibold tracking-wider text-gold-400 uppercase transition hover:bg-navy-800"
            >
              <MapPinIcon className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
          <div className="aspect-[16/9] w-full sm:aspect-[21/9]">
            <iframe
              title="London Men's Wear Location Map — House No. 335, Railbazar, Cantt, Kanpur"
              src={BUSINESS.mapsEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              allowFullScreen
            />
          </div>
        </section>
      </div>
    </div>
  );
}
