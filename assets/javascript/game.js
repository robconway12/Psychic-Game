var countWins = 0;
var countLosses = 0;
var guessesLeft = 10;
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guesses = [];

var compChoice = letters[Math.floor(Math.random() * letters.length)];
console.log(compChoice);

document.getElementById("guessInput").focus();

// Player makes guesses

function pressLetter(event) {
    var playerChoice = event.key;
    guesses.push(playerChoice);
 
    // Player wins

    if (playerChoice === compChoice) {
        countWins++;
        guessesLeft = 10;
        function clearThis(y) {
            y.value= "";
        }
        clearThis(guessInput);
        compChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log(compChoice);

    // Player loses

    } else {
        guessesLeft--;
    }

    // Guessed wrong 10 times

    if (guessesLeft === 0) {
        countLosses++;
        guessesLeft = 10;
        function clearThis(y) {
            y.value= "";
        }
        clearThis(guessInput);
        compChoice = letters[Math.floor(Math.random() * letters.length)];
        console.log(compChoice);
    }

// Post the score!

    document.getElementById('totalWins').innerHTML = countWins;
    document.getElementById('totalLosses').innerHTML = countLosses;
    document.getElementById('guessesLeft').innerHTML = guessesLeft;
}

