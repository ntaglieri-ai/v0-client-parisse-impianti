import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      role="banner"
      className="relative flex items-start md:items-center min-h-[100svh] bg-[#0d1117] overflow-x-hidden pt-16"
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

      {/* Decorative orange blurred circles - hidden on mobile */}
      <div
        aria-hidden="true"
        className="hidden sm:block absolute top-1/4 right-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="hidden sm:block absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-orange-500/8 blur-3xl pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl md:mx-auto px-6 sm:px-6 lg:px-8 pt-8 pb-10 sm:py-20 overflow-x-hidden">
        <div className="w-full sm:max-w-2xl lg:max-w-4xl text-left">
          {/* Removed: Badge */}

          <h1
            className="font-black text-2xl sm:text-5xl md:text-6xl lg:text-7xl text-white w-full"
            style={{ fontFamily: 'var(--font-montserrat)', lineHeight: 1.15 }}
          >
            <span className="block sm:inline">Impianti fotovoltaici, </span>
            <span className="block sm:inline">elettrici e sistemi tecnologici </span>
            <span className="text-orange-500">per abitazioni e aziende</span>
          </h1>

          <p className="text-gray-400 w-full sm:max-w-xl mt-6 text-sm sm:text-lg leading-relaxed text-left">
            Progettiamo e installiamo impianti elettrici, fotovoltaici, domotica, sistemi di sicurezza
            e climatizzazione in Abruzzo, Lazio, Marche e Umbria. Qualità certificata e assistenza
            dedicata.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8">
            <Link
              href="#contatti"
              aria-label="Richiedi preventivo gratuito a Parisse Impianti"
              className="inline-flex items-center justify-center gap-2 px-6 rounded-full bg-orange-500 text-white font-semibold text-[15px] hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] h-[52px] w-full sm:w-auto sm:h-auto sm:py-3.5 sm:text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Richiedi preventivo gratuito
            </Link>

            <a
              href="tel:+393387447981"
              aria-label="Chiama Parisse Impianti"
              className="inline-flex items-center justify-center gap-2 px-6 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-[15px] hover:bg-white/10 hover:border-white/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] h-[52px] w-full sm:w-auto sm:h-auto sm:py-3.5 sm:text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Chiamaci ora
            </a>
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
