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
  const [lang, setLang] = useState<'IT' | 'EN'>('IT')
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
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center rounded-full border border-white/20 overflow-hidden text-xs font-semibold">
            <button
              onClick={() => setLang('IT')}
              className={`px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                lang === 'IT' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
              aria-label="Lingua italiana"
            >
              IT
            </button>
            <button
              onClick={() => setLang('EN')}
              className={`px-3 py-1 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
                lang === 'EN' ? 'bg-orange-500 text-white' : 'text-gray-400 hover:text-white'
              }`}
              aria-label="English language"
            >
              EN
            </button>
          </div>

          {/* CTA button */}
          <Link
            href="/#contatti"
            aria-label="Contatta Parisse Impianti"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1117] min-h-[44px]"
          >
            Contattaci
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
