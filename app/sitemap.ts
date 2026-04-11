import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.parisseimpianti.it', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: 'https://www.parisseimpianti.it/servizi/impianti-elettrici', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.parisseimpianti.it/servizi/impianti-fotovoltaici', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://www.parisseimpianti.it/servizi/domotica-smart-home', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.parisseimpianti.it/servizi/sistemi-antifurto', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.parisseimpianti.it/servizi/videosorveglianza', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.parisseimpianti.it/servizi/climatizzazione', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://www.parisseimpianti.it/servizi/automazioni-cancelli', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
