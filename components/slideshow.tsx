'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/images/hero-solar.jpg',
    alt: 'Installazione pannelli fotovoltaici su tetto residenziale in Abruzzo - Parisse Impianti',
  },
  {
    src: '/images/slide-2-quadro.jpg',
    alt: 'Quadro elettrico professionale installato da Parisse Impianti',
  },
  {
    src: '/images/slide-3-domotica.jpg',
    alt: 'Sistema domotico per abitazione intelligente',
  },
  {
    src: '/images/slide-4-sorveglianza.jpg',
    alt: 'Telecamera di videosorveglianza installata da Parisse Impianti',
  },
  {
    src: '/images/slide-5-climatizzazione.jpg',
    alt: 'Impianto climatizzazione con pompa di calore - Parisse Impianti',
  },
  {
    src: '/images/slide-6-tecnici.jpg',
    alt: 'Tecnici Parisse Impianti durante installazione impianto elettrico',
  },
]

export default function Slideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  function startInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
  }

  useEffect(() => {
    startInterval()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function goToSlide(index: number) {
    setCurrentSlide(index)
    startInterval()
  }

  return (
    <section
      id="gallery"
      aria-label="Galleria lavori Parisse Impianti"
      className="relative w-full h-[500px] overflow-hidden bg-[#0d1117]"
    >
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={i !== currentSlide}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Dark gradient overlay (bottom 30%) */}
      <div
        className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-black/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Slide counter top-right */}
      <div
        className="absolute top-4 right-6 bg-black/50 text-white text-xs font-semibold px-3 py-1.5 rounded-full backdrop-blur-sm"
        aria-live="polite"
        aria-atomic="true"
      >
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 backdrop-blur-sm"
        aria-label="Slide precedente"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 border border-white/20 flex items-center justify-center text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 backdrop-blur-sm"
        aria-label="Slide successiva"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot navigation */}
      <div
        role="tablist"
        aria-label="Seleziona slide galleria"
        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2"
      >
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-label={`Vai alla slide ${i + 1}`}
            aria-selected={currentSlide === i}
            onClick={() => goToSlide(i)}
            className={`rounded-full border border-white/50 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 ${
              currentSlide === i
                ? 'w-2.5 h-2.5 bg-orange-500 scale-110 border-orange-500'
                : 'w-2 h-2 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
