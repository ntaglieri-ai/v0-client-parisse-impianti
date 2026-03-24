import Link from 'next/link'
import Image from 'next/image'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'

export interface ServiceData {
  slug: string
  title: string
  subtitle: string
  description: string[]
  features: string[]
  image: string
  relatedServices: {
    title: string
    description: string
    href: string
    icon: React.ReactNode
  }[]
  icon: React.ReactNode
}

export default function ServiceDetailTemplate({ service }: { service: ServiceData }) {
  return (
    <>
      <Navbar />
      <main className="bg-[#0d1117] min-h-screen pt-16">
        {/* Breadcrumb */}
        <div className="bg-[#0d1117] border-b border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex items-center gap-2 text-sm" aria-label="Breadcrumb">
              <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                Home
              </Link>
              <span className="text-gray-600">/</span>
              <Link href="/servizi" className="text-gray-400 hover:text-white transition-colors">
                Servizi
              </Link>
              <span className="text-gray-600">/</span>
              <span className="text-orange-500">{service.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="py-16 bg-[#161b2e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
                {service.icon}
              </div>
            </div>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              {service.title}
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl">{service.subtitle}</p>
          </div>
        </section>

        {/* Content section */}
        <section className="py-20 bg-[#0d1117]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
              {/* Left: Description */}
              <div className="flex-1">
                {service.description.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-400 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}

                {/* Features list */}
                <div className="mt-8">
                  <h2
                    className="text-xl font-bold text-white mb-6"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    Caratteristiche principali
                  </h2>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-10">
                  <Link
                    href="/#contatti"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Richiedi un preventivo gratuito
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* Right: Image */}
              <div className="flex-1">
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(249,115,22,0.1)]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related services */}
        <section className="py-20 bg-[#161b2e]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl sm:text-3xl font-extrabold text-white mb-10 text-center"
              style={{ fontFamily: 'var(--font-montserrat)' }}
            >
              Altri servizi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {service.relatedServices.map((related) => (
                <div
                  key={related.title}
                  className="rounded-2xl bg-[#1a2235] border border-white/5 p-6 flex flex-col card-hover"
                >
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500 mb-4">
                    {related.icon}
                  </div>
                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: 'var(--font-montserrat)' }}
                  >
                    {related.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                    {related.description}
                  </p>
                  <Link
                    href={related.href}
                    className="inline-flex items-center gap-1 text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors group"
                  >
                    Scopri di più
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
