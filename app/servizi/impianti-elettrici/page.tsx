import type { Metadata } from 'next'
import ServiceDetailTemplate, { ServiceData } from '@/components/service-detail-template'

export const metadata: Metadata = {
  title: 'Impianti Elettrici Civili e Industriali | Parisse Impianti',
  description: 'Progettazione e realizzazione impianti elettrici conformi a norma CEI in Abruzzo e Centro Italia. Interventi rapidi e preventivo senza impegno.',
  alternates: {
    canonical: 'https://parisseimpianti.it/servizi/impianti-elettrici',
  },
}

const serviceData: ServiceData = {
  slug: 'impianti-elettrici',
  title: 'Impianti Elettrici',
  subtitle: 'Progettazione e realizzazione impianti civili e industriali con certificazione e conformità normativa.',
  description: [
    'La realizzazione di un impianto elettrico richiede competenza tecnica, precisione e rispetto delle normative vigenti. Parisse Impianti progetta e installa impianti elettrici per abitazioni private, uffici, negozi e strutture industriali.',
    'Utilizziamo materiali di alta qualità e tecnologie all\'avanguardia per garantire sicurezza, efficienza energetica e durabilità nel tempo. Ogni impianto viene progettato su misura in base alle esigenze specifiche del cliente.',
    'Dalla progettazione alla certificazione finale, seguiamo ogni fase del lavoro con attenzione ai dettagli e rispetto delle tempistiche concordate. Offriamo anche servizi di manutenzione ordinaria e straordinaria per mantenere i tuoi impianti sempre efficienti.',
  ],
  features: [
    'Progettazione su misura',
    'Conformità normative CEI',
    'Quadri elettrici',
    'Impianti industriali e civili',
    'Certificazione impianti',
  ],
  image: '/images/slide-2-quadro.jpg',
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  relatedServices: [
    {
      title: 'Impianti Fotovoltaici',
      description: 'Installazione pannelli solari per privati e aziende con sistemi di accumulo.',
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

export default function ImpiantiElettriciPage() {
  return <ServiceDetailTemplate service={serviceData} />
}
