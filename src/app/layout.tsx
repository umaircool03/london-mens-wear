import type { Metadata } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
// import Script from "next/script"; // Uncomment when adding your GA4 Measurement ID below
import "./globals.css";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLdSchema } from "@/components/JsonLdSchema";
import { BUSINESS, SITE_URL } from "@/data/store";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "London Men's Wear | Suit Shop & Tailoring in Railbazar, Kanpur",
    template: "%s",
  },
  description:
    "London Men's Wear at House No. 335, Railbazar, Cantt, Kanpur — premier men's suitings, waistcoats, formal shirts, kurta pajama, ethnic wear, and expert tailoring. Open all days 10 AM–10 PM.",
  keywords: [
    "suit shop in Kanpur",
    "London Men's Wear Kanpur",
    "menswear Railbazar Kanpur",
    "kurta pajama Kanpur Cantt",
    "tailoring and alteration Kanpur",
    "waistcoats and ethnic wear Kanpur",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: BUSINESS.name,
    title: "London Men's Wear | Suit Shop & Tailoring in Railbazar, Kanpur",
    description:
      "Visit House No. 335, Railbazar, Cantt, Kanpur for fine suitings, waistcoats, shirts, kurta pajama, wedding ethnic wear, and precision alterations.",
    images: [
      {
        url: "/images/shop-day.jpg",
        width: 1200,
        height: 900,
        alt: "London Men's Wear suit shop in Kanpur storefront",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "London Men's Wear | Suit Shop & Tailoring in Kanpur",
    description:
      "Suitings, waistcoats, shirts, kurta pajama, ethnic wear & in-house alterations at Railbazar, Cantt, Kanpur.",
    images: ["/images/shop-day.jpg"],
  },
  /* =====================================================================
     GOOGLE SEARCH CONSOLE VERIFICATION PLACEHOLDER
     Replace 'YOUR_GOOGLE_SITE_VERIFICATION_CODE' with the token provided
     by Google Search Console, then uncomment the verification block below.
     ===================================================================== */
  // verification: {
  //   google: "YOUR_GOOGLE_SITE_VERIFICATION_CODE",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} h-full antialiased`}
    >
      <head>
        {/* =================================================================
            GOOGLE SEARCH CONSOLE META TAG PLACEHOLDER
            Alternatively, uncomment this meta tag and paste your token:
            <meta name="google-site-verification" content="YOUR_VERIFICATION_TOKEN" />
            ================================================================= */}
        <JsonLdSchema />
      </head>
      <body className="flex min-h-full flex-col bg-navy-950 text-cream-50 selection:bg-gold-500 selection:text-navy-950">
        {/* =================================================================
            GOOGLE ANALYTICS 4 (GA4) SCRIPT PLACEHOLDER
            Uncomment the `Script` import at the top and the two blocks below,
            then replace `G-XXXXXXXXXX` with your GA4 Measurement ID.
            ================================================================= */}
        {/*
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics-4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
        */}

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
