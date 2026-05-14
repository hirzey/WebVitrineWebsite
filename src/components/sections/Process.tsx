'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const STEPS = [
  {
    num: '01',
    title: 'Découverte',
    description: 'Appel gratuit 30 min pour cerner votre activité, vos clients et vos objectifs.',
  },
  {
    num: '02',
    title: 'Design',
    description: 'Maquettes Figma sur-mesure. Vous validez avant que la moindre ligne de code soit écrite.',
  },
  {
    num: '03',
    title: 'Développement',
    description: 'Code propre, rapide, sécurisé. Prévisualisation en temps réel à chaque étape.',
  },
  {
    num: '04',
    title: 'Mise en ligne',
    description: 'Déploiement, domaine, SSL, formation. Votre site est en ligne et vous savez le gérer.',
  },
];

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 80%', 'end 40%'] });
  const lineWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="process"
      className="bg-off-white"
      aria-label="Notre process"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 lg:mb-20"
        >
          <p className="text-sm font-medium text-warm-400 uppercase tracking-widest mb-4">
            Comment ça marche
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl max-w-md">
            De l'appel à la mise en ligne — simplement
          </h2>
        </motion.div>

        {/* Étapes */}
        <div ref={ref} className="relative">
          {/* Ligne de connexion desktop */}
          <div className="hidden lg:block absolute top-8 left-8 right-8 h-px bg-warm-200" aria-hidden="true">
            <motion.div
              className="h-full bg-ink origin-left"
              style={{ width: lineWidth }}
            />
          </div>

          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Numéro / dot */}
                <div className="flex items-center gap-4 lg:block mb-5">
                  <div
                    className="relative z-10 w-16 h-16 rounded-full bg-white border border-warm-200 flex items-center justify-center font-serif text-xl text-ink shrink-0"
                    aria-label={`Étape ${step.num}`}
                  >
                    {step.num}
                  </div>
                </div>

                {/* Contenu */}
                <h3 className="font-serif text-2xl mb-2">{step.title}</h3>
                <p className="text-warm-600 text-base leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
