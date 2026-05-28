import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initHeroAnimation() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;

  const image = hero.querySelector('[data-hero-image]');
  const lines = hero.querySelectorAll('[data-hero-line]');
  const waves = hero.querySelector('[data-hero-waves]');

  gsap.set(image, { scale: 1.12 });
  gsap.set(lines, { opacity: 0, x: 48, filter: 'blur(6px)' });
  gsap.set(waves, { y: 40, opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.to(image, {
    scale: 1,
    duration: 2.4,
    ease: 'power2.out',
  })
    .to(
      lines,
      {
        opacity: 1,
        x: 0,
        filter: 'blur(0px)',
        duration: 0.9,
        stagger: 0.18,
      },
      '-=1.6',
    )
    .to(waves, { y: 0, opacity: 1, duration: 0.9 }, '-=0.6');

  gsap.to(image, {
    yPercent: 8,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    },
  });
}

function initHeaderAnimation() {
  const header = document.querySelector('[data-header]');
  if (!header) return;

  const logo = header.querySelector('.logo');
  const navItems = header.querySelectorAll('.nav-item');

  gsap.set([logo, ...navItems], { opacity: 0, y: -16 });

  gsap.to(logo, { opacity: 1, y: 0, duration: 0.7, delay: 0.15, ease: 'power2.out' });
  gsap.to(navItems, {
    opacity: 1,
    y: 0,
    duration: 0.6,
    stagger: 0.07,
    delay: 0.35,
    ease: 'power2.out',
  });
}

function initScrollReveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
      y: 36,
      opacity: 0,
      duration: 0.85,
      ease: 'power2.out',
    });
  });
}

function initStaggerGroups() {
  gsap.utils.toArray<HTMLElement>('[data-reveal-group]').forEach((group) => {
    const items = group.querySelectorAll('[data-reveal-item]');
    if (!items.length) return;

    gsap.from(items, {
      scrollTrigger: {
        trigger: group,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
      y: 48,
      opacity: 0,
      duration: 0.75,
      stagger: 0.14,
      ease: 'power2.out',
    });
  });
}

function initImageReveals() {
  gsap.utils.toArray<HTMLElement>('[data-reveal-image]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      scale: 0.92,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    });
  });
}

function initSplitReveal() {
  gsap.utils.toArray<HTMLElement>('[data-split-reveal]').forEach((section) => {
    const left = section.querySelector('[data-split-left]');
    const right = section.querySelector('[data-split-right]');
    if (!left || !right) return;

    gsap.from(left, {
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
      x: -40,
      opacity: 0,
      duration: 0.9,
      ease: 'power2.out',
    });

    gsap.from(right, {
      scrollTrigger: {
        trigger: section,
        start: 'top 78%',
        toggleActions: 'play none none none',
      },
      x: 40,
      opacity: 0,
      duration: 0.9,
      delay: 0.12,
      ease: 'power2.out',
    });
  });
}

function initContactInteractions() {
  const cards = gsap.utils.toArray<HTMLElement>('[data-contact-card]');
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, { scale: 1.04, duration: 0.25, ease: 'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      gsap.to(card, { scale: 1, duration: 0.25, ease: 'power2.out' });
    });
  });
}

function initFooterAnimation() {
  const footer = document.querySelector('[data-footer]');
  if (!footer) return;

  const items = footer.querySelectorAll('[data-footer-item]');
  gsap.from(items, {
    scrollTrigger: {
      trigger: footer,
      start: 'top 92%',
      toggleActions: 'play none none none',
    },
    y: 24,
    opacity: 0,
    duration: 0.7,
    stagger: 0.08,
    ease: 'power2.out',
  });
}

function init() {
  if (prefersReducedMotion) {
    document.documentElement.classList.add('gsap-ready');
    return;
  }

  initHeroAnimation();
  initHeaderAnimation();
  initScrollReveals();
  initStaggerGroups();
  initImageReveals();
  initSplitReveal();
  initContactInteractions();
  initFooterAnimation();

  document.documentElement.classList.add('gsap-ready');
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
