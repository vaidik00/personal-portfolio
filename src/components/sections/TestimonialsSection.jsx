import { motion } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { testimonials } from '../../data/siteData';
import { softScale, staggerParent } from '../../utils/motion';
import { Card, CardContent } from '../ui/card';

function Stars() {
  return (
    <div className="flex gap-1 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <FiStar key={i} size={13} className="fill-amber-400" />
      ))}
    </div>
  );
}

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      variants={softScale}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      data-cursor="interactive"
      className="h-full"
    >
      <Card className="h-full flex flex-col p-6 gap-4">
        {/* Quote glyph */}
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '3.5rem',
            lineHeight: 1,
            background: 'linear-gradient(120deg, var(--color-electric), var(--color-soft-blue))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            userSelect: 'none',
            display: 'block',
          }}
        >
          "
        </span>

        <Stars />

        <CardContent className="p-0 flex-1">
          <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 italic">
            "{testimonial.quote}"
          </p>
        </CardContent>

        {/* Author row */}
        <div className="flex items-center gap-3 mt-2 pt-4 border-t border-black/8 dark:border-white/8">
          {/* Avatar circle */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(123,101,255,0.35), rgba(120,215,255,0.2))',
              border: '1px solid rgba(123,101,255,0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.95rem',
              color: 'var(--color-electric)',
              flexShrink: 0,
            }}
          >
            {testimonial.name.charAt(0)}
          </div>
          <div>
            <p className="font-display text-base font-semibold text-black dark:text-white leading-tight">
              {testimonial.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.18em] text-black/45 dark:text-white/45 mt-0.5">
              {testimonial.role}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-shell px-4 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <SectionTitle
          eyebrow="Testimonials"
          title="People Who Have"
          highlight="Worked With Me"
          description="A few kind words from teammates and mentors."
          align="center"
        />

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <TestimonialCard key={t.name} testimonial={t} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
