import algoTradingCover from '../assets/projects/algo-trading-sim.svg';
import clarioCover from '../assets/projects/clario.svg';
import imageContrastCover from '../assets/projects/image-contrast-enhancement.svg';
import nasCover from '../assets/projects/nas-vision-encoder.svg';
import pokeBattleScreenshot from '../assets/projects/poke-battle.png';
import portfolioCover from '../assets/projects/portfolio.svg';
import eventSphereCover from '../assets/projects/terp-eventsphere.svg';
import vibelyCover from '../assets/projects/vibely.svg';
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
    image: {
      src: pokeBattleScreenshot,
      alt: 'Poke Battle screenshot: Pikachu faces a wild Charizard in a pixel battle scene',
      fit: 'contain',
    },
  },
  {
    title: 'Terp EventSphere',
    dates: 'Sep – Dec 2025',
    description:
      'A microservices event platform with role-based access, waitlists and real-time QR check-in, built for 1,000+ concurrent users.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'Team project'],
    repo: 'https://github.com/joyson13/Terp-EventSphere',
    image: {
      src: eventSphereCover,
      alt: 'Illustration: an event ticket with a QR code, backed by three microservices',
      fit: 'cover',
    },
  },
  {
    title: 'Clario',
    description:
      'An AI file organizer that reads your files, finds how they relate, and sorts them into meaningful folders.',
    tech: ['React', 'Express', 'Claude API'],
    repo: `${GITHUB}/Clario`,
    image: {
      src: clarioCover,
      alt: 'Illustration: scattered files sorted by AI into neat folders',
      fit: 'cover',
    },
  },
  {
    title: 'Algo Trading Simulator',
    dates: 'Nov – Dec 2025',
    description:
      'A backtesting platform that scores 10 trading strategies on CAGR, Sharpe ratio and max drawdown.',
    tech: ['Python', 'FastAPI', 'React', 'Docker'],
    repo: `${GITHUB}/algo-trading-sim`,
    image: {
      src: algoTradingCover,
      alt: 'Illustration: a candlestick chart with a strategy equity curve',
      fit: 'cover',
    },
  },
  {
    title: 'Vibely',
    description:
      'An AI dating app that matches people on shared movies, shows and music instead of photos, with real-time chat.',
    tech: ['React', 'Node.js', 'Socket.IO', 'Gemini API', 'Team project'],
    repo: 'https://github.com/Nividhitha99/Vibly',
    image: {
      src: vibelyCover,
      alt: 'Illustration: two profiles matched by a heart, with music and film between them',
      fit: 'cover',
    },
  },
  {
    title: 'NAS Vision Encoder',
    dates: '2025',
    description:
      'Differentiable architecture search for leaner ViT-style vision encoders in multimodal models, landing at 13.8M params and 6.8 GFLOPs.',
    tech: ['PyTorch', 'DARTS/GDAS'],
    repo: `${GITHUB}/nas-vision-encoder`,
    image: {
      src: nasCover,
      alt: 'Illustration: image patches feeding a searched network with pruned nodes and a skip connection',
      fit: 'cover',
    },
  },
  {
    title: 'Image Contrast Enhancement',
    description:
      'Contrast enhancement with an exposure fusion framework, comparing the original method and a modified version on BRISQUE image quality.',
    tech: ['Python', 'OpenCV', 'Jupyter'],
    repo: `${GITHUB}/Image-Contrast-Enhancement-using-Exposure-Fusion-Framework`,
    image: {
      src: imageContrastCover,
      alt: 'Illustration: a landscape split into a dull half and an enhanced half',
      fit: 'cover',
    },
  },
  {
    title: 'Portfolio',
    description:
      'This site: my pixel night-sky portfolio, rebuilt in React, TypeScript and Tailwind CSS.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    repo: `${GITHUB}/Subiksha-Portfolio`,
    image: {
      src: portfolioCover,
      alt: 'Illustration: this portfolio in a browser window, with the pixel night scene',
      fit: 'cover',
    },
  },
];
