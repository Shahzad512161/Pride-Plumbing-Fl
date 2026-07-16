import React from 'react';

const BUSINESS_INFO = {
  name: "Pride Plumbing FL",
  phone: "+1 (844) 973-6611",
  email: "info@prideplumbingfl.com",
};

interface JsonLdProps {
  type: 'LocalBusiness' | 'Breadcrumbs';
  breadcrumbs?: { name: string; url: string }[];
}

export function JsonLd({ type, breadcrumbs }: JsonLdProps) {
  if (type === 'LocalBusiness') {
    const businessSchema = {
      "@context": "https://schema.org",
      "@type": "PlumbingService",
      "name": BUSINESS_INFO.name,
      "image": "https://pride-plumbing-fl.vercel.app/og-image.jpg",
      "@id": "https://pride-plumbing-fl.vercel.app/#plumbing-service",
      "url": "https://prideplumbingfl.com",
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "5711 NE 14th Ave Ste 200",
        "addressLocality": "Fort Lauderdale",
        "addressRegion": "FL",
        "postalCode": "33334",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 26.1993,
        "longitude": -80.1259
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      },
      "areaServed": [{ "@type": "State", "name": "Florida" }]
    };

    return (
      <script
        id="schema-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
    );
  }

  if (type === 'Breadcrumbs' && breadcrumbs) {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };

    return (
      <script
        id="schema-breadcrumb-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    );
  }

  return null;
}
