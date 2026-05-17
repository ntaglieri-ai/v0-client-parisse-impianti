import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://parisseimpianti.it', changeFrequency: 'monthly', priority: 1 },
    { url: 'https://parisseimpianti.it/servizi/impianti-elettrici', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://parisseimpianti.it/servizi/impianti-fotovoltaici', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://parisseimpianti.it/servizi/domotica-smart-home', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://parisseimpianti.it/servizi/sistemi-antifurto', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://parisseimpianti.it/servizi/videosorveglianza', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://parisseimpianti.it/servizi/climatizzazione', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://parisseimpianti.it/servizi/automazioni-cancelli', changeFrequency: 'monthly', priority: 0.8 },
  ]
}
