"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/lib/cart-context"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductCardProps {
  id: string
  name: string
  nameBangla: string
  price: number
  image: string
  sizes: string[]
}

export function ProductCard({ id, name, nameBangla, price, image, sizes }: ProductCardProps) {
  const { addToCart } = useCart()
  const [selectedSize, setSelectedSize] = useState(sizes[0])
  const [added, setAdded] = useState(false)

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      nameBangla,
      price,
      image,
      size: selectedSize,
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg flex flex-col h-full p-0">
      <div className="relative aspect-square overflow-hidden bg-secondary/30">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardFooter className="flex flex-col items-start gap-2 p-3 grow">
        <div className="w-full grow">
          <h3 className="text-base md:text-lg font-semibold text-foreground">{name}</h3>
          <p className="text-xs md:text-sm text-muted-foreground">{nameBangla}</p>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-lg md:text-xl font-bold text-primary">৳{price}</span>
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger className="w-28 h-8 text-xs">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sizes.map((size) => (
                <SelectItem key={size} value={size} className="text-xs">
                  {size}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleAddToCart} className="w-full text-sm" disabled={added}>
          {added ? (
            <>
              <Check className="mr-2 h-4 w-4" />
              যোগ হয়েছে
            </>
          ) : (
            <>
              <Plus className="mr-2 h-4 w-4" />
              কার্টে যোগ করুন
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
