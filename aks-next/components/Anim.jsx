'use client';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/*
  Scroll-driven section transitions (GSAP + ScrollTrigger), awwwards-agency feel.
  Tag markup with data-attributes — no per-element JS needed:

    <h2 data-reveal="heading">Line one<br/>Line two</h2>      line-by-line clip reveal
    <p  data-reveal="fade-up">…</p>                           fade + rise on enter
    <div data-stagger> <div data-reveal-item/>… </div>        children cascade in
    <span data-count>150 GWh+</span>                          count-up, keeps suffix
    <div data-marquee><div>…</div></div>                      infinite horizontal loop
    <section data-pin-stack> <div data-stack-card/>… </section> pinned scrub stack
    <img data-parallax="img" />                               scale 1.1→1 on scroll
    <img data-parallax="12" class="parallax-img" />           overscan y-translate (depth)
    <span data-progress-fill> inside [data-progress-track]    scrubbed scaleY line

  initScrollAnimations(root) is idempotent (skips already-initialised nodes) and
  returns a cleanup fn. Reduced-motion: animations are skipped, final state shown.
*/

const EASE = 'power3.out';
const DUR = 0.9;
const DONE = 'data-anim-done';

let splitTextPromise;
function loadSplitText() {
  if (!splitTextPromise) {
    splitTextPromise = import('gsap/SplitText')
      .then((m) => {
        const ST = m.SplitText || m.default;
        gsap.registerPlugin(ST);
        return ST;
      })
      .catch(() => null);
  }
  return splitTextPromise;
}

