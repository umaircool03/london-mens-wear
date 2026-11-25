export const SITE_URL = "https://londonmenswear.in";
  process.env.NEXT_PUBLIC_SITE_URL || "https://londonmenswear.in";

export const BUSINESS = {
  name: "London Men's Wear",
  tagline: "Bespoke Suitings, Ethnic Wear & Precision Tailoring",
  shortDescription:
    "London Men's Wear is a trusted men's clothing and tailoring shop at House No. 335, Railbazar, Cantt, Kanpur, offering fine suitings, waistcoats, shirts, kurta pajama, ethnic wear, and expert in-house alterations.",
  address: {
    street: "House No. 335, Railbazar, Cantt",
    city: "Kanpur",
    state: "Uttar Pradesh",
    postalCode: "208004",
    country: "India",
    full: "House No. 335, Railbazar, Cantt, Kanpur, Uttar Pradesh 208004, India",
  },
  phoneDisplay: "+91-9935007339",
  phoneHref: "tel:+919935007339",
  whatsappNumber: "919935007339",
  whatsappHref:
    "https://wa.me/919935007339?text=Hello%20London%20Men%27s%20Wear%20Kanpur%2C%20I%20would%20like%20to%20enquire%20about%20your%20collection.",
  email: "mohdshakeelabcd@gmail.com",
  timings: "10:00 AM – 10:00 PM (Open All Days)",
  timingsShort: "10 AM – 10 PM · Open All 7 Days",
  mapsDirectionsUrl:
    "https://www.google.com/maps/search/?api=1&query=House+No.+335+Railbazar+Cantt+Kanpur+Uttar+Pradesh",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=House%20No.%20335%2C%20Railbazar%2C%20Cantt%2C%20Kanpur%2C%20Uttar%20Pradesh&output=embed",
  social: {
    instagram: "https://instagram.com/londonmenswear",
    facebook: "https://facebook.com/londonmenswear",
  },
} as const;

export interface CollectionCategory {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
  highlights: string[];
  occasions: string;
}

export const COLLECTIONS: CollectionCategory[] = [
  {
    id: "suitings",
    title: "Suitings",
    subtitle: "Fine Worsteds, Raymond & Premium Fabrics",
    description:
      "Browse hundreds of carefully curated suiting bolts — from breathable poly-wool blends for Kanpur summers to rich wool-rich worsteds, herringbone weaves, and tuxedo cloths for winter weddings and formal receptions.",
    image: "/images/inventory.jpg",
    alt: "Premium suiting fabric rolls, swatch book, and measuring tape at London Men's Wear suit shop in Kanpur",
    highlights: [
      "2-piece & 3-piece suit lengths in navy, charcoal, black, and earth tones",
      "Breathable tropical wool blends & crisp formal trouserings",
      "Expert fabric pairing guidance with complimentary measurement consultation",
    ],
    occasions: "Weddings, Receptions, Business & Formal Events",
  },
  {
    id: "waistcoats",
    title: "Waistcoats",
    subtitle: "Nehru Jackets, Modi Jackets & Tailored Vests",
    description:
      "Elevate any kurta pajama or crisp shirt in seconds. Our waistcoat rack spans textured raw silk, jacquard brocade, linen-cotton blends, and classic solid woollens in jewel tones, pastels, and midnight shades.",
    image: "/images/waistcoats.jpg",
    alt: "Collection of tailored waistcoats and Nehru jackets at London Men's Wear menswear store in Railbazar Kanpur",
    highlights: [
      "Structured Mandarin-collar Nehru waistcoats & classic V-neck vests",
      "Custom button detailing, pocket squares & crisp inner lining",
      "Ready-to-wear sizes plus quick custom fitting on site",
    ],
    occasions: "Haldi, Mehendi, Sangeet, Festivals & Smart Casual",
  },
  {
    id: "shirts",
    title: "Shirts",
    subtitle: "Crisp Formal & Smart-Casual Shirts",
    description:
      "Stock up on neatly tailored cotton, Giza-style, Oxford, and linen shirts designed for all-day comfort. Available in classic solids, subtle micro-checks, pinstripes, and festive satin finishes.",
    image: "/images/shirts-ethnic.jpg",
    alt: "Folded formal shirts and ready-made menswear shelves at London Men's Wear suit shop in Kanpur",
    highlights: [
      "100% cotton, wrinkle-resistant office wear & festive satin shirts",
      "Tailored collar stiffness and clean cuff stitching",
      "Full range of sizes with sleeve & waist alteration available",
    ],
    occasions: "Daily Office, Interviews, Travel & Evening Dinners",
  },
  {
    id: "kurta-pajama",
    title: "Kurta Pajama",
    subtitle: "Classic Cotton, Chikankari & Embroidered Sets",
    description:
      "From understated Lucknowi-inspired threadwork to rich festive silk-blend sets, our kurta pajamas balance graceful drape with breathable comfort suited to Kanpur's weather and grand celebrations.",
    image: "/images/interior.jpg",
    alt: "Kurta pajama sets and suiting stock displayed inside London Men's Wear menswear shop in Cantt Kanpur",
    highlights: [
      "Fine cotton, linen, pathani, and festive jacquard kurta sets",
      "Paired with crisp churidar, straight pajama, or Aligarhi trousers",
      "Coordinated waistcoat matching available in-store",
    ],
    occasions: "Eid, Diwali, Pujas, Family Gatherings & Mehendi",
  },
  {
    id: "ethnic-wear",
    title: "Ethnic Wear",
    subtitle: "Sherwanis, Indo-Western & Wedding Ensembles",
    description:
      "Make a distinguished impression at every wedding function. Choose from regal Indo-western silhouettes, embellished bandhgalas, and coordinated groom and groomsmen ensembles tailored to your exact posture.",
    image: "/images/shop-day.jpg",
    alt: "Ethnic wear, sherwani, and wedding kurta displays at London Men's Wear suit shop in Kanpur",
    highlights: [
      "Regal bandhgala jackets, Indo-western coats & wedding kurtas",
      "Coordinated family and groomsmen outfit curation",
      "Full in-house trial and precision fitting before your event",
    ],
    occasions: "Nikah, Baraat, Engagement, Reception & Festive Nights",
  },
];

