// named function that generates a number between 1 and 100 that the user will have to guess. 

// ensure that user has provided valid numberical inputs. 

 // write a named function that takes a user guess and determines which feedback to provide.


$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	var $input = $("#userGuess");
  	var $button = $("#guessButton");
  	var $feedback = $("#feedback");
  	var $count = $("#count");
  	var $List = $("#guessList");


 // create a newGame function that does everything necessary to start a new game.
 var game = new Game();

 var newGame = function() {
 	game = new Game();
 		$count.text(game.guesses.length); 
 		$feedback.text("Make your first guess!");
 		$List.empty();
 		$input.val("");
 	};

  	newGame();

 // start a new game when the user clicks the "New Game" button
   	 	$("a.new").click(function() {
 		newGame();	
 	});

// without making additional calls to the server. 

	$button.click(function() {
		console.log($input.val());
		event.preventDefault();
		var inputValue = $input.val();
		if (game.validateInput(inputValue)) {

			if	(game.guesses.indexOf(inputValue) > -1) {
				$feedback.text("You already guessed that!");
			} else {
				var feedback = game.feedback(inputValue);
		// track how many guesses the user has made. Feedback about this should appear in span#count 
		// (which defaults to 0, when the page loads).			

		$feedback.text(feedback);
		game.guess(inputValue);
		$count.text(game.guesses.length);


		// add each guessed number as an <li> to ul#guessList.
		$List.append("<li>" + inputValue + "</li>");
		$input.val("");

	}

} else {
	$feedback.text("Enter a real number!");
}

});

});