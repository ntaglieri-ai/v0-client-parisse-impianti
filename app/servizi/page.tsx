import Link from 'next/link'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

const services = [
  {
    title: 'Impianti Elettrici',
    description: 'La realizzazione di un impianto elettrico richiede competenza tecnica, precisione e rispetto delle normative.',
    href: '/servizi/impianti-elettrici',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Impianti Fotovoltaici',
    description: 'Il fotovoltaico è la scelta più intelligente per ridurre i costi energetici e contribuire alla sostenibilità.',
    href: '/servizi/impianti-fotovoltaici',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Domotica e Smart Home',
    description: 'La domotica trasforma la tua abitazione in un ambiente intelligente dove comfort e sicurezza si integrano.',
    href: '/servizi/domotica-smart-home',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Sistemi Antifurto',
    description: 'Un sistema antifurto professionale è la prima linea di difesa per proteggere la tua famiglia e i tuoi beni.',
    href: '/servizi/sistemi-antifurto',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Sistemi di Videosorveglianza',
    description: 'Un sistema di videosorveglianza offre sicurezza, tranquillità e monitoraggio costante della tua proprietà.',
    href: '/servizi/videosorveglianza',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Impianti di Climatizzazione',
    description: 'Climatizzazione moderna per il comfort ideale estate e inverno, con pompe di calore ad alta efficienza.',
    href: '/servizi/climatizzazione',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Automazioni e Cancelli',
    description: 'Automazioni per cancelli e basculanti per migliorare il comfort e la sicurezza della tua proprietà.',
    href: '/servizi/automazioni-cancelli',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

export default function ServiziPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d1117] min-h-screen pt-16">
        {/* Hero section */}
        <section className="py-20 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="section-label">I Nostri Servizi</p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Soluzioni complete per{' '}
              <span className="text-orange-500">impianti tecnologici</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
              Dalla progettazione all&apos;installazione, offriamo servizi professionali per ogni esigenza impiantistica.
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section className="pb-20 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top row: 4 cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
              {services.slice(0, 4).map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
            {/* Bottom row: 3 cards centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {services.slice(4).map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ServiceCard({
  title,
  description,
  href,
  icon,
}: {
  title: string
  description: string
  href: string
  icon: React.ReactNode
}) {
  return (
    <div className="rounded-2xl bg-[#1a2235] border border-white/5 p-6 flex flex-col h-full card-hover">
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
        {icon}
      </div>
      {/* Title */}
      <h3
        className="text-lg font-bold text-white mb-2"
        style={{ fontFamily: 'var(--font-montserrat)' }}
      >
        {title}
      </h3>
      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      {/* Link */}
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors group"
      >
        Scopri di più
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  )
}
