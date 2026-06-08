// === Hamburger Menu ===
const btn = document.getElementById('hamburger-btn');
const nav = document.getElementById('mobile-nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('open');
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
