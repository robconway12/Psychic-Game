var countWins = 0;
var countLosses = 0;
var guessesLeft = 10;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var compChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(compChoice);

var playerChoice = document.getElementById("guessInput").value;



