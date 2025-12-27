# Google Analytics & Google Tag Manager Setup Guide

This guide will walk you through setting up Google Analytics (GA4) and Google Tag Manager (GTM) for your website.

## 📋 Prerequisites

Both services are free. You'll need a Google account.

---

## 🔍 Part 1: Google Analytics 4 (GA4) Setup

### Step 1: Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Click **"Start measuring"** (or **"Admin"** if you have an existing account)
3. Click **"Create Account"**
   - Account name: `Tahkiq Ghanibari` (or any name you prefer)
   - Check all data sharing settings (optional)
   - Click **"Next"**

### Step 2: Create Property

1. Property name: `Tahkiq Ghanibari Website`
2. Reporting time zone: `(GMT+06:00) Bangladesh Time`
3. Currency: `Bangladeshi Taka (BDT)`
4. Click **"Next"**

### Step 3: Business Information

1. Industry category: **"Food & Drink"** or **"Shopping"**
2. Business size: Choose your size
3. How you plan to use Google Analytics: Check relevant boxes
4. Click **"Create"**

### Step 4: Accept Terms of Service

1. Select **Bangladesh** as your country
2. Accept the Terms of Service
3. Accept the Data Processing Amendment

### Step 5: Set Up Data Stream

1. Choose platform: **"Web"**
2. Website URL: `https://tahkiqghanibari.vercel.app`
3. Stream name: `Tahkiq Ghanibari Website`
4. Click **"Create stream"**

### Step 6: Get Your Measurement ID

1. After creating the stream, you'll see **"Measurement ID"** (format: `G-XXXXXXXXXX`)
2. **Copy this ID** - you'll need it in Step 10

---

## 🏷️ Part 2: Google Tag Manager Setup

### Step 1: Create GTM Account

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Click **"Create Account"**

### Step 2: Account Setup

1. Account Name: `Tahkiq Ghanibari`
2. Country: `Bangladesh`
3. Check the agreement boxes
4. Click **"Yes"** for container setup

### Step 3: Container Setup

1. Container name: `Tahkiq Ghanibari Website`
2. Target platform: **"Web"**
3. Click **"Create"**

### Step 4: Accept Terms

1. Accept the Google Tag Manager Terms of Service Agreement

### Step 5: Get Your GTM ID

1. After creating, you'll see a popup with installation code
2. Look for the **Container ID** at the top (format: `GTM-XXXXXXX`)
3. **Copy this ID** - you'll need it in Step 10
4. Click **"OK"** to close the popup (the code is already implemented)

---

## ⚙️ Part 3: Add IDs to Your Project

### Step 10: Create Environment Variables File

1. In your project root directory, create a new file: `.env.local`
2. Add the following content (replace with your actual IDs):

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

**Example with real IDs:**
```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-ABC123DEF4
NEXT_PUBLIC_GTM_ID=GTM-AB12CD3
```

### Step 11: Add to Vercel (Production)

1. Go to your [Vercel Dashboard](https://vercel.com/)
2. Select your project: **"tahkik-ghanibari"**
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - Variable Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: Your GA Measurement ID (e.g., `G-ABC123DEF4`)
   - Click **"Save"**
   
   - Variable Name: `NEXT_PUBLIC_GTM_ID`
   - Value: Your GTM Container ID (e.g., `GTM-AB12CD3`)
   - Click **"Save"**

5. **Redeploy your site** (Vercel → Deployments → click "..." → Redeploy)

---

## 🧪 Part 4: Verify Installation

### Verify Google Analytics:

1. Go to your Google Analytics property
2. Navigate to **Reports** → **Realtime**
3. Visit your website: `https://tahkiqghanibari.vercel.app`
4. You should see yourself as an active user in the Realtime report within 30 seconds

### Verify Google Tag Manager:

1. Install [Google Tag Assistant](https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk) Chrome extension
2. Visit your website
3. Click the Tag Assistant extension icon
4. Click **"Enable"** and refresh the page
5. You should see your GTM container listed and working

---

## 📊 Optional: Link GA4 with GTM

If you want to manage GA4 through GTM (recommended for advanced tracking):

1. In **Google Tag Manager**, click **"Add a new tag"**
2. Tag Configuration → Choose **"Google Analytics: GA4 Configuration"**
3. Measurement ID: Enter your `G-XXXXXXXXXX`
4. Triggering → Choose **"All Pages"**
5. Click **"Save"**
6. Click **"Submit"** → Add version name → **"Publish"**

---

## ✅ What's Already Implemented

The code has been set up for you with:
- ✅ Google Analytics 4 tracking
- ✅ Google Tag Manager integration
- ✅ Proper Next.js Script optimization
- ✅ NoScript fallback for GTM
- ✅ Environment variable configuration
- ✅ Automatic page view tracking

---

## 🔥 Next Steps After Setup

1. **Set up Goals/Conversions** in GA4:
   - Track "Add to Cart" events
   - Track "Purchase" events
   - Track form submissions

2. **Create Custom Events** in GTM:
   - Button clicks
   - WhatsApp clicks
   - Phone number clicks

3. **Set up E-commerce Tracking** for your products

---

## ❓ Troubleshooting

**Analytics not showing data?**
- Wait 24-48 hours for initial data
- Check if .env.local file exists and has correct IDs
- Make sure you redeployed after adding Vercel environment variables
- Use browser incognito mode to test (ad blockers may interfere)

**Need help?**
- Contact: ashraful.alam.ratul@gmail.com
