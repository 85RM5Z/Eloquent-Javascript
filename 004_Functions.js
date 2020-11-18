// Exercises : 

	// Minimum: 

	// PROBLEMATIC : Write a function min that takes two arguments and returns their minimum.

	// Author's Solution :

	function min(a, b) {
		if (a < b) return a;
		else return b;
	}

	console.log(min(0, 10));
	// → 0
	console.log(min(0, -10));
	// → -10

	// This code is self explanatory

	/*****************************************************************************************************/

	// Recursion

	/* PROBLEMATIC :Define a recursive function isEven corresponding to this description. 
									The function should accept a single parameter (a positive, whole number) and return
									a Boolean.
									Test it on 50 and 75. See how it behaves on -1. 	*/

	// Author's Solution :

	function isEven(n) {
  		if (n == 0) return true;
  		else if (n == 1) return false;
  		else if (n < 0) return isEven(-n);
  		else return isEven(n - 2);
	}

	console.log(isEven(50));
	// → true
	console.log(isEven(75));
	// → false
	console.log(isEven(-1));
	// → false

	// Explanation of the above code :

	function isEven(n) // defines a function named isEven which take n as it's argument, 
										// and when isEven is called later on it expects a number value i.e isEven(50)

		if (n == 0) return true; // if the value passed as the arg is equal to zero return the boolean value : true.
		else if (n == 1) return false; // else if the arg is equal to one return the boolean value : false.
		else if (n < 0) return isEven(-n);	// else if the arg is equal to a negative value return isEven(-n)
																				// what return isEven(-n) does is that it recalls the isEven function with a transformed n value
																				// Simply put the negative value is transformed into a positive value 
																				// Exemple : n = -1
																				// isEven(-n) -> isEven(--1) = isEven(+1)
																				// Now the isEven fuction is called with +1 intead of -1 and it will return false becase it verifies the condition (n==1) 
		else return isEven(n - 2);

			// Imagine if the n value is greater than 1 it wouldn't enter any of our conditions,
			// So what isEven(n - 2) is doing is that it is repeatedly subtracting 2 out of n until n is either 1 or 0,
			// so that n could enter one of our conditions.

	/*****************************************************************************************************/

	// Bean counting

	/* PROBLEMATIC 1 :Write a function countBs that takes a string as its only argument and returns
										a number that indicates how many uppercase “B” characters there are in the
										string. */
	
	// Author's Solution : 

		function countBs(string) {
  			let counted = 0;
  			for (let i = 0; i < string.length; i++) {
    			if (string[i] == 'B') {
      				counted += 1;
    			}
  			}
  			return counted;
		}

	/* PROBLEMATIC 2 :Write a function called countChar that behaves like countBs , except
										it takes a second argument that indicates the character that is to be counted
										(rather than counting only uppercase “B” characters). Rewrite countBs to
										make use of this new function.		*/


	// Author's Solution :
	
		function countChar(string, ch) {
  			let counted = 0;
  			for (let i = 0; i < string.length; i++) {
    			if (string[i] == ch) {
      				counted += 1;
    			}
  			}
  			return counted;
		}

		function countBs(string) {
  			return countChar(string, "B");
		}

		console.log(countBs("BBC"));
		// → 2
		console.log(countChar("kakkerlak", "k"));
		// → 4


		// Explanation of the above code :

			// Explanation of the function countChar() because countBs() is practically the same.

			function countChar(string, ch){ // defines a function countChar which takes two args string and ch. 
				let counted = 0; // declares a counter variable named counted initilized to 0.
				for (let i = 0; i < string.length; i++) { 
					// Imagine the string value we pass is "ABC"
					// What this for loop does is that it iterates over each index value of this string
					// This is the string :                              "ABC"
					// These are the positions or indexes of the string:  012
					//																										↑
					// indexes meaning : A is at index 0, B is at index 1, etc...
					// what the i variable does is that it iterates through the indexes, after each incrementation i points to a different index.
					if (string[i] == ch) {
						// This if condition checks whether a character("A" or "B" or "C") inside the string("ABC") is the same as the character("B") passed in argument.
						// string[i] : is used to access the caracter at position [i] inside the string
						// Exemple : string[0] = "A" ; string[1] = "B"
						// == ch : checks whether it's the same caracter as ch,
						counted += 1; 
						// if it is the case then increment the counter by 1, meaning we found the same character once in the string. 
					}
					return counted; // returns how many times we encountered the character ch inside the string string.
				}
			}

			function countBs(string) {
  				return countChar(string, "B");
			}

			// The countChar() function allowed us to simplifiy the countBs() function, which earlier serverd only one purpose to count "B"s in a given string. 
			// Where countChar is more generic. 

			
