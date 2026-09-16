import type { ReactNode } from 'react';

type RevealProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

/** Wrapper kept for call sites. Fade-in hid above-the-fold copy. */
export function Reveal({ children, className }: RevealProps) {
  if (className) return <div className={className}>{children}</div>;
  return children;
}
