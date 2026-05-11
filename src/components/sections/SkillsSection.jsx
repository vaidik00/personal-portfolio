import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import { skillGroups } from '../../data/siteData';
import { SKILL_ICONS } from '../../data/icons.jsx';
import { riseIn, softScale, staggerFast, staggerParent } from '../../utils/motion';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

/** Single skill icon card with Tooltip */
function SkillIcon({ skill, delay = 0 }) {
  const meta = SKILL_ICONS[skill.iconKey];
  const color = meta?.color ?? '#888';
  const IconComp = meta?.Icon;

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <motion.div
          variants={softScale}
          transition={{ delay }}
          whileHover={{ y: -5, scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          data-cursor="interactive"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '1rem 0.75rem',
            borderRadius: '1rem',
            cursor: 'default',
            transition: 'box-shadow 0.3s',
            background: `${color}0d`,
            border: `1px solid ${color}28`,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.boxShadow = `0 8px 32px ${color}30`; }}
          onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}
        >
          {/* Icon or text fallback for C */}
          {IconComp ? (
            <IconComp style={{ fontSize: '2rem', color }} />
          ) : (
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                fontFamily: 'var(--font-display, monospace)',
                color,
                lineHeight: 1,
                width: '2rem',
                textAlign: 'center',
              }}
            >
              C
            </span>
          )}
          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 600,
              color,
              letterSpacing: '0.02em',
              textAlign: 'center',
              whiteSpace: 'nowrap',
            }}
          >
            {skill.name}
          </span>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent side="top">{skill.name}</TooltipContent>
    </Tooltip>
  );
}

export default function SkillsSection() {
  return (
    <TooltipProvider delayDuration={200}>
      <section id="skills" className="section-shell px-4 py-24 md:px-8">
        <motion.div
          className="mx-auto w-full max-w-6xl"
          variants={staggerParent}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          <SectionTitle
            eyebrow="Skills"
            title="A Full Spectrum"
            highlight="Engineering Stack"
            description="I work across frontend, backend, and deployment tooling to ship complete user experiences."
            align="center"
          />

          {/* Category panels */}
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => (
              <motion.article
                key={group.title}
                variants={riseIn}
                className="glass-panel rounded-3xl p-6"
              >
                {/* Category label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: group.accent,
                      boxShadow: `0 0 8px ${group.accent}`,
                      flexShrink: 0,
                    }}
                  />
                  <p
                    className="text-xs font-semibold uppercase tracking-[0.24em]"
                    style={{ color: group.accent }}
                  >
                    {group.title}
                  </p>
                </div>

                {/* Icon grid */}
                <motion.div
                  variants={staggerFast}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(70px, 1fr))',
                    gap: '0.5rem',
                  }}
                >
                  {group.items.map((skill, si) => (
                    <SkillIcon key={skill.iconKey} skill={skill} delay={si * 0.04} />
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
