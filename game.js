var HangmanWord = require("./HangmanWord");
var inquirer = require("inquirer");

var exampleWord = new HangmanWord("Apple");

var start = function() {
	
	exampleWord.display();

	if (exampleWord.gameOver === false){

		inquirer.prompt([
		{
			type: "input",
			message: "Guess a letter:",
			name: "guess"
		}

		]).then(function(result) {
		// console.log(exampleWord.letterArr[0].letter);
		exampleWord.guess(result.guess);
		start();

	})
	}
};

console.log("Welcome to Constructor Hangman! Here is your word to guess: ")
start();