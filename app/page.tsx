import type { Metadata } from 'next'
import Navbar from '@/components/navbar'

export const metadata: Metadata = {
  title: 'Parisse Impianti | Impianti Elettrici, Fotovoltaico e Domotica in Abruzzo',
  description: 'Progettiamo e installiamo impianti elettrici, fotovoltaici, domotica, sicurezza e climatizzazione in Abruzzo, Lazio, Marche e Umbria. Qualità certificata e preventivo gratuito.',
}
import Hero from '@/components/hero'
import Slideshow from '@/components/slideshow'
import Services from '@/components/services'
import WhyUs from '@/components/why-us'
import Partners from '@/components/partners'
import Coverage from '@/components/coverage'
import CTA from '@/components/cta'
import Footer from '@/components/footer'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Parisse Impianti',
  description:
    'Impianti elettrici, fotovoltaici, domotica, antifurto e climatizzazione in Centro Italia',
  url: 'https://www.parisseimpianti.it',
  telephone: '+393387447981',
  email: 'info@parisseimpianti.it',
  foundingDate: '2008',
  areaServed: ['Abruzzo', 'Lazio', 'Marche', 'Umbria'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servizi Impianti',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impianti Elettrici' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Impianti Fotovoltaici' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Domotica' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sistemi Antifurto' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Videosorveglianza' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Climatizzazione' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Automazioni' } },
    ],
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Slideshow />
        <Services />
        <WhyUs />
        <Partners />
        <Coverage />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
