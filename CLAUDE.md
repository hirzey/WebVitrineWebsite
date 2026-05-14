@AGENTS.md

# WebVitrine — Site vitrine pour artisans

## Projet

Site de conversion pour artisans du bâtiment. **Offre unique : site vitrine à 280€** (paiement en 2×140€).
Design Apple/studio — clair, aéré, premium. Pas de dark mode, pas d'éléments visuels lourds.

## Stack

- **Next.js 16.2** (App Router, `src/` dir)
- **TypeScript**
- **Tailwind CSS v4** — config CSS-first, pas de `tailwind.config.ts`
- **Framer Motion 12**
- **lucide-react**
- Fonts : `Instrument_Serif` (titres) + `Inter` (corps) via `next/font/google`

## Structure

```
src/
  app/
    layout.tsx       # Metadata SEO, JSON-LD, fonts
    page.tsx         # Assemblage des sections (Server Component)
    globals.css      # Tailwind v4 @theme, CSS vars, base styles
  components/
    Navbar.tsx
    sections/
      Hero.tsx        # Hero + BrowserMockup SVG + FloatingCards + Marquee
      Encadre.tsx     # Encadré garanties avec coins amber
      SocialProof.tsx # Compteurs animés
      Services.tsx    # Grille 2×2
      Process.tsx     # Timeline scroll-driven
      Testimonials.tsx
      Pricing.tsx     # Offre unique 280€ (une seule carte)
      About.tsx
      FAQ.tsx         # Accordion AnimatePresence
      Contact.tsx     # Formulaire dark background
```

## Palette

```css
--off-white: #f5f4f0   /* fond principal */
--warm-100/200/400/600 /* nuances chaudes */
--ink: #0a0a0a         /* texte / CTA principal */
amber: #d97706         /* accent (Tailwind built-in amber-600) */
```

Tailwind v4 : les couleurs custom dans `@theme` génèrent des classes (`bg-off-white`, `text-warm-600`, `bg-ink`).

## Pièges importants

### Tailwind v4 — opacité sur fond sombre
Les modificateurs d'opacité (`text-white/40`, `bg-white/10`) **ne fonctionnent pas** sur fond custom.
→ Toujours utiliser des `rgba()` inline dans ce cas.

### Framer Motion — TypeScript Variants
Le pattern `show: (delay) => ({...})` à l'intérieur d'un objet `Variants` cause des erreurs TS.
→ Utiliser une fonction plain :
```ts
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
});
// Usage : <motion.div {...fadeUp(0.2)} />
```

### Contact.tsx — styles dark
Toute la section Contact utilise des styles inline `rgba()` explicites + une balise `<style>` pour les placeholders. Ne pas remplacer par des classes Tailwind.

## Contenu

- **Prix** : 280€ unique, paiement 2×140€
- **Délai** : 14 jours garantis
- **Inclus** : design sur-mesure, pages (Accueil/Services/Contact), formulaire, SEO de base, hébergement 1 an, domaine 1ère année, 1 mois de suivi
- **Garanties** : satisfait ou remboursé, livraison 14j, paiement en 2 fois
- Pas de section Portfolio/Réalisations

## Commandes

```bash
npm run dev    # démarrage local
npm run build  # build production
npx tsc --noEmit  # vérification TypeScript
```
