const reasons = [
  {
    title: 'Esperienza Consolidata',
    description:
      'Oltre 15 anni di attività e centinaia di impianti installati con successo in abitazioni e aziende.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: 'Certificazioni',
    description:
      'Personale qualificato con certificazioni CEI, abilitazione DM 37/08 e formazione continua.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-3 3-3-3m0 6l3 3 3-3M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
      </svg>
    ),
  },
  {
    title: 'Materiali di Qualità',
    description:
      'Utilizziamo esclusivamente componenti dei migliori marchi con garanzia e certificazioni.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
      </svg>
    ),
  },
  {
    title: 'Assistenza Dedicata',
    description:
      'Supporto post-vendita, manutenzione programmata e interventi rapidi anche in emergenza.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section id="perche-sceglierci" className="py-20 bg-[#1a2035]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Perché Sceglierci</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white text-balance mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Esperienza, qualità e affidabilità
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Da oltre 15 anni siamo il punto di riferimento per impianti tecnologici in Centro Italia.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => (
            <article
              key={r.title}
              className="card-hover flex flex-col gap-4 rounded-xl bg-[#0d1117] p-6 border border-white/5"
            >
              <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 flex-shrink-0">
                {r.icon}
              </div>
              <h3
                className="font-bold text-lg text-white"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {r.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{r.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
