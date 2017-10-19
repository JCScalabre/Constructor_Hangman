var HangmanLetter = require("./HangmanLetter");


var HangmanWord = function(word) {
	this.letterArr = [];
	// For loop that populates letterArr with HangmanLetter objects
	for (var i = 0; i < word.length; i++) {
		this.letterArr.push(new HangmanLetter(word[i], false))
	};

	// Guess function which compares argument to letters of word
	this.guess = function(guess) {
		var correctGuess = false;
		var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
		if (alphabet.indexOf(guess) > -1) {

			for (var i = 0; i < this.letterArr.length; i++) {
			// If correct guess:
			if (guess === this.letterArr[i].letter.toLowerCase()) {
				this.letterArr[i].guessed = true;
				correctGuess = true;

			// If incorrect guess:
		} else if (correctGuess === false) {
			correctGuess = false;
		};
	};
} else {
	console.log("Please enter a letter");
}

if (correctGuess === false) {
	console.log("You lost a life.")
} else {
	console.log("You didn't lose a life.")
};
};

		// Display function that prints the word to the console:
		this.display = function() {
			var displayArr = [];
			for (var i = 0; i < word.length; i++) {
				if (this.letterArr[i].guessed) {
					displayArr.push(this.letterArr[i].letter);
				} else {
					displayArr.push("_");
				};
			};
			console.log(displayArr.join(" "));
			console.log("\n")
		};
	};

	module.exports = HangmanWord;