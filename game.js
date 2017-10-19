var HangmanWord = require("./HangmanWord");

var exampleWord = new HangmanWord("Apple");

exampleWord.display();
exampleWord.guess("p");
exampleWord.display();
