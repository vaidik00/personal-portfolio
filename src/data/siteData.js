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
    'AI-focused Information Technology student at KJ Somaiya Institute of Technology.',

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
      year: 'Sep 2022 – May 2025',
      title: 'Diploma in Computer Engineering',
      detail:
        'St. John College of Engineering and Management, Palghar, Maharashtra | Graduated with First Class Distinction, securing 89.09%. Built a strong foundation in software development, problem-solving, and emerging technologies while actively participating in technical competitions, research presentations, and hackathons.',
    },
    {
      year: 'Jun 2024 – Jul 2024',
      title: 'Android Development Intern — Accunity Services LLP',
      detail:
        'Worked remotely as an Android Development Intern, building scalable mobile applications using Kotlin. Implemented REST API integrations, local data storage, UI/UX improvements, debugging, and state management to deliver responsive and production-ready applications.',
    },
    {
      year: '20 Feb 2025',
      title: 'State-Level Paper Presentation Champion',
      detail:
        'Won first place at Bhausaheb Vartak Polytechnic College for presenting an IEEE-format research paper on the “Pros, Cons, and Future of AI & Large Language Models (LLMs).” The presentation focused on the real-world impact, opportunities, and ethical challenges of modern AI systems.',
    },
    {
      year: '21 Mar 2025',
      title: 'Winner — Presentania 2025',
      detail:
        'Secured another state-level victory at “Presentania” hosted by St. John College of Engineering and Management using the same IEEE research paper on AI and LLMs. Recognized for technical depth, presentation clarity, and innovative insights into the future of artificial intelligence.',
    },
    {
      year: 'Aug 2025 – Present',
      title: 'B.Tech in Information Technology',
      detail:
        'KJ Somaiya Institute of Technology, Mumbai, Maharashtra | Currently pursuing a Bachelor’s degree in Information Technology with a strong focus on AI-powered applications, full-stack development, and intelligent systems engineering.',
    },
    {
      year: '28 Mar 2026',
      title: 'Top 8 Finalist — Build-It ON Hackathon',
      detail:
        'Participated in “Build-It ON: AI for Social Impact & Sustainability” hosted by Thakur College of Engineering and Technology (TCET). Worked on solving the problem of gas shortages during crisis situations through an AI-driven smart distribution system. Out of 200+ participating teams, only 21 teams were shortlisted, and our team secured a Top 8 finalist position.',
    },
];

export const achievementsBoard = [
  {
    id: 1,
    title: 'State Champion - Technical Paper',
    organization: 'MSBTE',
    date: '2024',
    category: 'Achievements',
    image: '/achievements/cert_1.png',
    link: '#',
  },
  {
    id: 2,
    title: 'Top Finalist - State Hackathon',
    organization: 'Gasmitra Solutions',
    date: '2023',
    category: 'Achievements',
    image: '/achievements/hackathon.png',
    link: '#',
  },
  {
    id: 3,
    title: 'Machine Learning Basics',
    organization: 'Coursera',
    date: '2023',
    category: 'Certificates',
    image: '/achievements/cert_2.png',
    link: '#',
  },
];


