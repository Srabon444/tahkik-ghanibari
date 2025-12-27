import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, MessageCircle, Facebook } from "lucide-react"

export const metadata: Metadata = {
  title: "যোগাযোগ - তাহকিক ঘানিবাড়ি | Contact Us",
  description: "তাহকিক ঘানিবাড়ির সাথে যোগাযোগ করুন। মোবাইল: ০১৮১৩-৫৫৮২৯৯, ইমেইল: tahkiqorganic@gmail.com। কেরানীগঞ্জ, ঢাকা থেকে সরাসরি সরিষার তেল কিনুন।",
  openGraph: {
    title: "যোগাযোগ - তাহকিক ঘানিবাড়ি",
    description: "আমাদের সাথে যোগাযোগ করুন - মোবাইল: ০১৮১৩-৫৫৮২৯৯",
    url: "https://tahkiqghanibari.vercel.app/contact",
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
      <section className="py-8 md:py-12 lg:py-16 bg-secondary/10">
        <div className="container max-w-6xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="mb-6 md:mb-8 text-center space-y-2">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">যোগাযোগ করুন</h1>
            <p className="text-sm md:text-base text-muted-foreground">আমরা আপনার সেবায় সর্বদা প্রস্তুত</p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-4">
              <Card>
                <CardContent className="p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-4 text-foreground">যোগাযোগের তথ্য</h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">মোবাইল</h3>
                        <a
                          href="tel:01813558299"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          ০১৮১৩-৫৫৮২৯৯
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MessageCircle className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">হোয়াটসঅ্যাপ</h3>
                        <a
                          href="https://wa.me/8801813558299"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          ০১৮১৩-৫৫৮২৯৯
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">ইমেইল</h3>
                        <a
                          href="mailto:tahkiqorganic@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors break-all"
                        >
                          tahkiqorganic@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <Facebook className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">ফেসবুক</h3>
                        <a
                          href="https://www.facebook.com/tahkiqbd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          @tahkiqbd
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">ইনস্টাগ্রাম</h3>
                        <a
                          href="https://www.instagram.com/tahkiqbd/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          @tahkiqbd
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-sm mb-1">ঠিকানা</h3>
                        <p className="text-sm text-muted-foreground">
                          মোহাম্মদপুর বসিলা ব্রিজ সংলগ্ন, আরশিনগর রোড, কেরানীগঞ্জ,  ঢাকা।
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-medium text-sm mb-3">ব্যবসায়িক সময়</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between">
                        <span>শনিবার - শুক্রবার</span>
                        <span>সকাল ৮টা - রাত ৯টা</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 md:p-6">
                  <h2 className="text-lg md:text-xl font-semibold mb-3 text-foreground">দ্রুত যোগাযোগ</h2>
                  <p className="text-sm text-muted-foreground mb-4">
                    যেকোনো প্রশ্ন বা অর্ডারের জন্য সরাসরি হোয়াটসঅ্যাপে মেসেজ করুন অথবা কল করুন।
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild className="flex-1">
                      <a href="https://wa.me/8801813558299" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        হোয়াটসঅ্যাপ মেসেজ
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="flex-1 bg-transparent">
                      <a href="tel:01813558299">
                        <Phone className="h-4 w-4 mr-2" />
                        কল করুন
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <div className="lg:sticky lg:top-20 h-fit">
              <Card className="overflow-hidden p-0">
                <CardContent className="p-0">
                  <div className="aspect-[4/3] lg:aspect-square relative">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4418.003759718117!2d90.34412577596453!3d23.735135789360875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfaa90893d95%3A0x6ed9fdd3bc374170!2zVEFIS0lRIOCmpOCmvuCmueCmleCmv-CmlSDgppjgpr7gpqjgpr_gpqzgpr7gp5zwpr8!5e1!3m2!1sen!2sbd!4v1766296684723!5m2!1sen!2sbd"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30 py-4 md:py-6 mt-6">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <div className="flex items-center gap-2">
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
      </main>
    </div>
  )
}
