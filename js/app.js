'use strict';


let scoreCount = 0;

function qOne() {
  let userName = prompt('What is your name?');

  alert(`Welcome to my site ${userName}! Lets play a guessing game. Answer yes or no and dont attempt to break my site, cool?`);


  let questionOne = prompt('Are my eyes blue?').toLowerCase();
  while (questionOne !== 'yes' || questionOne !== 'y') {
    questionOne = prompt('Nope, guess again').toLowerCase();
    if (questionOne === 'y' || questionOne === 'yes')
      break;

  }
  alert('Yes they are!');
}

qOne();

function qTwo() {
  let questionTwo = prompt('Do I have kids?').toLowerCase();
  if (questionTwo === 'yes' || questionTwo === 'y') {
    alert('Yes 3!');
    //console.log("yes! 3");
  } else if (questionTwo === 'no' || questionTwo === 'n') {
    alert('Nope, guess again');
  }
}

qTwo();


function qThree() {
  let questionThree = prompt('Do I like chocolate?').toLowerCase();
  if (questionThree === 'yes' || questionThree === 'y') {
    //console.log("sure does!");
    alert('Does a religious bear poop in a church in the woods? Yep!');
  } else if (questionThree === 'no' || questionThree === 'n') {
    alert('Nope, guess again');
  }
}

qThree();

function qFour() {
  let questionFour = prompt('Do I have a hairless cat?').toLowerCase();
  if (questionFour === 'no' || questionFour === 'n') {
    alert('Sadly, you are correct.');
  } else if (questionFour === 'yes' || questionFour === 'y') {
    alert('Nope, guess again');
  }
}

qFour();


function qFive() {
  let questionFive = prompt('Is my favorite band Gojira?').toLowerCase();
  if (questionFive === 'yes' || questionFive === 'y') {
    alert('Yes! They are awesome!');
  } else if (questionFive === 'no' || questionFive === 'n') {
    alert('Nope, guess again');
  }
}

qFive;


// for(i=0; i<4; i++){
// }


function qSix() {
  let numOfGuess = 4;
  let myNum = 21;
  while (numOfGuess) {
    let questionSix = prompt('Guess my lucky number: 1 - 25, you have 4 attempts. I am the 3rd boy of 7 kids if that helps..');
    if (myNum === +questionSix) {
      alert('You guessed it!');
      break;
    } else {
      alert('Try again!');
    }

    numOfGuess--;

  }
}

qSix();


function qSeven() {
  let pizza = ['donatos', 'pizza hut', 'papa johns', 'flyers', 'dominos', 'hungry howies'];
  let attempts = 6;
  while (attempts) {
    let pizzaGuess = prompt('Guess my fav pizza place in Ohio').toLowerCase();
    attempts--;
    let guessCorrect = false;
    for (let i = 0; i < pizza.length; i++) {
      if (pizza[i] === pizzaGuess) {
        alert('Awww yeaaah! You know it! This is correct.');
        scoreCount++;
        guessCorrect = true;
        break;

      }
    }
    if (guessCorrect === true) {
      break;
    }
  }
  alert(`Thanks for playing my game ${userName} hope you like the site! ${scoreCount}`);
}

qSeven();
