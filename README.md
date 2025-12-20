
# 🚀 Naija Sell and Earn - Deployment Guide

This project is built for high performance using React and ESM. Follow these steps to get your marketplace live.

## 👤 Developer Information
- **Name:** Okewu Samuel Owoicho
- **Email:** okewusamuelowoicho@gmail.com
- **Phone/WhatsApp:** +2349063676131
- **LinkedIn:** [www.linkedin.com/in/sammy1000](https://www.linkedin.com/in/sammy1000)

---

## 🔑 Environment Variables
To make the app fully functional with real payments and SMS, you must set these variables in **Vercel Settings > Environment Variables**:

| Variable | Description |
| :--- | :--- |
| `VITE_PAYSTACK_PUBLIC_KEY` | Your Paystack Public Key (Starts with `pk_`) |
| `VITE_TERMII_API_KEY` | Your Termii API Key for OTP SMS |
| `VITE_ADMIN_EMAIL` | `okewusamuelowoicho@gmail.com` |
| `VITE_ADMIN_PHONE` | `+2349063676131` |

---

## 🛠 Step 1: Push to GitHub (From Codespaces)
Run these in your terminal:
1. `git add .`
2. `git commit -m "Finalizing professional marketplace with Env Vars"`
3. `git push origin main`

## 🌐 Step 2: Deploy to Vercel
1. Log in to [Vercel](https://vercel.com) using your GitHub account.
2. Click **"Add New"** > **"Project"**.
3. Import your repository.
4. **IMPORTANT:** Before clicking Deploy, open the **Environment Variables** section and add the keys from the table above.
5. Set **Framework Preset** to **"Other"**.
6. Click **"Deploy"**.

## 📱 Step 3: View the Project
- **Website:** Vercel will provide a URL like `naija-sell-and-earn.vercel.app`.
- **Mobile View:** The UI is "Mobile-First" and will automatically look like a professional mobile app when opened on a phone!

---

## 💰 Payment Logic Reminder
The system is designed for automatic splits:
- **90%:** To the Product Owner.
- **5%:** To you (Okewu Samuel Owoicho) as the Platform Admin.
- **5%:** To the Seller as an Affiliate Commission.
