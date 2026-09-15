import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Matches --ease-out in the global token sheet so JS and CSS motion agree.
export const EASE = 'cubic-bezier(0.23, 1, 0.32, 1)';

export { gsap, ScrollTrigger };
