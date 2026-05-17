import type { Metadata } from 'next'
import ServiceDetailTemplate, { ServiceData } from '@/components/service-detail-template'

export const metadata: Metadata = {
  title: 'Impianti di Climatizzazione e Pompe di Calore | Parisse Impianti',
  description: 'Installazione climatizzatori e pompe di calore ad alta efficienza in Abruzzo. Daikin e brand leader. Preventivo gratuito.',
  alternates: {
    canonical: 'https://parisseimpianti.it/servizi/climatizzazione',
  },
}

const serviceData: ServiceData = {
  slug: 'climatizzazione',
  title: 'Impianti di Climatizzazione',
  subtitle: 'Installazione e manutenzione climatizzatori e pompe di calore ad alta efficienza energetica.',
  description: [
    'La climatizzazione moderna garantisce il comfort ideale in ogni stagione, estate e inverno. Parisse Impianti installa climatizzatori e pompe di calore delle migliori marche per abitazioni, uffici e attività commerciali.',
    'Le pompe di calore rappresentano la soluzione più efficiente per riscaldare e raffrescare gli ambienti, con consumi ridotti fino al 70% rispetto ai sistemi tradizionali. Offriamo soluzioni mono-split e multi-split per ogni esigenza.',
    'Il nostro servizio include la consulenza per la scelta del sistema più adatto, l\'installazione professionale e la manutenzione periodica. Siamo abilitati alla gestione dei gas refrigeranti secondo la normativa F-Gas.',
  ],
  features: [
    'Pompe di calore',
    'Climatizzatori inverter',
    'Riscaldamento e raffrescamento',
    'Basso consumo energetico',
    'Certificazione F-Gas (operatori abilitati)',
    'Assistenza e manutenzione',
  ],
  image: '/images/slide-5-climatizzazione.jpg',
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
      title: 'Impianti Fotovoltaici',
      description: 'Installazione pannelli solari per privati e aziende.',
      href: '/servizi/impianti-fotovoltaici',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
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
  ],
}

export default function ClimatizzazionePage() {
  return <ServiceDetailTemplate service={serviceData} />
}
