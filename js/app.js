'use strict';

let score = 0;
let randomNum = 12;
let i = 3;
let countriesArray = ['bolivia', 'canada', 'germany', 'australia', 'egypt', 'vietnam'];


let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

function questionOne() {
  let questionOneGuess = prompt('Am I from North Carolina?').toLowerCase();

  if (questionOneGuess === 'no' || questionOneGuess === 'n') {
    alert('You got it right!');
    score++;
    // console.log('You got it right!');
  } else if (questionOneGuess === 'yes' || questionOneGuess === 'y') {
    alert('Sorry, you got it wrong');
    // console.log('Sorry, you got it wrong');
  }
}

function questionTwo() {
  let questionTwoGuess = prompt('Am I married?').toLowerCase();

  if (questionTwoGuess === 'yes' || questionTwoGuess === 'y') {
    alert('You got it right!');
    score++;
    // console.log('You got it right!');
  } else if (questionTwoGuess === 'no' || questionTwoGuess === 'n') {
    alert('Sorry, you got it wrong');
    // console.log('Sorry, you got it wrong');
  }
}

function questionThree() {
  let questionThreeGuess = prompt('Have I lived in Japan?').toLowerCase();

  if (questionThreeGuess === 'yes' || questionThreeGuess === 'y') {
    alert('You got it right!');
    score++;
    // console.log('You got it right!');
  } else if (questionThreeGuess === 'no' || questionThreeGuess === 'n') {
    alert('Sorry, you got it wrong');
    // console.log('Sorry, you got it wrong');
  }
}

function questionFour() {
  let questionFourGuess = prompt('Was I ever in the Army?').toLowerCase();

  if (questionFourGuess === 'no' || questionFourGuess === 'n') {
    alert('You got it right!');
    score++;
    // console.log('You got it right!');
  } else if (questionFourGuess === 'yes' || questionFourGuess === 'y') {
    alert('Sorry, you got it wrong');
    // console.log('Sorry, you got it wrong');
  }
}

function questionFive() {
  let questionFiveGuess = prompt('Do I have two daughters?').toLowerCase();

  if (questionFiveGuess === 'yes' || questionFiveGuess === 'y') {
    alert('You got it right!');
    score++;
    // console.log('You got it right!');
  } else if (questionFiveGuess === 'no' || questionFiveGuess === 'n') {
    alert('Sorry, you got it wrong');
    // console.log('Sorry, you got it wrong');
  }
}

function questionSix() {
  let questionSixGuess = prompt('Guess a number from 1-100!');

  while (questionSixGuess !== randomNum && i > 0) {
    if (questionSixGuess > randomNum) {
      questionSixGuess = prompt(`Wrong my number is lower than ${questionSixGuess}! Guess again!`);
      i--;
    } else if (questionSixGuess < randomNum) {
      questionSixGuess = prompt(`Wrong my number is higher than ${questionSixGuess}! Guess again!`);
      i--;
    } else {
      alert(`Well Done ${userName}, ${randomNum} is the answer!`);
      score++;
      break;
    }
    if (i === 0) {
      alert(`The correct answer is ${randomNum}`);
    }
  }
}

function questionSeven() {
  for (i = 0; i < 6; i++) {
    let questionSevenGuess = prompt('Name one of the countries I am thinking about!').toLowerCase();
    if (countriesArray.indexOf(questionSevenGuess) >= 0) {
      alert(`Good job ${userName}! ${questionSevenGuess} is correct`);
      score++;
      break;
    } else {
      alert('That is not one of the countries I am thinking about. Try Again!');
    }
  }

  alert(`All possible answers were: ${countriesArray}`);
}

questionOne();
questionTwo();
questionThree();
questionFour();
questionFive();
questionSix();
questionSeven();

alert(`All right ${userName} you got ${score} out of 7 correct!`);
