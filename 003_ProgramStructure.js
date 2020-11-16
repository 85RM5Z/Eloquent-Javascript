/*
					“And my heart glows bright red under my filmy, translucent skin and
					they have to administer 10cc of JavaScript to get me to come back.
					(I respond well to toxins in the blood.) Man, that stuff will kick the
					peaches right out your gills!”
														—_why, Why’s (Poignant) Guide to Ruby

*/

/*EXPRESSIONS AND STATEMENTS*/

/*

	If an expression corresponds to a sentence fragment, a JavaScript statement
	corresponds to a full sentence. A program is a list of statements.

	The simplest kind of statement is an expression with a semicolon after it.

	This is a program:
*/
		1;
		!false;



/*BINDINGS*/

/*
	To catch and hold values, JavaScript provides a thing called a
	binding, or variable:
*/
		let caught = 5 * 5;
		console.log(caught);
		// → 25
		console.log(caught*caught);
		// → 625

/*
	The special word (keyword) let indicates that this sentence is going to define a binding. 
	It is followed by the name of the binding and, if we want to immediately give it a value, 
	by an = operator and an expression.
*/

/*
	The words var and const can also be used to create bindings, in a way similar to let .
*/
		var name = "Ayda";
		const greeting = "Hello ";
		console.log(greeting + name);
		// → Hello Ayda


/*BINDING NAMES*/

/*
	Binding names can be any word. Digits can be part of binding names— catch22
	is a valid name, for example—but the name must not start with a digit. A
	binding name may include dollar signs ( $ ) or underscores ( _ ) but no other
	punctuation or special characters.

	Words with a special meaning, such as let , are keywords, and they may not
	be used as binding names.

	The full list of keywords and reserved words is rather long.
*/
		break case catch class const continue debugger default
		delete do else enum export extends false finally for
		function if implements import interface in instanceof let
		new package private protected public return static super
		switch this throw true try typeof var void while with yield


/*THE ENVIRONEMENT*/

/*
	The collection of bindings and their values that exist at a given time is called
	the environment. When a program starts up, this environment is not empty. It
	always contains bindings that are part of the language standard, and most of the
	time, it also has bindings that provide ways to interact with the surrounding
	system. For example, in a browser, there are functions to interact with there
	currently loaded website and to read mouse and keyboard input.
*/


/*FUNCTIONS*/

/*
	A function is a piece of program wrapped in a value. Such values can be applied
	in order to run the wrapped program.

	Executing a function is called invoking, calling, or applying it. You can
	call a function by putting parentheses after an expression that produces a
	function value.
*/


/*THE CONSOLE.LOG FUNCTION*/

/*
	Most JavaScript systems (including all modern web browsers and Node.js) 
	provide a console.log function that writes out its arguments to some text output device.
	In browsers, the output lands in the JavaScript console.
*/


/*RETURN VALUES*/

/*
	When a function produces a value, it is said to return that value. Anything
	that produces a value is an expression in JavaScript, which means function
	calls can be used within larger expressions. 
	
	Here a call to Math.min , which is the opposite of Math.max, 
	is used as part of a plus expression:
*/
		console.log(Math.min(2, 4) + 100);
		// → 102


/*CONTROL FLOW*/

/*
	When your program contains more than one statement, the statements are
	executed as if they are a story, from top to bottom.
*/
		let theNumber = Number(prompt("Pick a number")); 
		// The result of the prompt returns a string value.
		// The function Number converts the user input (the string value) to a number.
		// Which will then be binded to the variable theNumber
		console.log("Your number is the square root of " + theNumber * theNumber);


/*CONDITIONAL EXECUTION*/

/*
	Conditional execution is created with the if keyword in JavaScript. 
	In the simple case, we want some code to be executed if, and only if, 
	a certain condition holds.
*/

// Show the square of the input only if the input is actually a number:

		let theNumber = Number(prompt("Pick a number"));

		if (!Number.isNaN(theNumber)) {
			console.log("Your number is the square root of " + theNumber * theNumber);
		}

/* Explanation of the above code:

		let theNumber : Declaration of the variable theNumber
		let theNumber = something : The equal sign initialize the variable to something
		prompt("Pick a number") : The prompt function shows a little dialog box asking for
								  user input with the string "Pick a number" above the inputarea.
								  The user input is taken in as string ex: "2"
		Number(prompt("Pick a number")) : The function Number converts a value to a Number
										  Ex : "2" is converted into 2 

		Number.isNaN(arg) is a function that returns true if the argument is Not a Number or false if it is legit number.
		The exclamation point(!) means 'not true' 
		so the if statement says:
		if the function Number.isNan(theNumber) doesn't return true (which would mean the argument theNumber is legit number)
			execute the console.log

*/

/*
	If you have more than two paths to choose from, you can “chain” multiple if / else pairs together. 
	Here’s an example:
*/
		let num = Number(prompt("Pick a number"));
		if (num < 10) {
			console.log("Small");
		} else if (num < 100) {
			console.log("Medium");
		} else {
			console.log("Large");
		}
/*
	The program will first check whether num is less than 10. If it is, it chooses
	that branch, shows "Small" , and is done. If it isn’t, it takes the else branch,
	which itself contains a second if . If the second condition ( < 100 ) holds, that
	means the number is between 10 and 100, and "Medium" is shown. If it doesn’t,
	the second and last else branch is chosen.

*/


