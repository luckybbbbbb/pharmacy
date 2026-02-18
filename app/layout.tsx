import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AvicenaPlus Apoteka Novi Pazar | Lekovi, Vitamini, Zdravlje - Mur & Stara Iskra',
  description:
    'AvicenaPlus apoteka u Novom Pazaru sa 25 godina iskustva. Lekovi na recept i bez recepta, vitamini, suplementi, zdravstvene konsultacije. Dve lokacije: Mur br. 279 i Generala Živkovića (Stara Iskra, kod bolnice). Loyalty kartica sa popustima do 15%.',
  keywords: [
    'apoteka',
    'apoteka Novi Pazar',
    'AvicenaPlus',
    'Avicena Plus',
    'lekovi',
    'lekovi Novi Pazar',
    'vitamini',
    'suplementi',
    'zdravlje',
    'farmacija',
    'farmaceut',
    'apoteka Mur',
    'apoteka Stara Iskra',
    'apoteka kod bolnice',
    'apoteka centar',
    'lekovi na recept',
    'lekovi bez recepta',
    'zdravstvene konsultacije',
    'krvni pritisak',
    'dijabetes',
    'loyalty kartica',
    'popusti na lekove',
    'Novi Pazar',
    'Sandžak',
    'apoteka blizu mene',
    'dežurna apoteka Novi Pazar',
    'lekovi na recept Novi Pazar',
    'recept za lekove',
    'izdavanje lekova na recept',
    'apoteka recept',
  ],
  authors: [{ name: 'AvicenaPlus' }],
  creator: 'AvicenaPlus',
  publisher: 'AvicenaPlus',
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
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    siteName: 'AvicenaPlus Apoteka',
    title: 'AvicenaPlus Apoteka Novi Pazar | Lekovi, Vitamini, Zdravlje',
    description:
      'Vaš pouzdan zdravstveni partner u Novom Pazaru od 1999. Lekovi, vitamini, suplementi, zdravstvene konsultacije. Loyalty kartica sa popustima do 15%. Lokacije: Mur i Stara Iskra.',
    images: [
      {
        url: '/dark_logo_transparent_background.png',
        width: 800,
        height: 600,
        alt: 'AvicenaPlus Apoteka Novi Pazar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AvicenaPlus Apoteka Novi Pazar | Lekovi, Vitamini, Zdravlje',
    description:
      'Apoteka sa 25 godina iskustva u Novom Pazaru. Lekovi, vitamini, zdravstvene konsultacije. Loyalty kartica sa popustima do 15%.',
    images: ['/dark_logo_transparent_background.png'],
  },
  alternates: {
    canonical: 'https://pharmacy-nethermans-projects.vercel.app',
  },
  icons: {
    icon: '/dark_logo_transparent_background.png',
    shortcut: '/dark_logo_transparent_background.png',
    apple: '/dark_logo_transparent_background.png',
  },
  category: 'health',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Pharmacy',
  name: 'AvicenaPlus Apoteka',
  description:
    'Apoteka u Novom Pazaru sa 25 godina iskustva. Lekovi, vitamini, suplementi i zdravstvene konsultacije.',
  url: 'https://pharmacy-tau.vercel.app',
  logo: 'https://pharmacy-tau.vercel.app/dark_logo_transparent_background.png',
  image: 'https://pharmacy-tau.vercel.app/dark_logo_transparent_background.png',
  telephone: '+381-20-123-456',
  email: 'info@avicenaplus.rs',
  foundingDate: '1999',
  areaServed: {
    '@type': 'City',
    name: 'Novi Pazar',
  },
  address: [
    {
      '@type': 'PostalAddress',
      streetAddress: 'Mur br. 279',
      addressLocality: 'Novi Pazar',
      postalCode: '36300',
      addressCountry: 'RS',
    },
    {
      '@type': 'PostalAddress',
      streetAddress: 'Generala Živkovića',
      addressLocality: 'Novi Pazar',
      postalCode: '36300',
      addressCountry: 'RS',
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '20:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '08:00',
      closes: '16:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Sunday',
      opens: '09:00',
      closes: '14:00',
    },
  ],
  sameAs: ['https://instagram.com/avicenaplus'],
  priceRange: '$$',
  currenciesAccepted: 'RSD',
  paymentAccepted: 'Cash, Credit Card',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr">
      <head>
        <meta name="geo.region" content="RS-23" />
        <meta name="geo.placename" content="Novi Pazar" />
        <meta name="geo.position" content="43.1367;20.5122" />
        <meta name="ICBM" content="43.1367, 20.5122" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
