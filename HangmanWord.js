var HangmanLetter = require("./HangmanLetter");


var HangmanWord = function(word) {
	this.letterArr = [];
	this.gameOver = false;
	this.lives = 7;

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
		return console.log("That input was not recognized. Please enter a letter.");
	}

	if (correctGuess === false) {
			this.lives--;
			console.log("Sorry that letter was wrong. You lost a life. You have " + this.lives + " lives left.")
	} else {
		console.log("That letter was correct!")
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
			if (displayArr.join(" ").indexOf("_") > -1) {
				console.log(displayArr.join(" "));
				console.log("\n")
			if (this.lives === 0) {
				this.gameOver = true;
				console.log("GAME OVER! The word was " + word)
			}
			} else {
				console.log(displayArr.join(" "));
				this.gameOver = true;
				console.log("Congrats you won!")
			}
		};

	};

	module.exports = HangmanWord;