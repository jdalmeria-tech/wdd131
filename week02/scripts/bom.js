// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
  // Check to make sure the input is not blank
  if (input.value.trim() !== '') {
    // Create an li element that will hold each entries chapter title and an associated delete button.
    const listItem = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Populate the li element variable's textContent or innerHTML with the input value.
    listItem.textContent = input.value;

    // Populate the button textContent with a ❌
    deleteButton.textContent = '❌';

    // Append the li element variable with the delete button.
    listItem.append(deleteButton);

    // Append the li element variable to the unordered list in your HTML
    list.append(listItem);

    // Add event listener to the delete button to remove the chapter
    deleteButton.addEventListener('click', function() {
      list.removeChild(listItem);
    });

    // Clear the input field and return focus to it
    input.value = '';
    input.focus();
  } else {
    // If input is blank, return focus to the input field
    input.focus();
  }
});

/* Pseudo Code for the above JavaScript:
1. Declare variables:
   - input = reference to input element with ID 'favchap'
   - button = reference to button element
   - list = reference to unordered list element with ID 'list'

2. Add event listener to button:
   - On button click:
     3. Check input value:
        - If input is not empty:
          4. Create new elements:
             - listItem = new list item element
             - deleteButton = new button element
          5. Set content:
             - listItem.textContent = input.value
             - deleteButton.textContent = '❌'
          6. Append elements:
             - Append deleteButton to listItem
             - Append listItem to list
          7. Add event listener to delete button:
             - On deleteButton click:
               - Remove listItem from list
          8. Clear and focus input:
             - input.value = ''
             - input.focus()
        - Else:
          9. Handle empty input:
             - input.focus()
*/
