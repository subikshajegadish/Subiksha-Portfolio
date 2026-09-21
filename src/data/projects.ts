import type { Project } from '../types/content';

/** Projects shown in the carousel, in order. */
export const PROJECTS: readonly Project[] = [
  {
    title: 'OpenGit',
    bullets: [
      'A tool that surfaces newcomer-friendly open-source issues across repositories, scoring them on more than just the good-first-issue label.',
    ],
    tech: ['Open Source'],
    link: {
      label: 'github.com/subikshajegadish/open-git',
      href: 'https://github.com/subikshajegadish/open-git',
    },
  },
  {
    title: 'Poke Battle: Sign Language Learning Game',
    bullets: [
      'A Pokémon-style battle game where your attacks are signs: choose a move, sign the word to your webcam, and the game decides what happens.',
      'A pretrained sign-recognition video model (I3D, trained on WLASL) behind a Flask API recognises signs live in about two seconds on a laptop CPU, and only counts a sign as correct when it is genuinely confident.',
    ],
    tech: ['React', 'Vite', 'Flask', 'Computer Vision', 'HopHacks 2026'],
  },
  {
    title: 'Distributed Event Management System',
    dates: 'Sep – Dec 2025',
    bullets: [
      'Architected a scalable microservices-based event platform with JWT authentication, RBAC, and async notification workflows supporting 1000 + concurrent multi-role users',
      'Built RESTful APIs with Node.js + Express, PostgreSQL connection pooling, Docker, and real-time QR check-in via Socket.io, cutting check-in time to 90 sec',
    ],
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'Algorithmic Trading Strategy Simulator',
    dates: 'Nov – Dec 2025',
    bullets: [
      'Built a full-stack backtesting platform computing CAGR, Sharpe Ratio, and Max Drawdown across 10 strategies, exposed via FastAPI and an interactive React dashboard',
      'Containerized with Docker, cutting backtest runtime by 60%',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Docker'],
    link: {
      label: 'github.com/subikshajegadish/algo-trading-sim',
      href: 'https://github.com/subikshajegadish/algo-trading-sim',
    },
  },
  {
    title: 'Differentiable NAS for Optimizing Vision Encoders in Multimodal Models',
    dates: '2025',
    bullets: [
      'Implemented a DARTS-style NAS framework to optimize ViT-style vision encoders over depth, attention heads, MLP ratios, patch sizes, and skip connections',
      'Integrated multi-objective efficiency penalties (FLOPs, parameter count, visual token count) and validated on a filtered MSCOCO VQAv2 subset (309 Q&A across 50 images)',
      'Real-data search favored shallower architectures (6 layers vs 8) with more skip connections, achieving 13.8M params and 6.8 GFLOPs',
    ],
    tech: ['PyTorch', 'DARTS/GDAS'],
  },
];
