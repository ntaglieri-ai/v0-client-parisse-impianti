import ServiceDetailTemplate, { ServiceData } from '@/components/service-detail-template'

const serviceData: ServiceData = {
  slug: 'sistemi-antifurto',
  title: 'Sistemi Antifurto',
  subtitle: 'Impianti antintrusione con sensori perimetrali, volumetrici, contatti magnetici e collegamento a centrale operativa.',
  description: [
    'Un sistema antifurto professionale è la prima linea di difesa per proteggere la tua famiglia e i tuoi beni. Parisse Impianti progetta e installa impianti di allarme su misura per abitazioni, uffici, negozi e capannoni industriali.',
    'Utilizziamo sensori perimetrali, volumetrici e contatti magnetici di ultima generazione per garantire una protezione completa. I nostri sistemi possono essere collegati a centrali operative di vigilanza per un intervento immediato in caso di intrusione.',
    'Grazie alle app dedicate, puoi controllare lo stato del tuo impianto in tempo reale, ricevere notifiche push in caso di allarme e gestire gli accessi anche quando sei lontano da casa. Offriamo soluzioni sia wireless che filari.',
  ],
  features: [
    'Sensori perimetrali e volumetrici',
    'Allarme sonoro e silenzioso',
    'App di controllo',
    'Collegamento istituti di vigilanza',
    'Sistemi certificati',
  ],
  image: '/images/slide-4-sorveglianza.jpg',
  icon: (
    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  relatedServices: [
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
      title: 'Automazioni e Cancelli',
      description: 'Motorizzazione cancelli e basculanti con controllo da smartphone.',
      href: '/servizi/automazioni-cancelli',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ],
}

export default function SistemiAntifurtoPage() {
  return <ServiceDetailTemplate service={serviceData} />
}
