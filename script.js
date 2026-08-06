// Kadavu Serviced Villas — Script

// Navbar scroll effect
window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.kd-navbar');
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Fade-in on scroll (simple IntersectionObserver)
const fadeTargets = document.querySelectorAll(
  '.kd-villa-card, .kd-feature-card, .kd-value-card, .kd-about-img, .kd-cta-img, .kd-section-title, .kd-section-body'
);

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  fadeTargets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
  });
}
