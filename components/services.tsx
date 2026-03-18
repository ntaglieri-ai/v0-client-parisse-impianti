const servicesRow1 = [
  {
    title: 'Impianti Elettrici',
    description:
      'La realizzazione di un impianto elettrico richiede competenza tecnica, precisione e rispetto delle normative.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Impianti Fotovoltaici',
    description:
      'Il fotovoltaico è la scelta più intelligente per ridurre i costi energetici e contribuire alla sostenibilità.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: 'Domotica e Smart Home',
    description:
      'La domotica trasforma la tua abitazione in un ambiente intelligente dove comfort e sicurezza si integrano.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Sistemi Antifurto',
    description:
      'Un sistema antifurto professionale è la prima linea di difesa per proteggere la tua famiglia e i tuoi beni.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

const servicesRow2 = [
  {
    title: 'Sistemi di Videosorveglianza',
    description:
      'Un sistema di videosorveglianza offre sicurezza, tranquillità e monitoraggio costante della tua proprietà.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868v6.264a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Impianti di Climatizzazione',
    description:
      'Climatizzazione moderna per il comfort ideale estate e inverno, con pompe di calore ad alta efficienza.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2M6.22 5.22l1.42 1.42m8.72 8.72l1.42 1.42M3 12h2m14 0h2M6.22 18.78l1.42-1.42M16.36 7.64l1.42-1.42M12 8a4 4 0 100 8 4 4 0 000-8z" />
      </svg>
    ),
  },
  {
    title: 'Automazioni e Cancelli',
    description:
      'Automazioni per cancelli e basculanti per migliorare il comfort e la sicurezza della tua proprietà.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

function ServiceCard({ title, description, icon }: { title: string; description: string; icon: React.ReactNode }) {
  return (
    <article className="card-hover flex flex-col gap-4 rounded-xl bg-[#1a2035] p-6 border border-white/5">
      <div className="w-14 h-14 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
        {icon}
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <h3
          className="font-bold text-lg text-white leading-snug"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed flex-1">{description}</p>
      </div>
      <a
        href="#contatti"
        aria-label={`Scopri di più su ${title}`}
        className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded self-start"
      >
        Scopri di più →
      </a>
    </article>
  )
}

export default function Services() {
  return (
    <section id="servizi" className="py-20 bg-[#161b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">I Nostri Servizi</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white text-balance mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Soluzioni complete per impianti tecnologici
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Dalla progettazione all&apos;installazione, offriamo servizi professionali per ogni esigenza impiantistica.
          </p>
        </div>

        {/* Row 1 — 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {servicesRow1.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* Row 2 — 3 cards centred */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {servicesRow2.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}
