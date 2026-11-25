import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { BLOG_POSTS, SITE_URL } from "@/data/store";

export const metadata: Metadata = {
  title: "Menswear Style & Tailoring Blog | London Men's Wear Kanpur",
  description:
    "Read expert menswear advice from London Men's Wear, Kanpur — wedding suit guides, kurta pajama styling tips, and tailoring fit essentials.",
  openGraph: {
    title: "Menswear Style Blog | London Men's Wear, Kanpur",
    description:
      "Guides on choosing wedding suits and styling kurta pajamas from Kanpur's trusted Railbazar menswear store.",
    url: `${SITE_URL}/blog`,
    images: ["/images/inventory.jpg"],
  },
};

export default function BlogIndexPage() {
  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.25em] text-gold-400 uppercase">
            Sartorial Notes
          </p>
          <h1 className="mt-2 font-serif text-4xl font-semibold text-cream-50 sm:text-5xl">
            Menswear Style &amp; Fit Journal — Kanpur
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-300">
            Practical guides written by the London Men&apos;s Wear team in
            Railbazar, Cantt, Kanpur to help you dress with confidence for
            weddings, festivals, and formal occasions.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col overflow-hidden rounded-sm border border-navy-800 bg-navy-900/70 transition hover:border-gold-500/50"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden"
              >
                <Image
                  src={post.image}
                  alt={post.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </Link>
              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-gold-400 uppercase">
                    {post.category} · {post.readTime}
                  </p>
                  <h2 className="mt-2 font-serif text-2xl font-semibold text-cream-50 sm:text-3xl">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-gold-400"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-cream-300">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-navy-800 pt-4 text-xs text-cream-300">
                  <span>{post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 font-semibold tracking-wider text-gold-400 uppercase hover:text-gold-300"
                  >
                    Read Article
                    <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
