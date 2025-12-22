import { Header } from "@/components/header"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { Leaf, Droplets, Shield, Truck } from "lucide-react"
import Image from "next/image"

const products = [
  {
    id: "1",
    name: "প্রিমিয়াম সরিষার তেল",
    nameBangla: "Premium Mustard Oil",
    price: 350,
    image: "/premium-mustard-oil-bottle-on-wooden-surface.jpg",
    sizes: ["৫০০মিলি", "১লিটার", "২লিটার", "৫লিটার"],
  },
  {
    id: "2",
    name: "কোল্ড প্রেসড সরিষার তেল",
    nameBangla: "Cold Pressed Mustard Oil",
    price: 420,
    image: "/cold-pressed-mustard-oil-with-mustard-seeds.jpg",
    sizes: ["৫০০মিলি", "১লিটার", "২লিটার"],
  },
  {
    id: "3",
    name: "জৈব সরিষার তেল",
    nameBangla: "Organic Mustard Oil",
    price: 480,
    image: "/organic-mustard-oil-with-fresh-mustard-plants.jpg",
    sizes: ["৫০০মিলি", "১লিটার", "২লিটার", "৫লিটার"],
  },
  {
    id: "4",
    name: "ঐতিহ্যবাহী সরিষার তেল",
    nameBangla: "Traditional Mustard Oil",
    price: 320,
    image: "/traditional-mustard-oil-clay-pot.jpg",
    sizes: ["১লিটার", "২লিটার", "৫লিটার"],
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary/20 py-8 md:py-12 lg:py-16">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-10 items-center">
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-primary/10 px-3 py-1">
                <span className="text-xs md:text-sm font-medium text-primary">১০০% খাঁটি ও প্রাকৃতিক</span>
              </div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl text-balance">
                প্রিমিয়াম সরিষার তেল
                <span className="block text-primary mt-1">তাহকিক ঘানিবাড়ি</span>
              </h1>
              <p className="text-sm md:text-base text-muted-foreground text-pretty max-w-xl">
                ঐতিহ্যবাহী ঘানিতে তৈরি সরিষার তেলের প্রকৃত স্বাদ অনুভব করুন। সেরা মানের সরিষা থেকে কোল্ড প্রেসিং পদ্ধতিতে তৈরি, যা প্রাকৃতিক
                পুষ্টি এবং স্বাদ অক্ষুণ্ণ রাখে।
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button size="lg" className="text-sm md:text-base w-full sm:w-auto" asChild>
                  <a href="#products">এখনই কিনুন</a>
                </Button>
                <Button size="lg" variant="outline" className="text-sm md:text-base w-full sm:w-auto bg-transparent">
                  আরও জানুন
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

      {/* About Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="grid gap-6 md:gap-8 lg:grid-cols-2 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="/oil-extract.png"
                alt="ঐতিহ্যবাহী পদ্ধতি"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-3 md:space-y-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-foreground text-balance">
                ঐতিহ্যবাহী পদ্ধতি, আধুনিক মান
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                তাহকিক ঘানিবাড়িতে আমরা বিশ্বাস করি ঐতিহ্যবাহী সরিষার তেল উৎপাদন শিল্পকে সংরক্ষণে এবং আধুনিক মানদণ্ড মেনে চলতে। আমাদের
                সরিষার তেল প্রজন্মের পর প্রজন্ম ধরে চলে আসা কোল্ড প্রেসিং পদ্ধতি ব্যবহার করে নিষ্কাশিত হয়।
              </p>
              <p className="text-xs md:text-sm text-muted-foreground text-pretty">
                আমাদের প্রতিটি বোতলে রয়েছে প্রকৃত বাঙালি ঐতিহ্যের সারাংশ, যা আপনার রান্নার জন্য নিয়ে আসে সবচেয়ে খাঁটি এবং সুস্বাদু তেল।
              </p>
              <div className="flex gap-3 pt-2">
                <Button variant="outline" className="text-sm w-full sm:w-auto bg-transparent">
                  আমাদের গল্প
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
                © ২০২৫ তাহকিক ঘানিবাড়ি। সর্বস্বত্ব সংরক্ষিত।
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
    </div>
  )
}
