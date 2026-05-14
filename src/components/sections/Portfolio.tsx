'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    name: 'Maçonnerie Dupont',
    slug: 'maconnerie-dupont.fr',
    trade: 'Maçonnerie',
    category: 'maçonnerie',
    color: '#e8e4dc',
    accent: '#8B7355',
    tagColor: '#6B5B42',
    description: 'Site vitrine 8 pages + galerie chantiers + formulaire devis',
  },
  {
    id: 2,
    name: 'Élec Pro 59',
    slug: 'elec-pro-59.fr',
    trade: 'Électricité',
    category: 'électricité',
    color: '#dde4ec',
    accent: '#2563eb',
    tagColor: '#1d4ed8',
    description: 'SEO local Lille + Google My Business + blog conseils',
  },
  {
    id: 3,
    name: 'Plomberie Martin',
    slug: 'plomberie-martin.fr',
    trade: 'Plomberie',
    category: 'plomberie',
    color: '#ddeae4',
    accent: '#059669',
    tagColor: '#047857',
    description: 'Urgences 24h mise en avant + zone d\'intervention + avis',
  },
  {
    id: 4,
    name: 'Toiture Leroy',
    slug: 'toiture-leroy.fr',
    trade: 'Couverture',
    category: 'couverture',
    color: '#ede8e4',
    accent: '#c2410c',
    tagColor: '#b45309',
    description: 'Portfolio avant/après + certifications RGE + devis express',
  },
  {
    id: 5,
    name: 'Menuiserie Leblanc',
    slug: 'menuiserie-leblanc.fr',
    trade: 'Menuiserie',
    category: 'menuiserie',
    color: '#edeae4',
    accent: '#92400e',
    tagColor: '#78350f',
    description: 'Catalogue produits + configurateur fenêtres + showroom',
  },
  {
    id: 6,
    name: 'Peinture Moreau',
    slug: 'peinture-moreau.fr',
    trade: 'Peinture',
    category: 'peinture',
    color: '#ece4ed',
    accent: '#7c3aed',
    tagColor: '#6d28d9',
    description: 'Galerie réalisations + nuancier interactif + rappel rapide',
  },
];

const CATEGORIES = ['tous', 'maçonnerie', 'électricité', 'plomberie', 'couverture', 'menuiserie', 'peinture'];

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative overflow-hidden rounded-2xl cursor-pointer"
      style={{ backgroundColor: project.color }}
      aria-label={project.name}
    >
      {/* Zone visuelle */}
      <div className="h-52 relative flex items-center justify-center p-8">
        {/* Faux browser frame */}
        <div className="w-full h-full rounded-xl bg-white/70 shadow-sm flex flex-col overflow-hidden">
          {/* Browser chrome */}
          <div className="h-6 flex items-center px-3 gap-1.5" style={{ backgroundColor: 'rgba(0,0,0,0.04)' }}>
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="w-2 h-2 rounded-full bg-black/10" />
            <span className="ml-2 flex-1 h-3 rounded-full bg-black/06 text-[7px] text-black/30 flex items-center justify-center font-mono">
              {project.slug}
            </span>
          </div>
          {/* Content preview */}
          <div className="flex-1 p-3 flex flex-col gap-2">
            <div className="h-2.5 rounded-full w-2/3" style={{ backgroundColor: project.accent, opacity: 0.9 }} />
            <div className="h-1.5 rounded-full w-full bg-black/08" />
            <div className="h-1.5 rounded-full w-5/6 bg-black/06" />
            <div className="flex gap-2 mt-1">
              <div className="h-6 w-20 rounded-full" style={{ backgroundColor: project.accent }} />
              <div className="h-6 w-16 rounded-full border bg-transparent" style={{ borderColor: project.accent + '40' }} />
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-300 rounded-2xl" />

        {/* Arrow icon on hover */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
          <ArrowUpRight size={14} color={project.accent} />
        </div>
      </div>

      {/* Infos */}
      <div className="px-5 pb-5">
        <div className="flex items-start justify-between mb-1">
          <h3 className="font-serif text-base text-ink">{project.name}</h3>
          <span
            className="text-[10px] font-medium px-2 py-0.5 rounded-full"
            style={{ color: project.tagColor, backgroundColor: project.accent + '15' }}
          >
            {project.trade}
          </span>
        </div>
        <p className="text-xs text-warm-400 leading-relaxed">{project.description}</p>
      </div>
    </motion.article>
  );
}

export default function Portfolio() {
  const [active, setActive] = useState('tous');

  const filtered = active === 'tous' ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <section
      id="portfolio"
      className="bg-white"
      aria-label="Nos réalisations"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
        >
          <div>
            <p className="text-sm font-medium text-warm-400 uppercase tracking-widest mb-4">
              Réalisations
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl">
              Ce que j'ai créé pour des artisans
            </h2>
          </div>

          {/* Filtres */}
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filtrer par métier"
          >
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 capitalize"
                style={{
                  backgroundColor: active === cat ? 'var(--ink)' : 'var(--warm-100)',
                  color: active === cat ? 'white' : 'var(--warm-600)',
                }}
                aria-pressed={active === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grille */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
