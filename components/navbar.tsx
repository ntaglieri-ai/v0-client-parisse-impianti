'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const services = [
  { label: 'Impianti Elettrici', href: '/servizi/impianti-elettrici' },
  { label: 'Impianti Fotovoltaici', href: '/servizi/impianti-fotovoltaici' },
  { label: 'Domotica e Smart Home', href: '/servizi/domotica-smart-home' },
  { label: 'Sistemi Antifurto', href: '/servizi/sistemi-antifurto' },
  { label: 'Videosorveglianza', href: '/servizi/videosorveglianza' },
  { label: 'Climatizzazione', href: '/servizi/climatizzazione' },
  { label: 'Automazioni e Cancelli', href: '/servizi/automazioni-cancelli' },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Azienda', href: '/#perche-sceglierci' },
  { label: 'Contatti', href: '/#contatti' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur-md bg-[#0d1117]/80"
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Navigazione principale"
      >
        {/* Logo - left */}
        <Link
          href="/"
          aria-label="Parisse Impianti - Torna alla home"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded flex-shrink-0"
        >
          <Image
            src="/images/logo-ap.png"
            alt="Logo AP"
            width={44}
            height={44}
            className="w-11 h-11 object-contain flex-shrink-0"
            style={{ mixBlendMode: 'lighten' }}
            priority
          />
          <div className="flex flex-col leading-none" style={{ fontFamily: 'var(--font-montserrat)' }}>
            <span className="text-base font-extrabold text-orange-500 tracking-wide">PARISSE</span>
            <span className="text-base font-extrabold text-white tracking-wide">IMPIANTI</span>
          </div>
        </Link>

        {/* Desktop center nav - pushed right */}
        <ul className="hidden md:flex items-center gap-8 ml-auto mr-12" role="list">
          <li>
            <Link
              href="/"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
            >
              Home
            </Link>
          </li>

          {/* Services dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
              onClick={() => setServicesOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={servicesOpen}
            >
              Servizi
              <svg
                className={`w-3.5 h-3.5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 rounded-xl bg-[#1a2035] border border-white/10 shadow-xl py-2 z-50">
                {services.map((s) => (
                  <Link
                    key={s.label}
                    href={s.href}
                    onClick={() => setServicesOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-300 hover:text-orange-400 hover:bg-white/5 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </li>

          {navLinks.slice(1).map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 rounded px-1"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right actions */}
        <div className="hidden md:flex items-center">
          {/* CTA button */}
          <Link
            href="/#contatti"
            aria-label="Contatta Parisse Impianti"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] min-h-[44px]"
          >
            Contattaci
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          {/* WhatsApp button */}
          <a
            href="https://wa.me/393387447981?text=Ciao%2C%20vorrei%20richiedere%20informazioni%20sui%20vostri%20servizi."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contattaci su WhatsApp"
            className="p-1.5 rounded-full bg-[#25D366] text-white hover:bg-[#1fb855] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] w-9 h-9 flex items-center justify-center"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* Hamburger menu */}
          <button
            className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Apri menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-[#161b2e] border-t border-white/10 px-4 py-4 flex flex-col gap-1"
        >
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
          >
            Home
          </Link>

          {/* Services group */}
          <div className="px-3 pt-2 pb-1">
            <p className="text-xs font-semibold text-orange-500 uppercase tracking-widest mb-1">Servizi</p>
            {services.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 pl-2 text-sm text-gray-400 hover:text-orange-400 transition-colors min-h-[44px] flex items-center"
              >
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            href="/#perche-sceglierci"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
          >
            Azienda
          </Link>
          <Link
            href="/#contatti"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors min-h-[44px] flex items-center"
          >
            Contatti
          </Link>

          <div className="mt-3 pt-3 border-t border-white/10">
            <Link
              href="/#contatti"
              onClick={() => setMobileOpen(false)}
              aria-label="Contatta Parisse Impianti"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors min-h-[44px]"
            >
              Contattaci
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
