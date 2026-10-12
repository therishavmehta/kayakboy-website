import { Plus_Jakarta_Sans, Bricolage_Grotesque } from 'next/font/google';
import { FAQS } from '../data/courses';
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
  // Comprehensive JSON-LD Structured Data Schema for WebSite, SportsActivityLocation & FAQPage
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://www.kayakboy.in/#website',
        url: 'https://www.kayakboy.in',
        name: 'KayakBoy Surf Club & River Expeditions',
        description: 'Mulki’s premier Surf School & Kayak Club on River Shambhavi. Learn surfing in warm waist-deep water, paddle calm river backwaters, overnight camping & pro sea kayaking.',
        publisher: {
          '@id': 'https://www.kayakboy.in/#organization'
        },
        inLanguage: 'en-IN'
      },
      {
        '@type': ['SportsActivityLocation', 'SportsClub'],
        '@id': 'https://www.kayakboy.in/#organization',
        name: 'KayakBoy Surf Club & River Expeditions',
        alternateName: ['KayakBoy Mulki', 'Mulki Sports & Adventure School Pvt Ltd'],
        legalName: 'Mulki Sports & Adventure School Pvt Ltd',
        url: 'https://www.kayakboy.in',
        logo: {
          '@type': 'ImageObject',
          url: 'https://www.kayakboy.in/assets/kayakboy_logo.png'
        },
        image: 'https://www.kayakboy.in/assets/five_days_surfing.jpg',
        description: 'Premier surf school and flatwater kayak club on River Shambhavi in Mulki, Karnataka offering 1-day, 3-day, and 5-day surf courses, river camping, wake surfing, bioluminescence tours, and pro sea kayaking.',
        telephone: '+91-8722846295',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'River Shambhavi, Near National Highway 66',
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
        currenciesAccepted: 'INR',
        paymentAccepted: 'UPI, Online Booking (Cashless)',
        founder: {
          '@type': 'Person',
          name: 'Sushant',
          jobTitle: 'Founder & Head Coach',
          description: 'Malabar River Fest medalist and expedition kayaker'
        },
        sameAs: [
          'https://bookingsutra.com/kayakboy-surf-club',
          'https://instagram.com/mulki.in',
          'https://instagram.com/kayak.boy',
          'https://www.thebetterindia.com/143017/kayakboy-startup-bihar-karnataka/',
          'https://bangaloremirror.indiatimes.com/bangalore/others/dream-run-on-a-kayak-27-year-old-sushant-wraps-up-eight-day-expedition-through-coastal-karnataka/articleshow/64310165.cms',
          'https://timesofindia.indiatimes.com/city/mangaluru/from-karwar-to-kudla-he-came-in-a-kayak/articleshow/64243268.cms',
          'https://lbb.in/bangalore/mulki-adventure-school-karnataka/'
        ],
        amenityFeature: [
          { '@type': 'LocationFeatureSpecification', name: 'Ice Bath Recovery Pool', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Surf Fitness Gym', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Skate Ramp', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'High-speed Fiber Wi-Fi Co-working Space', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Sand Volleyball Court', value: true },
          { '@type': 'LocationFeatureSpecification', name: 'Air-conditioned Dormitories and Private Rooms', value: true }
        ],
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
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s2b300pcqfjvkowp1421'
          },
          {
            '@type': 'Offer',
            name: '3-Day Beginner Surfing, Stay + Wellness',
            price: '7100',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8rwf3000hqfjvqpehe3kz'
          },
          {
            '@type': 'Offer',
            name: '5-Day Surfing, Stay + Wellness',
            price: '11000',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8ryqp00awqfjv3hkls8k7'
          },
          {
            '@type': 'Offer',
            name: '7-Day Surfing, Stay + Wellness',
            price: '15500',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s0u600l7qfjvutfe7gqt'
          },
          {
            '@type': 'Offer',
            name: 'Mulki 1-Hour Backwater Kayak Tour',
            price: '400',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s3av00qzqfjvyyu7zvp8'
          },
          {
            '@type': 'Offer',
            name: 'Wake Surfing using Motorboat',
            price: '885',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s56o00z2qfjvie2yez8f'
          },
          {
            '@type': 'Offer',
            name: 'Bioluminescence Kayaking',
            price: '750',
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
            url: 'https://bookingsutra.com/kayakboy-surf-club/events/cmuy8s60c00z5qfjvv3421saj'
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': 'https://www.kayakboy.in/#faq',
        mainEntity: FAQS.map(faq => ({
          '@type': 'Question',
          name: faq.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.a
          }
        }))
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
