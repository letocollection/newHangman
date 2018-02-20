var wordsList = ["leonard", "subin", "suyun", "inae"];
var chosenWord = "";
var dashes = [];

var guesses = 9;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

startGame = function() {
	guesses = 9;
	var chosenWord = wordsList[getRandomInt(0, wordsList.length)];
	
	chosenWordArray = chosenWord.split("");
	console.log(chosenWordArray);

	for(i=0; i < chosenWordArray.length; i++) {
		dashes.push("_");
	}

	document.getElementById("wordblanks").innerHTML= dashes.join(" ");

}

function checkLetters(key) {
	for(i = 0; i <= chosenWordArray.length - 1; i++) {
		if ( key == chosenWordArray[i] ) {
			console.log("yes");
		} else {
			console.log("no");
		}
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