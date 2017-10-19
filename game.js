var HangmanWord = require("./HangmanWord");
var inquirer = require("inquirer");
var possiblewords = ["Apple", "Mango", "Pear", "Strawberry", "Orange", "Grape", "Cherry", "Banana", "Pineapple", "Grapefruit", "Avocado", "Watermelon", "Apricot", "Papaya", "Lemon", "Lychee"]

var wordPicker = function() {
	var number = Math.floor(Math.random() * 16);
	exampleWord = new HangmanWord(possiblewords[number]);
}

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
wordPicker();
start();