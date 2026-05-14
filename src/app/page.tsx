import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import Encadre from '@/components/sections/Encadre';
import SocialProof from '@/components/sections/SocialProof';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import About from '@/components/sections/About';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Encadre />
        <SocialProof />
        <Services />
        <Process />
        <Testimonials />
        <Pricing />
        <About />
        <FAQ />
        <Contact />
      </main>
      <footer className="bg-ink" role="contentinfo" aria-label="Pied de page">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-serif italic text-xl text-white">WebVitrine</span>
          <nav aria-label="Liens footer">
            <ul className="flex flex-wrap justify-center gap-6 text-sm text-warm-400">
              {[
                { label: 'Services', href: '#services' },
                { label: 'Tarifs', href: '#tarifs' },
                { label: 'Contact', href: '#contact' },
                { label: 'Mentions légales', href: '#' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <p className="text-warm-400 text-xs whitespace-nowrap">
            © {new Date().getFullYear()} WebVitrine · Réalisé avec Next.js
          </p>
        </div>
      </footer>
    </>
  );
}
