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

export function TensorFlowLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path
        d="M16 2 4 9v6l5 2.900V12l7-4 7 4v5.900L28 15V9zM11 20v6l5 3V17.500zm10 0-5-2.500V29l5-3z"
        fill="#ff7a00"
      />
      <path d="M16 12.500 13 14.300V20l3-1.700 3 1.700v-5.700z" fill="#ffa726" />
    </Logo>
  );
}

export function PyTorchLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path
        d="M22 4.500 20.500 6c3.600 3.600 3.600 9.500 0 13.100s-9.500 3.600-13.100 0S3.800 9.600 7.400 6L14 .5V5"
        fill="none"
        stroke="#ee4c2c"
        strokeWidth="2.600"
        strokeLinejoin="round"
        transform="translate(2 4)"
      />
      <circle cx="22.800" cy="7.500" r="2.400" fill="#ee4c2c" />
    </Logo>
  );
}

export function TypeScriptLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <rect x="2" y="2" width="28" height="28" rx="4" fill="#3178c6" />
      <text
        x="16"
        y="22"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#fff"
      >
        TS
      </text>
    </Logo>
  );
}

export function NodejsLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path d="M16 2 28 9v14L16 30 4 23V9z" fill="#5fa04e" />
      <text
        x="16"
        y="20.500"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="11"
        fill="#fff"
      >
        JS
      </text>
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

export function CPlusPlusLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path d="M16 2 28 9v14L16 30 4 23V9z" fill="#00599c" />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="9"
        fill="#fff"
      >
        C++
      </text>
    </Logo>
  );
}

export function CSharpLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path d="M16 2 28 9v14L16 30 4 23V9z" fill="#7a2d8f" />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="12"
        fill="#fff"
      >
        C#
      </text>
    </Logo>
  );
}

export function CLogo(props: LogoProps) {
  return (
    <Logo {...props}>
      <path d="M16 2 28 9v14L16 30 4 23V9z" fill="#4d7fc4" />
      <text
        x="16"
        y="20.5"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontWeight="700"
        fontSize="12"
        fill="#fff"
      >
        C
      </text>
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
