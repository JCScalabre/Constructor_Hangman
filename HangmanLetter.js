function HangmanLetter(letter, guessed) {
	this.letter = letter;
	this.guessed = guessed;
	this.display = function() {
		if (this.guessed) {
			return this.letter
		} else {
			return "_";
		};
	};
};

module.exports = HangmanLetter;
