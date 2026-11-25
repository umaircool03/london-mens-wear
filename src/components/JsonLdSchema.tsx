import { BUSINESS, SITE_URL } from "@/data/store";

export function JsonLdSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "@id": `${SITE_URL}/#organization`,
    name: BUSINESS.name,
    description: BUSINESS.shortDescription,
    url: SITE_URL,
    telephone: BUSINESS.phoneDisplay,
    email: BUSINESS.email,
    image: `${SITE_URL}/images/shop-day.jpg`,
    priceRange: "₹₹",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.state,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Kanpur",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "22:00",
      },
    ],
    sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
