'use strict';

var scoreKeeper = 0; //Variable set for the scorekeeper on questions 1-7.
// first question

function qOne() {
  var child = prompt('Does Chris have children?').toUpperCase();
  if (child === 'YES' || child === 'Y') {
    alert('Correct!');
    scoreKeeper++;
  }
  else {
    alert('Incorrect!  Chris has one son.');
  }
  console.log('Answer to the question of having children is ' + child);
}
qOne();

// second question
function qTwo() {
  var marriage = prompt('Is Chris married?').toUpperCase();
  if (marriage === 'YES' || marriage === 'Y') {
    alert('Correct!');
    scoreKeeper++;
  }
  else {
    alert('Incorrect!  Chris is married.');
  }
  console.log('Answer to the question or being married or not is ' + marriage);
}
qTwo();

// third question
function qThree() {
  var dev = prompt('Does Chris want to be a developer?').toUpperCase();
  if (dev === 'YES' || dev === 'Y') {
    alert('Correct!');
    scoreKeeper++;
  }
  else {
    alert('Incorrect!  Chris is re-training himself to become a developer.');
  }
  console.log('Answer to the question of Chris wanting to be a developer is ' + dev);
}
qThree();

// //fourth question
function qFour() {
  var it = prompt('Does Chris have experience in information technology (IT)?').toUpperCase();
  if (it === 'YES' || it === 'Y') {
    alert('Correct!');
    scoreKeeper++;
  }
  else {
    alert('Incorrect!  Chris has has extensive experience in IT.');
  }
  console.log('Answer to the question of whether or not Chris has IT exp is ' + it);
}
qFour();

//fifth question
function qFive() {
  var car = prompt('Does Chris own a car?').toUpperCase();
  if (car === 'NO' || car === 'N') {
    alert('Correct!');
    scoreKeeper++;
  }
  else {
    alert('Incorrect!  Chris does not own a car.');
  }
  console.log('Answer to the question of Chris owning a car is ' + car);
}
qFive();

//Sixth question
var guess;
var counter = 1;
var number = 4;
number = parseInt(prompt('What is Chris\'s favorite number between 0 and 20?'));
while (guess !== number && counter <= 4) {
  console.log('number guess', number);
  console.log('counter', counter);

  if (number < number) {
    alert('Too low');
    counter++;
  } else if (number > number) {
    alert('Too high');
    counter++;
  } else {
    alert('That\'s right! You guessed it in ' + counter + ' tries.');
    scoreKeeper++;
    break;
  }
}
console.log('counter', counter);
if (counter > 4) {
  alert('Sorry! His favorite number is ' + number);
}
//Seventh question
var countries = ['india', 'belgium', 'france'];
var guessesLeft = 6;
var name = prompt('What is your name, please?');

alert('Let\'s play a game.  Guess a country Chris has visited.');
while (guessesLeft > 0) {
  var ans = prompt('Take a guess.').toLowerCase();
  for (var i = 0; i < countries.length; i++) {
    if (ans === countries[i]) {
      alert('Correct!');
      scoreKeeper++;
      guessesLeft = 0;
      break;
    }
  }
  if (guessesLeft > 0) {
    guessesLeft--;
    if (guessesLeft === 0) {
      alert('You are out of guesses.  The possible answers are france, belgium, and india.');
      break;
    }
    alert('No, guess again. You have ' + guessesLeft + ' guesses left.');
  }
}
//scorekeeper code
alert('You got ' + scoreKeeper + ' out of 7 correct, ' + name + '.');
