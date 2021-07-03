// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

var Arr = {};
var objA = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'A'
};
var objB = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'A'
};
var objC = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'A'
};
var objD = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'A'
};
Arr[objA.text] = objA;
Arr[objB.text] = objB;
Arr[objC.text] = objC;
Arr[objD.text] = objD;
console.log(Arr);
