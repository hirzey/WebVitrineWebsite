import type { Metadata } from 'next';
import { Instrument_Serif, Inter } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://webvitrine.fr'),
  title: 'WebVitrine — Sites Internet pour Artisans | Site vitrine à 280€',
  description:
    'WebVitrine crée des sites vitrines professionnels pour artisans. Design soigné, référencement local inclus, livraison en 14 jours. Devis gratuit.',
  keywords: [
    'site internet artisan',
    'site web artisan pas cher',
    'créer site artisan',
    'site vitrine maçon',
    'site vitrine électricien',
    'référencement local artisan',
  ],
  authors: [{ name: 'WebVitrine' }],
  openGraph: {
    title: 'WebVitrine — Sites Internet pour Artisans | Site vitrine à 280€',
    description:
      'WebVitrine crée des sites vitrines professionnels pour artisans. Design soigné, référencement local inclus, livraison en 14 jours. Devis gratuit.',
    type: 'website',
    locale: 'fr_FR',
    siteName: 'WebVitrine',
    url: 'https://webvitrine.fr',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'WebVitrine — Sites pour artisans' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WebVitrine — Sites Internet pour Artisans | Site vitrine à 280€',
    description: 'Sites vitrines professionnels pour artisans. Référencement local inclus. Devis gratuit.',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://webvitrine.fr' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'WebVitrine',
  description: 'Création de sites vitrines pour artisans — design soigné, SEO local, livraison en 14 jours.',
  url: 'https://webvitrine.fr',
  telephone: '+33600000000',
  email: 'contact@webvitrine.fr',
  priceRange: '€€',
  areaServed: { '@type': 'Country', name: 'France' },
  serviceType: 'Création de site web',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="fr"
      className={`${instrumentSerif.variable} ${inter.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
