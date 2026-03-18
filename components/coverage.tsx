import Image from 'next/image'

const regions = [
  { name: 'Abruzzo', desc: 'Copertura completa della regione' },
  { name: 'Lazio', desc: 'Copertura completa della regione' },
  { name: 'Marche', desc: 'Copertura completa della regione' },
  { name: 'Umbria', desc: 'Copertura completa della regione' },
]

function PinIcon() {
  return (
    <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

export default function Coverage() {
  return (
    <section id="copertura" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex-1 w-full">
            <p className="section-label justify-start">
              <span>Copertura</span>
            </p>
            <h2
              className="text-3xl sm:text-4xl font-extrabold text-white text-balance mt-2 mb-2"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Operiamo in{' '}
              <span className="relative inline-block">
                Centro Italia
                <span
                  className="absolute bottom-0 left-0 w-full h-1 bg-orange-500 rounded-full"
                  aria-hidden="true"
                />
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed mt-6">
              PARISSE IMPIANTI offre i propri servizi in Abruzzo, Lazio, Marche e Umbria. Raggiungiamo
              sia i capoluoghi di provincia che i centri minori, garantendo tempi di intervento rapidi e
              assistenza professionale su tutto il territorio.
            </p>
            <p className="text-gray-400 leading-relaxed mt-4">
              Che tu abbia bisogno di un impianto elettrico per la tua abitazione, di un sistema
              fotovoltaico per l&apos;azienda o di un impianto di sicurezza per il tuo negozio, siamo
              pronti a raggiungerti con esperienza e professionalità.
            </p>

            {/* Region grid */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className="flex items-start gap-3 rounded-xl bg-[#161b2e] border border-white/5 p-4"
                >
                  <span className="text-orange-500 mt-0.5">
                    <PinIcon />
                  </span>
                  <div>
                    <h3
                      className="font-bold text-white text-sm"
                      style={{ fontFamily: 'var(--font-montserrat)' }}
                    >
                      {r.name}
                    </h3>
                    <p className="text-gray-500 text-xs mt-0.5">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(249,115,22,0.2)] border border-orange-500/20">
              <Image
                src="/images/tecnici-cantiere.jpg"
                alt="Tecnici Parisse Impianti al lavoro su cantiere in Centro Italia"
                width={600}
                height={500}
                loading="lazy"
                className="w-full h-auto object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/10">
                <p className="text-xs text-gray-400">Attivi dal</p>
                <p
                  className="text-2xl font-black text-orange-500"
                  style={{ fontFamily: 'var(--font-montserrat)' }}
                >
                  2008
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
