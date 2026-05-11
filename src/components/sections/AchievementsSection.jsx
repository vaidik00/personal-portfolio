import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { achievements } from '../../data/siteData';
import { softScale, staggerParent } from '../../utils/motion';

function AnimatedCount({ target, suffix, start }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let frame = 0;
    const begin = performance.now();
    const duration = 1400;

    const update = (time) => {
      const elapsed = Math.min((time - begin) / duration, 1);
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setValue(Math.round(eased * target));
      if (elapsed < 1) {
        frame = requestAnimationFrame(update);
      }
    };

    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  return (
    <span>
      {value}
      {suffix}
    </span>
  );
}

export default function AchievementsSection() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section ref={sectionRef} className="section-shell px-4 py-24 md:px-8">
      <motion.div
        className="mx-auto w-full max-w-6xl"
        variants={staggerParent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SectionTitle
          eyebrow="Achievements"
          title="Progress In"
          highlight="Numbers"
          description="Milestones that reflect consistency, curiosity, and product-building momentum."
        />

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((achievement) => (
            <motion.article
              key={achievement.label}
              variants={softScale}
              className="glass-panel rounded-3xl p-6 text-center"
              data-cursor="interactive"
            >
              <p className="font-display text-5xl font-semibold tracking-tight text-gradient">
                <AnimatedCount target={achievement.value} suffix={achievement.suffix} start={inView} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.24em] text-black/55 dark:text-white/55">
                {achievement.label}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
