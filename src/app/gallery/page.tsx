import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { SITE_URL } from "@/data/store";

export const metadata: Metadata = {
  title: "Gallery | London Men's Wear — Suit Shop in Railbazar, Kanpur",
  description:
    "Browse photos of London Men's Wear in Railbazar, Cantt, Kanpur: our storefront, suiting fabric rolls, waistcoats, shirts, kurta pajamas, and tailoring workshop.",
  openGraph: {
    title: "Store & Collection Gallery | London Men's Wear Kanpur",
    description:
      "Take a visual tour of London Men's Wear, House No. 335, Railbazar, Cantt, Kanpur.",
    url: `${SITE_URL}/gallery`,
    images: ["/images/interior.jpg"],
  },
};

export default function GalleryPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Inside House No. 335
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
            Store &amp; Craftsmanship Gallery, Kanpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-300">
            Explore our Railbazar showroom, curated suiting rolls, waistcoat and
            kurta pajama displays, and in-house tailoring workshop. Click any
            photograph to inspect it full-size.
          </p>
        </div>

        <div className="mt-10">
          <GalleryGrid />
        </div>
      </div>
    </div>
  );
}
