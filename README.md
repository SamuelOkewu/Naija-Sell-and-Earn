
# Naija Sell and Earn

A professional Nigerian commission-based resale marketplace for Suppliers (Owners), Affiliates (Sellers), and Admins.

## Project Structure
- **Website**: Built with React, TypeScript, and Tailwind CSS.
- **Mobile App**: Designed to share the same logic, to be built with React Native.

## Developer Info
- **Name**: Okewu Samuel Owoicho
- **Email**: okewusamuelowoicho@gmail.com
- **Phone/WhatsApp**: +2349063676131
- **LinkedIn**: [www.linkedin.com/in/sammy1000](https://www.linkedin.com/in/sammy1000)

---

## Step-by-Step Instructions

### 1. How to View & Run the Website
Since you are using **GitHub Codespaces**:
1. Open your repository in GitHub Codespaces.
2. In the terminal, run: `npm install`
3. Then run: `npm start`
4. A popup will appear saying "A service is running on port 3000". Click **Open in Browser**.

### 2. How to Create the Mobile App (React Native)
Since you want two repositories, follow these steps to start the mobile app:
1. Create a new repository on GitHub named `naija-sell-mobile`.
2. Open it in a new Codespace.
3. Run: `npx react-native init NaijaSellApp --template react-native-template-typescript`
4. Copy the logic from the `types.ts`, `constants.tsx`, and `services/` from the Web repo to the Mobile repo.
5. Use `react-navigation` for mobile routing instead of `react-router-dom`.
6. Use `NativeBase` or `Styled Components` for mobile UI (Tailwind works via `nativewind`).

### 3. How to Deploy the Website on Vercel
1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** > **Project**.
3. Select your `naija-sell-web` repository.
4. Keep the default settings (Build Command: `npm run build`, Output Directory: `dist` or `build`).
5. Click **Deploy**.
6. Once finished, you will get a `.vercel.app` link.

---

## Features Implemented
- **Landing Page**: Professional hero section and automatic 3-second product slider.
- **Product Detail**: Real-time commission calculation and "Copy My Seller Link" functionality.
- **Admin Panel**: Management view for Okewu Samuel Owoicho to oversee payouts and system health.
- **Dashboards**: Dedicated views for Suppliers (Owners) and Affiliates (Sellers) with data visualization.
- **Checkout**: Mock split payment flow demonstrating the 90/5/5 split logic.

## Technical Notes
- **Payments**: Designed for Paystack/Flutterwave split API integration.
- **Auth**: Simulated multi-role authentication.
- **Styling**: Fully responsive Tailwind CSS layout.
