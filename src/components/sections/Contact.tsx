'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';

const TRADES = [
  'Maçonnerie / Gros œuvre',
  'Électricité',
  'Plomberie / Chauffage',
  'Couverture / Toiture',
  'Menuiserie / Charpente',
  'Peinture / Revêtement',
  'Carrelage / Sols',
  'Isolation / Plâtrerie',
  'Serrurerie / Métallerie',
  'Autre métier du bâtiment',
];

type FormData = {
  prenom: string;
  email: string;
  telephone: string;
  metier: string;
  message: string;
};

const INITIAL: FormData = { prenom: '', email: '', telephone: '', metier: '', message: '' };

/* Styles inline pour éviter les bugs d'opacité Tailwind v4 sur fond noir */
const fieldStyle: React.CSSProperties = {
  width: '100%',
  backgroundColor: 'rgba(255,255,255,0.07)',
  border: '1px solid rgba(255,255,255,0.15)',
  borderRadius: '12px',
  padding: '14px 16px',
  color: '#ffffff',
  fontSize: '0.9rem',
  fontFamily: 'var(--font-inter), system-ui, sans-serif',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const labelStyle: React.CSSProperties = {
  display: 'block',
  fontSize: '0.7rem',
  fontWeight: 500,
  color: 'rgba(255,255,255,0.5)',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '8px',
};

export default function Contact() {
  const [form, setForm] = useState<FormData>(INITIAL);
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState('');

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  const focusStyle = (name: string): React.CSSProperties => ({
    ...fieldStyle,
    borderColor: focused === name ? '#d97706' : 'rgba(255,255,255,0.15)',
  });

  return (
    <section
      id="contact"
      aria-label="Contact — Demander un devis"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">

        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <h2
            className="font-serif text-4xl lg:text-6xl mb-4 leading-tight"
            style={{ color: '#ffffff' }}
          >
            Votre site vitrine à{' '}
            <em style={{ fontStyle: 'italic', color: '#fbbf24' }}>280€</em>.
            <br />Lancez-vous.
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '28rem', margin: '0 auto' }}>
            Premier échange gratuit · Devis sous 48h · Aucun engagement
          </p>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto"
        >
          <AnimatePresence mode="wait">
            {sent ? (
              /* ── État succès ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="text-center py-16 flex flex-col items-center gap-6"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(251,191,36,0.15)' }}
                >
                  <CheckCircle size={32} style={{ color: '#fbbf24' }} />
                </div>
                <div>
                  <h3 className="font-serif text-2xl mb-2" style={{ color: '#ffffff' }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.5)' }}>
                    Je vous réponds sous 24h maximum.
                  </p>
                </div>
                <button
                  onClick={() => { setSent(false); setForm(INITIAL); }}
                  style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem', textDecoration: 'underline' }}
                  className="hover:opacity-100 transition-opacity"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              /* ── Formulaire ── */
              <motion.form
                key="form"
                onSubmit={onSubmit}
                noValidate
                className="flex flex-col gap-5"
              >
                {/* Ligne 1 : prénom + email */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="prenom" style={labelStyle}>Prénom *</label>
                    <input
                      id="prenom"
                      name="prenom"
                      type="text"
                      required
                      value={form.prenom}
                      onChange={onChange}
                      onFocus={() => setFocused('prenom')}
                      onBlur={() => setFocused('')}
                      placeholder="Jean"
                      style={{
                        ...focusStyle('prenom'),
                        // override placeholder color via CSS
                      }}
                      className="placeholder-contact"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={labelStyle}>Email *</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused('')}
                      placeholder="jean@exemple.fr"
                      style={focusStyle('email')}
                      className="placeholder-contact"
                      aria-required="true"
                    />
                  </div>
                </div>

                {/* Ligne 2 : téléphone + métier */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="telephone" style={labelStyle}>Téléphone</label>
                    <input
                      id="telephone"
                      name="telephone"
                      type="tel"
                      value={form.telephone}
                      onChange={onChange}
                      onFocus={() => setFocused('telephone')}
                      onBlur={() => setFocused('')}
                      placeholder="06 xx xx xx xx"
                      style={focusStyle('telephone')}
                      className="placeholder-contact"
                    />
                  </div>
                  <div>
                    <label htmlFor="metier" style={labelStyle}>Votre métier *</label>
                    <select
                      id="metier"
                      name="metier"
                      required
                      value={form.metier}
                      onChange={onChange}
                      onFocus={() => setFocused('metier')}
                      onBlur={() => setFocused('')}
                      style={{
                        ...focusStyle('metier'),
                        color: form.metier ? '#ffffff' : 'rgba(255,255,255,0.35)',
                        cursor: 'pointer',
                      }}
                      aria-required="true"
                    >
                      <option value="" disabled style={{ color: '#333', backgroundColor: '#fff' }}>
                        Sélectionner...
                      </option>
                      {TRADES.map((t) => (
                        <option key={t} value={t} style={{ color: '#0a0a0a', backgroundColor: '#fff' }}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" style={labelStyle}>Votre projet *</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused('')}
                    placeholder="Décrivez votre activité et vos besoins..."
                    style={{ ...focusStyle('message'), resize: 'vertical' }}
                    className="placeholder-contact"
                    aria-required="true"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-3 font-medium text-base transition-all duration-200 mt-1"
                  style={{
                    backgroundColor: loading ? '#b45309' : '#d97706',
                    color: '#ffffff',
                    padding: '16px',
                    borderRadius: '12px',
                    opacity: loading ? 0.8 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer',
                    border: 'none',
                  }}
                  aria-label="Envoyer ma demande de devis"
                >
                  {loading ? (
                    <>
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white border-t-transparent"
                        style={{ animation: 'contact-spin 0.7s linear infinite' }}
                        aria-hidden="true"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer ma demande
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                <p
                  className="text-center text-xs mt-1"
                  style={{ color: 'rgba(255,255,255,0.3)' }}
                >
                  Réponse sous 24h · Sans engagement
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Styles globaux pour la section */}
      <style>{`
        @keyframes contact-spin { to { transform: rotate(360deg); } }
        .placeholder-contact::placeholder { color: rgba(255,255,255,0.3); }
      `}</style>
    </section>
  );
}
