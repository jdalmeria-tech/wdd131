document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.wf1');
    form.addEventListener('submit', handleFormSubmit);
});

function handleFormSubmit(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Store form data in localStorage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('subject', subject);
    localStorage.setItem('message', message);

    // Increment form submission count
    let formCount = localStorage.getItem('formCount') || 0;
    formCount++;
    localStorage.setItem('formCount', formCount);

    // Redirect to confirmation page
    window.location.href = 'confirmation.html';
}

