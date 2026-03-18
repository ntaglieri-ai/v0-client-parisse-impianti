import Image from 'next/image'
import Link from 'next/link'

const serviceLinks = [
  { label: 'Impianti Elettrici', href: '#servizi' },
  { label: 'Fotovoltaico', href: '#servizi' },
  { label: 'Domotica', href: '#servizi' },
  { label: 'Antifurto', href: '#servizi' },
  { label: 'Videosorveglianza', href: '#servizi' },
  { label: 'Climatizzazione', href: '#servizi' },
  { label: 'Automazioni', href: '#servizi' },
]

const companyLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'Chi Siamo', href: '#perche-sceglierci' },
  { label: 'Contatti', href: '#contatti' },
]

function FacebookIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer role="contentinfo" className="bg-[#0d1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-4">
            <Link
              href="#hero"
              aria-label="Parisse Impianti - Torna alla home"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded w-fit"
            >
              <Image
                src="/images/logo-ap.png"
                alt="Logo AP"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                style={{ mixBlendMode: 'screen' }}
              />
              <span
                className="text-xl font-extrabold text-orange-500"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                PARISSE
              </span>
              <span
                className="text-xl font-extrabold text-white"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                IMPIANTI
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soluzioni professionali per impianti tecnologici. Affidabilità, qualità e assistenza dal
              2008.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                { href: '#', Icon: FacebookIcon, label: 'Parisse Impianti su Facebook' },
                { href: '#', Icon: InstagramIcon, label: 'Parisse Impianti su Instagram' },
                { href: '#', Icon: LinkedInIcon, label: 'Parisse Impianti su LinkedIn' },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-orange-400 hover:border-orange-500/30 hover:bg-orange-500/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
                >
                  <Icon />
                </a>
              ))}
            </div>
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
                href="mailto:info@parisseimpianti.it"
                aria-label="Email Parisse Impianti"
                className="hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded flex items-center gap-2"
              >
                <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@parisseimpianti.it
              </a>
              <span className="flex items-start gap-2">
                <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Abruzzo, Lazio, Marche, Umbria
              </span>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <span>© 2025 Parisse Impianti. Tutti i diritti riservati.</span>
            <span className="hidden sm:block" aria-hidden="true">·</span>
            <span>P.IVA XXXXXXXXXX</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true">|</span>
            <a
              href="#"
              className="hover:text-orange-400 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
