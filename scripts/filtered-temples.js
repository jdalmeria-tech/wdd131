document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a');
  const pageTitle = document.getElementById('pageTitle');

  menuButton.addEventListener('click', function() {
    navbar.classList.toggle('open');
    menuButton.classList.toggle('open');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const filter = this.getAttribute('data-filter');
      filterTemples(filter);
      updateActiveClass(this);
      updatePageTitle(filter);
    });
  });

  createTempleCard(temples);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Hawaii, United States",
    dedicated: "1915, June, 1",
    area: 42100,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-3831-thumb.jpg"
  },
  {
    templeName: "Cebu City Philippines Temple",
    location: "Cebu City, Philippines",
    dedicated: "2007, November, 14",
    area: 29556,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/cebu-city-philippines-temple/cebu-city-philippines-temple-33251-thumb.jpg"
  },
  {
    templeName: "Guayaquil Ecuador Temple",
    location: "Calle Rosendo Maridueña, Guayaquil, Ecuador",
    dedicated: "1996, August, 10",
    area: 45000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/guayaquil-ecuador-temple/guayaquil-ecuador-temple-6528-thumb.jpg"
  },
];

function createTempleCard(filteredTemples) {
  const resGrid = document.querySelector('.res-grid');
  resGrid.innerHTML = ''; // Clear existing content

  filteredTemples.forEach((temple) => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');
    img.setAttribute('width', '400');
    img.setAttribute('height', '250');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    resGrid.appendChild(card);
  });
}

function filterTemples(criteria) {
  let filteredTemples;

  switch (criteria) {
    case 'old':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      break;
    case 'new':
      filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      break;
    case 'large':
      filteredTemples = temples.filter(temple => temple.area > 90000);
      break;
    case 'small':
      filteredTemples = temples.filter(temple => temple.area < 10000);
      break;
    default:
      filteredTemples = temples;
  }

  createTempleCard(filteredTemples);
}

function updateActiveClass(activeLink) {
  const navLinks = document.querySelectorAll('.navbar a');
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  activeLink.classList.add('active');
}
// this changes the active class, helps users know which page they are in
function updatePageTitle(filter) {
  const pageTitle = document.getElementById('pageTitle');
  switch (filter) {
    case 'old':
      pageTitle.textContent = 'Old Temples';
      break;
    case 'new':
      pageTitle.textContent = 'New Temples';
      break;
    case 'large':
      pageTitle.textContent = 'Large Temples';
      break;
    case 'small':
      pageTitle.textContent = 'Small Temples';
      break;
    default:
      pageTitle.textContent = 'Home';
  }
}