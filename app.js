'use strict';


// first question
var child = prompt('Does Chris have children?').toUpperCase();
  if (child === 'YES' || child === 'Y') {
    alert("Correct!");
  }
    else {
    alert('Incorrect!  Chris has one son.');
  }
console.log("Answer to the question of having children is " + child);

// second question
  var marriage = prompt('Is Chris married?').toUpperCase();
    if (marriage === 'YES' || marriage === 'Y') {
      alert("Correct!");
    }
      else {
      alert('Incorrect!  Chris is married.');
    }
console.log("Answer to the question or being married or not is " + marriage);

// third question
    var dev = prompt('Does Chris want to be a developer?').toUpperCase();
      if (dev === 'YES' || dev === 'Y') {
        alert("Correct!");
      }
        else {
        alert('Incorrect!  Chris is re-training himself to become a developer.');
      }
console.log("Answer to the question of Chris wanting to be a developer is " + dev);

//fourth question
      var it = prompt('Does Chris have experience in information technology (IT)?').toUpperCase();
        if (it === 'YES' || it === 'Y') {
          alert("Correct!");
        }
          else {
          alert('Incorrect!  Chris has has extensive experience in IT.');
        }
console.log("Answer to the question of whether or not Chris has IT exp is " + it);

// fifth question
        var car = prompt('Does Chris own a car?').toUpperCase();
          if (car === 'NO' || car === 'N') {
            alert("Correct!");
          }
            else {
            alert('Incorrect!  Chris does not own a car.');
          }
console.log("Answer to the question of Chris owning a car is " + car);
