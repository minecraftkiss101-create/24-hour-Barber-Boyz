const nav = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navAnchors = document.querySelectorAll('.nav-links a');
const floatingBook = document.querySelector('.floating-book');
const liveStatus = document.querySelector('.live-status');

hamburger.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', String(isOpen));
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  }
});

navAnchors.forEach((anchor) => {
  anchor.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

const sections = [...document.querySelectorAll('main section')];

const setActiveNavLink = () => {
  const scrollPosition = window.scrollY + 150;

  sections.forEach((section) => {
    const link = document.querySelector(`.nav-links a[href="#${section.id}"]`);
    if (!link) return;

    const inView =
      scrollPosition >= section.offsetTop &&
      scrollPosition < section.offsetTop + section.offsetHeight;

    link.classList.toggle('active', inView);
  });
};

const handleScrollUI = () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
  floatingBook.classList.toggle('show', window.scrollY > 500);
  setActiveNavLink();
};

window.addEventListener('scroll', handleScrollUI);
handleScrollUI();

const counters = document.querySelectorAll('.counter');
const formatCounterValue = (counter, value) => {
  const decimals = Number(counter.dataset.decimals || 0);
  const divisor = Number(counter.dataset.divisor || 1);
  const adjusted = value / divisor;
  return adjusted.toFixed(decimals);
};

const countObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;

    const counter = entry.target;
    const target = Number(counter.dataset.target);
    let current = 0;
    const step = Math.max(1, Math.floor(target / 80));

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = formatCounterValue(counter, target);
        clearInterval(timer);
      } else {
        counter.textContent = formatCounterValue(counter, current);
      }
    }, 20);

    observer.unobserve(counter);
  });
}, { threshold: 0.45 });

counters.forEach((counter) => countObserver.observe(counter));

const revealElements = document.querySelectorAll('.section, .stats');
revealElements.forEach((element) => element.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

revealElements.forEach((element) => revealObserver.observe(element));

if (liveStatus) {
  const now = new Date();
  const timeText = now.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  liveStatus.textContent = `Status: Open now • Local time ${timeText}`;
}

if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('reduce-motion');
}
