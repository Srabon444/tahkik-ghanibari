import type { Metadata } from "next"
import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Leaf, Droplets, Shield, Truck } from "lucide-react"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Tahkiq Ghanibari - Premium Cold Pressed Mustard Oil Bangladesh | প্রিমিয়াম সরিষার তেল",
  description: "Tahkiq Ghanibari - Bangladesh's finest cold pressed mustard oil from traditional ghani method. 100% pure, organic & chemical-free. ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল ঐতিহ্যবাহী ঘানিতে তৈরি।",
  keywords: "Tahkiq Ghanibari, tahkiq, ghanibari, cold pressed mustard oil Bangladesh, premium mustard oil, organic mustard oil, pure mustard oil, traditional ghani oil, তাহকিক ঘানিবাড়ি, সরিষার তেল, খাঁটি সরিষার তেল, ঘানির তেল",
  openGraph: {
    title: "Tahkiq Ghanibari - Premium Cold Pressed Mustard Oil | প্রিমিয়াম সরিষার তেল",
    description: "Tahkiq Ghanibari offers premium cold pressed mustard oil from traditional ghani in Bangladesh. ১০০% খাঁটি ও প্রাকৃতিক সরিষার তেল।",
    url: "https://tahkiqghanibari.vercel.app",
    siteName: "Tahkiq Ghanibari | তাহকিক ঘানিবাড়ি",
    type: "website",
    locale: "bn_BD",
  },
}

