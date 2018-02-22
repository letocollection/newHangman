var wordsList = ["leonard"];
var chosenWord = "";
var dashes = [];
var wrongGuesses = [];
var losses = 0;
var wins = 0;

var guesses = 9;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//startGame will pick a word, create an array called dashes and put in all dashes. 
startGame = function() {
    guesses = 9;
    wrongGuesses = [];
    dashes = [];
    var chosenWord = wordsList[getRandomInt(0, wordsList.length)];

    chosenWordArray = chosenWord.split("");
    console.log(chosenWordArray);

    for (i = 0; i < chosenWordArray.length; i++) {
        dashes.push("_");
    }

    document.getElementById("wordblanks").innerHTML= dashes.join(" ");
}

//checkLetters will take a key, 
function checkLetters(key) {
	var inWord = true;
	//Going to create all the dashes first
    for (i = 0; i <= chosenWordArray.length - 1; i++) {
        if (key == chosenWordArray[i]) {
            dashes[i] = key;
            console.log(dashes);
        } 
    }

    

    if (dashes.includes(key) == false){
    	guesses--;
    	console.log("guesses" + guesses);
    	wrongGuesses.push(key);
    }

    
    document.getElementById("wordblanks").innerHTML= dashes.join(" ");
    document.getElementById("guessesLeft").innerHTML = guesses;
    document.getElementById("wrongGuesses").innerHTML = wrongGuesses;
    document.getElementById("winCounter").innerHTML = wins;
}


function roundComplete() {
	if (guesses == 0) {
    		losses++;
    		alert("You Lose");
    		document.getElementById("lossCounter").innerHTML = losses;
    		startGame();
    } 

    if (dashes.join("").toString() === chosenWordArray.join("").toString()) {

    	alert("You Win!");
    	wins++;
    }
}


startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

    // Converts all key clicks to lowercase letters.
    letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    // Runs the code to check for correct guesses.
    checkLetters(letterGuessed);

    // Runs the code that ends each round.
    roundComplete();
}