import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      role="banner"
      className="relative flex items-center min-h-screen bg-[#0d1117] overflow-hidden pt-16"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Installazione impianti fotovoltaici Parisse Impianti"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent" />
      </div>

      {/* Decorative orange blurred circles */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 right-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-orange-500/8 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="max-w-2xl lg:max-w-4xl">
          {/* Removed: Badge */}

          <h1
            className="font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight text-white"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            <span className="block">Impianti fotovoltaici,</span>
            <span className="block">elettrici e sistemi tecnologici</span>
            <span className="block text-orange-500">per abitazioni e aziende</span>
          </h1>

          <p className="text-gray-400 max-w-xl mt-6 text-base sm:text-lg leading-relaxed">
            Progettiamo e installiamo impianti elettrici, fotovoltaici, domotica, sistemi di sicurezza
            e climatizzazione in Abruzzo, Lazio, Marche e Umbria. Qualità certificata e assistenza
            dedicata.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="#contatti"
              aria-label="Richiedi preventivo gratuito a Parisse Impianti"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] min-h-[44px]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Richiedi preventivo gratuito
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scopri</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
      </div>
    </section>
  )
}
