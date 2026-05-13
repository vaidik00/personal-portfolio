import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skillGroups } from '../../data/siteData';
import { SKILL_ICONS } from '../../data/icons.jsx';
import { riseIn, softScale, staggerFast, staggerParent } from '../../utils/motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

/** Single skill pill with subtle glow and gradient border on hover */
function SkillPill({ skill, delay = 0, groupAccent }) {
  const meta = SKILL_ICONS[skill.iconKey];
  const color = meta?.color ?? '#888';
  const IconComp = meta?.Icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          variants={softScale}
          transition={{ delay }}
          whileHover={{ y: -3, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          data-cursor="interactive"
          className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-black/10 bg-white/40 px-4 py-2.5 shadow-sm transition-all duration-300 hover:shadow-[0_0_20px_rgba(var(--hover-color-rgb),0.15)] dark:border-white/10 dark:bg-white/5"
          style={{ '--hover-color': color }}
        >
          {/* Animated Gradient Border (visible on hover) */}
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: `linear-gradient(135deg, transparent, ${color}20, transparent)`,
            }}
          />

          {/* Icon */}
          <div className="relative z-10 flex h-5 w-5 items-center justify-center">
            {IconComp ? (
              <IconComp style={{ fontSize: '1.15rem', color }} />
            ) : (
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  fontFamily: 'var(--font-display, monospace)',
                  color,
                }}
              >
                {skill.name.charAt(0)}
              </span>
            )}
          </div>

          {/* Label */}
          <span className="relative z-10 text-sm font-medium tracking-wide text-black/80 transition-colors group-hover:text-black dark:text-white/80 dark:group-hover:text-white">
            {skill.name}
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top">{skill.name} Expertise</TooltipContent>
    </Tooltip>
  );
}

export default function SkillsSection() {
  return (
    <TooltipProvider delayDuration={200}>
      <section id="skills" className="section-shell relative overflow-hidden px-4 py-24 md:px-8">
        {/* Subtle Background Effects */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[var(--color-electric)]/5 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-[var(--color-neon)]/5 via-transparent to-transparent" />

        <motion.div
          className="mx-auto w-full max-w-6xl"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionTitle
            eyebrow="Capabilities"
            title="A Full Spectrum"
            highlight="Engineering Stack"
            description="Organized by domain, leveraging the best modern tools to build scalable, intelligent, and premium digital experiences."
            align="center"
          />

          {/* Category panels - responsive masonry-like flow */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                variants={riseIn}
                className="glass-panel relative overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:shadow-[var(--shadow-luxury-dark)] dark:hover:border-white/20"
                style={{ '--group-accent': group.accent }}
              >
                {/* Subtle top glow matching group accent */}
                <div 
                  className="absolute inset-x-0 top-0 h-px w-full opacity-50"
                  style={{ background: `linear-gradient(90deg, transparent, ${group.accent}, transparent)` }}
                />

                {/* Category Header */}
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 shadow-inner backdrop-blur-md"
                    style={{ border: `1px solid ${group.accent}40`, boxShadow: `0 0 15px ${group.accent}20` }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        background: group.accent,
                        boxShadow: `0 0 10px ${group.accent}`,
                      }}
                    />
                  </div>
                  <h3 className="font-display text-lg font-semibold tracking-tight text-black dark:text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <motion.div
                  variants={staggerFast}
                  className="flex flex-wrap gap-2.5"
                >
                  {group.items.map((skill, si) => (
                    <SkillPill key={skill.iconKey} skill={skill} delay={si * 0.04} groupAccent={group.accent} />
                  ))}
                </motion.div>
              </motion.article>
            ))}
          </div>

        </motion.div>
      </section>
    </TooltipProvider>
  );
}
