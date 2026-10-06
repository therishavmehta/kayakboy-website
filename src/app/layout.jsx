import { Plus_Jakarta_Sans, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
});

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['600', '700', '800'],
});

export const metadata = {
  metadataBase: new URL('https://www.kayakboy.in'),
  title: {
    default: 'KayakBoy Surf Club & River Expeditions | Mulki, Karnataka',
    template: '%s | KayakBoy Surf Club'
  },
  description: 'Mulki’s premier Surf School & Kayak Club on River Shambhavi. Learn surfing in warm waist-deep water, paddle calm river backwaters, overnight camping & pro sea kayaking.',
  keywords: [
    'surfing mulki',
    'surf school karnataka',
    'kayakboy',
    'kayakboy mulki',
    'river shambhavi kayaking',
    'mangalore surfing',
    'udupi surfing',
    'learn to surf india',
    'sea kayaking india',
    'kayak camping mulki'
  ],
  authors: [{ name: 'Sushant (KayakBoy)', url: 'https://www.kayakboy.in' }],
  creator: 'KayakBoy',
  publisher: 'Mulki Sports & Adventure School Pvt Ltd',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'KayakBoy Surf Club & River Expeditions | Mulki, Karnataka',
    description: 'Surf warm waves. Paddle calm rivers. Stay by the water at Mulki, Karnataka. Over 2,000 surfers coached.',
    url: 'https://www.kayakboy.in',
    siteName: 'KayakBoy Surf Club',
    images: [
      {
        url: '/assets/five_days_surfing.jpg',
        width: 1200,
        height: 630,
        alt: 'Surfing at KayakBoy Surf Club Mulki',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KayakBoy Surf Club & River Expeditions | Mulki',
    description: 'Surf warm waves, paddle calm rivers, and stay by River Shambhavi in Mulki, Karnataka.',
    images: ['/assets/five_days_surfing.jpg'],
  },
  icons: {
    icon: [
      { url: '/assets/kayakboy_logo.png', type: 'image/png' },
    ],
    apple: [
      { url: '/assets/kayakboy_logo.png' },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  // JSON-LD Structured Data Schema for LocalBusiness & SportsActivityLocation
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'SportsClub'],
    name: 'KayakBoy Surf Club & River Expeditions',
    alternateName: 'Mulki Sports & Adventure School Pvt Ltd',
    url: 'https://www.kayakboy.in',
    logo: 'https://www.kayakboy.in/assets/kayakboy_logo.png',
    image: 'https://www.kayakboy.in/assets/five_days_surfing.jpg',
    description: 'Premier surf school and flatwater kayak club in Mulki, Karnataka offering 1-day, 3-day, and 5-day surf courses, river camping, and sea kayaking.',
    telephone: '+91-8722846295',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'River Shambhavi, Near National Highway',
      addressLocality: 'Mulki',
      addressRegion: 'Karnataka',
      postalCode: '574154',
      addressCountry: 'IN'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.0903',
      longitude: '74.7925'
    },
    hasMap: 'https://maps.app.goo.gl/meHJH5jFaAwCADLz5',
    priceRange: '₹₹',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '06:00',
        closes: '22:30'
      }
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: '1-Day Introductory Surf Lesson',
        price: '1750',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.kayakboy.in/#surfing'
      },
      {
        '@type': 'Offer',
        name: '3-Day Beginner Surfing, Stay + Wellness',
        price: '7100',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.kayakboy.in/#surfing'
      },
      {
        '@type': 'Offer',
        name: '5-Day Complete Surf Immersion Course',
        price: '11000',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.kayakboy.in/#surfing'
      },
      {
        '@type': 'Offer',
        name: 'River Shambhavi Island Kayaking Tour',
        price: '500',
        priceCurrency: 'INR',
        availability: 'https://schema.org/InStock',
        url: 'https://www.kayakboy.in/#kayaking'
      }
    ]
  };

  return (
    <html lang="en" className={`${plusJakarta.variable} ${bricolage.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-[#FAF8F5] text-[#1A1D20]">
        {children}
      </body>
    </html>
  );
}
