const brands = [
  'Schneider Electric',
  'BTicino',
  'Hikvision',
  'Ajax Systems',
  'Daikin',
  'Huawei Solar',
  'SunPower',
  'ABB',
]

export default function Partners() {
  return (
    <section id="partner" className="py-20 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label">I Nostri Partner</p>
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-white text-balance mt-2"
            style={{ fontFamily: 'var(--font-montserrat)' }}
          >
            Lavoriamo con i migliori brand
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mt-4 leading-relaxed">
            Installiamo prodotti delle marche leader di mercato per garantire qualità e affidabilità.
          </p>
        </div>

        {/* Brand grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {brands.map((brand) => (
            <div
              key={brand}
              className="card-hover flex items-center justify-center rounded-xl bg-[#161b2e] border border-white/5 px-6 py-8 text-center"
            >
              <span
                className="text-white font-bold text-sm sm:text-base leading-snug"
                style={{ fontFamily: 'var(--font-montserrat)' }}
              >
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
