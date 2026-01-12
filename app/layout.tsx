import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
});

export const metadata: Metadata = {
  title: 'Gemoya - Baby Spa Panggilan Jogja & Magelang | Pijat Bayi & Baby Spa Home Service',
  description: 'Baby Spa & Pijat Bayi panggilan terbaik di Jogja & Magelang. Terapis bersertifikat, peralatan steril, home service nyaman. Paket hemat mulai 100rb. Booking sekarang!',
  keywords: 'baby spa jogja, pijat bayi jogja, baby spa magelang, pijat bayi magelang, baby spa panggilan, baby massage jogja, baby spa home service, pijat bayi panggilan jogja, baby spa terdekat',
  authors: [{ name: 'Gemoya Baby Spa' }],
  creator: 'Gemoya Baby Spa',
  publisher: 'Gemoya Baby Spa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://gemoya.id'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Gemoya - Baby Spa Panggilan Jogja & Magelang',
    description: 'Baby Spa & Pijat Bayi panggilan terbaik di Jogja & Magelang. Terapis bersertifikat, home service nyaman. Booking sekarang!',
    url: 'https://gemoya.id',
    siteName: 'Gemoya Baby Spa',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gemoya Baby Spa - Baby Spa Panggilan Jogja & Magelang',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gemoya - Baby Spa Panggilan Jogja & Magelang',
    description: 'Baby Spa & Pijat Bayi panggilan terbaik di Jogja & Magelang',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="theme-color" content="#FADADD" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Gemoya Baby Spa",
              "image": "https://gemoya.id/images/logo.jpg",
              "@id": "https://gemoya.id",
              "url": "https://gemoya.id",
              "telephone": "+6285920255497",
              "priceRange": "Rp 100.000 - Rp 350.000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Home Service",
                "addressLocality": "Yogyakarta",
                "postalCode": "55000",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -7.7956,
                "longitude": 110.3695
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "08:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "09:00",
                  "closes": "17:00"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/banuababyspa"
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              }
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
