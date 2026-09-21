import type { ReactNode } from 'react';

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border-3 border-white px-5 py-2 font-pixel text-[16px] font-medium tracking-[0.14em] text-ice uppercase">
      {children}
    </span>
  );
}
