// 'use strict';
//
// //
// // first question
// var child = prompt('Does Chris have children?').toUpperCase();
// if (child === 'YES' || child === 'Y') {
//   alert("Correct!");
// }
// else {
//   alert('Incorrect!  Chris has one son.');
// }
// console.log("Answer to the question of having children is " + child);
//
// // second question
// var marriage = prompt('Is Chris married?').toUpperCase();
// if (marriage === 'YES' || marriage === 'Y') {
//   alert("Correct!");
// }
// else {
//   alert('Incorrect!  Chris is married.');
// }
// console.log("Answer to the question or being married or not is " + marriage);
//
// // third question
// var dev = prompt('Does Chris want to be a developer?').toUpperCase();
// if (dev === 'YES' || dev === 'Y') {
//   alert("Correct!");
// }
// else {
//   alert('Incorrect!  Chris is re-training himself to become a developer.');
// }
// console.log("Answer to the question of Chris wanting to be a developer is " + dev);
//
// //fourth question
// var it = prompt('Does Chris have experience in information technology (IT)?').toUpperCase();
// if (it === 'YES' || it === 'Y') {
//   alert("Correct!");
// }
// else {
//   alert('Incorrect!  Chris has has extensive experience in IT.');
// }
// console.log("Answer to the question of whether or not Chris has IT exp is " + it);
//
// // fifth question
// var car = prompt('Does Chris own a car?').toUpperCase();
// if (car === 'NO' || car === 'N') {
//   alert('Correct!');
// }
// else {
//   alert('Incorrect!  Chris does not own a car.');
// }
// console.log('Answer to the question of Chris owning a car is ' + car);
//
//Sixth question
// var guess;
// var counter = 1;
// var correctNum = 4;
//
// while (number !== correctNum && counter <= 4) {
//   number = parseInt(prompt('What is Chris\'s favorite number between 0 and 20?'));
//   console.log('number guess', number);
//   console.log('counter', counter);
//
//   if (number < correctNum) {
//     alert('Too low');
//     counter++;
//   } else if (number > correctNum) {
//     alert('Too high');
//     counter++;
//   } else {
//     alert('That\'s right! You guessed it in ' + counter + ' tries.');
//     rightAnswers++;
//     break;
//   }
// }
// console.log('counter', counter);
// if (counter > 4) {
//   alert('Sorry! His favorite number is ' + correctNum);
// }
//Seventh question
countries = [India, Belgium, France];
ans = prompt('You have six tries to guess a country Chris has visited.');

while (guessesLeft > 0){
  var ans = prompt('Guess again!');
  for (var i = 0; i < countries.length; i++);
  if (ans === countries[i]){
    alert('Correct!');
  }
