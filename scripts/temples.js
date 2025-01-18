document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.getElementById('menu');
  const navbar = document.querySelector('.navbar');

  menuButton.addEventListener('click', function() {
    navbar.classList.toggle('open');
    menuButton.classList.toggle('open');
  });
});