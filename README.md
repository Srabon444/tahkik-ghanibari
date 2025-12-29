# তাহকিক ঘানিবাড়ি - Tahkiq Ghanibari

একটি সম্পূর্ণ কার্যকরী ই-কমার্স ওয়েবসাইট যেখানে বিশুদ্ধ সরিষার তেল বিক্রয় করা হয়।

A fully functional e-commerce website for selling pure mustard oil.

- [Live Demo](https://tahkiqghanibari.vercel.app/)

## Features

- আধুনিক এবং প্রাকৃতিক ডিজাইন (Modern and natural agro/eco design)
- পূর্ণাঙ্গ শপিং কার্ট (Full shopping cart functionality)
- পণ্য ভেরিয়েন্ট সিলেকশন (Product variant selection)
- চেকআউট সিস্টেম (Checkout system)
- পেমেন্ট রেফারেন্স ভিত্তিক অর্ডার (Order placement with payment reference)
- স্বয়ংক্রিয় ইমেইল নোটিফিকেশন (Automatic email notifications via EmailJS)
- যোগাযোগ পাতা (Contact page with Google Maps)
- সম্পূর্ণ রেসপন্সিভ (Fully responsive)

## Tech Stack

- Next.js 16
- React 19.2
- TypeScript
- Tailwind CSS v4
- shadcn/ui components
- EmailJS for email notifications

## Setup

1. Clone the repository
2. Install dependencies: `npm install` or `pnpm install`
3. Configure EmailJS (see [EMAILJS_SETUP.md](./EMAILJS_SETUP.md))
4. Add environment variables (see [.env.example](./.env.example))
5. Run development server: `npm run dev`

## Environment Variables

Add these to your environment variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

See [EMAILJS_SETUP.md](./EMAILJS_SETUP.md) for detailed setup instructions.

## Contact Information

- Mobile: 01813-558299
- WhatsApp: 01813-558299
- Email: tahkiqorganic@gmail.com
- Address: Arshinagar (Near Bosila Bridge, Mohammadpur), Sakta, Keraniganj, Dhaka, Bangladesh

## Order Email

All orders are automatically sent to: srabon444@gmail.com

## License

Private - All rights reserved
```

```ts file="app/actions/send-order-email.ts" isDeleted="true"
...deleted...
