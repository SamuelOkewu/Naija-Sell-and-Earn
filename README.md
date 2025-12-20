
# 🚀 Naija Sell and Earn - Deployment Guide

This project is built for high performance using React and Vite. Follow these steps to get your marketplace live.

## 👤 Developer Information
- **Name:** Okewu Samuel Owoicho
- **Email:** okewusamuelowoicho@gmail.com
- **Phone/WhatsApp:** +2349063676131
- **LinkedIn:** [www.linkedin.com/in/sammy1000](https://www.linkedin.com/in/sammy1000)

---

## 🛠 Step 1: Push to GitHub
Run these in your GitHub Codespaces terminal:
1. `git add .`
2. `git commit -m "Optimize for Vite build and Vercel deployment"`
3. `git push origin main`

## 🌐 Step 2: Vercel Deployment Settings
When importing your project to Vercel, ensure these settings are used:

| Setting | Value |
| :--- | :--- |
| **Framework Preset** | `Vite` |
| **Root Directory** | `./` |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |

### 🔑 Environment Variables
In **Settings > Environment Variables**, add:
- `VITE_ADMIN_EMAIL`: `okewusamuelowoicho@gmail.com`
- `VITE_ADMIN_PHONE`: `+2349063676131`
- `VITE_PAYSTACK_PUBLIC_KEY`: (Your Key)
- `VITE_TERMII_API_KEY`: (Your Key)

## 📱 Step 3: View & Install
- **Website:** Vercel will provide a URL once the build finishes.
- **App Experience:** Open the link on your mobile phone (Chrome/Safari) and select **"Add to Home Screen"** to use it as a native Nigerian app.
