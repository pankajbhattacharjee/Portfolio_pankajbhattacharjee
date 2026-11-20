/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  THE ONLY FILE YOU NEED TO EDIT FOR TEXT CONTENT             ║
 * ║  (images live in /public – see README.md)                    ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/* ───────────── 1. BASIC INFO ───────────── */
export const SITE = {
  name: 'Pankaj Bhattacharjee', // shown in navbar, footer, hero, about
  pageTitle: 'Pankaj Bhattacharjee – Python Developer & AI/ML Engineer', // browser tab title
  role: 'Python Developer | AI/ML Engineer', // footer subtitle
  email: 'pankajbhattacharjee634@gmail.com',
  // digits only, with country code, no + or spaces (e.g. 919876543210)
  phone: '919564287282',
  whatsappMessage: 'Hi Pankaj, I visited your portfolio and would like to get in touch.',
  available: true,
};

/* ───────────── 2. HERO (top of page) ───────────── */
export const HERO = {
  eyebrow: 'BACKEND ENGINEERING • GENERATIVE AI',
  headline: 'PANKAJ BHATTACHARJEE', // big text, use CAPS
  roles: ['PYTHON DEVELOPER', 'AI/ML ENGINEER'] as [string, string],
  tagline: 'I build scalable FastAPI backends and AI-powered applications that turn real problems into working products.',
  primaryButton: 'EXPLORE MY WORK',
  secondaryButton: 'Get In Touch',
  image: '/assets/hero-red-bg.jpg', // 1920x1080, subject on the RIGHT side
  imageAlt: 'Portrait of Pankaj Bhattacharjee',
  imagePosition: '69% center', // CSS object-position fallback
};

/* ───────────── 3. LOADING SCREEN ───────────── */
export const LOADER = {
  statement: 'ENGINEERING INTELLIGENT SOLUTIONS, BUILDING POWERFUL APPLICATIONS AND TURNING IDEAS INTO REALITY WITH PYTHON, AI & TECHNOLOGY',
  redWords: ['INTELLIGENT', 'REALITY'], // words highlighted in red
};

/* ───────────── 4. ABOUT ───────────── */
export const ABOUT = {
  eyebrow: 'Python Developer · AI/ML Engineer · Backend Developer',
  portrait: '/media/profile.webp', // 4:5 portrait photo
  portraitAlt: 'Portrait of Pankaj Bhattacharjee',
  portraitCaption: 'Python Developer | AI/ML Engineer', // small red text under the name on the photo
  paragraphs: [
    "I'm a Computer Science and Engineering undergraduate (class of 2027) focused on backend engineering, machine learning, and generative AI. I build REST APIs, RAG systems, AI agents, and data-driven applications, and I've shipped more than 11 projects end to end.",
    'I care about clean, testable code and solving real problems rather than chasing trends. I am looking for opportunities and freelance projects where I can build backend and AI products that people actually use.',
  ],
  technologies: ['Python', 'FastAPI', 'Machine Learning', 'Generative AI & LLMs', 'SQL & PostgreSQL', 'Docker & Git'],
  focus: [
    'Backend & Full-Stack Engineering',
    'Artificial Intelligence & Generative AI',
    'Automation & Data Engineering',
  ],
};

/* ───────────── 5. SOCIAL LINKS (footer) ───────────── */
export const SOCIALS = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/pankajbhattacharjee' },
  { id: 'linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/pankaj-bhattacharjee-475b86325' },
] as const;

/* ───────────── 6. TECHNICAL SKILLS (6 cards look best) ───────────── */
export const SKILL_CARDS: { name: string; category: string; level: string }[] = [
  { name: 'Python Programming', category: 'Python · Automation · Scripting', level: 'Advanced' },
  { name: 'Machine Learning & AI', category: 'Scikit-learn · TensorFlow · PyTorch', level: 'Proficient' },
  { name: 'FastAPI & REST APIs', category: 'FastAPI · Flask · JWT', level: 'Proficient' },
  { name: 'SQL & Databases', category: 'PostgreSQL · SQLite · Firebase', level: 'Proficient' },
  { name: 'Generative AI & LLMs', category: 'LangChain · LangGraph · RAG', level: 'Proficient' },
  { name: 'Git, GitHub & Docker', category: 'GitHub Actions · CI/CD · Docker', level: 'Proficient' },
];

/* ───────────── 6b. TECH STACK STRIP (logos under the skills) ─────────────
 * Use names with a built-in logo: React, JavaScript, Python, FastAPI, PostgreSQL,
 * Supabase, SQLite, Three.js, GSAP. Any other name still shows as a lettered badge. */
