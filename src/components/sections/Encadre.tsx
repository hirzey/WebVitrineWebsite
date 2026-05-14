'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Clock, CreditCard } from 'lucide-react';

const GARANTIES = [
  {
    icon: ShieldCheck,
    title: 'Satisfait ou remboursé',
    desc: 'Si le résultat ne vous convient pas, je retravaille gratuitement jusqu\'à votre validation.',
  },
  {
    icon: Clock,
    title: 'Livraison en 14 jours',
    desc: 'Délai garanti par contrat. Chaque projet démarre dans les 48h suivant la validation du devis.',
  },
  {
    icon: CreditCard,
    title: 'Paiement en 2 fois',
    desc: '50% à la commande, 50% à la livraison. Sans frais, sans intérêts, sans conditions.',
  },
];

/* Accents décoratifs de coin */
function Corner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const size = 28;
  const thickness = 2;
  const color = '#d97706';

  const styles: React.CSSProperties = {
    position: 'absolute',
    width: size,
    height: size,
  };

  if (position === 'tl') Object.assign(styles, { top: -1, left: -1, borderTop: `${thickness}px solid ${color}`, borderLeft: `${thickness}px solid ${color}`, borderRadius: '12px 0 0 0' });
  if (position === 'tr') Object.assign(styles, { top: -1, right: -1, borderTop: `${thickness}px solid ${color}`, borderRight: `${thickness}px solid ${color}`, borderRadius: '0 12px 0 0' });
  if (position === 'bl') Object.assign(styles, { bottom: -1, left: -1, borderBottom: `${thickness}px solid ${color}`, borderLeft: `${thickness}px solid ${color}`, borderRadius: '0 0 0 12px' });
  if (position === 'br') Object.assign(styles, { bottom: -1, right: -1, borderBottom: `${thickness}px solid ${color}`, borderRight: `${thickness}px solid ${color}`, borderRadius: '0 0 12px 0' });

  return <span style={styles} aria-hidden="true" />;
}

export default function Encadre() {
  return (
    <section
      className="bg-white"
      aria-label="Nos garanties"
      style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-8 lg:p-14"
          style={{
            border: '1px solid var(--warm-200)',
            backgroundColor: 'var(--off-white)',
          }}
        >
          {/* Accents de coin */}
          <Corner position="tl" />
          <Corner position="tr" />
          <Corner position="bl" />
          <Corner position="br" />

          {/* Label interne */}
          <div className="flex justify-center mb-10">
            <span
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full"
              style={{
                backgroundColor: 'rgba(217,119,6,0.1)',
                color: '#b45309',
                border: '1px solid rgba(217,119,6,0.2)',
              }}
            >
              ✦ Nos engagements
            </span>
          </div>

          {/* Titre centré */}
          <h2
            className="font-serif text-center mb-3 leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--ink)' }}
          >
            Zéro risque. Zéro mauvaise surprise.
          </h2>
          <p
            className="text-center max-w-lg mx-auto mb-12"
            style={{ color: 'var(--warm-600)' }}
          >
            Chaque projet est encadré par des engagements fermes — parce que votre confiance ne s'improvise pas.
          </p>

          {/* Grille garanties */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-10 mb-12">
            {GARANTIES.map((g, i) => {
              const Icon = g.icon;
              return (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-3"
                >
                  {/* Icône */}
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(217,119,6,0.1)' }}
                    aria-hidden="true"
                  >
                    <Icon size={22} style={{ color: '#d97706' }} />
                  </div>

                  {/* Ligne de séparation */}
                  <div
                    style={{
                      width: '32px',
                      height: '2px',
                      backgroundColor: '#d97706',
                      borderRadius: '1px',
                      opacity: 0.6,
                    }}
                    aria-hidden="true"
                  />

                  <h3 className="font-serif text-xl" style={{ color: 'var(--ink)' }}>
                    {g.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--warm-600)' }}>
                    {g.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Séparateur */}
          <div
            className="border-t mb-10"
            style={{ borderColor: 'var(--warm-200)' }}
            aria-hidden="true"
          />

          {/* Témoignage inline + CTA */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Citation */}
            <blockquote className="flex items-start gap-4 max-w-md">
              <span
                className="font-serif text-5xl leading-none select-none"
                style={{ color: 'var(--warm-200)', marginTop: '-8px' }}
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <div>
                <p className="text-base leading-relaxed mb-2" style={{ color: 'var(--ink)' }}>
                  280€ pour mon site, rentabilisé en 6 semaines. Je recommande sans hésiter.
                </p>
                <footer className="text-xs" style={{ color: 'var(--warm-400)' }}>
                  — Jean-Pierre M., Maçon à Lille · <span style={{ color: '#d97706' }}>★★★★★</span>
                </footer>
              </div>
            </blockquote>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="shrink-0 inline-flex items-center gap-2 font-medium text-sm px-7 py-4 rounded-full transition-all duration-200"
              style={{ backgroundColor: 'var(--ink)', color: 'white' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--ink)')}
              aria-label="Demander un devis gratuit"
            >
              Demander un devis gratuit
              <ArrowRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
