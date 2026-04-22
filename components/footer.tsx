import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
  { label: 'Impianti Elettrici', href: '/servizi/impianti-elettrici' },
  { label: 'Fotovoltaico', href: '/servizi/impianti-fotovoltaici' },
  { label: 'Domotica', href: '/servizi/domotica-smart-home' },
  { label: 'Antifurto', href: '/servizi/sistemi-antifurto' },
  { label: 'Videosorveglianza', href: '/servizi/videosorveglianza' },
  { label: 'Climatizzazione', href: '/servizi/climatizzazione' },
  { label: 'Automazioni', href: '/servizi/automazioni-cancelli' },
]

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/#perche-sceglierci' },
  { label: 'Contatti', href: '/#contatti' },
]

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#0d1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="/"
              aria-label="Parisse Impianti - Torna alla home"
              className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded w-fit"
            >
              <Image
                src="/images/logo-ap.png"
                alt="Logo AP"
                width={52}
                height={52}
                className="w-13 h-13 object-contain flex-shrink-0"
                style={{ mixBlendMode: 'lighten' }}
              />
              <div className="flex flex-col leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>
                <span className="text-lg font-extrabold text-orange-500 tracking-wide">PARISSE</span>
                <span className="text-lg font-extrabold text-white tracking-wide">IMPIANTI</span>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soluzioni professionali per impianti tecnologici. Affidabilità, qualità e assistenza dal
              2008.
            </p>
          </div>

          {/* Col 2 — Servizi */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Servizi
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Azienda */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Azienda
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contatti */}
          <div>
            <h3
              className="text-white font-bold text-sm uppercase tracking-widest mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Contatti
            </h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-gray-400">
              <span className="text-white font-semibold">
                Ditta PARISSE IMPIANTI di Parisse Antonio
              </span>
              <span className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Via II Traversa delle Croci, 16<br />67057 Pescina (AQ)
              </span>
              <a
                href="tel:+393387447981"
                aria-label="Chiama Parisse Impianti"
                className="hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded flex items-center gap-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +39 338 744 7981
              </a>
              <a
                href="mailto:antonio.parisse@libero.it"
                aria-label="Email Parisse Impianti"
                className="hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded flex items-center gap-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                antonio.parisse@libero.it
              </a>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col items-center gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
            <span>© {new Date().getFullYear()} MosTag Studio. Tutti i diritti riservati.</span>
            <span className="hidden sm:block" aria-hidden="true">·</span>
            <span>P.IVA IT02137500662</span>
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <a
              href="https://www.iubenda.com/privacy-policy/69776268"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="https://www.iubenda.com/privacy-policy/69776268/cookie-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
