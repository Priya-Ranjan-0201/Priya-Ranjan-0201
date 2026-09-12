'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

/** Normalized mouse position (0-1) and pixel coordinates */
export interface MousePosition {
  x: number;
  y: number;
  normalizedX: number;
  normalizedY: number;
  centeredX: number;
  centeredY: number;
}

export function useMousePosition(): MousePosition {
  const [position, setPosition] = useState<MousePosition>({
    x: 0, y: 0,
    normalizedX: 0.5, normalizedY: 0.5,
    centeredX: 0, centeredY: 0,
  });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth;
      const ny = e.clientY / window.innerHeight;
      setPosition({
        x: e.clientX,
        y: e.clientY,
        normalizedX: nx,
        normalizedY: ny,
        centeredX: (nx - 0.5) * 2,
        centeredY: (ny - 0.5) * 2,
      });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return position;
}

/** Scroll velocity tracking */
export function useScrollVelocity(): number {
  const [velocity, setVelocity] = useState(0);
  const lastScroll = useRef(0);
  const lastTime = useRef(Date.now());

  useEffect(() => {
    const handleScroll = () => {
      const now = Date.now();
      const dt = now - lastTime.current;
      if (dt > 0) {
        const scrollY = window.scrollY;
        const v = Math.abs(scrollY - lastScroll.current) / dt;
        setVelocity(Math.min(v, 5));
        lastScroll.current = scrollY;
        lastTime.current = now;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return velocity;
}

/** Detect prefers-reduced-motion */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

/** Device capability detection */
export interface DeviceInfo {
  tier: 'high' | 'medium' | 'low' | 'minimal';
  mobile: boolean;
  touchDevice: boolean;
  webgl: boolean;
  webgl2: boolean;
  pixelRatio: number;
}

export function useDeviceCapability(): DeviceInfo {
  const [info, setInfo] = useState<DeviceInfo>({
    tier: 'medium',
    mobile: false,
    touchDevice: false,
    webgl: true,
    webgl2: true,
    pixelRatio: 1,
  });

  useEffect(() => {
    const mobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);

    // Test WebGL
    let webgl = false;
    let webgl2 = false;
    try {
      const canvas = document.createElement('canvas');
      const gl2 = canvas.getContext('webgl2');
      if (gl2) {
        webgl = true;
        webgl2 = true;
      } else {
        const gl = canvas.getContext('webgl');
        webgl = !!gl;
      }
    } catch {
      webgl = false;
    }

    // Determine tier
    let tier: DeviceInfo['tier'] = 'high';
    if (!webgl) {
      tier = 'minimal';
    } else if (mobile) {
      tier = pixelRatio > 2 ? 'medium' : 'low';
    } else {
      const cores = navigator.hardwareConcurrency || 4;
      if (cores <= 2) tier = 'low';
      else if (cores <= 4) tier = 'medium';
      else tier = 'high';
    }

    setInfo({ tier, mobile, touchDevice, webgl, webgl2, pixelRatio });
  }, []);

  return info;
}

/** Magnetic effect for buttons */
export function useMagneticEffect(ref: React.RefObject<HTMLElement | null>, strength: number = 0.3) {
  const handleMouseMove = useCallback((e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * strength;
    const dy = (e.clientY - cy) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [ref, strength]);

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0, 0)';
    el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)';
    setTimeout(() => {
      if (el) el.style.transition = '';
    }, 400);
  }, [ref]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, handleMouseMove, handleMouseLeave]);
}

/** Window dimensions */
export function useWindowSize() {
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const update = () => setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return size;
}

/** Intersection observer hook */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useInView(options?: IntersectionObserverInit): { ref: any; inView: boolean } {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, { threshold: 0.1, ...options });
    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, inView };
}
