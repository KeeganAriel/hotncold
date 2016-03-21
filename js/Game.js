var Game = function() {
	this.hiddenNumber = this.RNG();
	this.guesses = [];
};

Game.prototype.RNG = function() {
	return Math.floor((Math.random() * 100) + 1);
};

Game.prototype.validateInput = function(userInput) {
	if(isNaN(userInput)) {
		return false;
	} else if (userInput % 1 !== 0) {
		return false;
	} else if (userInput <= 0) {
		return false;
	} else if (userInput > 100) {
		return false;
	} else {
		return true;
	}
};

Game.prototype.feedback = function(userGuess) {

 	// give feedback about each guess – if it was too low, too high, or just right. 
	 var absoluteDiff = Math.abs(userGuess - this.hiddenNumber);

	 if (absoluteDiff === 0){
	 	return "You Win!!";
	 } else if (absoluteDiff >= 50) {
	 	return "Ice cold";
	 } else if (absoluteDiff >= 30) {
	 	return "Cold";
	 } else if (absoluteDiff >= 20 ) {
	 	return "Warm";
	 } else if (absoluteDiff >= 10) {
	 	return "Hot";
	 } else {
	 	return "Very Hot!";
	 }
};

Game.prototype.guess = function(userGuess) {
	if (this.validateInput(userGuess)) {
		this.guesses.push(userGuess);
		return this.feedback(userGuess);
	}
};