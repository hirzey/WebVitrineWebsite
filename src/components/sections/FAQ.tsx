'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ_ITEMS = [
  {
    q: 'Est-ce que je peux modifier mon site moi-même ?',
    a: 'Oui. À la livraison, je vous explique comment mettre à jour vos textes, photos et tarifs en autonomie. Pas besoin de moi pour les modifications courantes.',
  },
  {
    q: 'Pourquoi 280€ alors que les agences facturent 2 000€ et plus ?',
    a: 'Je travaille seul, sans locaux, sans commercial, sans chef de projet. Vous payez uniquement le travail effectif — pas les charges d\'une structure de 10 personnes. Résultat : une qualité d\'agence à un prix de freelance.',
  },
  {
    q: 'Qu\'est-ce qui est inclus dans l\'offre à 280€ ?',
    a: 'Le design sur-mesure, les pages essentielles (Accueil, Services, Contact), le formulaire de contact, le SEO de base, l\'hébergement 1 an, le nom de domaine la 1ère année, la livraison en 14 jours et 1 mois de suivi.',
  },
  {
    q: 'Combien de temps pour être visible sur Google ?',
    a: 'Pour le référencement local (votre ville + votre métier), comptez 2 à 4 mois selon la concurrence. La grande majorité de mes clients voient leurs premières positions en moins de 3 mois.',
  },
  {
    q: 'Et si je ne suis pas content du résultat ?',
    a: 'Les maquettes sont validées avant tout développement, donc les surprises sont rares. Si malgré tout le résultat ne vous convient pas, je retravaille gratuitement jusqu\'à votre satisfaction. Je n\'encaisse le solde qu\'à la livraison finale approuvée.',
  },
  {
    q: 'Vous travaillez dans toute la France ?',
    a: 'Oui, je travaille à distance avec des artisans partout en France. Tout se fait par visioconférence, email et lien de prévisualisation. La distance ne change rien à la qualité du travail.',
  },
];

function FAQItem({ item, index }: { item: typeof FAQ_ITEMS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className="border-b"
      style={{ borderColor: 'var(--warm-200)' }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-medium text-base text-ink leading-snug">{item.q}</span>
        <span
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200"
          style={{ backgroundColor: open ? 'var(--ink)' : 'var(--warm-100)' }}
          aria-hidden="true"
        >
          {open
            ? <Minus size={14} color="white" />
            : <Plus size={14} color="var(--warm-600)" />
          }
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-warm-600 leading-relaxed pb-6 max-w-2xl">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-white"
      aria-label="Questions fréquentes"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24">
          {/* Gauche */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-sm font-medium text-warm-400 uppercase tracking-widest mb-4">
              FAQ
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl leading-tight">
              Vos questions,<br />
              <em style={{ fontStyle: 'italic' }}>mes réponses.</em>
            </h2>
            <p className="text-warm-600 mt-6 leading-relaxed">
              Une autre question ? Écrivez-moi directement, je réponds en moins de 24h.
            </p>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 mt-6 text-sm font-medium text-ink border-b border-ink pb-0.5 hover:text-amber-600 hover:border-amber-600 transition-colors duration-200"
            >
              Me contacter
            </a>
          </motion.div>

          {/* Droite — accordion */}
          <div>
            <div className="border-t" style={{ borderColor: 'var(--warm-200)' }}>
              {FAQ_ITEMS.map((item, i) => (
                <FAQItem key={i} item={item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
