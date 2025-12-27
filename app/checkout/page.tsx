"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"
import { Minus, Plus, Trash2, ShoppingBag, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import emailjs from "emailjs-com"

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    deliveryLocation: "inside-dhaka",
    paymentReference: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const shippingCost = formData.deliveryLocation === "inside-dhaka" ? 50 : 100
  const grandTotal = totalPrice + shippingCost

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[0-9]{11}$/.test(formData.phone.replace(/[^0-9]/g, ""))) {
      newErrors.phone = "Please enter a valid 11-digit phone number"
    }

    if (!formData.address.trim()) {
      newErrors.address = "Delivery address is required"
    }

    if (!formData.paymentReference.trim()) {
      newErrors.paymentReference = "Payment reference number is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    const cartItems = cart
      .map(
        (item) =>
          `${item.name} (${item.nameBangla}) - ${item.size} x ${item.quantity} = ৳${item.price * item.quantity}`,
      )
      .join("\n")

    const templateParams = {
      customer_name: formData.name,
      customer_phone: formData.phone,
      delivery_address: formData.address,
      delivery_location: formData.deliveryLocation === "inside-dhaka" ? "ঢাকার মধ্যে" : "ঢাকার বাইরে",
      payment_reference: formData.paymentReference,
      order_items: cartItems,
      subtotal: `৳${totalPrice}`,
      shipping_cost: `৳${shippingCost}`,
      total_amount: `৳${grandTotal}`,
      order_date: new Date().toLocaleString("bn-BD", {
        timeZone: "Asia/Dhaka",
        dateStyle: "full",
        timeStyle: "short",
      }),
    }

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
      )

      await new Promise((resolve) => setTimeout(resolve, 1500))

      clearCart()
      router.push("/order-success")
    } catch (error) {
      console.error("Order submission error:", error)
      setIsSubmitting(false)
      alert("অর্ডার সম্পন্ন হয়েছে, কিন্তু ইমেইল পাঠাতে সমস্যা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
      clearCart()
      router.push("/order-success")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[field]
        return newErrors
      })
    }
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 py-8 md:py-12">
          <Card className="max-w-md mx-auto text-center py-8 md:py-12">
            <CardContent className="space-y-4">
              <ShoppingBag className="h-12 w-12 md:h-16 md:w-16 mx-auto text-muted-foreground" />
              <h2 className="text-lg md:text-xl lg:text-3xl font-bold mb-4 md:mb-6 text-foreground">আপনার কার্ট খালি</h2>
              <p className="text-xs md:text-sm text-muted-foreground">শুরু করতে কিছু পণ্য যোগ করুন</p>
              <Button onClick={() => router.push("/")}>কেনাকাটা চালিয়ে যান</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-12 xl:px-16 py-6 md:py-8 lg:py-10 mb-8">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-6 text-foreground">চেকআউট</h1>

        <div className="grid gap-4 md:gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 md:space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">কার্টের পণ্য ({cart.length})</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.size}`}
                    className="flex gap-2 md:gap-3 pb-3 border-b last:border-b-0 last:pb-0"
                  >
                    <div className="relative h-14 w-14 md:h-16 md:w-16 flex-shrink-0 overflow-hidden rounded-md bg-secondary/30">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between min-w-0">
                      <div>
                        <h3 className="font-semibold text-xs md:text-sm text-foreground truncate">{item.name}</h3>
                        <p className="text-[10px] md:text-xs text-muted-foreground">
                          {item.nameBangla} • {item.size}
                        </p>
                      </div>
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <div className="flex items-center gap-1">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 md:h-7 md:w-7 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 md:w-7 text-center text-xs font-medium text-foreground">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-6 w-6 md:h-7 md:w-7 bg-transparent"
                            onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-xs md:text-sm text-foreground">
                            ৳{item.price * item.quantity}
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 md:h-7 md:w-7 text-destructive hover:text-destructive"
                            onClick={() => removeFromCart(item.id, item.size)}
                          >
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Delivery Information */}
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">ডেলিভারি তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs md:text-sm">
                    পূর্ণ নাম *
                  </Label>
                  <Input
                    id="name"
                    placeholder="আপনার পূর্ণ নাম লিখুন"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className={errors.name ? "border-destructive text-sm" : "text-sm"}
                  />
                  {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-xs md:text-sm">
                    মোবাইল নম্বর *
                  </Label>
                  <Input
                    id="phone"
                    placeholder="০১XXXXXXXXX"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className={errors.phone ? "border-destructive text-sm" : "text-sm"}
                  />
                  {errors.phone && <p className="text-xs text-destructive">বৈধ ১১ সংখ্যার নম্বর লিখুন</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="address" className="text-xs md:text-sm">
                    ডেলিভারি ঠিকানা *
                  </Label>
                  <Input
                    id="address"
                    placeholder="বাসা, রোড, এলাকা, শহর"
                    value={formData.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                    className={errors.address ? "border-destructive text-sm" : "text-sm"}
                  />
                  {errors.address && <p className="text-xs text-destructive">{errors.address}</p>}
                </div>
              </CardContent>
            </Card>
          </div>
          {/* Order Summary */}
          <div className="space-y-3 md:space-y-4">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">অর্ডার সারাংশ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-muted-foreground">সাবটোটাল</span>
                  <span className="font-medium text-foreground">৳{totalPrice}</span>
                </div>
                <div className="flex justify-between text-xs md:text-sm">
                  <span className="text-muted-foreground">ডেলিভারি চার্জ</span>
                  <span className="font-medium text-foreground">৳{shippingCost}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-semibold text-sm md:text-base text-foreground">মোট</span>
                  <span className="text-lg md:text-xl font-bold text-primary">৳{grandTotal}</span>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-3">
                <CardTitle className="text-base md:text-lg">পেমেন্ট তথ্য</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription className="text-xs">
                    অনুগ্রহ করে আমাদের বিকাশ/নগদ নম্বরে টাকা পাঠান: <strong>০১৮১৩-৫৫৮২৯৯</strong>
                  </AlertDescription>
                </Alert>
                <div className="space-y-1.5">
                  <Label htmlFor="deliveryLocation" className="text-xs md:text-sm">
                    ডেলিভারি এলাকা *
                  </Label>
                  <select
                    id="deliveryLocation"
                    value={formData.deliveryLocation}
                    onChange={(e) => handleInputChange("deliveryLocation", e.target.value)}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="inside-dhaka">ঢাকার মধ্যে (ডেলিভারি চার্জ: ৳৫০)</option>
                    <option value="outside-dhaka">ঢাকার বাইরে (ডেলিভারি চার্জ: ৳১০০)</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="paymentReference" className="text-xs md:text-sm">
                    পেমেন্ট রেফারেন্স নম্বর *
                  </Label>
                  <Input
                    id="paymentReference"
                    placeholder="ট্রানজেকশন আইডি লিখুন"
                    value={formData.paymentReference}
                    onChange={(e) => handleInputChange("paymentReference", e.target.value)}
                    className={errors.paymentReference ? "border-destructive text-sm" : "text-sm"}
                  />
                  {errors.paymentReference && <p className="text-xs text-destructive">{errors.paymentReference}</p>}
                  <p className="text-[10px] md:text-xs text-muted-foreground">পেমেন্টের পর প্রাপ্ত ট্রানজেকশন আইডি লিখুন</p>
                </div>
                <Button onClick={handleSubmit} className="w-full text-sm" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "প্রক্রিয়াকরণ..." : "অর্ডার সম্পন্ন করুন"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
