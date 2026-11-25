"use client";

import { useState } from "react";
import { FAQS } from "@/data/store";
import { ChevronDownIcon } from "./Icons";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
            Everything You Need to Know Before Visiting
          </h2>
        </div>

        <div className="mt-10 divide-y divide-navy-800 border-y border-navy-800">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="py-4">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-2 text-left"
                >
                  <span className="font-serif text-lg font-medium text-cream-50 sm:text-xl">
                    {faq.question}
                  </span>
                  <ChevronDownIcon
                    className={`h-5 w-5 shrink-0 text-gold-400 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <p className="mt-2 pr-8 text-sm leading-relaxed text-cream-300 sm:text-base">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
