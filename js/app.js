'use strict';

let score = 0;

let userName = prompt('What is your name?');
alert(`Welcome to my site ${userName}! Please answer the following questions with yes/no or y/n`);

let questionOneGuess = prompt('Am I from North Carolina?').toLowerCase();

if(questionOneGuess === 'no' || questionOneGuess === 'n'){
  alert('You got it right!');
  score++;
  // console.log('You got it right!');
} else if(questionOneGuess === 'yes' || questionOneGuess === 'y'){
  alert('Sorry, you got it wrong');
  // console.log('Sorry, you got it wrong');
}

let questionTwoGuess = prompt('Am I married?').toLowerCase();

if(questionTwoGuess === 'yes' || questionTwoGuess === 'y'){
  alert('You got it right!');
  score++;
  // console.log('You got it right!');
} else if(questionTwoGuess === 'no' || questionTwoGuess === 'n'){
  alert('Sorry, you got it wrong');
  // console.log('Sorry, you got it wrong');
}

let questionThreeGuess = prompt('Have I lived in Japan?').toLowerCase();

if(questionThreeGuess === 'yes' || questionThreeGuess === 'y'){
  alert('You got it right!');
  score++;
  // console.log('You got it right!');
} else if(questionThreeGuess === 'no' || questionThreeGuess === 'n'){
  alert('Sorry, you got it wrong');
  // console.log('Sorry, you got it wrong');
}

let questionFourGuess = prompt('Was I ever in the Army?').toLowerCase();

if(questionFourGuess === 'no' || questionFourGuess === 'n'){
  alert('You got it right!');
  score++;
  // console.log('You got it right!');
} else if(questionFourGuess === 'yes' || questionFourGuess === 'y'){
  alert('Sorry, you got it wrong');
  // console.log('Sorry, you got it wrong');
}

let questionFiveGuess = prompt('Do I have two daughters?').toLowerCase();

if(questionFiveGuess === 'yes' || questionFiveGuess === 'y'){
  alert('You got it right!');
  score++;
  // console.log('You got it right!');
} else if(questionFiveGuess === 'no' || questionFiveGuess === 'n'){
  alert('Sorry, you got it wrong');
  // console.log('Sorry, you got it wrong');
}


alert(`All right ${userName} you got ${score} out of 5 correct!`);
