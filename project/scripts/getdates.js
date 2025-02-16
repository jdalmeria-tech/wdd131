document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector("#currentyear");
  const lastModified = document.querySelector("#lastModified");

  const date = new Date();

  year.textContent = date.getFullYear();
  lastModified.textContent = `Last Modified: ${document.lastModified}`;
});