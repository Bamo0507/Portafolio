function initViewportAnimate() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const animClass = entry.target.dataset.animate;
      if (entry.isIntersecting) {
        entry.target.classList.add(animClass);
      } else {
        entry.target.classList.remove(animClass);
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('[data-animate]').forEach(el => {
    el.style.opacity = 0;
    observer.observe(el);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initViewportAnimate);
} else {
  initViewportAnimate();
}