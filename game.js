var HangmanWord = require("./HangmanWord");
var inquirer = require("inquirer");

var exampleWord = new HangmanWord("Apple");

var inquirer = require('inquirer');

var lives = 10;

var start = function() {
	exampleWord.display();

	inquirer.prompt([
	{
		type: "input",
		message: "Guess a letter:",
		name: "guess"
	}

	]).then(function(result) {
		exampleWord.guess(result.guess);
		start();
	})
};

console.log("Welcome to Constructor Hangman! Here is your word to guess: ")
start();

// console.log(alphabet.indexOf("="));