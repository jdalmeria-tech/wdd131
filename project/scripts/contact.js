document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".wf1");

  if (contactForm) {
      contactForm.addEventListener("submit", (event) => {
          event.preventDefault(); // Prevent default submission
          
          validateForm((isValid) => {
              if (isValid) {
                  showConfirmation();
                  setTimeout(() => {
                      contactForm.submit(); // Proceed with submission after 2 seconds
                  }, 2000);
              }
          });
      });
  }
});

/*
Validates the contact form fields.
Uses a callback to determine if the form is valid.
*/
function validateForm(callback) {
  let isValid = true;
  const nameField = document.getElementById("name");
  const emailField = document.getElementById("email");
  const messageField = document.getElementById("message");

  // Reset previous error styles
  resetErrorStyles([nameField, emailField, messageField]);

  if (!nameField.value.trim()) {
      isValid = false;
      showError(nameField, "Name is required.");
  }

  if (!emailField.value.trim() || !isValidEmail(emailField.value)) {
      isValid = false;
      showError(emailField, "Enter a valid email address.");
  }

  if (!messageField.value.trim()) {
      isValid = false;
      showError(messageField, "Message cannot be empty.");
  }

  callback(isValid);
}

// Displays error messages for invalid fields.
function showError(field, message) {
  field.style.borderColor = "var(--accent-color)";
  const error = document.createElement("small");
  error.textContent = message;
  error.style.color = "var(--accent-color)";
  error.classList.add("error-message");
  field.parentNode.appendChild(error);
}

// Resets error styles for fields.
function resetErrorStyles(fields) {
  fields.forEach(field => {
      field.style.borderColor = "var(--secondary-color)";
      const existingError = field.parentNode.querySelector(".error-message");
      if (existingError) {
          existingError.remove();
      }
  });
}

// Validates email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Displays a confirmation message before submitting.
function showConfirmation() {
  const contactForm = document.querySelector(".wf1");
  const confirmationBox = document.createElement("div");
  confirmationBox.classList.add("form-confirmation");
  confirmationBox.textContent = "✅ Message sent successfully! Redirecting...";

  contactForm.appendChild(confirmationBox);
}
