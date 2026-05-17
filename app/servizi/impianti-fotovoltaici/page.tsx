import type { Metadata } from 'next'
import ServiceDetailTemplate, { ServiceData } from '@/components/service-detail-template'

export const metadata: Metadata = {
  title: 'Impianti Fotovoltaici in Abruzzo | Parisse Impianti',
  description: 'Installazione pannelli solari per privati e aziende in Abruzzo, Lazio, Marche e Umbria. Sistemi di accumulo, monitoraggio e incentivi fiscali. Preventivo gratuito.',
  alternates: {
    canonical: 'https://parisseimpianti.it/servizi/impianti-fotovoltaici',
  },
}

const serviceData: ServiceData = {
  slug: 'impianti-fotovoltaici',
  title: 'Impianti Fotovoltaici',
  subtitle: 'Installazione pannelli solari per privati e aziende. Sistemi di accumulo, monitoraggio produzione e incentivi fiscali.',
  description: [
    'Il fotovoltaico è la scelta più intelligente per ridurre i costi energetici e contribuire alla sostenibilità ambientale. Parisse Impianti progetta e installa impianti fotovoltaici personalizzati per abitazioni, aziende e strutture pubbliche.',
    'Utilizziamo pannelli di ultima generazione con elevata efficienza e sistemi di accumulo per massimizzare l\'autoconsumo. Grazie alle app di monitoraggio, potrai controllare in tempo reale la produzione e i consumi del tuo impianto.',
    'Ti supportiamo anche nella gestione delle pratiche per accedere agli incentivi fiscali e alle detrazioni previste dalla normativa vigente. Il nostro team ti accompagna dalla consulenza iniziale fino alla manutenzione post-installazione.',
  ],
  features: [
    'Pannelli alta efficienza',
    'Sistemi di accumulo',
    'Monitoraggio da app',
    'Incentivi e detrazioni fiscali',
    'Manutenzione inclusa',
  ],
  image: '/images/hero-solar.jpg',
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  ),
  relatedServices: [
    {
      title: 'Impianti Elettrici',
      description: 'Progettazione e realizzazione impianti civili e industriali.',
      href: '/servizi/impianti-elettrici',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Domotica e Smart Home',
      description: 'Trasforma la tua casa in un ambiente intelligente e connesso.',
      href: '/servizi/domotica-smart-home',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: 'Climatizzazione',
      description: 'Climatizzatori e pompe di calore ad alta efficienza energetica.',
      href: '/servizi/climatizzazione',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ],
}

export default function ImpiantiFotovoltaiciPage() {
  return <ServiceDetailTemplate service={serviceData} />
}
