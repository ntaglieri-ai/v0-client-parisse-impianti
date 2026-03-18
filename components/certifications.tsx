const certs = [
  {
    title: 'Certificazione CEI',
    description: 'Conformità alle normative del Comitato Elettrotecnico Italiano',
  },
  {
    title: 'Qualifica PES/PAV',
    description: 'Personale esperto e avvertito per lavori elettrici',
  },
  {
    title: 'Abilitazione DM 37/08',
    description: 'Abilitazione ministeriale per installazione impianti elettrici',
  },
  {
    title: 'Installatore Autorizzato',
    description: 'Partner certificato dei principali produttori',
  },
]

export default function Certifications() {
  return (
    <section id="certificazioni" className="py-20 bg-[#161b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">Qualifiche e Certificazioni</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white text-balance mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Professionalità certificata
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Le nostre qualifiche garantiscono installazioni a regola d&apos;arte e conformi alle normative.
          </p>
        </div>

        {/* 2x2 grid horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {certs.map((cert) => (
            <article
              key={cert.title}
              className="card-hover flex items-start gap-4 rounded-xl bg-[#1a2035] border border-white/5 p-6"
            >
              {/* Orange square icon */}
              <div
                className="w-12 h-12 rounded-lg bg-orange-500 flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3
                  className="font-bold text-white text-base mb-1"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{cert.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
