import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

const ICE = '#eaf6ff';

export function GitHubIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={ICE} aria-hidden="true" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.05A9.4 9.4 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.42.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill={ICE} aria-hidden="true" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.83v1.57h.06c.53-1 1.84-2.07 3.79-2.07 4.05 0 4.8 2.66 4.8 6.12v5.88h-4v-5.2c0-1.24-.02-2.83-1.73-2.83-1.73 0-2 1.35-2 2.74v5.29h-4z" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="26"
      height="26"
      fill="none"
      stroke={ICE}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6.5L20.5 7" />
    </svg>
  );
}

interface ChevronProps extends IconProps {
  direction: 'left' | 'right';
}

export function ChevronIcon({ direction, ...props }: ChevronProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="22"
      height="22"
      fill="none"
      stroke={ICE}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={direction === 'left' ? 'M15 5l-7 7 7 7' : 'M9 5l7 7-7 7'} />
    </svg>
  );
}

/** Three stacked chevrons that pulse in sequence (see `.ch`). */
export function ScrollDownIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 40"
      width="26"
      height="42"
      fill="none"
      stroke="#ffffff"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path className="ch c1" d="M3 4l9 8 9-8" />
      <path className="ch c2" d="M3 16l9 8 9-8" />
      <path className="ch c3" d="M3 28l9 8 9-8" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="#0b2f57"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

export function CopyrightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="12" r="9.500" />
      <path d="M15.500 9.500A4.500 4.500 0 1 0 15.500 14.500" />
    </svg>
  );
}
