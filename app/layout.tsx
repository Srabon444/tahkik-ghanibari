import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { GoogleAnalytics, GoogleTagManager, GoogleTagManagerNoScript } from "@/components/analytics"
import { StructuredData } from "@/components/structured-data"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Tahkiq Ghanibari - Premium Cold Pressed Mustard Oil | তাহকিক ঘানিবাড়ি - খাঁটি সরিষার তেল",
    template: "%s | Tahkiq Ghanibari"
  },
  description: "Tahkiq Ghanibari offers premium cold pressed mustard oil from traditional ghani method in Bangladesh. ঐতিহ্যবাহী ঘানিতে তৈরি ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল। 100% pure, organic, and naturally extracted mustard oil.",
  keywords: "Tahkiq Ghanibari, tahkiq, ghanibari, mustard oil bangladesh, cold pressed mustard oil, organic mustard oil, pure mustard oil, bangladesh mustard oil, তাহকিক ঘানিবাড়ি, সরিষার তেল, খাঁটি সরিষার তেল, ঘানির তেল, traditional mustard oil, ghani oil",
  authors: [{ name: "Tahkiq Ghanibari" }],
  creator: "Tahkiq Ghanibari",
  publisher: "Tahkiq Ghanibari",
  metadataBase: new URL("https://tahkiqghanibari.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: "https://tahkiqghanibari.vercel.app",
    siteName: "Tahkiq Ghanibari | তাহকিক ঘানিবাড়ি",
    title: "Tahkiq Ghanibari - Premium Cold Pressed Mustard Oil Bangladesh | তাহকিক ঘানিবাড়ি",
    description: "Tahkiq Ghanibari - Premium cold pressed mustard oil from traditional ghani method. ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল। Organic & pure mustard oil in Bangladesh.",
    images: [
      {
        url: "/mustard-oil-bottle-with-mustard-flowers-and-seeds-.jpg",
        width: 1200,
        height: 630,
        alt: "তাহকিক ঘানিবাড়ি - প্রিমিয়াম সরিষার তেল",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tahkiq Ghanibari - Premium Cold Pressed Mustard Oil Bangladesh",
    description: "Tahkiq Ghanibari offers 100% pure, organic cold pressed mustard oil from traditional ghani method. ঐতিহ্যবাহী ঘানিতে তৈরি খাঁটি সরিষার তেল।",
    images: ["/mustard-oil-bottle-with-mustard-flowers-and-seeds-.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "g-fEhzecpH0Xx0EzeLCmNiX6zTeloq_lCPH35YYPATw",
  },
  generator: "Next.js",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="bn">
      <head>
        <GoogleTagManager />
        <StructuredData />
        <link rel="alternate" hrefLang="bn" href="https://tahkiqghanibari.vercel.app" />
        <link rel="alternate" hrefLang="en" href="https://tahkiqghanibari.vercel.app" />
        <link rel="alternate" hrefLang="x-default" href="https://tahkiqghanibari.vercel.app" />
        <meta name="language" content="Bengali, English" />
        <meta property="og:locale:alternate" content="en_US" />
      </head>
      <body className={`font-sans antialiased`}>
        <GoogleTagManagerNoScript />
        <CartProvider>{children}</CartProvider>
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  )
}
