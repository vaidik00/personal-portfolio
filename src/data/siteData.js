export const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const personalInfo = {
  name: 'Vaidik Patel',
  tagline: 'Building Modern Web Experiences',
  role: 'B.Tech IT Student | Frontend Engineering Enthusiast',
  location: 'Mumbai, India',
  email: 'vaidikpatel@example.com',
  college: 'K.J. Somaiya Institute of Technology (KJSIT), Mumbai',
  degree: 'B.Tech - Information Technology',
  availability: 'Open to internships and frontend collaborations',
  bioShort:
    'I design and build polished digital products with a strong focus on usability, motion, and frontend performance.',
  bioLong:
    'I am a B.Tech IT student at KJSIT Mumbai, passionate about user-centered web experiences. I am a fast learner, an active listener, and I enjoy experimenting with modern technologies to create meaningful and delightful products.',
  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/vaidik00', key: 'github' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/vaidikpatel', key: 'linkedin' },
    { label: 'X', href: 'https://x.com/vaidikpatel', key: 'x' },
    { label: 'Email', href: 'mailto:vaidikpatel@example.com', key: 'mail' },
  ],
};

export const aboutHighlights = [
  {
    title: 'User-Centered Mindset',
    description: 'Every UI decision starts with clarity, accessibility, and user comfort.',
  },
  {
    title: 'Fast Learner',
    description: 'I rapidly adapt to new stacks and patterns, then ship with confidence.',
  },
  {
    title: 'Active Listener',
    description: 'I ask the right questions and translate feedback into thoughtful interfaces.',
  },
  {
    title: 'Frontend Engineering',
    description: 'I love crafting smooth interactions, responsive layouts, and modern design systems.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    accent: 'var(--color-electric)',
    items: [
      { name: 'HTML5',         iconKey: 'html5' },
      { name: 'CSS3',          iconKey: 'css3' },
      { name: 'JavaScript',    iconKey: 'javascript' },
      { name: 'React.js',      iconKey: 'react' },
      { name: 'Tailwind CSS',  iconKey: 'tailwind' },
      { name: 'Framer Motion', iconKey: 'framer' },
      { name: 'GSAP',          iconKey: 'gsap' },
    ],
  },
  {
    title: 'Backend',
    accent: 'var(--color-soft-blue)',
    items: [
      { name: 'Node.js',    iconKey: 'nodejs' },
      { name: 'PHP',        iconKey: 'php' },
      { name: 'MySQL',      iconKey: 'mysql' },
      { name: 'PostgreSQL', iconKey: 'postgresql' },
      { name: 'Supabase',   iconKey: 'supabase' },
    ],
  },
  {
    title: 'Tools & Other',
    accent: 'var(--color-neon)',
    items: [
      { name: 'Python',  iconKey: 'python' },
      { name: 'C',       iconKey: 'c' },
      { name: 'C++',     iconKey: 'cplusplus' },
      { name: 'Vercel',  iconKey: 'vercel' },
      { name: 'Netlify', iconKey: 'netlify' },
      { name: 'Railway', iconKey: 'railway' },
      { name: 'Git',     iconKey: 'git' },
    ],
  },
];

export const projects = [
  {
    name: 'ApplyIQ',
    subtitle: 'AI Resume Intelligence Platform',
    description:
      'An AI-powered resume analyzer with resume roasting, skill enhancement suggestions, and interview tracking in a responsive productivity dashboard.',
    features: ['AI integration', 'Resume analysis', 'Skill enhancement', 'Interview tracking', 'Responsive dashboard'],
    techStack: ['React', 'Node.js', 'Supabase', 'Tailwind CSS', 'OpenAI API'],
    githubUrl: 'https://github.com/vaidik00/applyiq',
    liveUrl: '#',
    accent: 'linear-gradient(120deg, #6f5cff, #7ad0ff)',
  },
  {
    name: 'StudyBuddy',
    subtitle: 'Social Productivity Engine',
    description:
      'A social productivity platform where students maintain study streaks like Snapchat streaks through consistent sessions and friendly competition.',
    features: ['Pomodoro timer', 'Study streaks', 'Sleep detection camera', 'Social competition', 'Friend system'],
    techStack: ['React', 'Firebase', 'TensorFlow.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vaidik00/studybuddy',
    liveUrl: '#',
    accent: 'linear-gradient(120deg, #5dd1ff, #5ef1d0)',
  },
  {
    name: 'CampusCare',
    subtitle: 'Community Grievance Platform',
    description:
      'A campus grievance management system where students report issues using photos and videos, discuss solutions, and improve campus engagement.',
    features: ['Community issue tracking', 'Upload photos/videos', 'Open discussions', 'Campus engagement', 'User-generated reports'],
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Cloudinary', 'Tailwind CSS'],
    githubUrl: 'https://github.com/vaidik00/campuscare',
    liveUrl: '#',
    accent: 'linear-gradient(120deg, #7d78ff, #a29dff)',
  },
];

export const journeyTimeline = [
  {
    year: '2022',
    title: 'Started B.Tech IT at KJSIT Mumbai',
    detail: 'Began my engineering journey and built strong programming fundamentals through consistent practice.',
  },
  {
    year: '2023',
    title: 'Deep Dive Into Frontend',
    detail: 'Focused on JavaScript, React, and UI craftsmanship while shipping increasingly polished projects.',
  },
  {
    year: '2024',
    title: 'Full-Stack and Product Thinking',
    detail: 'Expanded into backend services, databases, and AI-driven workflows to build complete digital products.',
  },
  {
    year: '2025',
    title: 'Shipped Real-World Platforms',
    detail: 'Built ApplyIQ, StudyBuddy, and CampusCare with a focus on storytelling, usability, and smooth interactions.',
  },
];

export const achievements = [
  { label: 'Projects Built', value: 12, suffix: '+' },
  { label: 'Technologies Used', value: 15, suffix: '+' },
  { label: 'UI Prototypes Crafted', value: 35, suffix: '+' },
  { label: 'Hackathon / Team Builds', value: 8, suffix: '+' },
];

export const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Senior Frontend Engineer',
    quote:
      'Vaidik blends design sensitivity with engineering discipline. His interfaces feel intentional and production-ready.',
  },
  {
    name: 'Priya Mehta',
    role: 'Product Manager',
    quote:
      'He listens deeply, iterates fast, and consistently improves both UI quality and user flow clarity.',
  },
  {
    name: 'Arjun Nair',
    role: 'Hackathon Teammate',
    quote:
      'From concept to polished frontend, Vaidik can deliver fast without sacrificing smoothness or responsiveness.',
  },
];
