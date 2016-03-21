 var whatsUserGuess = function(hiddenNum, userGuess) {



 // give feedback about each guess – if it was too low, too high, or just right. 

	// use absolute values, if 50 or further away from the secret number, they are "Ice cold", 
	// between 30 and 50 they are "cold", between 20 and 30 they are warm, between 10 and 20 hot, 
	// and between 1 and 10 "very hot". choose what the ranges are and what feedback you provide.
var absoluteDiff = Math.abs(userGuess - hiddenNum);

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


console.log(whatsUserGuess(33, 33) === "You Win!!");
console.log(whatsUserGuess(33, 99) === "Ice cold");
console.log(whatsUserGuess(99, 33) === "Ice cold");
console.log(whatsUserGuess(33, 64) === "Cold");
console.log(whatsUserGuess(33, 54) === "Warm");
console.log(whatsUserGuess(33, 44) === "Hot");
console.log(whatsUserGuess(33, 35) === "Very Hot!");