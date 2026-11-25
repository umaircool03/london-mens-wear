import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckIcon, WhatsAppIcon } from "@/components/Icons";
import { BUSINESS, COLLECTIONS, SITE_URL } from "@/data/store";

export const metadata: Metadata = {
  title: "Collections | Suitings, Waistcoats & Ethnic Wear in Kanpur",
  description:
    "Explore Suitings, Waistcoats, Shirts, Kurta Pajama, and Ethnic Wear at London Men's Wear, Railbazar, Cantt, Kanpur. Quality fabrics and tailored fit.",
  openGraph: {
    title: "Menswear Collections in Kanpur | London Men's Wear",
    description:
      "Shop Suitings, Waistcoats, Formal Shirts, Kurta Pajama, and Wedding Ethnic Wear at House No. 335, Railbazar, Cantt, Kanpur.",
    url: `${SITE_URL}/collections`,
    images: ["/images/inventory.jpg"],
  },
};

export default function CollectionsPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Complete Menswear Wardrobe
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
            Our Collections in Railbazar, Kanpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-300">
            From daily office shirts and worsted suitings to festive kurta
            pajamas and wedding waistcoats, explore every department available
            at London Men&apos;s Wear.
          </p>
        </div>

        {/* Jump links bar */}
        <nav
          aria-label="Collection categories"
          className="mt-8 flex flex-wrap gap-2.5 border-y border-navy-800 py-4"
        >
          {COLLECTIONS.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="rounded-sm border border-navy-700 bg-navy-900 px-4 py-2 text-xs font-semibold tracking-wider text-cream-100 uppercase transition hover:border-gold-500 hover:text-gold-400"
            >
              {cat.title}
            </a>
          ))}
        </nav>

        {/* One dedicated section per product category */}
        <div className="mt-12 space-y-16">
          {COLLECTIONS.map((category, index) => {
            const isEven = index % 2 === 0;
            return (
              <section
                key={category.id}
                id={category.id}
                className="scroll-mt-28 grid items-center gap-8 rounded-sm border border-navy-800 bg-navy-900/50 p-6 sm:p-8 lg:grid-cols-12"
              >
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-gold-500/25">
                    <Image
                      src={category.image}
                      alt={category.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="text-xs font-semibold tracking-[0.22em] text-gold-400 uppercase">
                    {category.subtitle}
                  </p>
                  <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50">
                    {category.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cream-300 sm:text-base">
                    {category.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 text-sm text-cream-100">
                    {category.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-5 text-xs text-cream-300">
                    <span className="font-semibold text-gold-400 uppercase">
                      Ideal For:
                    </span>{" "}
                    {category.occasions}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={`${BUSINESS.whatsappHref}%20(${encodeURIComponent(
                        category.title
                      )})`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-semibold tracking-wider text-navy-950 uppercase transition hover:bg-gold-400"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      Enquire on WhatsApp
                    </a>
                    <Link
                      href="/alteration-and-tailoring"
                      className="rounded-sm border border-navy-700 px-5 py-2.5 text-xs font-semibold tracking-wider text-cream-100 uppercase transition hover:border-gold-500 hover:text-gold-400"
                    >
                      Alteration Info
                    </Link>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
