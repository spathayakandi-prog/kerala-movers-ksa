import { SITE } from "@/lib/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    name: SITE.name,
    image: `https://${SITE.domain}/logo.png`,
    "@id": `https://${SITE.domain}`,
    url: `https://${SITE.domain}`,
    telephone: SITE.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Al Khobar",
      addressLocality: "Al Khobar",
      addressRegion: "Eastern Province",
      addressCountry: "SA",
    },
    geo: { "@type": "GeoCoordinates", latitude: 26.2172, longitude: 50.1971 },
    areaServed: SITE.areas.map((a) => ({ "@type": "City", name: a })),
    openingHoursSpecification: [{
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      opens: "00:00", closes: "23:59",
    }],
    sameAs: [SITE.instagram, SITE.facebook],
  };
}