export const TECH_STACK: string[] = [
  'Python',
  'FastAPI',
  'Flask',
  'PostgreSQL',
  'SQLite',
  'React',
  'JavaScript',
  'TypeScript',
  'Next.js',
  'Docker',
  'PyTorch',
  'TensorFlow',
  'Scikit-learn',
  'LangChain',
  'LangGraph',
  'Hugging Face',
  'FAISS',
  'ChromaDB',
  'Firebase',
  'AWS S3',
  'Git',
  'GitHub Actions',
  'Streamlit',
  'Selenium',
  'Pytest',
];

/* ───────────── 7. PROJECTS ─────────────
 * Thumbnails: put project-<n>-1.jpg, -2.jpg, -3.jpg in /public/assets/thumbnails/
 * (card cycles through 1-3). Set poster to the "-1.jpg" file.
 * Add liveUrl / repoUrl to show "View Live" / "View Code" buttons.
 * 6 or 9 projects fill the 3D grid best. */
export interface Project {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  videoUrl?: string;
  embedUrl?: string;
  driveUrl?: string;
  liveUrl?: string;
  repoUrl?: string;
  kind?: 'video' | 'software';
  poster?: string;
  description?: string;
  tags?: string[];
}

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'crawl-console',
    kind: 'software',
    title: 'Crawl Console',
    subtitle: 'CLI-driven AI chat crawler',
    category: 'Generative AI',
    poster: '/assets/thumbnails/project-1-1.jpg',
    description:
      'A web crawler you control with natural-language commands, backed by FastAPI and Google Gemini. It runs crawls through CLI subprocesses, returns validated JSON, and stores results in AWS S3.',
    tags: ['Python', 'FastAPI', 'Gemini API', 'AWS S3', 'Docker'],
    liveUrl: 'https://cli-chat-crawler.onrender.com',
    repoUrl: 'https://github.com/pankajbhattacharjee/cli-chat-crawler',
  },
  {
    id: 'enterprise-ai-assistant',
    kind: 'software',
    title: 'Enterprise AI Assistant',
    subtitle: 'Knowledge management with RAG',
    category: 'Generative AI',
    poster: '/assets/thumbnails/project-2-1.jpg',
    description:
      'An assistant that answers natural-language questions from company documents using retrieval-augmented generation. I built the LangGraph workflow, FAISS retrieval, and JWT-secured FastAPI backend on PostgreSQL.',
    tags: ['FastAPI', 'LangGraph', 'FAISS', 'PostgreSQL', 'JWT'],
    liveUrl: 'https://enterprise-ai-assistant-8z3g6yvmrkdsr7zkmwbep9.streamlit.app/',
    repoUrl: 'https://github.com/pankajbhattacharjee/Enterprise-AI-Assistant',
  },
  {
    id: 'taskflow-ai',
    kind: 'software',
    title: 'TaskFlow',
    subtitle: 'AI-powered task management',
    category: 'Full-Stack',
    poster: '/assets/thumbnails/project-3-1.jpg',
    description:
      'A full-stack task manager that uses LLMs to prioritize work and suggest realistic deadlines. It includes JWT authentication, a React dashboard, a mock AI fallback, and a GitHub Actions CI/CD pipeline.',
    tags: ['Flask', 'React', 'OpenAI', 'Gemini API', 'GitHub Actions'],
    repoUrl: 'https://github.com/pankajbhattacharjee/smart-task-ai',
  },
  {
    id: 'keystroke-dynamics-authentication',
    kind: 'software',
    title: 'Keystroke Dynamics Authentication',
    subtitle: 'Behavioral biometric login',
    category: 'Machine Learning',
    poster: '/assets/thumbnails/project-4-1.jpg',
    description:
      'An authentication system that identifies users by their typing patterns using an LSTM model in PyTorch. It reached 80.95% accuracy and a 0.867 ROC-AUC, and is served through a FastAPI access-control layer.',
    tags: ['PyTorch', 'LSTM', 'FastAPI', 'PostgreSQL', 'Docker'],
    repoUrl: 'https://github.com/pankajbhattacharjee/keystroke-dynamics-authentication',
  },
  {
    id: 'grid07-cognitive-routing-rag',
    kind: 'software',
    title: 'Grid07 – AI Cognitive Loop',
    subtitle: 'Persona routing and RAG engine',
    category: 'Generative AI',
    poster: '/assets/thumbnails/project-5-1.jpg',
    description:
      'A three-phase AI system with vector-based persona routing, an autonomous LangGraph content engine, and a RAG reply engine. It defends against prompt injection with three layers and runs fully offline with a mock LLM.',
    tags: ['LangGraph', 'ChromaDB', 'RAG', 'Prompt Security', 'Ollama'],
    repoUrl: 'https://github.com/pankajbhattacharjee/Cognitive-Routing-RAG',
  },
  {
    id: 'airline-booking-automation-testing',
    kind: 'software',
    title: 'Airline Booking Automation Testing',
    subtitle: 'End-to-end test automation framework',
    category: 'Automation & Testing',
    poster: '/assets/thumbnails/project-6-1.jpg',
    description:
      'An automated regression framework for airline booking workflows built with Selenium and Pytest. Its 64 test cases found 3 defects and improved regression testing efficiency by 62%, with GitHub Actions running them on every push.',
    tags: ['Selenium', 'Pytest', 'Flask', 'GitHub Actions'],
    repoUrl: 'https://github.com/pankajbhattacharjee/ai-augmented-sdet-framework',
  },
  {
    id: 'ai-content-marketing-optimizer',
    kind: 'software',
    title: 'AI Content Marketing Optimizer',
    subtitle: 'Content analytics and A/B testing',
    category: 'NLP',
    poster: '/assets/thumbnails/project-7-1.jpg',
    description:
      'Built during my Infosys Springboard AI internship, it uses transformer-based classification, sentiment analysis, and A/B testing to improve content performance. It reached about 86% classification performance and a 24% engagement lift in experiments.',
    tags: ['NLP', 'Transformers', 'Gemini API', 'Google Sheets API', 'Slack API'],
    repoUrl: 'https://github.com/pankajbhattacharjee/AI-Based-Automated-Content-Marketing-Optimizer',
  },
  {
    id: 'bitcoin-sentiment-trader-analysis',
    kind: 'software',
    title: 'Bitcoin Sentiment vs Trader Performance',
    subtitle: 'Market sentiment data analysis',
    category: 'Data Analysis',
    poster: '/assets/thumbnails/project-8-1.jpg',
    description:
      'An analysis of how the Bitcoin Fear & Greed Index relates to Hyperliquid trader profitability and risk-taking. It includes data cleaning, feature engineering, an interactive HTML dashboard, and a CI pipeline with Flake8 and Bandit checks.',
    tags: ['Pandas', 'Scikit-learn', 'Matplotlib', 'GitHub Actions', 'Vercel'],
    liveUrl: 'https://primetrade-assignment-o3kh1f8tl-pankajbhattacharjees-projects.vercel.app',
    repoUrl: 'https://github.com/pankajbhattacharjee/primetrade-assignment',
  },
  {
    id: 'fraud-detection-system',
    kind: 'software',
    title: 'Fraud Detection System',
    subtitle: 'ML-based transaction screening',
    category: 'Machine Learning',
    poster: '/assets/thumbnails/project-9-1.jpg',
    description:
      'A classifier that flags potentially fraudulent financial transactions, using SMOTE to handle class imbalance and a Random Forest model. It reaches 91% accuracy and ships with an interactive Streamlit dashboard.',
    tags: ['Scikit-learn', 'Random Forest', 'SMOTE', 'Streamlit'],
    repoUrl: 'https://github.com/pankajbhattacharjee/FraudDetectionProject',
  },
];