const products = [
  {
    id: "1",
    name: "মাঘি+শ্বেতী সরিষার তেল",
    nameBangla: "Maghi+Shweti Mustard Oil",
    image: "/premium-mustard-oil-bottle-on-wooden-surface.jpg",
    pricing: {
      "১লিটার": 290,
      "৫লিটার": 1450,
    },
    sizes: ["১লিটার", "৫লিটার"],
  },
  {
    id: "2",
    name: "শুধুমাত্র মাঘি সরিষার তেল",
    nameBangla: "Pure Maghi Mustard Oil",
    image: "/cold-pressed-mustard-oil-with-mustard-seeds.jpg",
    pricing: {
      "১লিটার": 350,
      "৫লিটার": 1750,
    },
    sizes: ["১লিটার", "৫লিটার"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <main>
      <section className="relative overflow-hidden bg-secondary/20 py-8 md:py-12 lg:py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1">
                <span className="text-xs md:text-sm font-medium text-primary">১০০% খাঁটি ও প্রাকৃতিক</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl text-balance">
                Tahkiq Ghanibari
                <span className="block text-primary mt-1">Premium Mustard Oil | প্রিমিয়াম সরিষার তেল</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground text-pretty max-w-xl">
                Experience authentic cold pressed mustard oil from traditional ghani method. 100% pure, organic, and chemical-free.<br/>
                ঐতিহ্যবাহী ঘানিতে তৈরি সরিষার তেলের প্রকৃত স্বাদ অনুভব করুন। সেরা মানের সরিষা থেকে কোল্ড প্রেসিং পদ্ধতিতে তৈরি।
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button size="lg" className="text-sm md:text-base w-full sm:w-auto" asChild>
                  <a href="#products">এখনই কিনুন</a>
                </Button>
                <Button size="lg" variant="outline" className="text-sm md:text-base w-full sm:w-auto bg-transparent" asChild>
                  <a href="#about">আরও জানুন</a>
                </Button>
              </div>
            </div>
            <div className="relative aspect-square max-w-md mx-auto lg:max-w-none">
              <Image
                src="/mustard-oil-bottle-with-mustard-flowers-and-seeds-.jpg"
                alt="প্রিমিয়াম সরিষার তেল"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Leaf className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">১০০% জৈব</h3>
              <p className="text-xs md:text-sm text-muted-foreground">রাসায়নিক ও কীটনাশক মুক্ত</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Droplets className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">কোল্ড প্রেসড</h3>
              <p className="text-xs md:text-sm text-muted-foreground">সর্বোচ্চ পুষ্টি ও স্বাদ সংরক্ষিত</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">মান নিশ্চয়তা</h3>
              <p className="text-xs md:text-sm text-muted-foreground">ল্যাব পরীক্ষিত বিশুদ্ধতা</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2 p-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Truck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-sm md:text-base text-foreground">দ্রুত ডেলিভারি</h3>
              <p className="text-xs md:text-sm text-muted-foreground">আপনার দোরগোড়ায় তাজা সরবরাহ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-8 md:py-12 lg:py-16 bg-secondary/10">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="mb-6 md:mb-8 text-center space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">আমাদের পণ্য</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              উচ্চমানের সরিষার তেলের বিভিন্ন ধরন থেকে বেছে নিন
            </p>
          </div>
          <div className="grid gap-3 md:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="mb-6 md:mb-8 text-center space-y-2">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">আমাদের ঘানি প্রক্রিয়া</h2>
            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              দেখুন কিভাবে আমরা ঐতিহ্যবাহী পদ্ধতিতে সরিষার তেল তৈরি করি
            </p>
          </div>
          <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-md">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ftahkiqbd%2Fvideos%2F980055749843853%2F&show_text=false&width=560&t=0"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-md">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fwatch%2F%3Fv%3D413740924807469&show_text=false&width=267&t=0"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
            <div className="aspect-square rounded-lg overflow-hidden bg-muted shadow-md">
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1230128284652122&show_text=false&width=267&t=0"
                width="100%"
                height="100%"
                style={{ border: 'none', overflow: 'hidden' }}
                scrolling="no"
                frameBorder="0"
                allowFullScreen={true}
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-8 md:py-12 lg:py-16 bg-secondary/10">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
            <div className="relative aspect-4/3 overflow-hidden rounded-lg">
              <Image
                src="/oil-extract.png"
                alt="Tahkiq Ghanibari"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground text-balance">
                আদিকালের গরুর ঘানি পদ্ধতি
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                আমরা ব্যবহার করি আদিকালের গরুর ঘানি পদ্ধতি, যেখানে কাঠের উপর কাঠ দিয়ে সরিষা পেষা হয়। প্রতি ২ ঘন্টা পরপর ঘানির গর্তের মধ্য থেকে সব খৈল ভালোভাবে ক্লিন করে নতুন আরেক সেট ঘানি চালু করা হয়।
              </p>
              <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                এই প্রক্রিয়ায় ঘানির মধ্যে ঠাণ্ডা হবার সুযোগ পাওয়ায় তেলে হিট হয় অনেক কম (মাত্র ৪০-৪৫ ডিগ্রি সেন্টিগ্রেড)। একমাত্র এই গরুর ঘানি পদ্ধতিতেই প্রকৃত কোল্ড প্রেসড তেল উৎপাদন সম্ভব।
              </p>
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-xs md:text-sm font-semibold text-foreground mb-2">বর্তমান তেলের মূল্য:</p>
                <ul className="space-y-1 text-xs md:text-sm text-muted-foreground">
                  <li>◑ মাঘি+শ্বেতী সরিষার তেল: ৳২৯০/লিটার (৫ লিটার - ৳১৪৫০)</li>
                  <li>◑ শুধুমাত্র মাঘি সরিষায় ভাঙ্গানো তেল: ৳৩৫০/লিটার (৫ লিটার - ৳১৭৫০)</li>
                  <li>◑ ডেলিভারি চার্জ ঢাকার মধ্যে: ৳৫০</li>
                  <li>◑ ডেলিভারি চার্জ ঢাকার বাইরে: ৳১০০</li>
                </ul>
              </div>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="text-sm w-full sm:w-auto bg-transparent" asChild>
                  <a href="#products">এখনই অর্ডার করুন</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-4 md:py-6 mt-6">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="flex items-center gap-2">
              <Leaf className="h-4 w-4 text-primary" />
              <span className="text-xs md:text-sm text-muted-foreground text-center">
                © {new Date().getFullYear()} <a
                  href="https://tahkiqghanibari.vercel.app"
                  className="hover:text-foreground transition-colors"
                >
                  Tahkiq Ghanibari</a> All rights reserved. {" "}
                | Powered by {" "}
                <a
                  href="https://www.devashraful.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  Ashraful                </a>
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                গোপনীয়তা নীতি
              </a>
              <a href="#" className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors">
                সেবার শর্তাবলী
              </a>
              <a
                href="/contact"
                className="text-xs md:text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                যোগাযোগ
              </a>
            </div>
          </div>
        </div>
      </footer>
      </main>
    </div>
  )
}
