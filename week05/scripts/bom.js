// declare three (3) variables that hold references to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// enhanced version of the above code
const chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
   displayList(chapter);
});

// Create a click event listener for the Add Chapter button using an addEventListener.
button.addEventListener('click', function() {
  // Check to make sure the input is not blank
  if (input.value.trim() !== '') {
    displayList(input.value); //call the function that outputs the submitted chapter
    chaptersArray.push(input.value); //add the submitted chapter to the array
    setChapterList(); //update the LocalStorage with the new array
    input.value = ''; //clear the input field
    input.focus(); //set focus back to the input field
  }
});

function displayList(item) {
   let li = document.createElement('li');
   let deleteButton = document.createElement('button');
   li.textContent = item;
   deleteButton.textContent = '❌';
   deleteButton.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
   li.append(deleteButton);
   list.append(li);
   deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
   });
}

function setChapterList() {
   localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

function getChapterList() {
   return JSON.parse(localStorage.getItem('myFavBOMList'));
}

function deleteChapter(chapter) {
   chapter = chapter.slice(0, chapter.length - 1);
   chaptersArray = chaptersArray.filter((item) => item !== chapter);
   setChapterList();
}

/* Pseudo Code for the above JavaScript:
1. Declare variables:
   - input = reference to input element with ID 'favchap'
   - button = reference to button element
   - list = reference to unordered list element with ID 'list'

2. Initialize chaptersArray:
   - chaptersArray = getChapterList() or []

3. Display existing chapters:
   - For each chapter in chaptersArray:
     - Call displayList(chapter)

4. Add chapter event listener:
   - Add click event listener to button:
     - On button click:
       - If input value is not blank:
         - Call displayList(input.value)
         - Add input value to chaptersArray
         - Call setChapterList()
         - Clear input field
         - Set focus back to input field

5. Define displayList function(item):
   - Create list item (li) element
   - Create delete button element
   - Set li text content to item
   - Set delete button text content to '❌'
   - Add class 'delete' to delete button
   - Append delete button to li
   - Append li to list
   - Add click event listener to delete button:
     - On delete button click:
       - Remove li from list
       - Call deleteChapter(li.textContent)
       - Set focus back to input field

6. Define setChapterList function:
   - Convert chaptersArray to JSON string
   - Store JSON string in LocalStorage with key 'myFavBOMList'

7. Define getChapterList function:
   - Retrieve JSON string from LocalStorage with key 'myFavBOMList'
   - Parse JSON string into array

8. Define deleteChapter function(chapter):
   - Remove last character from chapter string
   - Filter chaptersArray to remove chapter
   - Call setChapterList()
*/





