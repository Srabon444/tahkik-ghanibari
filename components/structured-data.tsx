import Script from 'next/script'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tahkiq Ghanibari",
    "alternateName": "তাহকিক ঘানিবাড়ি",
    "url": "https://tahkiqghanibari.vercel.app",
    "logo": "https://tahkiqghanibari.vercel.app/icon.svg",
    "description": "ঐতিহ্যবাহী ঘানিতে তৈরি ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল। Premium quality cold pressed mustard oil from traditional farming in Bangladesh.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880-1813-558299",
      "contactType": "Customer Service",
      "areaServed": "BD",
      "availableLanguage": ["Bengali", "English"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "মোহাম্মদপুর বসিলা ব্রিজ সংলগ্ন, আরশিনগর রোড",
      "addressLocality": "কেরানীগঞ্জ",
      "addressRegion": "Dhaka",
      "addressCountry": "BD"
    },
    "sameAs": [
      "https://www.facebook.com/tahkiqbd"
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Tahkiq Ghanibari",
    "alternateName": "তাহকিক ঘানিবাড়ি",
    "url": "https://tahkiqghanibari.vercel.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://tahkiqghanibari.vercel.app/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tahkiq Ghanibari",
    "alternateName": "তাহকিক ঘানিবাড়ি",
    "image": "https://tahkiqghanibari.vercel.app/mustard-oil-bottle-with-mustard-flowers-and-seeds-.jpg",
    "@id": "https://tahkiqghanibari.vercel.app",
    "url": "https://tahkiqghanibari.vercel.app",
    "telephone": "+880-1813-558299",
    "priceRange": "৳৳",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "মোহাম্মদপুর বসিলা ব্রিজ সংলগ্ন, আরশিনগর রোড",
      "addressLocality": "কেরানীগঞ্জ",
      "addressRegion": "Dhaka",
      "postalCode": "1310",
      "addressCountry": "BD"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.7104,
      "longitude": 90.3713
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "09:00",
      "closes": "21:00"
    },
    "sameAs": [
      "https://www.facebook.com/tahkiqbd"
    ]
  }

  return (
    <>
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
    </>
  )
}