export function initScrollAnimations(root = document) {
  if (typeof window === 'undefined') return () => {};
  gsap.registerPlugin(ScrollTrigger);

  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // FOUC guard sets html.has-anim (hides initial states). With reduced motion we
  // just drop the guard so everything is visible and skip all animation.
  if (reduce) {
    document.documentElement.classList.remove('has-anim');
    return () => {};
  }

  // DOM restores so the module survives React StrictMode's mount→unmount→mount
  // (cleanup fully reverts splits/marquee/counts; re-init then runs clean).
  const restores = [];

  const ctx = gsap.context(() => {
    const q = (sel) => gsap.utils.toArray(root.querySelectorAll(sel)).filter((el) => !el.hasAttribute(DONE));
    const mark = (el) => el.setAttribute(DONE, '');
    const clearWill = (els) => gsap.set(els, { clearProps: 'willChange' });

    /* 1 — fade-up */
    q('[data-reveal="fade-up"]').forEach((el) => {
      mark(el);
      gsap.fromTo(el, { opacity: 0, y: 48, willChange: 'transform,opacity' }, {
        opacity: 1, y: 0, duration: DUR, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none', once: true },
        onComplete: () => clearWill(el),
      });
    });

    /* 2 — staggered children */
    q('[data-stagger]').forEach((container) => {
      mark(container);
      const items = container.querySelectorAll('[data-reveal-item]').length
        ? container.querySelectorAll('[data-reveal-item]')
        : container.children;
      gsap.fromTo(items, { opacity: 0, y: 48, willChange: 'transform,opacity' }, {
        opacity: 1, y: 0, duration: DUR, ease: EASE, stagger: 0.08,
        scrollTrigger: { trigger: container, start: 'top 85%', toggleActions: 'play none none none', once: true },
        onComplete: () => clearWill(items),
      });
    });

    /* 3 — heading: line-by-line clip reveal (SplitText, manual fallback) */
    const headings = q('[data-reveal="heading"]');
    headings.forEach((el) => mark(el));
    if (headings.length) {
      loadSplitText().then((ST) => {
        ctx.add(() => {
          headings.forEach((el) => {
            const orig = el.innerHTML;
            let lines;
            if (ST) {
              const split = new ST(el, { type: 'lines', linesClass: 'line-inner' });
              split.lines.forEach((ln) => {
                const mask = document.createElement('span');
                mask.className = 'line-mask';
                ln.parentNode.insertBefore(mask, ln);
                mask.appendChild(ln);
              });
              lines = split.lines;
              restores.push(() => { try { split.revert(); } catch (e) { el.innerHTML = orig; } el.style.opacity = ''; });
            } else {
              lines = manualSplitLines(el); // returns .line-inner inside .line-mask
              restores.push(() => { el.innerHTML = orig; el.style.opacity = ''; });
            }
            el.style.opacity = '1';
            gsap.fromTo(lines, { yPercent: 110 }, {
              yPercent: 0, duration: 1.0, ease: EASE, stagger: 0.12,
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none', once: true },
            });
          });
          ScrollTrigger.refresh();
        });
      });
    }

    /* 4 — marquee: seamless infinite loop + scroll-velocity boost */
    q('[data-marquee]').forEach((wrap) => {
      mark(wrap);
      const track = wrap.firstElementChild;
      if (!track) return;
      track.classList.add('marquee-track');
      // duplicate content until track is at least 2× viewport so the loop is seamless
      const original = track.innerHTML;
      restores.push(() => { track.innerHTML = original; track.classList.remove('marquee-track'); track.style.transform = ''; });
      let guard = 0;
      while (track.scrollWidth < wrap.offsetWidth * 2 && guard++ < 10) track.innerHTML += original;
      const half = track.scrollWidth / 2;
      const speed = parseFloat(wrap.getAttribute('data-marquee-speed')) || 40; // px/s
      const tween = gsap.to(track, { x: -half, duration: half / speed, ease: 'none', repeat: -1,
        modifiers: { x: (x) => `${parseFloat(x) % half}px` } });
      // velocity boost: faster scroll → brief speed-up, eased back to 1
      const boost = gsap.quickTo(tween, 'timeScale', { duration: 0.4, ease: EASE });
      ScrollTrigger.create({
        trigger: wrap, start: 'top bottom', end: 'bottom top',
        onUpdate: (self) => boost(1 + Math.min(Math.abs(self.getVelocity()) / 1200, 3)),
      });
    });

    /* 5 — pin-stack: pinned, scrubbed sequence of cards */
    q('[data-pin-stack]').forEach((section) => {
      mark(section);
      const cards = section.querySelectorAll('[data-stack-card]');
      if (!cards.length) return;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: section, start: 'top top', end: `+=${cards.length * 60}%`, scrub: true, pin: true, anticipatePin: 1 },
      });
      cards.forEach((card, i) => {
        gsap.set(card, { willChange: 'transform,opacity' });
        tl.fromTo(card, { yPercent: 12, scale: 0.96, opacity: 0 }, { yPercent: 0, scale: 1, opacity: 1, ease: 'none' }, i);
        if (i < cards.length - 1) tl.to(card, { opacity: 0.25, scale: 0.97, ease: 'none' }, i + 0.85);
      });
    });

    /* 6 — count-up (keeps +/k/% and comma formatting) */
    q('[data-count]').forEach((el) => {
      mark(el);
      const raw = el.textContent.trim();
      const m = raw.match(/^([\d.,]+)(.*)$/s);
      if (!m) return;
      restores.push(() => { el.textContent = raw; });
      const hasComma = m[1].includes(',');
      const target = parseFloat(m[1].replace(/,/g, ''));
      const decimals = (m[1].split('.')[1] || '').length;
      const suffix = m[2];
      const obj = { v: 0 };
      gsap.to(obj, {
        v: target, duration: 1.6, ease: EASE,
        scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        onUpdate: () => {
          const n = decimals ? obj.v.toFixed(decimals) : Math.round(obj.v);
          el.textContent = (hasComma ? Number(n).toLocaleString('en-US') : n) + suffix;
        },
      });
    });

    /* 7 — parallax: img scale, or numeric overscan y-translate (depth) */
    q('[data-parallax]').forEach((el) => {
      mark(el);
      const val = el.getAttribute('data-parallax');
      const trigger = el.closest('[data-parallax-trigger]') || el.parentElement;
      if (val === 'img') {
        gsap.fromTo(el, { scale: 1.12 }, {
          scale: 1, ease: 'none',
          scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      } else {
        const amt = parseFloat(val) || 12;
        gsap.fromTo(el, { yPercent: -amt }, {
          yPercent: amt, ease: 'none',
          scrollTrigger: { trigger, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      }
    });

    /* legacy — how-we-work scrubbed progress line */
    q('[data-progress-fill]').forEach((fill) => {
      mark(fill);
      const track = fill.closest('[data-progress-track]') || fill.parentElement;
      gsap.fromTo(fill, { scaleY: 0 }, {
        scaleY: 1, ease: 'none', transformOrigin: 'top',
        scrollTrigger: { trigger: track, start: 'top center', end: 'bottom center', scrub: true },
      });
    });
  }, root);

  // Recalculate once fonts + images settle so triggers sit on final layout.
  const refresh = () => ScrollTrigger.refresh();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(refresh);
  window.addEventListener('load', refresh);

  return () => {
    window.removeEventListener('load', refresh);
    ctx.revert();
    restores.forEach((fn) => { try { fn(); } catch (e) {} });
    root.querySelectorAll('[' + DONE + ']').forEach((el) => el.removeAttribute(DONE));
  };
}

// Manual line splitter (fallback): wraps words, groups by offsetTop into
// .line-mask > .line-inner. Honours <br> as hard breaks.
function manualSplitLines(el) {
  const segments = el.innerHTML.split(/<br\s*\/?>/i);
  el.innerHTML = '';
  const words = [];
  segments.forEach((seg, si) => {
    seg.trim().split(/\s+/).forEach((w) => {
      const span = document.createElement('span');
      span.style.display = 'inline-block';
      span.textContent = w;
      el.appendChild(span);
      el.appendChild(document.createTextNode(' '));
      words.push(span);
    });
    if (si < segments.length - 1) words.push('break');
  });
  const lines = [];
  let cur = [];
  let lastTop = null;
  words.forEach((w) => {
    if (w === 'break') { if (cur.length) lines.push(cur); cur = []; lastTop = null; return; }
    const top = w.offsetTop;
    if (lastTop !== null && top > lastTop + 2) { lines.push(cur); cur = []; }
    cur.push(w); lastTop = top;
  });
  if (cur.length) lines.push(cur);
  el.innerHTML = '';
  return lines.map((line) => {
    const mask = document.createElement('span');
    mask.className = 'line-mask';
    const inner = document.createElement('span');
    inner.className = 'line-inner';
    line.forEach((w) => { inner.appendChild(w); inner.appendChild(document.createTextNode(' ')); });
    mask.appendChild(inner);
    el.appendChild(mask);
    return inner;
  });
}

export default function Anim() {
  useEffect(() => {
    // Defer one tick so React StrictMode's mount→unmount→mount churn cancels the
    // first (unused) schedule; init then runs exactly once, no revert thrash.
    let cleanup;
    const t = setTimeout(() => { cleanup = initScrollAnimations(document); }, 0);
    return () => { clearTimeout(t); if (cleanup) cleanup(); };
  }, []);
  return null;
}