export const TAILORING_SERVICES = [
  {
    title: "Suit & Blazer Alterations",
    detail:
      "Sleeve length adjustment, shoulder tapering, waist suppression, and lapel pressing for an authentic Savile-style drape.",
    turnaround: "24 – 48 Hours",
  },
  {
    title: "Trouser Hemming & Tapering",
    detail:
      "Clean blind-stitch hems, cuff finishing, waist let-out or take-in, and modern slim-tapered leg shaping.",
    turnaround: "Same Day / Next Day",
  },
  {
    title: "Kurta, Sherwani & Waistcoat Fitting",
    detail:
      "Refined chest, armhole, and length adjustments on festive ethnic garments without disturbing embroidery.",
    turnaround: "24 – 48 Hours",
  },
  {
    title: "Shirt Tailoring & Collar/Cuff Care",
    detail:
      "Darting the back for a sharper silhouette, shortening sleeves cleanly at the placket, and length hemming.",
    turnaround: "Same Day",
  },
  {
    title: "Bespoke Measurement & Stitching",
    detail:
      "Hand-taken body measurements from our suiting bolts to create trousers, shirts, waistcoats, and multi-piece suits.",
    turnaround: "Scheduled by Occasion",
  },
  {
    title: "Express Wedding & Travel Fixes",
    detail:
      "Urgent last-minute alterations for out-of-town guests arriving via Kanpur Central Railway Station nearby.",
    turnaround: "Priority Express",
  },
];

