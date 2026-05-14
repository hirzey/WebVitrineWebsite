'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { end: 47,  suffix: '',   label: 'sites livrés' },
  { end: 98,  suffix: '%',  label: 'clients satisfaits' },
  { end: 14,  suffix: 'j', label: 'délai moyen' },
  { end: 280, suffix: '€', label: 'offre unique' },
];

function AnimatedCounter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function SocialProof() {
  return (
    <section
      id="socialproof"
      className="bg-white"
      aria-label="Chiffres clés"
    >
      <hr className="divider" />
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-warm-200">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white px-8 py-10 flex flex-col gap-2"
            >
              <span className="font-serif text-5xl lg:text-6xl tracking-tight text-ink leading-none">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </span>
              <span className="text-sm text-warm-400 font-medium">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <hr className="divider" />
    </section>
  );
}
