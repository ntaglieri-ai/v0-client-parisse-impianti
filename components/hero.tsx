import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id="hero"
      role="banner"
      className="relative bg-[#0d1117] overflow-x-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-solar.jpg"
          alt="Installazione impianti fotovoltaici Parisse Impianti"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1117] via-[#0d1117]/80 to-transparent" />
      </div>

      {/* Decorative circles - desktop only */}
      <div aria-hidden="true" className="hidden md:block absolute top-1/4 right-10 w-72 h-72 rounded-full bg-orange-500/10 blur-3xl pointer-events-none" />
      <div aria-hidden="true" className="hidden md:block absolute bottom-1/4 left-10 w-56 h-56 rounded-full bg-orange-500/8 blur-3xl pointer-events-none" />

      {/* ── MOBILE layout (hidden on md+) ── */}
      <div
        className="md:hidden relative z-10 flex flex-col justify-between pt-16"
        style={{ minHeight: '100svh', padding: '60px 24px 60px 24px' }}
      >
        {/* Top: title + subtitle */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
          <h1
            className="text-white font-black w-full text-[2.2rem] leading-[1.47] md:text-5xl lg:text-6xl xl:text-7xl md:leading-[1.27]"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900, marginTop: '-10px' }}
          >
            <span className="block">Impianti fotovoltaici,</span>
            <span className="block">elettrici e sistemi tecnologici</span>
            <span className="text-orange-500">per abitazioni e aziende</span>
          </h1>
          <p className="text-gray-400 w-full text-left" style={{ fontSize: '1rem', lineHeight: 1.6, marginTop: '20px' }}>
            Progettiamo e installiamo impianti elettrici, fotovoltaici, domotica, sistemi di sicurezza
            e climatizzazione in Abruzzo, Lazio, Marche e Umbria. Qualità certificata e assistenza dedicata.
          </p>
        </div>

        {/* Bottom: button pinned */}
        <div style={{ display: 'flex', flexDirection: 'column', paddingBottom: '20px', marginTop: '10px' }}>
          <Link
            href="#contatti"
            aria-label="Richiedi preventivo gratuito a Parisse Impianti"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
            style={{ width: '100%', height: '56px', fontSize: '1rem' }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Richiedi preventivo gratuito
          </Link>
        </div>
      </div>

      {/* ── DESKTOP layout (hidden on mobile) ── */}
      <div className="hidden md:flex items-center min-h-[100svh] relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 pt-32">
        <div className="max-w-4xl text-left">
          <p
            className="font-black text-5xl md:text-6xl lg:text-7xl text-white w-full"
            style={{ fontFamily: 'var(--font-montserrat)', lineHeight: 1.27 }}
            aria-hidden="true"
          >
            <span className="block">Impianti fotovoltaici,</span>
            <span className="block">elettrici e sistemi tecnologici</span>
            <span className="block text-orange-500">per abitazioni e aziende</span>
          </p>
          <p className="text-gray-400 max-w-xl mt-6 text-lg leading-relaxed">
            Progettiamo e installiamo impianti elettrici, fotovoltaici, domotica, sistemi di sicurezza
            e climatizzazione in Abruzzo, Lazio, Marche e Umbria. Qualità certificata e assistenza dedicata.
          </p>
          <div className="mt-8">
            <Link
              href="#contatti"
              aria-label="Richiedi preventivo gratuito a Parisse Impianti"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-orange-500 text-white font-semibold text-sm hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Richiedi preventivo gratuito
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator - desktop only */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scopri</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" aria-hidden="true" />
      </div>
    </section>
  )
}
