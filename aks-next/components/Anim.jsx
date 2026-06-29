'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Mount once per page. Wires GSAP ScrollTrigger to elements tagged with
// data-parallax (overscan images) and data-progress-fill (the how-we-work line).
export default function Anim() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      // Parallax — image drifts within its overscanned, clipped container.
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const amt = parseFloat(el.getAttribute('data-parallax')) || 12;
        const trigger = el.closest('[data-parallax-trigger]') || el.parentElement;
        gsap.fromTo(
          el,
          { yPercent: -amt },
          {
            yPercent: amt,
            ease: 'none',
            scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true },
          }
        );
      });

      // How-we-work scroll progress line.
      gsap.utils.toArray('[data-progress-fill]').forEach((fill) => {
        const track = fill.closest('[data-progress-track]') || fill.parentElement;
        gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            transformOrigin: 'top',
            scrollTrigger: { trigger: track, start: 'top center', end: 'bottom center', scrub: true },
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);
  return null;
}
