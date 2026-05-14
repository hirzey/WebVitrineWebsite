'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setOpen(false);
    if (href === '#') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--warm-200)' : '1px solid transparent',
      }}
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => scrollTo(e, '#')}
          className="font-serif italic text-2xl text-ink leading-none"
          aria-label="WebVitrine — Accueil"
        >
          WebVitrine
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => scrollTo(e, link.href)}
              className="text-sm font-medium text-warm-600 hover:text-ink transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          onClick={(e) => scrollTo(e, '#contact')}
          className="hidden md:inline-flex items-center gap-2 bg-ink text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:bg-amber-600"
          aria-label="Demander un devis gratuit"
        >
          Devis gratuit
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t bg-white"
          style={{ borderColor: 'var(--warm-200)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu mobile"
        >
          <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className="text-base font-medium text-warm-600 hover:text-ink py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollTo(e, '#contact')}
              className="mt-2 inline-flex justify-center items-center bg-ink text-white text-sm font-medium px-5 py-3 rounded-full hover:bg-amber-600 transition-colors"
            >
              Devis gratuit
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
