// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Scroll-spy for nav active state
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav-links a');
if ('IntersectionObserver' in window && sections.length) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navAnchors.forEach(a => {
          a.style.color = a.getAttribute('href') === `#${id}` ? 'var(--text-primary)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -50% 0px' });
  sections.forEach(s => obs.observe(s));
}
