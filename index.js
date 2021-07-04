// Import stylesheets
import './style.css';
import $ from 'jquery';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;
$('input');
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

document.getElementById('pageedit').onchange = function() {
  document.getElementById('pagelabel').textContent = this.value;
};

Array.from(document.querySelectorAll('.listEntry')).forEach(el => {
  el.addEventListener('click', function() {
    var val = this.getAttribute('data-PI-Value'),
      id = this.id,
      edit_id = id.split('_')[0] + '_edit',
      label_id = id.split('_')[0] + '_label';
    console.log(id, edit_id, label_id);
  });
});
