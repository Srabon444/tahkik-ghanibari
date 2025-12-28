import Script from 'next/script'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Tahkiq Ghanibari",
    "alternateName": ["তাহকিক ঘানিবাড়ি", "Tahkiq", "Ghanibari"],
    "url": "https://tahkiqghanibari.vercel.app",
    "logo": "https://tahkiqghanibari.vercel.app/icon.svg",
    "description": "Tahkiq Ghanibari - Bangladesh's premium cold pressed mustard oil from traditional ghani method. 100% pure, organic & chemical-free. ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল ঐতিহ্যবাহী ঘানিতে তৈরি।",
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
      "https://www.facebook.com/tahkiqbd",
      "https://www.instagram.com/tahkiqbd/"
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
    "alternateName": ["তাহকিক ঘানিবাড়ি", "Tahkiq", "Ghanibari", "Tahkiq Ghanibari Bangladesh"],
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Tahkiq Ghanibari Premium Cold Pressed Mustard Oil",
    "alternateName": "তাহকিক ঘানিবাড়ি প্রিমিয়াম সরিষার তেল",
    "image": "https://tahkiqghanibari.vercel.app/mustard-oil-bottle-with-mustard-flowers-and-seeds-.jpg",
    "description": "Tahkiq Ghanibari offers premium 100% pure cold pressed mustard oil from traditional ghani method in Bangladesh. Organic, chemical-free, and naturally extracted.",
    "brand": {
      "@type": "Brand",
      "name": "Tahkiq Ghanibari"
    },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BDT",
      "lowPrice": "290",
      "highPrice": "1750",
      "availability": "https://schema.org/InStock"
    }
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
      <Script
        id="product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema),
        }}
      />
    </>
  )
}
