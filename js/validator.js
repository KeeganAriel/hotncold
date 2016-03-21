function validInput($input) {
    if (isNaN($input)) {
    	return false;
    } 

    if ($input % 1 !== 0) {
      return false;
    } 
    if ($input <= 0) {
        return false; 
    } if ($input > 100) {
        return false;
    }
    return true;

}
console.log(validInput("one") === false); 
console.log(validInput("33") === true); 
console.log(validInput("pizza") === false); 
console.log(validInput("3.14") === false); 
console.log(validInput("10.00") === true); 
console.log(validInput("-10") === false); 
console.log(validInput("200") === false); 
