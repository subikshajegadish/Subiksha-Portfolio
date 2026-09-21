import type { ReactNode, SVGProps } from 'react';

type LogoProps = SVGProps<SVGSVGElement>;

/** 32x32 brand mark shown next to a skill. */
function Logo({ children, ...props }: LogoProps & { children: ReactNode }) {
  return (
    <svg viewBox="0 0 32 32" width="34" height="34" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

const SHAPES = {
  square: <rect x="2" y="2" width="28" height="28" rx="4" />,
  hexagon: <path d="M16 2 28 9v14L16 30 4 23V9z" />,
  circle: <circle cx="16" cy="16" r="14" />,
} as const;

interface BadgeProps extends LogoProps {
  shape: keyof typeof SHAPES;
  color: string;
  label: string;
  labelColor?: string;
  labelSize?: number;
}

/** Simple mark: a coloured shape with a short label, for tools without a drawn logo. */
function Badge({ shape, color, label, labelColor = '#fff', labelSize = 12, ...props }: BadgeProps) {
  return (
    <Logo {...props}>
      <g fill={color}>{SHAPES[shape]}</g>
      <text
        x="16"
        y={16 + labelSize * 0.43}
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize={labelSize}
        fill={labelColor}
      >
        {label}
      </text>
    </Logo>
  );
}

export function PythonLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path
        d="M15.9 3C10 3 10.4 5.6 10.4 5.6V8.3h5.6v.8H8.1S4 8.6 4 15s3.6 6.2 3.6 6.2h2.1v-3s-.1-3.6 3.5-3.6h6s3.4.1 3.4-3.3V6.4S23.2 3 15.9 3zm-3.3 2a1.1 1.1 0 1 1 0 2.200 1.1 1.1 0 0 1 0-2.200z"
        fill="#3d7ab8"
      />
      <path
        d="M16.100 29c5.900 0 5.500-2.600 5.500-2.600v-2.700H16v-.8h7.900S28 23.400 28 17s-3.600-6.200-3.600-6.200h-2.100v3s.1 3.600-3.500 3.600h-6s-3.400-.1-3.400 3.300v5.500S8.800 29 16.100 29zm3.300-2a1.100 1.100 0 1 1 0-2.200 1.100 1.100 0 0 1 0 2.200z"
        fill="#ffd43b"
      />
    </Logo>
  );
}

export function TypeScriptLogo(props: LogoProps) {
  return <Badge shape="square" color="#3178c6" label="TS" labelSize={14} {...props} />;
}

export function JavaScriptLogo(props: LogoProps) {
  return (
    <Badge
      shape="square"
      color="#f7df1e"
      label="JS"
      labelColor="#1a1a1a"
      labelSize={14}
      {...props}
    />
  );
}

export function CPlusPlusLogo(props: LogoProps) {
  return <Badge shape="hexagon" color="#00599c" label="C++" labelSize={9} {...props} />;
}

export function NodejsLogo(props: LogoProps) {
  return <Badge shape="hexagon" color="#5fa04e" label="JS" labelSize={11} {...props} />;
}

export function DjangoLogo(props: LogoProps) {
  return <Badge shape="square" color="#0c4b33" label="dj" labelSize={15} {...props} />;
}

export function ExpressLogo(props: LogoProps) {
  return (
    <Badge
      shape="square"
      color="#f2f2f2"
      label="ex"
      labelColor="#1a1a1a"
      labelSize={14}
      {...props}
    />
  );
}

export function PandasLogo(props: LogoProps) {
  return <Badge shape="square" color="#150458" label="pd" labelSize={14} {...props} />;
}

export function NumPyLogo(props: LogoProps) {
  return <Badge shape="hexagon" color="#4dabcf" label="np" labelSize={12} {...props} />;
}

export function JenkinsLogo(props: LogoProps) {
  return <Badge shape="circle" color="#d33833" label="J" labelSize={16} {...props} />;
}

export function PytestLogo(props: LogoProps) {
  return <Badge shape="square" color="#0a9edc" label="pt" labelSize={14} {...props} />;
}

export function FastAPILogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <circle cx="16" cy="16" r="14" fill="#009688" />
      <path d="M17.5 6 9.5 18h6l-1.5 8 8.5-12.5h-6z" fill="#fff" />
    </Logo>
  );
}

