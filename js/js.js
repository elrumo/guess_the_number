var radnomNumber = Math.floor(Math.random() * 100) + 1;
console.log(radnomNumber);

var guesses = document.querySelector(' .guesses');
var lastResult = document.querySelector(' .lastResult');
var lowOrHi = document.querySelector(' .lowOrHi');

var guessSubmit = document.querySelector(' .guessSubmit');
var guessField = document.querySelector(' .guessField');

var guessCount = 1;
var resetButton;
