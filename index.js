// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
let scorecard = document.getElementById('score');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

let count = 9;
let BonusPoints = 0;
console.log('MyFate');
scorecard.innerText = count;

function ch() {
  console.log(count);
  scorecard.innerText = count;
}
