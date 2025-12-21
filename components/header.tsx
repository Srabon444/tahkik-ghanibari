"use client"

import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/lib/cart-context"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function Header() {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 flex h-14 md:h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-full bg-primary">
            <Leaf className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground" />
          </div> */}
          <Image
            src="/logo.jpg"
            alt="Tahkiq Ghanibari Logo"
            width={40}
            height={40}
            className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover"
          />
          {/* </CHANGE> */}
          <div className="flex flex-col">
            <span className="text-sm md:text-base lg:text-lg font-semibold leading-none text-foreground">
              তাহকিক ঘানিবাড়ি
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground">Tahkiq Ghanibari</span>
          </div>
        </Link>

        <nav className="flex items-center gap-2 md:gap-4">
          <Link
            href="/"
            className="hidden sm:block text-xs md:text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            হোম
          </Link>
          <Link
            href="/#products"
            className="hidden sm:block text-xs md:text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            পণ্য
          </Link>
          <Link
            href="/contact"
            className="hidden sm:block text-xs md:text-sm font-medium text-foreground transition-colors hover:text-primary"
          >
            যোগাযোগ
          </Link>
          <Link href="/checkout">
            <Button variant="outline" size="sm" className="relative bg-transparent">
              <ShoppingCart className="h-4 w-4" />
              {totalItems > 0 && (
                <Badge
                  className="absolute -right-2 -top-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground"
                  variant="default"
                >
                  {totalItems}
                </Badge>
              )}
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
