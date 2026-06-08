// === Hamburger Menu ===
const btn = document.getElementById('hamburger-btn');
const nav = document.getElementById('mobile-nav');

if (btn && nav) {
  const toggleMenu = () => {
    const isOpen = nav.classList.contains('open');
    nav.classList.toggle('open');
    btn.classList.toggle('open');
    btn.setAttribute('aria-expanded', !isOpen);
  };

  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking a link
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('open')) toggleMenu();
    });
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (nav.classList.contains('open') && !nav.contains(e.target) && !btn.contains(e.target)) {
      toggleMenu();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('open')) {
      toggleMenu();
      btn.focus();
    }
  });
}

// === Scroll Fade-In Animation ===
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(
  '.service-card, .testimonial-card, .stat-item, .process-list li, .split-text, .split-media, .cta-inner, .section-header'
).forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});
