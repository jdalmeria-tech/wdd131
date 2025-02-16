document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('menu');
  const navLinks = document.getElementById('nav-links');

  const toggleMenu = () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    navLinks.classList.toggle('show');
    menuBtn.textContent = isExpanded ? '☰' : '❌';
    menuBtn.setAttribute('aria-expanded', !isExpanded);
  };

  menuBtn.addEventListener('click', toggleMenu);

  menuBtn.setAttribute('aria-expanded', 'false');
  menuBtn.setAttribute('aria-controls', 'nav-links');
  menuBtn.setAttribute('aria-label', 'Toggle navigation menu');

  const highlightActiveMenuItem = () => {
    const currentPage = window.location.pathname.split('/').pop();
    const navItems = document.querySelectorAll('#nav-links a');
    navItems.forEach(item => {
      if (item.getAttribute('href').includes(currentPage)) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  };

  highlightActiveMenuItem();

  const filter = document.body.getAttribute('data-filter');
  updatePageTitle(filter);
});

const handleScreenChange = (e) => {
  const navLinks = document.getElementById('nav-links');
  const menuBtn = document.getElementById('menu');
  if (e.matches) {
    navLinks.classList.add('hide');
    menuBtn.classList.remove('hide');
  } else {
    navLinks.classList.remove('hide');
    menuBtn.classList.add('hide');
  }
};

const mediaQuery = window.matchMedia('(max-width: 768px)');
mediaQuery.addEventListener(handleScreenChange);
handleScreenChange(mediaQuery);

// this changes the active class, helps users know which page they are in
function updatePageTitle(filter) {
  const pageTitle = document.getElementById('pageTitle');
  switch (filter) {
    case 'campaign':
      pageTitle.textContent = 'Our Campaigns';
      break;
    case 'about':
      pageTitle.textContent = 'About Us';
      break;
    case 'contact':
      pageTitle.textContent = 'Contact Us';
      break;
    default:
      pageTitle.textContent = 'Alliance of Government Workers in the Water Sector';
  }
}