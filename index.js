// Import stylesheets
import './style.css';
import './yasar.js';
import $ from 'jquery';
console.log('index.js');
// Write Javascript code!
const appDiv = document.getElementById('app');

function test() {
  console.log('ggggg');
}

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

Array.from(document.querySelectorAll('.listEntry')).forEach(el => {
  el.addEventListener('click', function() {
    var id = this.id,
      txtValue = this.textContent,
      edit_id = id.split('_')[0] + '_edit',
      label_id = id.split('_')[0] + '_label',
      input = document.getElementById('inputDiv'),
      edit = document.getElementById('inputEditDiv'),
      piValue = txtValue.split(' ').pop(),
      split = txtValue.split(' '),
      text = split.slice(0, -1).join(' ');
    console.log(id, edit_id, label_id);

    var labFrag = document
      .createRange()
      .createContextualFragment(
        `<span class="item label-item">${text} <span id="${label_id}">${piValue}</span></span>`
      );
    var efrag = document
      .createRange()
      .createContextualFragment(
        `<span class="item">${text} <input id="${edit_id}" type="number" value='${piValue}'/></span>`
      );
    // append label and Edit area append
    input.appendChild(labFrag);
    // here validate
    edit.appendChild(efrag);
    // onchange to try
    // ['onchange', 'onkeypress', 'onkeyup'].forEach(e => {
    // console.log(e);
    //   document.getElementById(edit_id)[e] = function() {
    //     document.getElementById(label_id).textContent = this.value;
    //   };
    // });

    //onchnage
    // document.getElementById(edit_id).onchange = function() {
    //   //document.getElementById(label_id).textContent = this.value;
    // };
    //onmouseleave
    // document.getElementById(edit_id).onmouseleave = function() {
    //   document.getElementById(label_id).textContent = this.value;
    // };
    //keypress
    // document.getElementById(edit_id).onkeypress = function() {
    //   document.getElementById(label_id).textContent = this.value;
    // };
    //onkeyup
    document.getElementById(edit_id).onkeyup = function() {
      console.log(this.value);
      document.getElementById(label_id).textContent = this.value;
    };
    return false;
  });
});
