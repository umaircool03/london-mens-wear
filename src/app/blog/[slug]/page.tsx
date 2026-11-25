import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";
import { BLOG_POSTS, BUSINESS, SITE_URL } from "@/data/store";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    return {
      title: "Article Not Found | London Men's Wear Kanpur",
      description: "Read menswear guides from London Men's Wear in Kanpur.",
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      images: [post.image],
    },
  };
}

async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-12 sm:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/blog"
          className="text-xs font-semibold tracking-widest text-gold-400 uppercase hover:underline"
        >
          ← Back to Style Blog
        </Link>

        <header className="mt-6">
          <p className="text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
            {post.category} · {post.date} · {post.readTime}
          </p>
          <h1 className="mt-3 font-serif text-4xl leading-tight font-semibold text-cream-50 sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-cream-300">
            {post.excerpt}
          </p>
        </header>

        <div className="relative mt-8 aspect-[16/10] w-full overflow-hidden rounded-sm border border-gold-500/30">
          <Image
            src={post.image}
            alt={post.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        <div className="mt-10 space-y-8">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl font-semibold text-cream-50 sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-3 space-y-4 text-base leading-relaxed text-cream-300">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <aside className="mt-12 rounded-sm border border-gold-500/35 bg-navy-900 p-7">
          <h2 className="font-serif text-2xl font-semibold text-cream-50">
            Visit London Men&apos;s Wear in Railbazar, Kanpur
          </h2>
          <p className="mt-2 text-sm text-cream-300">
            Want personal help picking fabrics or getting an exact fit? Visit us
            at {BUSINESS.address.full} ({BUSINESS.timings}).
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={BUSINESS.phoneHref}
              className="inline-flex items-center gap-2 rounded-sm bg-gold-500 px-5 py-2.5 text-xs font-semibold tracking-wider text-navy-950 uppercase hover:bg-gold-400"
            >
              <PhoneIcon className="h-4 w-4" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a
              href={BUSINESS.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border border-gold-500/60 px-5 py-2.5 text-xs font-semibold tracking-wider text-gold-400 uppercase hover:bg-navy-800"
            >
              <WhatsAppIcon className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </aside>
      </div>
    </article>
  );
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-16 text-sm text-cream-300">
          Loading article...
        </div>
      }
    >
      <BlogPostContent params={params} />
    </Suspense>
  );
}
