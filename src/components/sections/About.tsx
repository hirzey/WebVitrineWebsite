'use client';

import { motion } from 'framer-motion';

const TECHS = [
  { name: 'Next.js', abbr: 'N' },
  { name: 'Tailwind', abbr: 'T' },
  { name: 'TypeScript', abbr: 'TS' },
  { name: 'Figma', abbr: 'F' },
  { name: 'WordPress', abbr: 'WP' },
  { name: 'Vercel', abbr: 'V' },
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-off-white"
      aria-label="À propos"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Gauche — texte */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium text-warm-400 uppercase tracking-widest mb-4">
              À propos
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl mb-8 leading-tight">
              Pas une agence.<br />
              <em style={{ fontStyle: 'italic' }}>Un développeur dédié</em> aux artisans.
            </h2>

            <div className="space-y-5 text-warm-600 leading-relaxed">
              <p>
                Je suis Mathieu, développeur web depuis 5 ans. Après avoir bossé pour des startups et des agences,
                j'ai fait un choix : me spécialiser dans les artisans.
              </p>
              <p>
                Parce que les maçons, électriciens, plombiers, couvreurs ont un vrai savoir-faire — et méritent
                une présence en ligne qui le reflète. Pas un template à 29€/mois, un vrai site qui convertit.
              </p>
              <p>
                Je travaille seul, donc vous avez affaire directement à la personne qui fait le travail. Pas de
                commercial, pas de chef de projet intermédiaire. Juste vous et moi.
              </p>
            </div>

            {/* Techs */}
            <div className="mt-10">
              <p className="text-xs font-medium text-warm-400 uppercase tracking-widest mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {TECHS.map((t) => (
                  <span
                    key={t.name}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium text-warm-600"
                    style={{ backgroundColor: 'var(--warm-100)', border: '1px solid var(--warm-200)' }}
                  >
                    <span
                      className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-bold bg-ink text-white"
                      aria-hidden="true"
                    >
                      {t.abbr}
                    </span>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Droite — photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Cadre photo */}
            <div
              className="aspect-[4/5] rounded-3xl overflow-hidden relative"
              style={{ backgroundColor: 'var(--warm-200)' }}
              aria-label="Photo de profil de Mathieu, développeur WebVitrine"
            >
              {/* Placeholder stylé */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div
                  className="w-24 h-24 rounded-full flex items-center justify-center font-serif text-4xl text-white"
                  style={{ backgroundColor: 'var(--ink)' }}
                  aria-hidden="true"
                >
                  M
                </div>
                <p className="text-warm-400 text-sm font-medium">Mathieu · WebVitrine</p>
              </div>

              {/* Badge sur la photo */}
              <div
                className="absolute bottom-6 left-6 right-6 bg-white rounded-2xl px-5 py-4 flex items-center gap-4"
                style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.08)' }}
                aria-label="47 sites livrés, 5 ans d'expérience"
              >
                <div>
                  <p className="font-serif text-2xl text-ink">47</p>
                  <p className="text-xs text-warm-400">sites livrés</p>
                </div>
                <div
                  className="w-px self-stretch"
                  style={{ backgroundColor: 'var(--warm-200)' }}
                  aria-hidden="true"
                />
                <div>
                  <p className="font-serif text-2xl text-ink">5 ans</p>
                  <p className="text-xs text-warm-400">d'expérience</p>
                </div>
              </div>
            </div>

            {/* Élément décoratif */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 rounded-full -z-10"
              style={{ backgroundColor: 'var(--warm-100)' }}
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
