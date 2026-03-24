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
    <section id="copertura" className="py-20 bg-[#161b2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

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
                  className="flex items-start gap-3 rounded-xl bg-[#1a2035] border border-white/5 p-4"
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

          {/* Right: Dove siamo + Google Maps */}
          <div className="flex-1 w-full">
            {/* "Dove siamo" header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-orange-500">
                <PinIcon />
              </span>
              <h3
                className="text-lg font-bold text-white"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                Dove siamo
              </h3>
            </div>

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-orange-500/20 shadow-[0_0_40px_rgba(249,115,22,0.15)]">
              <iframe
                title="Mappa sede Parisse Impianti"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96163.94!2d13.4!3d42.35!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132fd9e4fad0168b%3A0x6c0e1def64c1b6b4!2sAbruzzo%2C%20Italia!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
                width="100%"
                height="420"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.85)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Mappa Google Maps - zona operativa Parisse Impianti in Centro Italia"
              />
            </div>

            {/* Address info below map */}
            <div className="mt-4 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 rounded-xl bg-[#1a2035] border border-white/5 px-4 py-3 flex items-center gap-3">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500">Telefono</p>
                  <a
                    href="tel:+393387447981"
                    className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    +39 338 744 7981
                  </a>
                </div>
              </div>
              <div className="flex-1 rounded-xl bg-[#1a2035] border border-white/5 px-4 py-3 flex items-center gap-3">
                <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a
                    href="mailto:info@parisseimpianti.it"
                    className="text-sm font-semibold text-white hover:text-orange-400 transition-colors"
                  >
                    info@parisseimpianti.it
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
