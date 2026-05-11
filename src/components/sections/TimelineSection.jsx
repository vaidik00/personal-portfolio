import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { journeyTimeline } from '../../data/siteData';
import { riseIn, softScale, staggerParent } from '../../utils/motion';

export default function TimelineSection() {
  return (
    <section id="journey" className="section-shell px-4 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Experience & Journey"
          title="How The Story"
          highlight="Evolved"
          description="A steady progression from fundamentals to shipping polished product experiences."
          align="center"
        />

        <motion.div variants={riseIn} className="relative mx-auto mt-14 max-w-4xl">
          <div className="storyline-base" aria-hidden="true" />
          <div className="storyline-progress" aria-hidden="true" />

          <div className="space-y-8">
            {journeyTimeline.map((item, index) => (
              <motion.article
                key={item.year}
                variants={softScale}
                className="timeline-item group"
              >
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-card">
                  <p className="timeline-year">{item.year}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight text-black dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-black/65 dark:text-white/65">
                    {item.detail}
                  </p>
                </div>
                <div className="timeline-index">{String(index + 1).padStart(2, '0')}</div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
