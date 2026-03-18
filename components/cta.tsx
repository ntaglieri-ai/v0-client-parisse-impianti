export default function CTA() {
  return (
    <section
      id="contatti"
      className="py-24 bg-gradient-to-b from-[#1a2035] to-[#0d1117] text-center"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="section-label">Contatti</p>

        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-balance mt-2"
          style={{ fontFamily: 'var(--font-montserrat)' }}
        >
          Richiedi un preventivo gratuito
        </h2>
        <p className="text-gray-400 mt-4 text-lg leading-relaxed max-w-xl mx-auto">
          Contattaci per un sopralluogo senza impegno. Ti forniremo una consulenza personalizzata e
          un preventivo dettagliato.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-10">
          <a
            href="mailto:info@parisseimpianti.it"
            aria-label="Invia email a Parisse Impianti"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] min-h-[44px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contattaci
          </a>

          <a
            href="tel:+393387447981"
            aria-label="Chiama Parisse Impianti al +39 338 744 7981"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] min-h-[44px]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +39 338 744 7981
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          {[
            'Sopralluogo gratuito',
            'Preventivo senza impegno',
            'Assistenza professionale',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
              <span className="flex-shrink-0 w-5 h-5 rounded-full bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
                <svg className="w-3 h-3 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