export interface Testimonial {
  name: string;
  location: string;
  occasion: string;
  rating: number;
  quote: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Arif Siddiqui",
    location: "Cantt, Kanpur",
    occasion: "Wedding Suit & Waistcoats",
    rating: 5,
    quote:
      "Bought suiting fabric and three Nehru waistcoats for my brother's wedding. Shakeel ji guided us honestly on fabric quality, and their in-house alteration made the fit look truly bespoke.",
  },
  {
    name: "Rajeshwar Tiwari",
    location: "Civil Lines, Kanpur",
    occasion: "Office Shirts & Trouser Alterations",
    rating: 5,
    quote:
      "The best menswear shop near Railbazar. Their ready-made cotton shirts hold their crisp collar all day, and my trousers were altered to the exact break within a few hours.",
  },
  {
    name: "Faizan Khan",
    location: "Jajmau, Kanpur",
    occasion: "Eid Kurta Pajama & Ethnic Wear",
    rating: 5,
    quote:
      "Open till 10 PM even on Sundays, which makes shopping after work effortless. Great collection of kurta pajamas and festive jackets at very fair, transparent prices.",
  },
];

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    question: "Where is London Men's Wear located in Kanpur?",
    answer:
      "We are located at House No. 335, Railbazar, Cantt, Kanpur, Uttar Pradesh 208004 — just minutes from Kanpur Central Railway Station and easily accessible from Cantt, Civil Lines, and Mall Road.",
  },
  {
    question: "What are your shop timings? Are you open on Sundays?",
    answer:
      "Yes! London Men's Wear is open all 7 days of the week, including Sundays, from 10:00 AM to 10:00 PM.",
  },
  {
    question: "Do you offer garment alterations even for urgent occasions?",
    answer:
      "Yes, we have an in-house tailoring workshop right inside our store. Standard trouser hemming and shirt adjustments are often completed the same day, while suit and ethnic alterations take 24–48 hours.",
  },
  {
    question: "Can I buy suiting fabric and get advice on matching waistcoats or shirts?",
    answer:
      "Absolutely. We help you select suiting cloth by season and occasion, pair it with matching shirting or waistcoats, and take accurate measurements in store.",
  },
  {
    question: "Do you handle bulk wedding orders for groomsmen and family?",
    answer:
      "Yes, we regularly outfit entire wedding parties with coordinated kurta pajamas, Nehru waistcoats, and tailored suits. Call +91-9935007339 or message us on WhatsApp to book a family visit.",
  },
];

