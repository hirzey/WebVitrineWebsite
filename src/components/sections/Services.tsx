'use client';

import { motion } from 'framer-motion';
import { Monitor, MapPin, Zap, Wrench } from 'lucide-react';

const SERVICES = [
  {
    num: '01',
    icon: Monitor,
    title: 'Site vitrine sur-mesure',
    description:
      'Un design pensé pour votre activité, pas un template générique. Responsive, rapide, à votre image.',
  },
  {
    num: '02',
    icon: MapPin,
    title: 'Référencement local Google',
    description:
      'Apparaissez en tête sur Google dans votre ville. Optimisation technique, Google My Business, mots-clés locaux.',
  },
  {
    num: '03',
    icon: Zap,
    title: 'Performance & rapidité',
    description:
      'Score PageSpeed 90+ garanti. Un site rapide convertit mieux et est mieux positionné sur Google.',
  },
  {
    num: '04',
    icon: Wrench,
    title: 'Suivi & accompagnement',
    description:
      '1 mois de suivi inclus après la livraison. Questions, ajustements, conseils — je reste disponible.',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-off-white"
      aria-label="Nos services"
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
            Ce que je fais
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl max-w-lg">
            Tout ce qu'il faut pour exister en ligne
          </h2>
        </motion.div>

        {/* Grille 2×2 */}
        <div className="grid md:grid-cols-2 gap-px bg-warm-200">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-off-white p-10 lg:p-12 relative overflow-hidden group hover:bg-white transition-colors duration-300"
                aria-label={service.title}
              >
                {/* Numéro en fond */}
                <span
                  className="absolute top-6 right-8 font-serif text-[7rem] font-bold leading-none select-none pointer-events-none"
                  style={{ color: 'var(--warm-200)' }}
                  aria-hidden="true"
                >
                  {service.num}
                </span>

                {/* Contenu */}
                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-xl bg-warm-100 flex items-center justify-center mb-6 group-hover:bg-ink group-hover:text-white transition-all duration-300">
                    <Icon size={20} className="text-warm-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl mb-3">{service.title}</h3>
                  <p className="text-warm-600 text-base leading-relaxed">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
