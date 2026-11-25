"use client";

import Image from "next/image";
import { useState } from "react";
import { GALLERY_PHOTOS, type GalleryPhoto } from "@/data/store";
import { CloseIcon } from "./Icons";

const CATEGORIES: Array<"All" | GalleryPhoto["category"]> = [
  "All",
  "Storefront",
  "Collections",
  "Tailoring & Team",
];

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof CATEGORIES)[number]>("All");
  const [selected, setSelected] = useState<GalleryPhoto | null>(null);

  const filtered =
    activeCategory === "All"
      ? GALLERY_PHOTOS
      : GALLERY_PHOTOS.filter((item) => item.category === activeCategory);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`rounded-sm border px-4 py-2 text-xs font-semibold tracking-wider uppercase transition ${
              activeCategory === category
                ? "border-gold-500 bg-gold-500 text-navy-950"
                : "border-navy-700 bg-navy-900 text-cream-100 hover:border-gold-500/60 hover:text-gold-400"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((photo) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setSelected(photo)}
            className="group overflow-hidden rounded-sm border border-navy-800 bg-navy-900 text-left transition hover:border-gold-500/50"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-gold-400 uppercase">
                {photo.category}
              </p>
              <h2 className="mt-1 font-serif text-xl font-semibold text-cream-50">
                {photo.title}
              </h2>
              <p className="mt-1 text-xs leading-relaxed text-cream-300">
                {photo.caption}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-sm border border-gold-500/40 bg-navy-950"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Close photo preview"
              className="absolute top-3 right-3 z-10 rounded-full bg-navy-950/80 p-2 text-cream-50 transition hover:text-gold-400"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
            <div className="relative aspect-[4/3] w-full bg-black">
              <Image
                src={selected.src}
                alt={selected.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 896px"
                className="object-contain"
              />
            </div>
            <div className="border-t border-navy-800 p-5">
              <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
                {selected.category}
              </p>
              <h3 className="mt-1 font-serif text-2xl font-semibold text-cream-50">
                {selected.title}
              </h3>
              <p className="mt-1 text-sm text-cream-300">{selected.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
