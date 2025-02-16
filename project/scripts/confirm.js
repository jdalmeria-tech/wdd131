document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('confirm-name').textContent = localStorage.getItem('name');
  document.getElementById('confirm-name-span').textContent = localStorage.getItem('name');
  document.getElementById('confirm-email').textContent = localStorage.getItem('email');
  document.getElementById('confirm-subject').textContent = localStorage.getItem('subject');
  document.getElementById('confirm-message').textContent = localStorage.getItem('message');
  document.getElementById('confirm-forms').textContent = localStorage.getItem('formCount');
});