export interface GalleryPhoto {
  src: string;
  title: string;
  category: "Storefront" | "Collections" | "Tailoring & Team";
  alt: string;
  caption: string;
}

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    src: "/images/shop-day.jpg",
    title: "Railbazar Storefront (Daytime)",
    category: "Storefront",
    alt: "Front view of London Men's Wear suit shop in Kanpur at House No. 335 Railbazar Cantt",
    caption: "Welcome to House No. 335, Railbazar, Cantt, Kanpur.",
  },
  {
    src: "/images/shop-night.jpg",
    title: "Evening Storefront Display",
    category: "Storefront",
    alt: "London Men's Wear suit shop in Kanpur illuminated in the evening open until 10 PM",
    caption: "Open until 10:00 PM every evening for convenient shopping.",
  },
  {
    src: "/images/inventory.jpg",
    title: "Suiting Fabric Rolls & Swatch Books",
    category: "Collections",
    alt: "Suiting fabric bolts and swatch books on the counter at London Men's Wear suit shop in Kanpur",
    caption: "Curated worsteds, poly-wool blends, and bespoke swatch books.",
  },
  {
    src: "/images/waistcoats.jpg",
    title: "Waistcoat & Nehru Jacket Rack",
    category: "Collections",
    alt: "Men's waistcoats and Nehru jackets displayed at London Men's Wear in Railbazar Kanpur",
    caption: "Personalised styling assistance across vibrant waistcoat shades.",
  },
  {
    src: "/images/shirts-ethnic.jpg",
    title: "Formal Shirts & Embroidered Kurtas",
    category: "Collections",
    alt: "Folded formal shirts and hanging kurta pajamas at London Men's Wear Kanpur",
    caption: "Crisp formal shirts alongside festive embroidered kurta sets.",
  },
  {
    src: "/images/interior.jpg",
    title: "Inside the Showroom",
    category: "Collections",
    alt: "Interior showroom of London Men's Wear suit shop in Kanpur with fabric shelves",
    caption: "A calm, attentive showroom experience in the heart of Railbazar.",
  },
  {
    src: "/images/tailoring.jpg",
    title: "In-House Alteration Workshop",
    category: "Tailoring & Team",
    alt: "Master tailor sewing at the in-house workshop of London Men's Wear suit shop in Kanpur",
    caption: "Precision stitching and alterations done directly on the premises.",
  },
  {
    src: "/images/owner.jpg",
    title: "The London Men's Wear Team",
    category: "Tailoring & Team",
    alt: "Owner and team behind the fabric counter at London Men's Wear suit shop in Kanpur",
    caption: "Dedicated personal guidance built on decades of Kanpur trust.",
  },
];

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  alt: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "how-to-choose-a-suit-for-a-wedding",
    title: "How to Choose a Suit for a Wedding in Kanpur",
    metaTitle:
      "How to Choose a Suit for a Wedding in Kanpur | London Men's Wear",
    metaDescription:
      "Practical guide from London Men's Wear, a trusted suit shop in Kanpur, on picking wedding suit fabrics, colours, lapels, and tailored fit.",
    excerpt:
      "From selecting breathable fabrics for North Indian weather to getting the shoulder and trouser break right, here is how to choose a wedding suit that looks timeless in every photograph.",
    date: "November 2026",
    readTime: "4 min read",
    category: "Suitings & Weddings",
    image: "/images/inventory.jpg",
    alt: "Suiting cloth rolls and fabric swatches at London Men's Wear suit shop in Kanpur",
    sections: [
      {
        heading: "1. Match the Fabric Weight to the Kanpur Season",
        paragraphs: [
          "Indian weddings run from crisp winter evenings in December and January to warm, humid nights in spring and autumn. Choosing the right cloth weight makes all the difference between looking effortless and feeling uncomfortable halfway through the reception.",
          "For winter weddings in Kanpur, rich wool-rich worsteds (260–300 GSM) hold a sharp crease and drape cleanly. For warmer months, opt for a breathable superfine poly-wool or tropical wool blend with half-lining so air circulates naturally.",
        ],
      },
      {
        heading: "2. Choose Timeless Colours Over Passing Fads",
        paragraphs: [
          "Midnight navy, deep charcoal grey, and classic jet black remain the gold standard for evening receptions and cocktail nights. Midnight navy in particular photographs beautifully under warm banquet lighting and pairs effortlessly with ivory shirts and maroon or gold silk ties.",
          "If you are attending a daytime ceremony or engagement, warm taupe, slate blue, or subtle windowpane checks offer refined individuality without overpowering the occasion.",
        ],
      },
      {
        heading: "3. Focus on Three Fit Checkpoints",
        paragraphs: [
          "Even the most expensive fabric looks ordinary if the fit is off. Always check three areas before finalising your suit: the shoulder seam should end right where your shoulder bone turns downward; the jacket collar should hug your shirt collar without gaping; and your trouser hem should rest with a slight, clean half-break over your dress shoes.",
          "At London Men's Wear in Railbazar, Cantt, Kanpur, our in-house master tailor checks all three points during your fitting so your suit feels made for your posture.",
        ],
      },
    ],
  },
  {
    slug: "kurta-pajama-styling-guide",
    title: "Kurta Pajama Styling Guide for Weddings & Festivals",
    metaTitle:
      "Kurta Pajama Styling Guide in Kanpur | London Men's Wear",
    metaDescription:
      "Discover how to style kurta pajama with Nehru waistcoats, bottom silhouettes, and footwear for weddings and Eid at London Men's Wear, Kanpur.",
    excerpt:
      "Whether you are dressing for Eid, Diwali, or a family sangeet, pairing the right kurta fabric with a structured waistcoat and proper trouser length elevates traditional attire instantly.",
    date: "November 2026",
    readTime: "4 min read",
    category: "Ethnic & Festive Wear",
    image: "/images/waistcoats.jpg",
    alt: "Tailored Nehru waistcoats and kurta pajama styling at London Men's Wear in Kanpur",
    sections: [
      {
        heading: "1. Pair Subtle Kurtas with Textured Waistcoats",
        paragraphs: [
          "One of the easiest ways to look sharp at a wedding function is contrast layering. A clean ivory, sage, or pastel cotton-silk kurta creates an ideal canvas for a structured Nehru waistcoat in deep maroon, royal navy, emerald, or subtle jacquard gold.",
          "Keep patterns balanced: if your waistcoat features rich brocade or woven texture, stick to a solid kurta underneath. If your kurta has fine embroidery around the placket, choose a matte solid waistcoat.",
        ],
      },
      {
        heading: "2. Pick the Right Bottom Silhouette",
        paragraphs: [
          "Your pajama cut shapes the entire look. Straight-cut cotton trousers or Aligarhi pants lend a modern, crisp finish that works brilliantly with loafers or juttis. Classic churidars, meanwhile, pair naturally with longer knee-length kurtas and festive sherwani-style coats.",
          "Never overlook length — trousers that bunch awkwardly at the ankle spoil an otherwise well-tailored outfit. A quick hem adjustment at our Railbazar tailoring desk keeps the drape razor sharp.",
        ],
      },
      {
        heading: "3. Finish with Clean Details",
        paragraphs: [
          "A folded silk pocket square tucked into your waistcoat, classic tan or black leather juttis, and rolled cuffs (for daytime haldi or mehendi events) complete the ensemble effortlessly. Visit London Men's Wear in Cantt, Kanpur between 10 AM and 10 PM to try curated combinations in person.",
        ],
      },
    ],
  },
];
