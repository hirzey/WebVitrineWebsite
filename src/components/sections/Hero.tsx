'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown, Star, Zap, TrendingUp, ClipboardCheck, ThumbsUp } from 'lucide-react';

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const MARQUEE_ITEMS = [
  'Maçonnerie', 'Électricité', 'Plomberie', 'Couverture',
  'Menuiserie', 'Peinture', 'Carrelage', 'Isolation',
  'Serrurerie', 'Chauffage', 'Climatisation', 'Jardinage',
];

/* ─── Cartes flottantes ─────────────────────────────── */
function FloatingCard({
  children,
  className = '',
  delay = 0,
  floatY = 8,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  floatY?: number;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease }}
      className={className}
      style={style}
    >
      <motion.div
        animate={{ y: [0, -floatY, 0] }}
        transition={{ duration: 3.5 + delay, repeat: Infinity, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ─── Mockup Mac ────────────────────────────────────── */
function BrowserMockup() {
  return (
    <svg
      viewBox="0 0 560 404"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="w-full drop-shadow-2xl"
    >
      <defs>
        <clipPath id="mac-window">
          <rect x="6" y="4" width="548" height="390" rx="14" />
        </clipPath>
        <filter id="win-shadow" x="-4%" y="-4%" width="108%" height="108%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#0a0a0a" floodOpacity="0.14" />
        </filter>
        {/* Tile pattern for hero background */}
        <pattern id="tiles" x="0" y="0" width="68" height="40" patternUnits="userSpaceOnUse">
          <rect x="1" y="1" width="64" height="36" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.10)" strokeWidth="0.5" />
        </pattern>
        <linearGradient id="hero-overlay" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(12,14,20,0.48)" />
          <stop offset="100%" stopColor="rgba(12,14,20,0.74)" />
        </linearGradient>
      </defs>

      {/* Window border + shadow */}
      <rect x="6" y="4" width="548" height="390" rx="14" fill="white" filter="url(#win-shadow)" />
      <rect x="6" y="4" width="548" height="390" rx="14" stroke="#d8d4ce" strokeWidth="1" />

      {/* === All content clipped to window === */}
      <g clipPath="url(#mac-window)">

        {/* Title bar */}
        <rect x="6" y="4" width="548" height="40" fill="#f0eeea" />
        <line x1="6" y1="44" x2="554" y2="44" stroke="#e2dfda" strokeWidth="1" />

        {/* Traffic lights */}
        <circle cx="32" cy="24" r="6.5" fill="#ff5f57" />
        <circle cx="53" cy="24" r="6.5" fill="#febc2e" />
        <circle cx="74" cy="24" r="6.5" fill="#28c840" />

        {/* URL bar centered */}
        <rect x="182" y="12" width="196" height="24" rx="12" fill="white" stroke="#e2dfda" strokeWidth="1" />
        <text x="280" y="27.5" textAnchor="middle" fontSize="8.5" fill="#9b9690" fontFamily="monospace">plombier-martin-lyon.fr</text>

        {/* ── Site nav ── */}
        <rect x="6" y="44" width="548" height="40" fill="white" />
        <line x1="6" y1="84" x2="554" y2="84" stroke="#e2dfda" strokeWidth="0.5" />
        <text x="30" y="69" fontSize="12.5" fontWeight="700" fill="#0a0a0a" fontFamily="Georgia, serif" fontStyle="italic">Plomberie Martin</text>
        <text x="310" y="69" fontSize="8.5" fill="#5c5954" fontFamily="sans-serif">Services</text>
        <text x="365" y="69" fontSize="8.5" fill="#5c5954" fontFamily="sans-serif">Urgences</text>
        <text x="432" y="69" fontSize="8.5" fill="#5c5954" fontFamily="sans-serif">Contact</text>
        <rect x="474" y="57" width="58" height="19" rx="9.5" fill="#0a0a0a" />
        <text x="503" y="69.5" textAnchor="middle" fontSize="7.5" fill="white" fontFamily="sans-serif">Devis</text>

        {/* ── Hero — fond photo plein largeur ── */}
        {/* Base couleur anthracite / gris acier */}
        <rect x="6" y="84" width="548" height="166" fill="#1e2028" />
        {/* Détails déco : mur de carreaux ardoise */}
        <rect x="6" y="84" width="548" height="166" fill="url(#tiles)" />
        {/* Reflets métalliques subtils */}
        <rect x="6" y="84" width="548" height="80" fill="rgba(255,255,255,0.02)" />
        <ellipse cx="420" cy="130" rx="130" ry="75" fill="rgba(200,210,230,0.05)" />
        {/* Overlay sombre pour lisibilité du texte */}
        <rect x="6" y="84" width="548" height="166" fill="url(#hero-overlay)" />

        {/* Badge centré */}
        <rect x="204" y="96" width="152" height="15" rx="7.5" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.75" />
        <text x="280" y="107" textAnchor="middle" fontSize="6.5" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">🔧 PLOMBIER CERTIFIÉ · LYON</text>

        {/* Titre centré */}
        <text x="280" y="131" textAnchor="middle" fontSize="21" fill="white" fontFamily="Georgia, serif">Plomberie &amp;</text>
        <text x="280" y="156" textAnchor="middle" fontSize="21" fill="#f59e0b" fontFamily="Georgia, serif" fontStyle="italic">Chauffage Martin</text>
        <text x="280" y="174" textAnchor="middle" fontSize="7.5" fill="rgba(255,255,255,0.65)" fontFamily="sans-serif">Dépannage · Salle de bain · Chaudière · Urgences 24h/7j</text>

        {/* CTAs centrés */}
        <rect x="178" y="182" width="112" height="22" rx="11" fill="white" />
        <text x="234" y="196.5" textAnchor="middle" fontSize="7" fill="#0a0a0a" fontFamily="sans-serif" fontWeight="600">Appeler maintenant</text>
        <rect x="298" y="182" width="84" height="22" rx="11" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="1.5" />
        <text x="340" y="196.5" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.8)" fontFamily="sans-serif">Nous contacter</text>

        {/* Stars centrées */}
        <text x="247" y="225" fontSize="9" fill="#fbbf24" fontFamily="sans-serif">★★★★★</text>
        <text x="305" y="225" fontSize="7" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">4.8 · 63 avis Google</text>

        {/* ── Stats band ── */}
        <rect x="6" y="250" width="548" height="62" fill="white" />
        <line x1="6" y1="250" x2="554" y2="250" stroke="#e2dfda" strokeWidth="0.5" />
        <line x1="6" y1="312" x2="554" y2="312" stroke="#e2dfda" strokeWidth="0.5" />
        {[
          { x: 90, v: '15 ans', s: "d'expérience" },
          { x: 222, v: '500+', s: 'interventions' },
          { x: 354, v: '24h/7j', s: 'disponible' },
          { x: 476, v: '1h', s: "d'intervention" },
        ].map((s) => (
          <g key={s.v}>
            <text x={s.x} y="273" textAnchor="middle" fontSize="15" fontWeight="700" fill="#0a0a0a" fontFamily="Georgia, serif">{s.v}</text>
            <text x={s.x} y="288" textAnchor="middle" fontSize="6.5" fill="#9b9690" fontFamily="sans-serif">{s.s}</text>
          </g>
        ))}
        <line x1="158" y1="260" x2="158" y2="302" stroke="#e2dfda" strokeWidth="0.5" />
        <line x1="290" y1="260" x2="290" y2="302" stroke="#e2dfda" strokeWidth="0.5" />
        <line x1="422" y1="260" x2="422" y2="302" stroke="#e2dfda" strokeWidth="0.5" />

        {/* ── Services ── */}
        <rect x="6" y="312" width="548" height="56" fill="#f5f4f0" />
        {[
          { x: 82, e: '🔧', l: 'Plomberie' },
          { x: 214, e: '🚿', l: 'Salle de bain' },
          { x: 346, e: '🔥', l: 'Chauffage' },
          { x: 478, e: '🚨', l: 'Urgences' },
        ].map((s) => (
          <g key={s.l}>
            <rect x={s.x - 44} y="320" width="88" height="40" rx="8" fill="white" />
            <text x={s.x} y="338" textAnchor="middle" fontSize="12" fontFamily="sans-serif">{s.e}</text>
            <text x={s.x} y="352" textAnchor="middle" fontSize="6.5" fill="#5c5954" fontFamily="sans-serif">{s.l}</text>
          </g>
        ))}

        {/* ── Footer ── */}
        <rect x="6" y="368" width="548" height="26" fill="#0a0a0a" />
        <text x="280" y="383.5" textAnchor="middle" fontSize="7" fill="rgba(255,255,255,0.45)" fontFamily="sans-serif">© 2025 Plomberie Martin · Réalisé par WebVitrine</text>
      </g>
    </svg>
  );
}

