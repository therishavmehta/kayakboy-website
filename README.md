# KayakBoy Surf Club & River Expeditions — Next.js Website

A high-performance web platform for **KayakBoy Surf Club** in Mulki, Karnataka. Built with **Next.js 15 (App Router)** for maximum SEO visibility, fast loading times, Google rich snippets, and ready for instant deployment on **Coolify** using Docker.

All activities and bookings are directly integrated with [BookingSutra - Kayakboy Surf Club](https://bookingsutra.com/kayakboy-surf-club).

---

## 🏄 Active Offerings & Programs

### 1. Surfing Lessons & Stays
* **Surfing: 1 Day Introductory Surf Lesson**: ₹1,750 (₹750 advance + ₹1,000 on spot) — 3 hr (1.5 hr water time)
* **3 Day Beginner Surfing, Stay + Wellness**: From ₹7,100 (₹1,500 advance) — 3 lessons + 2 nights stay
* **5 Days Surfing, Stay + Wellness**: From ₹11,000 (₹2,500 advance) — 5 lessons + 4 nights stay
* **7 Days Surfing, Stay + Wellness**: From ₹15,500 (₹3,500 advance) — 7 lessons + 6 nights stay

### 2. River & Water Activities
* **Mulki 1-Hour Kayak Tour**: ₹400 standard (₹100 advance) • ₹300 student special with ID
* **Wake Surfing using Motorboat**: ₹885 (₹200 advance) — 15 min land lesson + 15 min water time
* **Bioluminescence Kayaking**: ₹750 (₹250 advance + ₹500 on spot) — Seasonal night tour (Jan–Apr)

### 3. Pro Sea Kayaking Academy
* 4-level whitewater & sea kayak curriculum led by founder Sushant (Malabar River Fest medalist): Level 1, Level 2 (eskimo roll), Level 3, and Masterclass.

### 4. Surf Campus Amenities
* Ice bath recovery pool (daily 11:30 AM – 1:30 PM)
* Surf fitness gym, skate ramp, volleyball court
* Shaded riverside co-working space with high-speed fiber Wi-Fi

---

## 🛠️ Tech Stack & SEO

- **Next.js 15 (App Router)** with Server-Side Rendering (SSR) & Static Site Generation (SSG)
- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **Lucide Icons**
- **Schema.org JSON-LD** structured data (`SportsActivityLocation`, `SportsClub`, `OfferCatalog`)
- **Dynamic XML Sitemap** (`/sitemap.xml`) & **Robots.txt** (`/robots.txt`)
- **Docker Standalone Build** (`output: 'standalone'`) for minimal container footprint (~120 MB)

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
pnpm install
```

### 2. Run local development server
```bash
pnpm dev
```
Open [http://localhost:3000](http://localhost:3000) to view the site.

### 3. Build for production
```bash
pnpm build
```

---

## 🐳 Coolify Deployment

Refer to [`COOLIFY.md`](./COOLIFY.md) for step-by-step instructions on deploying to Coolify using the included multi-stage `Dockerfile`.