/*WHILE AND DO LOOPS*/


	//WHILE LOOP :

	let number = 0;
	while (number <= 12) {
		console.log(number);
		number = number + 2;
	}
	// → 0
	// → 2
	// ... etcetera 

	/*
		A statement starting with the keyword while creates a loop. The word while
		is followed by an expression in parentheses and then a statement, much like if .
		The loop keeps entering that statement as long as the expression produces a
		value that gives true when converted to Boolean.
	*/


	// DO WHILE LOOP

	let yourName;
	do {
		yourName = prompt("Who are you?");
	} while (!yourName);
	console.log(yourName);

	/*
		A do loop is a control structure similar to a while loop. It differs only on one
		point: a do loop always executes its body at least once, and it starts testing
		whether it should stop only after that first execution. To reflect this, the test
		appears after the body of the loop.

		This program will force you to enter a name. It will ask again and again until
		it gets something that is not an empty string. Applying the ! operator will
		convert a value to Boolean type before negating it, and all strings except ""
		convert to true . This means the loop continues going round until you provide
		a non-empty name.
	*/

	/*****************************************************************************************************/

	/*EXERCICES*/

	// LOOPING A TRIANGLE

	// PROBLEMATIC : Write a loop that makes seven calls to console.log to output the following triangle:
	/*
		#
		##
		###
		####
		#####
		######
		#######
	*/

	//Author's Solution : 

	for(let line = "#"; line.length < 8; line += "#")
  		console.log(line);

  	// Explanation of the above code :

  	
		let line = "#"; 

			//Inside the for loop he is declairing a variable named line and initilizing it to the string "#".
		
		line.length < 8;

			/* This is our condition here the length propety is called on the line variable using the dot notation (line.length),
			and the length property returns the length of a string (number of characters).

			So for the first iteration where line has only one "#" our condition looks like this :

				1 < 8 which is true so it goes on executing the rest of the code */

		line += "#" : 

			//This part is where the incrementation happens, most people are familiar with numerical incrementation as :
				for (i = 0; i<10; i = i + 1)  
					console.log(i);
				/*output : 0
						 1
						 2 and so on... 
			
			But here it is a concatanation(+) because line is not a number but a string value

			Visualisation:

			1st iteration : #   // line = "#" ;   1 < 8
			2nd iteration : ##  // line = "##" ;  2 < 8
			3rd iteration : ### // line = "###" ; 3 < 8
			etc... 
															*/
  	
  	/*****************************************************************************************************/

  	// FIZZBUZZ

  	/* PROBLEMATIC : 	Write a program that uses console.log to print all the numbers from 1 to 100,
						with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
						number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
						When you have that working, modify your program to print "FizzBuzz" for
						numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
						for numbers divisible by only one of those).                                    */


	//Author's Solution :

		for (let n = 1; n <= 100; n++) {
	  		let output = "";
	  		if (n % 3 == 0) output += "Fizz";
	  		if (n % 5 == 0) output += "Buzz";
	  		console.log(output || n);
		}


	  	// Explanation of the above code :

	  	for (let n = 1; n <= 100; n++)

	  		/*	The for loop declares a variable n and initializes it's value to 1,
			 	and loops from 1 to 100(included)
	  		*/ 
	  		let output = "";
	  		// Creates a variable named output which is an empty string.
	  		if (n % 3 == 0) output += "Fizz";
	  		// if n is divisible by 3 the output variable's empty string will be replaced by "Fizz"
	  		// so if this condition is true output will nolonger be empty it will contain the string value "Fizz"
	  		if (n % 5 == 0) output += "Buzz";
	  		// if n is divisible by 5 the output variable's empty string will be replaced by "Buzz"
	  		console.log(output || n);
	  		// This console.log is clever because it saves us from writing another if condition
	  		/*
				What this console.log does is that it prints the output only if the output string isn't empty 
				or(||) else it return the value of n (which means n wasn't divisible by 3 nor 5)	
	  		*/ 

	/*****************************************************************************************************/

	// CHESSBOARD

	/*
		PROBLEMATIC : Write a program that creates a string that represents an 8×8 grid, using newline
					  characters to separate lines. At each position of the grid there is either a space
					  or a "#" character. The characters should form a chessboard.
	*/
	
	/*  Output expected:

		 # # # #
		# # # #
		 # # # #
		# # # #
		 # # # #
		# # # #
		 # # # #
		# # # #
	*/

	//Author's Solution :

		let size = 8; 

		let board = ""; 

		for (let y = 0; y < size; y++) {
	  		for (let x = 0; x < size; x++) {
	    		if ((x + y) % 2 == 0) {
	      			board += " ";
	    		} else {
	      			board += "#";
	    		}
	  		}
	  		board += "\n";
		}

		console.log(board);

		// Explanation of the above code :

		let size = 8; // sets a limit for iterations to be used in our loop statements below

		let board = ""; // this is the empty string we're going to add either ' ' , '#' or newline

		for (let y = 0; y < size; y++){ /*in the outer loop we add newline to seperate rows*/
	  		for (let x = 0; x < size; x++){ /*every inner loop rappresents a line, and alternatively it's adding either ' ' or '#' to the string that's being populated*/
	  		// the "for loop of x" must complete it's entire run from 0 to 8 before the "for loop of y" can start it's next loop, where y++
	  			if ((x + y) % 2 == 0) {
      				board += " ";
    				// when we set x + y, every second number will be divisible by 2, therefore, 
    				// every second character will execute the " " space character, 
    				// and each new line will alternate between an even/odd number
    			}
    			else {
      				board += "#";
    			}
    			// for every other number not divisible by 2, "#" will be executed 
  			}
  		}


