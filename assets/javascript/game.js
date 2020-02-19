console.log("javascripts loaded")

var wins = 0
var looses = 0
var attempts = 10
var lettersClicked = []
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var letterToGuess = ""

//pseudo code

// competer is choosing a letter (random)

// listen the keyword what the user is clicking 

// everytime we need to verify 
// compare the lettercliked with the lettertoguess
// if === wins
// else push the letter clicked to letters clicked // decrease atempts and if attemps === 0 you looses 

// we need to be able to restart the game


function game() {
    attempts = 10
    lettersClicked = []
    letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
    console.log(letterToGuess)

    document.getElementById("wins").textContent = wins
    document.getElementById("looses").textContent = looses
    document.getElementById("atempts").textContent = attempts
    document.getElementById("clicked").textContent = lettersClicked


}

document.onkeydown = function() {

    var clicked = event.key.toLowerCase()
    console.log("clicked:", clicked, letterToGuess)
    if (clicked === letterToGuess) {
        wins++
        document.getElementById("wins").textContent = wins
        alert("you win, click to play again")
        game()

    } else {
        attempts--
        document.getElementById("atempts").textContent = attempts
        lettersClicked.push(clicked)
        document.getElementById("clicked").textContent = lettersClicked
        if (attempts === 0) {
            looses++
            document.getElementById("looses").textContent = looses

            alert("you lost, click to play again")
            game()
        }


    }

}


game()