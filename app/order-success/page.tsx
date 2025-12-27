import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "অর্ডার সফল - তাহকিক ঘানিবাড়ি | Order Success",
  description: "আপনার অর্ডার সফলভাবে সম্পন্ন হয়েছে। ক্রয়ের জন্য ধন্যবাদ।",
  robots: "noindex, nofollow",
}

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 py-8 md:py-12 mb-8">
        <Card className="max-w-md mx-auto text-center py-6 md:py-10">
          <CardContent className="space-y-4 md:space-y-5">
            <div className="flex justify-center">
              <div className="rounded-full bg-primary/10 p-3 md:p-4">
                <CheckCircle className="h-10 w-10 md:h-12 md:w-12 text-primary" />
              </div>
            </div>
            <div className="space-y-1.5">
              <h1 className="text-xl md:text-2xl font-bold text-foreground">অর্ডার সফলভাবে সম্পন্ন হয়েছে!</h1>
              <p className="text-sm md:text-base text-muted-foreground">ক্রয়ের জন্য ধন্যবাদ</p>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground px-4">
              আমরা আপনার অর্ডার এবং পেমেন্ট রেফারেন্স পেয়েছি। আমাদের টিম পেমেন্ট যাচাই করবে এবং শীঘ্রই ডেলিভারি নিশ্চিতকরণের জন্য আপনার
              সাথে যোগাযোগ করবে।
            </p>
            <div className="pt-2 md:pt-4">
              <Button asChild size="lg" className="w-full sm:w-auto text-sm">
                <Link href="/">কেনাকাটা চালিয়ে যান</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      </main>
    </div>
  )
}
