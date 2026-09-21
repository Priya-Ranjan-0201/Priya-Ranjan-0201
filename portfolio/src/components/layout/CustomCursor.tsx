'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'button' | 'view' | 'open'>('default');
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    // Check if device has fine pointer (mouse/trackpad, not touch)
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Determine hover target
      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="view"]') || target.closest('.project-editorial-card') || target.closest('.connected-project-box')) {
        setCursorType('view');
      } else if (target.closest('[data-cursor="open"]') || target.closest('a[target="_blank"]')) {
        setCursorType('open');
      } else if (target.closest('button') || target.closest('a') || target.closest('.explore-domain-chip')) {
        setCursorType('button');
      } else {
        setCursorType('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  if (isTouch) return null;

  return (
    <div
      className={`custom-editorial-cursor ${cursorType}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      {cursorType === 'view' && <span className="cursor-label">VIEW</span>}
      {cursorType === 'open' && <span className="cursor-label">OPEN</span>}
    </div>
  );
}
