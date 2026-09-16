
import { type ReactNode,useEffect, useRef, useState } from 'react';

import styles from './atlas.module.css';

type RevealProps = {
  readonly children: ReactNode;
  readonly className?: string;
};

/** Scroll reveal. Reduced-motion users stay fully visible via CSS alone. */
export function Reveal({ children, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const classes = [styles.reveal, visible ? styles.revealVisible : '', className]
    .filter(Boolean)
    .join(' ');

  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
}
