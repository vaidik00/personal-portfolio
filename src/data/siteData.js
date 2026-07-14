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
  email: 'vaidikdholu2@gmail.com',
  college: 'K.J. Somaiya Institute of Technology (KJSIT), Mumbai',
  degree: 'B.Tech - Information Technology',
  availability: 'Open to internships and frontend collaborations',
  bioShort:
    'AI-assisted Information Technology student at KJ Somaiya Institute of Technology.',

  socialLinks: [
    { label: 'GitHub', href: 'https://github.com/vaidik00', key: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaidik-patel-524979388?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', key: 'linkedin' },
    { label: 'Email', href: 'mailto:vaidikdholu2@gmail.com', key: 'mail' },
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
      { name: 'React', iconKey: 'react' },
      { name: 'Next.js', iconKey: 'nextjs' },
      { name: 'TypeScript', iconKey: 'typescript' },
      { name: 'JavaScript', iconKey: 'javascript' },
      { name: 'Tailwind CSS', iconKey: 'tailwind' },
      { name: 'Framer Motion', iconKey: 'framer' },
    ],
  },
  {
    title: 'Backend',
    accent: 'var(--color-soft-blue)',
    items: [
      { name: 'FastAPI', iconKey: 'fastapi' },
      { name: 'Node.js', iconKey: 'nodejs' },
      { name: 'PHP', iconKey: 'php' },
      { name: 'REST APIs', iconKey: 'api' },
    ],
  },
  {
    title: 'AI / ML',
    accent: 'var(--color-neon)',
    items: [
      { name: 'Scikit-Learn', iconKey: 'scikit' },
      { name: 'Pandas', iconKey: 'pandas' },
      { name: 'NumPy', iconKey: 'numpy' },
      { name: 'spaCy', iconKey: 'spacy' },
      { name: 'NLP', iconKey: 'nlp' },
      { name: 'Sentence Transformers', iconKey: 'huggingface' },
    ],
  },
  {
    title: 'Databases',
    accent: 'var(--color-electric)',
    items: [
      { name: 'PostgreSQL', iconKey: 'postgresql' },
      { name: 'SQLite', iconKey: 'sqlite' },
      { name: 'Prisma', iconKey: 'prisma' },
      { name: 'Supabase', iconKey: 'supabase' },
    ],
  },
  {
    title: 'Dev Tools & Platforms',
    accent: 'var(--color-soft-blue)',
    items: [
      { name: 'Git', iconKey: 'git' },
      { name: 'Docker', iconKey: 'docker' },
      { name: 'GitHub', iconKey: 'github' },
      { name: 'Vercel', iconKey: 'vercel' },
      { name: 'Postman', iconKey: 'postman' },
    ],
  },
];

export const projects = [
  {
    name: 'ApplyIQ',
    subtitle: 'AI Resume Intelligence Platform',
    description:
      'An AI-assisted resume analyzer with resume roasting, skill enhancement suggestions, and interview tracking in a responsive productivity dashboard.',
    features: ['AI integration', 'Resume analysis', 'Skill enhancement', 'Interview tracking', 'Responsive dashboard'],
    techStack: ['React', 'Node.js', 'Supabase', 'Tailwind CSS', 'OpenAI API'],
    githubUrl: 'https://github.com/vaidik00/apply-iq.git',
    liveUrl: 'https://apply-iq-nu.vercel.app/',
    accent: 'linear-gradient(120deg, #6f5cff, #7ad0ff)',
    image: '/projects/apply-iq.png',
    tag: 'Personal',
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
    image: '/projects/studybuddy.jpg',
    tag: 'Personal',
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
    image: '/projects/campuscare.jpg',
    tag: 'Personal',
  },
  {
    name: 'Vaidik Enterprises',
    subtitle: 'Freelance — Corporate Website',
    description:
      'Full corporate website for a premium civil construction firm operating across the Mumbai Metropolitan Region. Features a multi-page SPA with a filterable project portfolio, 8-step process showcase, services breakdown, and WhatsApp/call CTAs — all tailored to convert high-value construction leads.',
    features: ['Multi-page SPA', 'Filterable project portfolio', 'Services showcase', 'Process timeline', 'WhatsApp & Call CTAs'],
    techStack: ['React', 'React Router', 'Tailwind CSS', 'Vercel'],
    githubUrl: '#',
    liveUrl: 'https://vaidik-enterprises.vercel.app/',
    accent: 'linear-gradient(120deg, #1a3a5c, #c9972d)',
    image: '/projects/vaidik-enterprises.jpg',
    tag: 'Freelance',
    client: 'Vaidik Enterprises (Narotam M. Dholu)',
    domain: 'Civil Construction & Real Estate',
  },
];

