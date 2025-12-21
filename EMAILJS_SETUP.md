# EmailJS Setup Guide

This project uses EmailJS to send order confirmation emails to the store owner via **client-side integration**.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create Email Template

1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Copy and paste the HTML template from `email-template.html` or create your own
4. Use these template variables:

**Template Variables:**
- `{{customer_name}}` - Customer's full name
- `{{customer_phone}}` - Customer's phone number
- `{{delivery_address}}` - Delivery address
- `{{payment_reference}}` - Payment transaction ID
- `{{order_items}}` - List of ordered products
- `{{subtotal}}` - Order subtotal
- `{{shipping_cost}}` - Delivery charge
- `{{total_amount}}` - Total order amount
- `{{order_date}}` - Order date and time

**Basic Text Template Example:**
```
Subject: নতুন অর্ডার - {{customer_name}}

অর্ডার বিবরণ:
==================

গ্রাহক তথ্য:
- নাম: {{customer_name}}
- ফোন: {{customer_phone}}
- ঠিকানা: {{delivery_address}}

অর্ডার আইটেম:
{{order_items}}

মূল্য বিবরণ:
- সাবটোটাল: {{subtotal}}
- ডেলিভারি চার্জ: {{shipping_cost}}
- মোট: {{total_amount}}

পেমেন্ট তথ্য:
- রেফারেন্স নম্বর: {{payment_reference}}

অর্ডারের তারিখ: {{order_date}}
```

4. Set the template's **To Email** field to: `srabon444@gmail.com`
5. Save the template and copy the **Template ID**

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Copy your **Public Key** (also called User ID)

## Step 5: Add Environment Variables

You need to add these three environment variables with the `NEXT_PUBLIC_` prefix:

### In v0 (Recommended):
1. Click the **Vars** section in the in-chat sidebar (left side)
2. Add these three variables:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` = your_service_id
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` = your_template_id
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` = your_public_key
3. The project will automatically update

### Or in Vercel Dashboard:
1. Go to your project settings
2. Navigate to **Environment Variables**
3. Add the three variables listed above
4. Redeploy your application

### Or locally:
Create a `.env.local` file and add:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## Security Note

EmailJS public keys are **designed to be used client-side** and are safe to expose in your frontend code. EmailJS provides built-in rate limiting and security features to prevent abuse. This is the standard and recommended way to use EmailJS.

## Done!

Now when customers complete an order, the details will be automatically emailed to **srabon444@gmail.com**.

## Troubleshooting

If emails aren't sending:
1. Check the browser console for errors
2. Verify all environment variables are set correctly
3. Ensure your EmailJS account is verified
4. Check EmailJS dashboard for error logs
5. Verify the template variables match exactly
6. Make sure your email service is properly connected in EmailJS

## Free Plan Limits

The free EmailJS plan includes:
- 200 emails per month
- 2 email services
- 2 email templates

If you need more, consider upgrading to a paid plan.
