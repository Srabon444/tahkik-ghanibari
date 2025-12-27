import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { GoogleAnalytics, GoogleTagManager, GoogleTagManagerNoScript } from "@/components/analytics"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Tahkiq Ghanibari - Pure Mustard Oil | তাহকিক ঘানিবাড়ি - খাঁটি সরিষার তেল",
    template: "%s | তাহকিক ঘানিবাড়ি"
  },
  description: "ঐতিহ্যবাহী ঘানিতে তৈরি ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল। কোল্ড প্রেসড, অর্গানিক সরিষার তেল সরাসরি ঘানিবাড়ি থেকে। Premium quality cold pressed mustard oil from traditional farming in Bangladesh.",
  keywords: "সরিষার তেল, mustard oil, খাঁটি সরিষার তেল, cold pressed mustard oil, organic mustard oil, ঘানির তেল, তাহকিক ঘানিবাড়ি, bangladesh mustard oil, pure mustard oil",
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
    url: "https://tahkiqghanibari.vercel.app",
    siteName: "তাহকিক ঘানিবাড়ি",
    title: "Tahkiq Ghanibari - Pure Mustard Oil | তাহকিক ঘানিবাড়ি",
    description: "ঐতিহ্যবাহী ঘানিতে তৈরি ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল",
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
    title: "Tahkiq Ghanibari - Pure Mustard Oil",
    description: "ঐতিহ্যবাহী ঘানিতে তৈরি ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল",
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