export const journeyTimeline = [
  {
    year: 'Sep 2022 – May 2025',
    title: 'Diploma in Computer Engineering',
    detail:
      'Completed Diploma at St. John College with First Class Distinction (89.09%) and active participation in tech events.',
  },
  {
    year: 'Jun 2024 – Jul 2024',
    title: 'Android Development Intern — Accunity Services LLP',
    detail:
      'Developed Android applications using Kotlin with API integration, local storage, and UI improvements.',
  },
  {
    year: '20 Feb 2025',
    title: 'State-Level Paper Presentation Champion',
    detail:
      'Won 1st place for presenting an IEEE research paper on AI and Large Language Models (LLMs).',
  },
  {
    year: '21 Mar 2025',
    title: 'Winner — Presentania 2025',
    detail:
      'Secured another state-level win for presenting the AI & LLM IEEE research paper.',
  },
  {
    year: 'Aug 2025 – Present',
    title: 'B.Tech in Information Technology',
    detail:
      'Currently pursuing B.Tech at KJ Somaiya Institute of Technology with a focus on AI and full-stack development.',
  },
  {
    year: '28 Mar 2026',
    title: 'Top 8 Finalist — Build-It ON Hackathon',
    detail:
      'Reached Top 8 among 200+ teams with an AI-driven smart gas distribution solution.',
  },
];

export const achievementsBoard = [
  {
    id: 1,
    title: 'State-Level Paper Presentation Champion',
    organization: 'Bhausaheb Vartak Polytechnic',
    date: 'Feb 2025',
    category: 'Achievements',
    image: '/achievements/Vartak-winner.jpg',
    link: '#',
  },
  {
    id: 2,
    title: 'Winner — Presentania 2025',
    organization: 'St. John College of Eng. & Mgmt.',
    date: 'Mar 2025',
    category: 'Achievements',
    image: '/achievements/SJCEM-Winner.jpg',
    link: '#',
  },
  {
    id: 3,
    title: 'Top 8 Finalist — Build-It ON Hackathon',
    organization: 'TCET',
    date: 'Mar 2026',
    category: 'Achievements',
    image: '/achievements/TCET-Top8.jpg',
    link: '#',
  },
  {
    id: 4,
    title: 'Android Development Internship',
    organization: 'Accunity Services LLP',
    date: 'Jul 2024',
    category: 'Certificates',
    image: '/achievements/Internship-Certificate.jpg',
    link: '#',
  },
  {
    id: 5,
    title: 'Introduction to Generative AI',
    organization: 'Google Skills',
    date: 'Jun 2026',
    category: 'Certificates',
    image: '/achievements/Google-GenAI-Badge.png',
    link: 'https://www.skills.google/public_profiles/e6a838f7-1511-4aad-ade9-b8883d55e114/badges/24868651',
  },
  {
    id: 6,
    title: 'Working in a Digital World: Professional Skills',
    organization: 'IBM SkillsBuild',
    date: 'Recent',
    category: 'Certificates',
    image: '/achievements/IBM-Professional-Skills.png',
    link: 'https://www.credly.com/badges/5b58180a-d54c-4468-bf06-e17aebff370d',
  },
  {
    id: 7,
    title: 'AI Fundamentals: Foundations for Understanding AI',
    organization: 'IBM SkillsBuild',
    date: 'Recent',
    category: 'Certificates',
    image: '/achievements/IBM-AI-Fundamentals.png',
    link: 'https://www.credly.com/badges/175dc403-6b89-44e0-879b-0df8499bf686',
  },
];


