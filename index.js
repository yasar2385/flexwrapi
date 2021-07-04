// Import stylesheets
import jQuery from 'jquery';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
jQuery('input');
var Arr = {};
var objA = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'A'
};
var objB = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'B'
};
var objC = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'C'
};
var objD = {
  title: 'Alphabet',
  hexValue: '00X0',
  text: 'D'
};
Arr[objA.text] = objA;
Arr[objB.text] = objB;
Arr[objC.text] = objC;
Arr[objD.text] = objD;
console.log(Arr);
delete Arr['A'];
console.log(Arr);
Arr[objA.text] = objA;
console.log(Arr);
