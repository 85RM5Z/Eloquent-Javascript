// Exercises : 

	// The sum of a range: 

	/* PROBLEMATIC : 	Write a range function that takes two arguments, start and end , and returns
						an array containing all the numbers from start up to (and including) end .
						Next, write a sum function that takes an array of numbers and returns the
						sum of these numbers. Run the example program and see whether it does
						indeed return 55.
						As a bonus assignment, modify your range function to take an optional third
						argument that indicates the “step” value used when building the array. If no
						step is given, the elements go up by increments of one, corresponding to the
						old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7,9]. 
						Make sure it also works with negative step values so that range(5, 2, -1)
						produces [5, 4, 3, 2] .		*/

	// Author's Solution :

		function range(start, end, step = start < end ? 1 : -1) {
	  		let array = [];

	  		if (step > 0) {
	    		for (let i = start; i <= end; i += step) array.push(i);
	  		} else {
	    		for (let i = start; i >= end; i += step) array.push(i);
	  		}
	  		return array;
		}

		function sum(array) {
	  		let total = 0;
	  		for (let value of array) { // Here we are looping through values not index, so 'value' is the actual value inside the array  
	    		total += value;
	  		}
	  		return total;
		}

		console.log(range(1, 10))
		// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		console.log(range(5, 2, -1));
		// → [5, 4, 3, 2]
		console.log(sum(range(1, 10)));
		// → 55


		// Explanation of the above code :

		function range(start, end, step = start < end ? 1 : -1) {

		// Defines a function named range which tackes three arguments start, end and step.
		// The start and end arguments looks normal but step is pretty bizarre,
		step = start < end ? 1 : -1 
		step =  // step equals "something", this means that if when the function range is called 
				// and the step arg doesn't get a value assigned to it, step will be equal to "something" by default
				 	
		start < end ? 1 : -1 // This is a simple if condition with the ternary operator ?
							 // It says : if (start < end) step gets assigned the value 1 or else -1
		

			let array = []; // The variable array is initilized to an empty array.
			if (step > 0) {
	    		for (let i = start; i <= end; i += step) array.push(i);
	    		// this for loop iterates up for positive step values
				// Ex : start = 2 ; end = 5 ; step = 1  result : [2,3,4,5]
				// push function pushes the value i passed as the arg inside the array array
			} else {
	    		for (let i = start; i >= end; i += step) array.push(i);
	    		// this for loop iterates down for negative step values
	    		// Ex : start = 5 ; end = 2 ; step = -1  result : [5,4,3,2]
	    	}
	    	return array;
	    }

	    /*****************************************************************************************************/

	    // Reversing an array

	    /* PROBLEMATIC : 	Write two functions, reverseArray and reverseArrayInPlace.
	    					The first, reverseArray , takes an array as argument
							and produces a new array that has the same elements in the inverse order. The
							second, reverseArrayInPlace , does what the reverse method does: it modifies
							the array given as argument by reversing its elements. Neither may use the
							standard reverse method.	*/


		// Author's Solution :

			function reverseArray(array) {
  				let output = [];
  				for (let i = array.length - 1; i >= 0; i--) {
    				output.push(array[i]);
  				}
  				return output;
			}

			function reverseArrayInPlace(array) {
  				for (let i = 0; i < Math.floor(array.length / 2); i++) {
    				let old = array[i];
    				array[i] = array[array.length - 1 - i];
    				array[array.length - 1 - i] = old;
  				}
  				return array;
			}

			console.log(reverseArray(["A", "B", "C"]));
			// → ["C", "B", "A"];
			let arrayValue = [1, 2, 3, 4, 5];
			reverseArrayInPlace(arrayValue);
			console.log(arrayValue);
			// → [5, 4, 3, 2, 1]
			

			// Explanation of the above code :
			
			function reverseArray(array) { // Defines a function named reverseArray which tackes an array as its arguments.

  				let output = []; // output is an empty array
  				for (let i = array.length - 1; i >= 0; i--) {
  					let i // declares a variable i in the for loop
  					array.length - 1 // i is assigned to array.length - 1, because we want to start looping 
  									 // from the last element to the first element of the array. 
  					array.length // returns the length of the array 
  								 // Ex: array=[a,b,c] -> array.length -> 3
  								 // But we know that the index of an array starts at 0
  								 // So if we give i just the value of array.length, let i would be equal to 3,
  								 // in our example array[3] doesn't exist.  
  								 // In order to get the last element we add -1 to the length of the array.
  					i >= 0  // When we are reverse looping an array we are going from the highest index to the lowest index.
  							// [a,b,c]
  							//  0 1 2 : from the highest index 2 to the lowest index 0 
  					i--  // Until the condtion (i >= 0) is not verified the index will be decrementing 
  					output.push(array[i]) // The element in position i of array will be added/pushed into the array named output.
  				}
  				return output; // return the newly reversed array output.
  			}  


  			// Unlike reverseArray() reverseArrayInPlace() will be changing the array passed in as the argument.
  			// reverseArrayInPlace() is called and impure function because it mutates variables/state/data outside of it’s lexical scope.

  			function reverseArrayInPlace(array) {
  				for (let i = 0; i < Math.floor(array.length / 2); i++) {
  				// loop through the array x number of times, where x is the length of the array,
  				// but in this case it's half of the array because of : array.length / 2.
  				// if when dividing the legnth of the array we get a floating point 
  					// Ex: 3/2 returns 1.5
  					// In this case the function Math.floor returns the largest integer less than or equal to a given number.
  					// Ex : Math.floor(3/2) returns 1 

    				let old = array[i];
    				// creates a temporary variable named old which gets assigned the first element of the array.
    				array[i] = array[array.length - 1 - i];
    				// the last element (array[array.length - 1 - i]) will be assigned to the first element (array[i]).
    				array[array.length - 1 - i] = old;
    				// the first element which is in our temporary variable 'old' will be assigned to the last element (array[array.length - 1 - i]).

    				// In a nutshell : 
    				// array = [1,2,3,4,5]
    				// 1 swaps places with 5,
    				// 2 swaps places with 4,
    				// and 3 stays at the same position.	

  				}
  				return array;
			}

		/*****************************************************************************************************/

		// A list

		/* PROBLEMATIC : Write a function arrayToList that builds up a list structure like the one
						 shown when given [1, 2, 3] as argument. Also write a listToArray function
						 that produces an array from a list. Then add a helper function prepend , which
						 takes an element and a list and creates a new list that adds the element to the
						 front of the input list, and nth , which takes a list and a number and returns
						 the element at the given position in the list (with zero referring to the first
						 element) or undefined when there is no such element.
						 If you haven’t already, also write a recursive version of nth . */

		// Author's Solution :

			function arrayToList(array) {
  				let list = null;
  				for (let i = array.length - 1; i >= 0; i--) {
    				list = {value: array[i], rest: list};
  				}
  				return list;
			}

			function listToArray(list) {
  				let array = [];
  				for (let node = list; node; node = node.rest) {
    				array.push(node.value);
  				}
  				return array;
			}

			function prepend(value, list) {
  				return {value, rest: list};
			}

			function nth(list, n) {
  				if (!list) return undefined;
  				else if (n == 0) return list.value;
  				else return nth(list.rest, n - 1);
			}

			console.log(arrayToList([10, 20]));
			// → {value: 10, rest: {value: 20, rest: null}}
			console.log(listToArray(arrayToList([10, 20, 30])));
			// → [10, 20, 30]
			console.log(prepend(10, prepend(20, null)));
			// → {value: 10, rest: {value: 20, rest: null}}
			console.log(nth(arrayToList([10, 20, 30]), 1));
			// → 20
			

		// Explanation of the above code :


			// The goal of the arrayToList(array) function is to take the array passed in as arg, 
			// trasform it into a list and return the list.
			function arrayToList(array) {

  				let list = null;
  					// declare a empty variable to be used as a list

  				for (let i = array.length - 1; i >= 0; i--) {
  				// this for loop iterates from the last element to the first
  				// for examaple let's take array = [10,20]

  				// 1st iteration : i = 1;
  				// we assign to list...
 
    				list = {
    					// the value of the current element
    					value: array[i], // value = 20, because of the reverse iteration.
    					rest: list 		 // rest = null, because rest points to the previous value, 
    									 // (which is initilized to null when we first declared the list) 
    				};
    				// now it is assigned. list = {value: 20, rest: null}

    				// ....
    				// 2nd iteration : i = 0;

    				list = {
        				//the value of the current element
						value: array[i], // value = 10  								
						rest: list 		 // rest = {value: 20, rest: null}, because rest is no longer empty
										 // rest points to the previous value we created on the 1st iteration.
					};
					// now it is assigned. list = {value: 10, rest: {value: 20, rest: null}}

					// Visualisation : 

					// { 
					//	 value : 10 
					//	 rest : -----------> {
					//							value : 20
					//							rest : null
					//						 }
					// }
				}

				return list;
			}// credit to Luis felipe De jesus Munoz for his explanation (Stack Overflow)



			// The goal of the listToArray(list) function is to take the list passed in as arg, 
			// trasform it into an array and return the array.
			function listToArray(list) {
				let array = [];
					// declare a empty array to be used as the resulting array

				for (let node = list; node; node = node.rest) {

					// For loop breakdown:

					let node = list;// Inside the for loop a variable named node is created which takes the list given as argument.
					node; // node here is a boolean, it means as long as the list is not empty it will continue running.
					node = node.rest //  After each loop, it accesses the "rest" or nested object, until rest = null.

					array.push(node.value); // Once inside the nested object (the list) push the value of the key named 'value' inside the array.   
				}
				return array;
			} // credit to laichejl for his explanation on GitHub gist


			/*** NOT COMPLETELY UNDERSTOOD NEED HELP ***/

			// Take an element and a list as arguments, prepend the element to the front of the list
			function prepend(value, list) {
				return {value, rest: list};
			}
			console.log(prepend(10, prepend(20, null)));
			// → {value: 10, rest: {value: 20, rest: null}}

			// Why give the prepend function as list argument?? RECURSION?? 

			/******************************************/


			// Take a list and an index, return the value at said index
			function nth(list, n) {
  				if (!list) return undefined;// checks if n is in the list list.
  											// in other word checks if the nth index is accessible from the list
  											// Ex: console.log(nth(arrayToList([10, 20, 30]), 1));
  											// So here we are using the arrayToList function to transform the array [10,20,30] into a list.
  											// And searches to console.log the nth value/index(in our case we are trying get the value of the elem at index 1) of array->list.
  											// Which returns -> 20
  											// More examples: 
  											// console.log(nth(arrayToList([10, 20, 30]), 0));
  											// returns -> 10
  											// console.log(nth(arrayToList([10, 20, 30]), 2));
  											// returns -> 30
  											// console.log(nth(arrayToList([10, 20, 30]), 3));
											// returns undefined, because the 3rd index is not accessible

  				else if (n == 0) return list.value; 
					// returns the first element of the list
					// console.log(nth(arrayToList([10, 20, 30]), 0));
					// returns -> 10

  				else return nth(list.rest, n - 1);
  					// the list.rest part is drilling down into the sublists, and if you go far enough you are going to reach the tail end 
  					// of the list which the rest property will reference null. 
  					// So if the number you are putting in is longer than the items in the list you will hit the !list condition and return undefined.

			}
			// credit to Stephen Bolton for his explanation on StackOverflow


			/*****************************************************************************************************/

			// Deep comparison

			/* PROBLEMATIC : Write a function deepEqual that takes two values and returns true only if they
							 are the same value or are objects with the same properties, where the values
							 of the properties are equal when compared with a recursive call to deepEqual .  */

			// Author's Solution :

			function deepEqual(a, b) {
				if (a === b) return true;
				if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

				let keysA = Object.keys(a), keysB = Object.keys(b);

				if (keysA.length != keysB.length) return false;

				for (let key of keysA) {
					if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
				}

				return true;
			}

			let obj = {here: {is: "an"}, object: 2};

			console.log(deepEqual(obj, obj));
			// → true
			console.log(deepEqual(obj, {here: 1, object: 2}));
			// → false
			console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
			// → true
			

			// Explanation of the above code :


			function deepEqual(a, b) {
				if (a === b) return true;
				if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;

				/*
					Difference between "==" and "===" : 

						2 == "2" : returns true auto type coercion, string converted into number.
						2 === "2" : returns false, since both operands are not the same type. 
				*/

				let keysA = Object.keys(a), keysB = Object.keys(b);
					// Object.keys returns an array of strings that represent all the enumerable properties of the given object.

					/*	const object1 = {
							a: 'somestring',
							b: 42,
							c: false
						};

						console.log(Object.keys(object1));
						// expected output: Array ["a", "b", "c"]
						This console.log shows us all the keys/properties of object object1
					*/
				if (keysA.length != keysB.length) return false;

					// if object a and object b doesn't have the same number of keys return false.

				for (let key of keysA) {
				// the for loop loops through all the keys/properties of the string array named keysA
					if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
					// if the current property (key) of keysA is not also included as a property (key) of keysB return false.  
				}

				return true;
			}
