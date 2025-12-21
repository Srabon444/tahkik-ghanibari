"use server"

import emailjs from "emailjs-com"

interface OrderEmailData {
  customer_name: string
  customer_phone: string
  delivery_address: string
  payment_reference: string
  order_items: string
  subtotal: string
  shipping_cost: string
  total_amount: string
  order_date: string
}

export async function sendOrderEmail(data: OrderEmailData) {
  try {
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID || "",
      process.env.EMAILJS_TEMPLATE_ID || "",
      {
        ...data,
      },
      process.env.EMAILJS_PUBLIC_KEY || "",
    )

    return { success: true, result }
  } catch (error) {
    console.error("EmailJS error:", error)
    return { success: false, error }
  }
}
