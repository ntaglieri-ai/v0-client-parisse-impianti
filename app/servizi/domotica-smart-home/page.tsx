import type { Metadata } from 'next'
import ServiceDetailTemplate, { ServiceData } from '@/components/service-detail-template'

export const metadata: Metadata = {
  title: 'Domotica e Smart Home in Abruzzo | Parisse Impianti',
  description: 'Sistemi domotici per abitazioni intelligenti. Controllo luci, climatizzazione e sicurezza da smartphone. Installazione professionale in Abruzzo, Lazio, Marche e Umbria.',
  alternates: {
    canonical: 'https://parisseimpianti.it/servizi/domotica-smart-home',
  },
}

const serviceData: ServiceData = {
  slug: 'domotica-smart-home',
  title: 'Domotica e Smart Home',
  subtitle: 'Controllo luci, clima, sicurezza e irrigazione da smartphone. Integrazione con Alexa e Google Home.',
  description: [
    'La domotica trasforma la tua abitazione in un ambiente intelligente dove comfort, sicurezza ed efficienza energetica si integrano perfettamente. Con Parisse Impianti puoi controllare ogni aspetto della tua casa da smartphone, tablet o comandi vocali.',
    'Progettiamo sistemi personalizzati per la gestione di illuminazione, climatizzazione, tapparelle, irrigazione e sicurezza. Tutti i dispositivi comunicano tra loro creando scenari automatizzati che si adattano alle tue abitudini quotidiane.',
    'I nostri impianti sono compatibili con i principali assistenti vocali come Alexa e Google Home, permettendoti di controllare la casa anche quando sei fuori. Installiamo sia soluzioni wireless che cablate, in base alle caratteristiche dell\'immobile.',
  ],
  features: [
    'Controllo da remoto',
    'Risparmio energetico',
    'Integrazione vocale',
    'Scenari automatizzati',
    'Compatibile iOS e Android',
  ],
  image: '/images/slide-3-domotica.jpg',
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
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
      title: 'Sistemi Antifurto',
      description: 'Protezione professionale per la tua famiglia e i tuoi beni.',
      href: '/servizi/sistemi-antifurto',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Videosorveglianza',
      description: 'Telecamere HD/4K con visione notturna e accesso remoto.',
      href: '/servizi/videosorveglianza',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
    },
  ],
}

export default function DomoticaSmartHomePage() {
  return <ServiceDetailTemplate service={serviceData} />
}
