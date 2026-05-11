import { motion } from 'framer-motion';
import { FiArrowUpRight, FiBookOpen, FiLayers, FiMessageCircle, FiZap } from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import { aboutHighlights, personalInfo } from '../../data/siteData';
import { riseIn, slideLeft, slideRight, springPop, staggerFast, staggerParent } from '../../utils/motion';

const aboutIcons = [FiLayers, FiZap, FiMessageCircle, FiBookOpen];

export default function AboutSection() {
  return (
    <section id="about" className="section-shell px-4 py-24 md:px-8">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={slideLeft}>
            <SectionTitle
              eyebrow="About"
              title="Crafting Interfaces With"
              highlight="Curiosity and Intent"
              description="I enjoy shaping interfaces that feel calm, clear, and memorable while staying grounded in performance and accessibility."
            />
          </motion.div>

          <motion.div variants={riseIn} className="mt-8 space-y-4 text-sm leading-relaxed text-black/70 dark:text-white/70 md:text-base">
            <p>{personalInfo.bioLong}</p>
            <p>
              I am currently pursuing <strong>{personalInfo.degree}</strong> at{' '}
              <strong>{personalInfo.college}</strong>, and I am especially interested in frontend
              engineering and modern interaction design.
            </p>
          </motion.div>

          <motion.div variants={riseIn} className="mt-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-black transition-colors hover:text-black/70 dark:text-white dark:hover:text-white/70"
              data-cursor="interactive"
            >
              Let&apos;s build something meaningful <FiArrowUpRight />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerFast}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-4 sm:grid-cols-2"
        >
          {aboutHighlights.map((item, index) => {
            const Icon = aboutIcons[index] ?? FiLayers;

            return (
              <motion.article
                key={item.title}
                variants={springPop}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-panel group rounded-3xl p-5"
                data-cursor="interactive"
                style={{ transition: 'box-shadow 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(123,101,255,0.14)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = ''; }}
              >
                <div className="inline-flex rounded-2xl border border-white/15 bg-white/10 p-2 text-[var(--color-electric)] dark:border-white/10 dark:bg-white/5">
                  <Icon size={18} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-black dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-black/65 dark:text-white/65">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
