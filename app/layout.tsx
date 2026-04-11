import type { Metadata } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700', '800', '900'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Parisse Impianti | Impianti Elettrici, Fotovoltaico e Domotica in Abruzzo, Lazio, Marche e Umbria',
  description:
    'Parisse Impianti progetta e installa impianti elettrici, fotovoltaici, domotica, sistemi antifurto e climatizzazione in Abruzzo, Lazio, Marche e Umbria. Oltre 15 anni di esperienza. Richiedi un preventivo gratuito.',
  keywords:
    'impianti elettrici, fotovoltaico, domotica, antifurto, climatizzazione, videosorveglianza, Abruzzo, Lazio, Marche, Umbria, installatore certificato, DM 37/08',
  authors: [{ name: 'Parisse Impianti' }],
  robots: 'index, follow',
  alternates: { canonical: 'https://www.parisseimpianti.it/' },
  openGraph: {
    title: 'Parisse Impianti | Impianti Elettrici e Fotovoltaici in Centro Italia',
    description:
      'Progettiamo e installiamo impianti elettrici, fotovoltaici, domotica e sistemi di sicurezza in Abruzzo, Lazio, Marche e Umbria. Qualità certificata dal 2008.',
    url: 'https://www.parisseimpianti.it/',
    siteName: 'Parisse Impianti',
    locale: 'it_IT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parisse Impianti',
    description: 'Impianti elettrici, fotovoltaici e domotica in Centro Italia dal 2008.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${montserrat.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script type="text/javascript" src="https://embeds.iubenda.com/widgets/9202dd7e-eb5f-43d6-86f5-3e585bb99f77.js" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Parisse Impianti",
              "url": "https://www.parisseimpianti.it",
              "logo": "https://www.parisseimpianti.it/images/logo-ap.png",
              "image": "https://www.parisseimpianti.it/images/hero-solar.jpg",
              "description": "Progettazione e installazione impianti elettrici, fotovoltaici, domotica, sistemi di sicurezza e climatizzazione in Abruzzo, Lazio, Marche e Umbria.",
              "telephone": "+393387447981",
              "email": "info@parisseimpianti.it",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Via II Traversa delle Croci, 16",
                "addressLocality": "Pescina",
                "postalCode": "67057",
                "addressRegion": "AQ",
                "addressCountry": "IT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 41.8574,
                "longitude": 13.6597
              },
              "areaServed": ["Abruzzo", "Lazio", "Marche", "Umbria"],
              "foundingDate": "2008",
              "priceRange": "€€",
              "sameAs": []
            })
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0d1117" />
      </head>
      <body className="font-sans antialiased bg-[#0d1117] text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
