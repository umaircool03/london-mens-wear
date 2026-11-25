import { TESTIMONIALS } from "@/data/store";
import { StarIcon } from "./Icons";

export function TestimonialsSection() {
  return (
    <section className="border-y border-navy-800 bg-navy-900/60 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Client Trust
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-cream-50 sm:text-4xl">
            Trusted by Gentlemen Across Kanpur
          </h2>
          <p className="mt-3 text-sm text-cream-300 sm:text-base">
            From Railbazar and Cantt to Civil Lines, families return to London
            Men&apos;s Wear for honest fabric guidance and crisp fittings.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((review) => (
            <article
              key={review.name}
              className="flex flex-col justify-between rounded-sm border border-navy-700 bg-navy-950/80 p-6 transition hover:border-gold-500/40"
            >
              <div>
                <div
                  className="flex items-center gap-1 text-gold-400"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <StarIcon key={idx} className="h-4 w-4" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-cream-100">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </div>
              <div className="mt-6 border-t border-navy-800 pt-4">
                <p className="font-serif text-lg font-semibold text-cream-50">
                  {review.name}
                </p>
                <p className="text-xs text-gold-400">
                  {review.location} · {review.occasion}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
