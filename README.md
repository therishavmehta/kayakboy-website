# KayakBoy Surf Club & River Expeditions — Next.js Website

A redesigned, high-performance web platform for **KayakBoy Surf Club** in Mulki, Karnataka, combining an authentic surfing club experience with preserved wilderness river kayaking heritage. Built with **Next.js 15 (App Router)** for maximum SEO visibility, Google rich snippets, and ready for instant deployment on **Coolify** with Docker.

---

## 🏄 Highlights

1. **Surfing Club Experience**:
   - **1-Day Introductory Surf Lesson**: ₹1,750 (₹750 advance + ₹1,000 on spot)
   - **3-Day Beginner Surfing, Stay + Wellness**: From ₹7,100 (Mixed Dorm & Private Room options)
   - **5-Day Complete Surf Immersion, Stay + Wellness**: From ₹11,000 (⭐ Flagship 100% Recommended Course)
   - Real-time details extracted from TicketShifu with transparent pricing.

2. **Wilderness River & Backwater Kayaking**:
   - **Island Paddle**: ₹500 (3-5 km, isolated island, swim dips, sunrise/sunset)
   - **Explore & Overnight Camp**: ₹2,700 (2D/1N, private 2-acre riverfront, campfire & pizza)
   - **Challenger 20 km Endurance**: ₹2,000 (Mulki to Palimar Dam, local riverside lunch)

3. **Pro Sea Kayaking Academy**:
   - 4-level curriculum led by founder Sushant (Malabar River Fest silver medalist): Level 1, Level 2 (eskimo rolls), Level 3, and Masterclass.

4. **Surf Campus & Clubhouse Amenities**:
   - Ice bath recovery pool (11:30 AM – 1:30 PM)
   - Surf fitness gym (2:00 PM – 8:00 PM)
   - Skate ramp & carver boards
   - Co-working lounge with high-speed Wi-Fi & power charging stations

5. **Integrated Modern Booking Engine (TicketShifu Migration Ready)**:
   - Interactive course & tier selector with instant breakdown of online advance deposit vs venue balance.
   - Date picker, time slots, guest counter.
   - One-click instant WhatsApp reservation voucher dispatch (+91 8722846295).
   - Direct link to TicketShifu event pages during the platform migration phase.

---

## 🛠️ Tech Stack & SEO

- **Next.js 15 (App Router)** with Server-Side Rendering (SSR/SSG)
- **Tailwind CSS v4** & PostCSS
- **Schema.org JSON-LD** structured data (`SportsActivityLocation`, `SportsClub`, `OfferCatalog`)
- **Dynamic XML Sitemap** (`/sitemap.xml`) & **Robots.txt** (`/robots.txt`)
- **Docker Standalone Build** (`output: 'standalone'`) for 1-click Coolify deployment

---

## 🚀 Quick Start

### 1. Install dependencies
```bash
pnpm install
# or: npm install
```

### 2. Run local development server
```bash
pnpm dev
# or: npm run dev
```

### 3. Build for production
```bash
pnpm build
# or: npm run build
```

### 4. Start production server
```bash
pnpm start
# or: npm start
```

---

## 🐳 Coolify Deployment

Refer to [`COOLIFY.md`](./COOLIFY.md) for step-by-step instructions on deploying to Coolify using the included multi-stage `Dockerfile`.
