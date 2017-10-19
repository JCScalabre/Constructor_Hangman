var HangmanLetter = require("./HangmanLetter");

var HangmanWord = function(word) {
	this.letterArr = [];
	// For loop that populates letterArr with HangmanLetter objects
	for (var i = 0; i < word.length; i++) {
		this.letterArr.push(new HangmanLetter(word[i], false))
	};

	// Guess function which compares argument to letters of word
	this.guess = function(guess) {
		for (var i = 0; i < this.letterArr.length; i++) {
			// If correct guess:
			if (guess === this.letterArr[i].letter) {
				this.letterArr[i].guessed = true;
			// If incorrect guess:
		} else {
				// lives ++
			};
		};
	};

	// Display function that prints the word to the console:
	this.display = function() {
		var displayArr = [];
		for (var i = 0; i < word.length; i++) {
			if (this.letterArr[i].guessed) {
				displayArr.push(this.letterArr[i].letter)
			} else {
				displayArr.push("_")
			};
		};
		console.log(displayArr);
	};
};

module.exports = HangmanWord;