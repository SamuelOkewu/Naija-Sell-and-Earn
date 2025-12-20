
# 🚀 Naija Sell and Earn - Deployment Guide

This project is built for high performance using React and Vite. Follow these steps to get your marketplace live.

## 👤 Developer Information
- **Name:** Okewu Samuel Owoicho
- **Email:** okewusamuelowoicho@gmail.com
- **Phone/WhatsApp:** +2349063676131
- **LinkedIn:** [www.linkedin.com/in/sammy1000](https://www.linkedin.com/in/sammy1000)

---

## 🛠 Step 1: Push to GitHub (From Codespaces)
Run these in your terminal:
1. `git add .`
2. `git commit -m "Fixing deployment: Adding Vite and Package configuration"`
3. `git push origin main`

## 🌐 Step 2: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com).
2. Click **"Add New"** > **"Project"**.
3. Import your repository.
4. **IMPORTANT SETTINGS**:
   - **Framework Preset**: Select **Vite** (NOT "Other").
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. **Environment Variables**: Add your `VITE_` keys in the Settings tab.
6. Click **"Deploy"**.

## 📱 Step 3: View the Project
- **Website:** Vercel will provide a live URL.
- **Mobile View:** Open that URL on your phone to see the mobile-optimized app experience.
