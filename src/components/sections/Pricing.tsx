'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Clock, CreditCard } from 'lucide-react';

const FEATURES = [
  'Design sur-mesure responsive (mobile + desktop)',
  'Pages essentielles : Accueil, Services, Contact',
  'Formulaire de contact intégré',
  'SEO technique de base (titres, balises, vitesse)',
  'Hébergement 1 an inclus',
  'Nom de domaine offert la 1ère année',
  'Livraison en 14 jours garantis',
  '1 mois de suivi et ajustements inclus',
];

const GUARANTEES = [
  { icon: Shield, label: 'Satisfait ou remboursé' },
  { icon: Clock, label: 'Livraison en 14 jours' },
  { icon: CreditCard, label: 'Paiement en 2 fois' },
];

export default function Pricing() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="tarifs"
      className="bg-white"
      aria-label="Tarif — Offre site vitrine"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{
              backgroundColor: 'rgba(217,119,6,0.1)',
              color: '#b45309',
              border: '1px solid rgba(217,119,6,0.2)',
            }}
          >
            ✦ Une seule offre. Claire et complète.
          </span>
          <h2 className="font-serif text-4xl lg:text-5xl mb-4 text-ink">
            Site vitrine artisan
          </h2>
          <p className="text-warm-600 max-w-md mx-auto">
            Tout ce qu'il faut pour être visible en ligne et décrocher de nouveaux clients — sans rien de superflu.
          </p>
        </motion.div>

        {/* Carte offre unique */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{ border: '1px solid var(--warm-200)', backgroundColor: 'var(--off-white)' }}
        >
          {/* Bande supérieure */}
          <div
            className="px-10 py-8 lg:px-14 lg:py-10"
            style={{ backgroundColor: 'var(--ink)' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  Offre unique
                </p>
                <div className="flex items-end gap-3">
                  <span className="font-serif text-6xl leading-none text-white">280€</span>
                  <span className="text-sm mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>TTC · tout inclus</span>
                </div>
                <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  Ou 140€ à la commande + 140€ à la livraison
                </p>
              </div>

              <button
                onClick={scrollToContact}
                className="shrink-0 inline-flex items-center gap-2 font-medium text-sm px-8 py-4 rounded-full transition-all duration-200"
                style={{ backgroundColor: '#d97706', color: 'white' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#b45309')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
                aria-label="Demander un devis gratuit"
              >
                Démarrer mon projet
                <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Corps — features */}
          <div className="px-10 py-10 lg:px-14 lg:py-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-warm-400 mb-6">Ce qui est inclus</p>
            <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4" role="list">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: '#d97706' }} aria-hidden="true" />
                  <span className="text-sm text-warm-600">{f}</span>
                </li>
              ))}
            </ul>

            {/* Séparateur */}
            <div className="border-t my-10" style={{ borderColor: 'var(--warm-200)' }} aria-hidden="true" />

            {/* Garanties inline */}
            <div className="flex flex-wrap gap-6">
              {GUARANTEES.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2">
                  <Icon size={14} style={{ color: '#d97706' }} aria-hidden="true" />
                  <span className="text-sm text-warm-600">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-xs text-warm-400 mt-6"
        >
          Premier échange gratuit · Devis sous 48h · Aucun engagement
        </motion.p>
      </div>
    </section>
  );
}
