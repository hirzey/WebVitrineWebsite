'use client';

import { motion } from 'framer-motion';

const TESTIMONIALS = [
  {
    rating: 5,
    text: 'Mon site est en ligne depuis 3 mois et j\'ai déjà 5 nouveaux chantiers grâce à Google. Pour 280€, le retour sur investissement est incroyable.',
    initials: 'JP',
    name: 'Jean-Pierre M.',
    trade: 'Maçon',
    city: 'Lille',
    bg: '#f0eeea',
  },
  {
    rating: 5,
    text: 'Très pro, très réactif. Mathieu a su comprendre mon activité sans que j\'aie à tout expliquer. Le résultat dépasse mes attentes.',
    initials: 'SD',
    name: 'Sophie D.',
    trade: 'Électricienne',
    city: 'Lyon',
    bg: '#dde4ec',
  },
  {
    rating: 5,
    text: 'J\'étais sceptique au début, mais mon site s\'est rentabilisé en moins de 2 mois. Je suis premier sur Google pour "plombier Bordeaux". Parfait.',
    initials: 'PM',
    name: 'Pierre M.',
    trade: 'Plombier',
    city: 'Bordeaux',
    bg: '#ddeae4',
  },
  {
    rating: 5,
    text: 'Livré en 11 jours comme promis. Le site est beau, rapide, et Mathieu m\'a expliqué comment modifier mes textes moi-même. Je recommande à 100%.',
    initials: 'IL',
    name: 'Isabelle L.',
    trade: 'Couvreur',
    city: 'Nantes',
    bg: '#ede8e4',
  },
];

const Stars = ({ count }: { count: number }) => (
  <span aria-label={`${count} étoiles sur 5`} className="text-amber-600 text-sm select-none">
    {'★'.repeat(count)}
  </span>
);

export default function Testimonials() {
  return (
    <section
      id="temoignages"
      className="bg-white"
      aria-label="Témoignages clients"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-sm font-medium text-warm-400 uppercase tracking-widest mb-4">
            Ce qu'ils disent
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl">
            Des artisans qui ont franchi le pas
          </h2>
        </motion.div>

        {/* Grille 2×2 */}
        <div className="grid md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl p-8 flex flex-col gap-5"
              style={{ backgroundColor: t.bg }}
              aria-label={`Témoignage de ${t.name}, ${t.trade} à ${t.city}`}
            >
              <Stars count={t.rating} />

              <p className="text-base text-ink leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>

              <footer className="flex items-center gap-3 mt-auto">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-sm font-semibold text-ink shrink-0"
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <p className="font-medium text-sm text-ink">{t.name}</p>
                  <p className="text-xs text-warm-400">
                    {t.trade} · {t.city}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
