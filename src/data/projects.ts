import type { Project } from '../types/content';

const GITHUB = 'https://github.com/subikshajegadish';

/** Projects shown in the carousel, most valuable and clearest first. */
export const PROJECTS: readonly Project[] = [
  {
    title: 'Poke Battle',
    description:
      'A Pokémon-style battle game where your attacks are ASL signs, recognised live from your webcam.',
    tech: ['React', 'Flask', 'Computer Vision', 'HopHacks 2026'],
    repo: `${GITHUB}/Poke-battle`,
  },
  {
    title: 'Terp EventSphere',
    dates: 'Sep – Dec 2025',
    description:
      'A microservices event platform with role-based access, waitlists and real-time QR check-in, built for 1,000+ concurrent users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Team project'],
    repo: 'https://github.com/joyson13/Terp-EventSphere',
  },
  {
    title: 'Clario',
    description:
      'An AI file organizer that reads your files, finds how they relate, and sorts them into meaningful folders.',
    tech: ['React', 'Express', 'Claude API'],
    repo: `${GITHUB}/Clario`,
  },
  {
    title: 'Algo Trading Simulator',
    dates: 'Nov – Dec 2025',
    description:
      'A backtesting platform that scores 10 trading strategies on CAGR, Sharpe ratio and max drawdown.',
    tech: ['Python', 'FastAPI', 'React', 'Docker'],
    repo: `${GITHUB}/algo-trading-sim`,
  },
  {
    title: 'Vibely',
    description:
      'An AI dating app that matches people on shared movies, shows and music instead of photos, with real-time chat.',
    tech: ['React', 'Node.js', 'Socket.IO', 'Gemini API', 'Team project'],
    repo: 'https://github.com/Nividhitha99/Vibly',
  },
  {
    title: 'NAS Vision Encoder',
    dates: '2025',
    description:
      'Differentiable architecture search for leaner ViT-style vision encoders in multimodal models, landing at 13.8M params and 6.8 GFLOPs.',
    tech: ['PyTorch', 'DARTS/GDAS'],
    repo: `${GITHUB}/nas-vision-encoder`,
  },
  {
    title: 'Image Contrast Enhancement',
    description:
      'Contrast enhancement with an exposure fusion framework, comparing the original method and a modified version on BRISQUE image quality.',
    tech: ['Python', 'OpenCV', 'Jupyter'],
    repo: `${GITHUB}/Image-Contrast-Enhancement-using-Exposure-Fusion-Framework`,
  },
  {
    title: 'Portfolio',
    description:
      'This site: my pixel night-sky portfolio, rebuilt in React, TypeScript and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    repo: `${GITHUB}/Subiksha-Portfolio`,
  },
];