export function ScikitLearnLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <circle cx="12" cy="18" r="9" fill="#f89939" />
      <circle cx="21" cy="12" r="8" fill="#3499cd" />
    </Logo>
  );
}

export function OpenCVLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <g fill="none" strokeWidth="3.6">
        <circle cx="16" cy="9" r="5.5" stroke="#ff3b3b" />
        <circle cx="9" cy="21.5" r="5.5" stroke="#1fcf5a" />
        <circle cx="23" cy="21.5" r="5.5" stroke="#4d7cff" />
      </g>
    </Logo>
  );
}

export function LinuxLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <circle cx="16" cy="16" r="14" fill="#fcc624" />
      <ellipse cx="16" cy="17" rx="7" ry="9" fill="#1a1a1a" />
      <ellipse cx="16" cy="19.5" rx="4.5" ry="6" fill="#fff" />
      <path d="M14.5 12.5h3l-1.5 2z" fill="#fcc624" />
    </Logo>
  );
}

export function PostmanLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <circle cx="16" cy="16" r="14" fill="#ff6c37" />
      <path d="M10.5 21.5 19 13" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="21" cy="11" r="3" fill="#fff" />
    </Logo>
  );
}

export function ReactLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <g fill="none" stroke="#61dafb" strokeWidth="1.700">
        <ellipse cx="16" cy="16" rx="13" ry="5" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" transform="rotate(120 16 16)" />
      </g>
      <circle cx="16" cy="16" r="2.600" fill="#61dafb" />
    </Logo>
  );
}

export function JavaLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path d="M8 17h13v3a6 6 0 0 1-6 6h-1a6 6 0 0 1-6-6z" fill="#e76f00" />
      <path
        d="M21 18h2.500a2.500 2.500 0 0 1 0 5H20.500"
        fill="none"
        stroke="#e76f00"
        strokeWidth="1.800"
      />
      <path
        d="M13 3c3 3-2 4.500 1 7M17 5c2 2-1 3 1 5"
        fill="none"
        stroke="#5382a1"
        strokeWidth="1.600"
        strokeLinecap="round"
      />
      <rect x="8" y="27" width="13" height="1.800" rx=".9" fill="#5382a1" />
    </Logo>
  );
}

export function GitLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path d="M16 1.500 30.500 16 16 30.500 1.500 16z" fill="#f05033" />
      <g fill="#fff">
        <circle cx="12" cy="10.500" r="2" />
        <circle cx="12" cy="21.500" r="2" />
        <circle cx="20" cy="15.500" r="2" />
      </g>
      <path d="M12 12.500v7M12 12.500c0 3 8 0 8 1" fill="none" stroke="#fff" strokeWidth="1.600" />
    </Logo>
  );
}

export function DockerLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path
        d="M2 15h27c-.5-2-1.800-2.800-3-3-.2-1.500-1.500-2.500-1.500-2.500S22 11 23 13H2z"
        fill="#2496ed"
      />
      <path d="M2 15c0 6 4 10 11 10 8 0 12-4 14-9z" fill="#2496ed" />
      <g fill="#2496ed">
        <rect x="6" y="10" width="3.500" height="3.500" />
        <rect x="10" y="10" width="3.500" height="3.500" />
        <rect x="14" y="10" width="3.500" height="3.500" />
        <rect x="10" y="6" width="3.500" height="3.500" />
        <rect x="14" y="6" width="3.500" height="3.500" />
      </g>
    </Logo>
  );
}

export function AWSLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <text
        x="16"
        y="15"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#fff"
      >
        aws
      </text>
      <path
        d="M5 21c7 5 15 5 22 0"
        fill="none"
        stroke="#ff9900"
        strokeWidth="2.400"
        strokeLinecap="round"
      />
      <path
        d="M24 19.500l3.500 1.500-1.800 3.200"
        fill="none"
        stroke="#ff9900"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Logo>
  );
}

export function SQLLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <ellipse cx="16" cy="7" rx="11" ry="4" fill="#4aa3df" />
      <path
        d="M5 7v8c0 2.200 5 4 11 4s11-1.800 11-4V7c0 2.200-5 4-11 4S5 9.200 5 7z"
        fill="#2f7fb8"
      />
      <path
        d="M5 15v8c0 2.200 5 4 11 4s11-1.800 11-4v-8c0 2.200-5 4-11 4S5 17.200 5 15z"
        fill="#1f5f92"
      />
    </Logo>
  );
}
