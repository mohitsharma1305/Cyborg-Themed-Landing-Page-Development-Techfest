/* ================================================
   animations.js — Scroll-triggered fade-ins + stagger
   ================================================ */

(function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach((el, i) => {
    // Stagger delay for grid children
    el.style.transitionDelay = (i % 4) * 90 + 'ms';
    observer.observe(el);
  });
})();