/* ───────────── 8. SERVICES & PRICING ───────────── */
export const SERVICES_PRICING = [
  { id: 'service-1', title: 'Python Development & Automation', priceLabel: 'Starts from', price: '₹1,499', featured: true },
  { id: 'service-2', title: 'REST API Development (FastAPI / Flask)', priceLabel: 'Starts from', price: '₹2,499', featured: false },
  { id: 'service-3', title: 'AI Chatbot & LLM Integration', priceLabel: 'Starts from', price: '₹3,999', featured: false },
  { id: 'service-4', title: 'Machine Learning Model Development', priceLabel: 'Starts from', price: '₹3,999', featured: false },
  { id: 'service-5', title: 'Full-Stack Web Application Development', priceLabel: 'Starts from', price: '₹5,999', featured: false },
] as const;

/* ───────────── 9. HEADLINE NUMBERS (under hero) ───────────── */
export const CLIENT_STATS = [
  { id: 'stat-1', value: 11, suffix: '+', label: 'Projects Built' },
  { id: 'stat-2', value: 25, suffix: '+', label: 'Technologies Used' },
  { id: 'stat-3', value: 5, suffix: '', label: 'Services Offered' },
] as const;

/* Derived – do not edit */
export const WHATSAPP_URL = `https://wa.me/${SITE.phone}?text=${encodeURIComponent(SITE.whatsappMessage)}`;