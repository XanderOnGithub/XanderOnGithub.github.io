// First, select all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-scroll-link');

let observer;

function createObserver(threshold) {
  if (observer) {
    sections.forEach(section => observer.unobserve(section));
  }

  observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      const navLinks = document.querySelectorAll(`.nav-scroll-link[href="#${id}"]`);
      navLinks.forEach(navLink => {
        navLink.classList.toggle('active', entry.isIntersecting);
      });
    });
  }, { threshold });

  sections.forEach(section => observer.observe(section));
}

function updateThreshold() {
  const threshold = window.innerWidth < 900 ? 0.35 : 0.75;
  createObserver(threshold);
}

window.addEventListener('resize', updateThreshold);
updateThreshold();
