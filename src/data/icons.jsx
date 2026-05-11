/**
 * icons.jsx — maps skill names to react-icons/si components + brand colors.
 * Import from here to keep Skills.jsx clean.
 */
import {
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss,
  SiFramer, SiGreensock, SiNodedotjs, SiPhp, SiMysql,
  SiPostgresql, SiSupabase, SiPython, SiCplusplus,
  SiVercel, SiNetlify, SiRailway, SiGit, SiTypescript, SiVite,
} from 'react-icons/si';

/**
 * Key = the `iconKey` stored in portfolio.js skill entries.
 * Each entry: { Icon component, brand color, label }
 */
export const SKILL_ICONS = {
  html5:       { Icon: SiHtml5,       color: '#E34F26', label: 'HTML5' },
  css3:        { Icon: SiCss,        color: '#1572B6', label: 'CSS3' },
  javascript:  { Icon: SiJavascript,  color: '#F7DF1E', label: 'JavaScript' },
  typescript:  { Icon: SiTypescript,  color: '#3178C6', label: 'TypeScript' },
  react:       { Icon: SiReact,       color: '#61DAFB', label: 'React.js' },
  tailwind:    { Icon: SiTailwindcss, color: '#06B6D4', label: 'Tailwind CSS' },
  framer:      { Icon: SiFramer,      color: '#6366f1', label: 'Framer Motion' },
  gsap:        { Icon: SiGreensock,   color: '#88CE02', label: 'GSAP' },
  nodejs:      { Icon: SiNodedotjs,   color: '#5FA04E', label: 'Node.js' },
  php:         { Icon: SiPhp,         color: '#777BB4', label: 'PHP' },
  mysql:       { Icon: SiMysql,       color: '#4479A1', label: 'MySQL' },
  postgresql:  { Icon: SiPostgresql,  color: '#4169E1', label: 'PostgreSQL' },
  supabase:    { Icon: SiSupabase,    color: '#3ECF8E', label: 'Supabase' },
  python:      { Icon: SiPython,      color: '#3776AB', label: 'Python' },
  cplusplus:   { Icon: SiCplusplus,   color: '#00599C', label: 'C++' },
  vercel:      { Icon: SiVercel,      color: '#E2E8F0', label: 'Vercel' },
  netlify:     { Icon: SiNetlify,     color: '#00C7B7', label: 'Netlify' },
  railway:     { Icon: SiRailway,     color: '#C8EA00', label: 'Railway' },
  git:         { Icon: SiGit,         color: '#F05032', label: 'Git' },
  vite:        { Icon: SiVite,        color: '#646CFF', label: 'Vite' },
  // C language — no Si icon, use styled fallback
  c:           { Icon: null,          color: '#A8B9CC', label: 'C' },
};
