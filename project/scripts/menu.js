document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu');
  const navLinks = document.querySelector('nav');

  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('show');
    menuBtn.textContent = isExpanded ? '☰' : '❌';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
  });

  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-controls', 'nav-links');
  menuBtn.setAttribute('aria-label', 'Toggle navigation menu');
});

/* Add media query to hide navigation links and show burger menu button on mobile screens */
const mediaQuery = window.matchMedia('(max-width: 768px)');
function handleScreenChange(e) {
  const navLinks = document.querySelector('nav');
  const menuBtn = document.getElementById('menu');
  if (e.matches) {
    navLinks.classList.add('hide');
    menuBtn.classList.remove('hide');
  } else {
    navLinks.classList.remove('hide');
    menuBtn.classList.add('hide');
  }
}
mediaQuery.addListener(handleScreenChange);
handleScreenChange(mediaQuery);