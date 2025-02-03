//  arrays.js
const steps = ["one", "two", "three"];
function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate); // use map to convert the list from strings to HTML
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("#myList").innerHTML = stepsHtml.join(""); // set the innerHTML
});

const grades = ["A", "B", "A"];
function convertGradeToPoints (grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}
const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const result = fruits.filter((fruit) => fruit.length > 6);

const numbers = [12, 34, 21, 54];
const luckyNumber = 21;
let luckIndex = numbers.indexOf(luckyNumber);