/* ─── Marquee ───────────────────────────────────────── */
function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div
      className="overflow-hidden py-5 border-t border-b"
      style={{ borderColor: 'var(--warm-200)', backgroundColor: 'white' }}
      aria-hidden="true"
    >
      <motion.div
        className="flex gap-0 whitespace-nowrap"
        animate={{ x: ['0%', '-33.33%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-4 px-6 text-sm font-medium"
            style={{ color: 'var(--warm-400)' }}
          >
            {item}
            <span style={{ color: 'var(--warm-200)', fontSize: '1.2rem' }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Hero principal ────────────────────────────────── */
export default function Hero() {
  const scrollTo = (id: string) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <section
        id="hero"
        className="relative pt-[72px] min-h-screen flex flex-col justify-center overflow-hidden"
        style={{ backgroundColor: 'var(--off-white)' }}
        aria-label="Introduction"
      >
        {/* ── Fond : grille de points ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
          aria-hidden="true"
        />

        {/* ── Blob lumineux ambre ── */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: '10%',
            right: '5%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(217,119,6,0.12) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
          aria-hidden="true"
        />
        {/* Blob secondaire bleu-gris */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: '15%',
            left: '0%',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100,100,120,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          aria-hidden="true"
        />

        {/* ── Contenu ── */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 w-full">
          <div className="grid lg:grid-cols-[58fr_42fr] gap-12 lg:gap-16 items-center">

            {/* Colonne gauche */}
            <div>
              {/* Badge */}
              <motion.div {...fadeUp(0)} className="mb-8">
                <span
                  className="inline-flex items-center gap-2 text-sm font-medium rounded-full px-4 py-1.5"
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid var(--warm-200)',
                    color: 'var(--warm-600)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  }}
                >
                  <span className="text-amber-600">⚡</span>
                  Sites livrés en 14 jours · Satisfait ou remboursé
                </span>
              </motion.div>

              {/* H1 */}
              <motion.h1
                {...fadeUp(0.1)}
                className="font-serif leading-[1.05] tracking-[-0.03em] mb-6"
                style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
              >
                Des sites qui{' '}
                <em
                  style={{
                    fontStyle: 'italic',
                    position: 'relative',
                    display: 'inline-block',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '4px',
                      left: 0,
                      right: 0,
                      height: '6px',
                      backgroundColor: 'rgba(217,119,6,0.25)',
                      borderRadius: '3px',
                      zIndex: -1,
                    }}
                    aria-hidden="true"
                  />
                  rapportent
                </em>{' '}
                des clients
              </motion.h1>

              {/* Sous-titre */}
              <motion.p
                {...fadeUp(0.2)}
                className="text-lg mb-8 max-w-md leading-relaxed"
                style={{ color: 'var(--warm-600)' }}
              >
                Je crée des sites vitrines pour artisans.{' '}
                <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>Rapide, abordable, efficace.</strong>
              </motion.p>

              {/* Prix */}
              <motion.div {...fadeUp(0.28)} className="flex items-baseline gap-3 mb-10">
                <span
                  className="font-serif"
                  style={{ fontSize: '2.5rem', lineHeight: 1, color: 'var(--ink)' }}
                >
                  Site vitrine · 280€
                </span>
                <a
                  href="#tarifs"
                  onClick={(e) => { e.preventDefault(); scrollTo('#tarifs'); }}
                  className="flex items-center gap-1 text-sm font-medium transition-all duration-200 hover:gap-2"
                  style={{ color: '#d97706' }}
                >
                  Voir l'offre <ArrowRight size={13} />
                </a>
              </motion.div>

              {/* CTAs */}
              <motion.div {...fadeUp(0.36)} className="flex flex-wrap gap-3 mb-10">
                <a
                  href="#tarifs"
                  onClick={(e) => { e.preventDefault(); scrollTo('#tarifs'); }}
                  className="inline-flex items-center gap-2 text-sm font-medium px-7 py-4 rounded-full transition-all duration-200"
                  style={{ backgroundColor: 'var(--ink)', color: 'white' }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#d97706')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'var(--ink)')}
                  aria-label="Voir les tarifs"
                >
                  Voir les tarifs
                </a>
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); scrollTo('#contact'); }}
                  className="inline-flex items-center gap-2 text-sm font-medium px-7 py-4 rounded-full border transition-all duration-200"
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--ink)',
                    borderColor: 'var(--warm-200)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--ink)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--warm-200)')}
                  aria-label="Demander un devis gratuit"
                >
                  Devis gratuit
                </a>
              </motion.div>

              {/* Social proof inline */}
              <motion.div
                {...fadeUp(0.44)}
                className="flex items-center gap-4"
              >
                {/* Avatars */}
                <div className="flex -space-x-2.5">
                  {['JM', 'SD', 'PL', 'IR'].map((initials, i) => (
                    <div
                      key={initials}
                      className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white"
                      style={{
                        backgroundColor: ['#e8e4dc', '#dde4ec', '#ddeae4', '#ede8e4'][i],
                        color: 'var(--warm-600)',
                        zIndex: 4 - i,
                      }}
                      aria-hidden="true"
                    >
                      {initials}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={12} fill="#d97706" stroke="none" />
                    ))}
                  </div>
                  <p className="text-xs" style={{ color: 'var(--warm-400)' }}>
                    <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>47 artisans</strong> nous font confiance
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Colonne droite — wrapper plus large pour laisser les cartes s'étaler */}
            <div
              className="hidden lg:block relative"
              style={{ padding: '60px 80px 60px 60px' }}
            >

              {/* ① Nouveau message — haut gauche */}
              <FloatingCard
                delay={0.7}
                floatY={7}
                style={{ position: 'absolute', top: '-30px', left: '-10px', zIndex: 10 }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    border: '1px solid var(--warm-100)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ backgroundColor: '#ddeae4', color: '#047857' }}
                    aria-hidden="true"
                  >
                    JP
                  </div>
                  <div>
                    <p style={{ color: 'var(--ink)', fontSize: '0.8rem', fontWeight: 600 }}>🔔 Nouveau message</p>
                    <p style={{ color: 'var(--warm-400)', fontSize: '0.7rem' }}>Jean-Pierre · il y a 2 min</p>
                  </div>
                </div>
              </FloatingCard>

              {/* ② Devis simplifié — haut droite, au-dessus du mockup */}
              <FloatingCard
                delay={1.3}
                floatY={7}
                style={{ position: 'absolute', top: '0px', right: '-80px', zIndex: 10 }}
              >
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    border: '1px solid var(--warm-100)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: 'rgba(217,119,6,0.1)' }}
                      aria-hidden="true"
                    >
                      <ClipboardCheck size={16} style={{ color: '#d97706' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.78rem', color: 'var(--ink)', fontWeight: 600 }}>
                        Demande de devis simplifié
                      </p>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span
                          style={{
                            display: 'inline-block',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            backgroundColor: '#16a34a',
                          }}
                          aria-hidden="true"
                        />
                        <p style={{ fontSize: '0.67rem', color: 'var(--warm-400)' }}>
                          Formulaire en 2 min · Réponse sous 24h
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* ③ Google #1 — droite, milieu */}
              <FloatingCard
                delay={1.1}
                floatY={6}
                style={{ position: 'absolute', top: '38%', right: '-20px', zIndex: 10 }}
              >
                <div
                  className="flex items-center gap-2.5 px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    border: '1px solid var(--warm-100)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <TrendingUp size={15} style={{ color: '#16a34a' }} aria-hidden="true" />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--ink)', fontWeight: 600 }}>Google · Position #1</p>
                    <p style={{ fontSize: '0.65rem', color: 'var(--warm-400)' }}>"plombier bordeaux"</p>
                  </div>
                </div>
              </FloatingCard>

              {/* ④ Avis positifs — bas gauche */}
              <FloatingCard
                delay={1.5}
                floatY={8}
                style={{ position: 'absolute', bottom: '10px', left: '-10px', zIndex: 10 }}
              >
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    border: '1px solid var(--warm-100)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: '#fef9c3' }}
                      aria-hidden="true"
                    >
                      <ThumbsUp size={15} style={{ color: '#ca8a04' }} />
                    </div>
                    <div>
                      <div className="flex items-baseline gap-1.5 mb-0.5">
                        <span className="font-serif" style={{ fontSize: '1.4rem', lineHeight: 1, color: 'var(--ink)' }}>+47</span>
                        <span style={{ fontSize: '0.72rem', color: 'var(--warm-600)', fontWeight: 500 }}>avis positifs</span>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={10} fill="#d97706" stroke="none" aria-hidden="true" />
                        ))}
                        <span style={{ fontSize: '0.65rem', color: 'var(--warm-400)', marginLeft: '2px' }}>Google · Vérifiés</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* ⑤ PageSpeed — bas droite, sous le mockup */}
              <FloatingCard
                delay={0.9}
                floatY={9}
                style={{ position: 'absolute', bottom: '0px', right: '15%', zIndex: 10 }}
              >
                <div
                  className="px-4 py-3 rounded-2xl"
                  style={{
                    backgroundColor: 'white',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    border: '1px solid var(--warm-100)',
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <Zap size={14} style={{ color: '#d97706' }} aria-hidden="true" />
                    <span style={{ fontSize: '0.72rem', color: 'var(--warm-400)', fontWeight: 500 }}>PageSpeed</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="font-serif" style={{ fontSize: '1.8rem', lineHeight: 1, color: '#16a34a' }}>96</span>
                    <div style={{ marginBottom: '4px' }}>
                      <div
                        style={{ width: '60px', height: '6px', borderRadius: '3px', backgroundColor: 'var(--warm-100)', overflow: 'hidden' }}
                        aria-hidden="true"
                      >
                        <div style={{ width: '96%', height: '100%', borderRadius: '3px', backgroundColor: '#16a34a' }} />
                      </div>
                      <p style={{ fontSize: '0.65rem', color: 'var(--warm-400)', marginTop: '2px' }}>Performance</p>
                    </div>
                  </div>
                </div>
              </FloatingCard>

              {/* Mockup */}
              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease }}
              >
                <div style={{ transform: 'scale(1.35)', transformOrigin: 'center center' }}>
                  <BrowserMockup />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex justify-center mt-16 lg:mt-20"
          >
            <button
              onClick={() => scrollTo('#socialproof')}
              className="flex flex-col items-center gap-2 transition-colors duration-200"
              style={{ color: 'var(--warm-400)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ink)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--warm-400)')}
              aria-label="Défiler vers le bas"
            >
              <span className="text-xs font-medium uppercase tracking-widest">Découvrir</span>
              <ArrowDown size={16} className="animate-bounce" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee ── */}
      <Marquee />
    </>
  );
}
