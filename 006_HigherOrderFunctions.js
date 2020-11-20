// Exercises : 

	// Flattening 

	/* PROBLEMATIC :Use the reduce method in combination with the concat method to “flatten”
			an array of arrays into a single array that has all the elements of the original
			arrays.		*/


	// Author's Solution :

		let arrays = [[1, 2, 3], [4, 5], [6]];

		console.log(arrays.reduce((flat, current) => flat.concat(current), []));
		// → [1, 2, 3, 4, 5, 6]


	// Explanation of the above code :

		// Plain explanation :

			// Take the array named arrays and reduce it with an accumulator named flat,
			// with a starting/initial value of empty array [] and for each value in arrays
			// cocantenate/add that value into the empty array.

		console.log(arrays.reduce((flat, current) => flat.concat(current), []));

		(flat, current)
			// if you don't give the accumulator (in our case it's named flat) a default/initial value
			// it will start from the first element of the array named arrays and the first element 
			// we gave to flat is an empty array [] 

			// The current element(current) or in this case the current array is being processed in the array arrays.

		flat.concat(current)
			// flat is the empty array we passed earlier and it's being called using concat.
			// concat will combine the empty array and the current array to be one and the same.

			// Example :

				// flat is equal to :

				// 1st iteration : []
				// 2nd iteration : [] + [1,2,3] = [1,2,3]
				// 3rd iteration : [1,2,3] + [4,5] = [1,2,3,4,5]
				// 4th iteration : [1,2,3,4,5] + [6] = [1,2,3,4,5,6]

	/*****************************************************************************************************/

	// Your own loop
		
		/* PROBLEMATIC :Write a higher-order function loop that provides something like a for loop
				statement. It takes a value, a test function, an update function, and a body
				function. Each iteration, it first runs the test function on the current loop value
				and stops if that returns false. Then it calls the body function, giving it the
				current value. Finally, it calls the update function to create a new value and
				starts from the beginning.
				When defining the function, you can use a regular loop to do the actual looping.*/	


		// Author's Solution :

			function loop(start, test, update, body) {
  				for (let value = start; test(value); value = update(value)) {
    					body(value);
  				}
			}

			loop(3, n => n > 0, n => n - 1, console.log);
			// → 3
			// → 2
			// → 1

			// Explanation of the above code :

				for (let value = start; test(value); value = update(value))

					// Creates a value variable and initializes it with start.
					// The for loop calls test(value) as cycle test.
					// The for loop calls body(value) 
					// value is updated in the cycle after each iteration.

				loop(3, n => n > 0, n => n - 1, console.log);
					// loop(args) call's the loop function
					// start gets 3
					// test gets n => n > 0
					// update gets n => n - 1 
					// body gets console.log

		// Credit to Lajos Arpad for his explanation on StackOverflow

	/*****************************************************************************************************/

	// Everything

		/* PROBLEMATIC :Analogous to the some method, arrays also have an every method. This one
				returns true when the given function returns true for every element in the array.
				In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.
				Implement every as a function that takes an array and a predicate function
				as parameters. Write two versions, one using a loop and one using the some method. */

		// Author's Solution :

			function every(array, predicate) {
  				for (let element of array) {
    					if (!predicate(element)) return false;
  				}
  				return true;
			}

			function every2(array, predicate) {
  				return !array.some(element => !predicate(element));
			}

			console.log(every([1, 3, 5], n => n < 10));
			// → true
			console.log(every([2, 4, 16], n => n < 10));
			// → false
			console.log(every([], n => n < 10));
			// → true


			// Explanation of the above code :

			function every(array, predicate) {
				// The function every() takes an array and function which tests a boolean condition
  				for (let element of array) {
  				// for each 'element' in 'array'
    					if (!predicate(element)) return false;
    					// the predicate function takes element as its argument and tests a certain condition
    					// on the given element, if the tests fails (if it returns not true) then return false 
  				}
  				return true; // returns true if every element of the array passes the test/condition.
			}

			//Practically does the same thing as every() but using an arrow function.
			function every2(array, predicate) {
  				return !array.some(element => !predicate(element));
  				// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
  				// It returns a Boolean value.
			}

	/*****************************************************************************************************/

	// Dominant writing direction

		/* PROBLEMATIC :Write a function that computes the dominant writing direction in a string of
				text. Remember that each script object has a direction property that can be
				"ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
				The dominant direction is the direction of a majority of the characters that
				have a script associated with them. The characterScript and countBy func-
				tions defined earlier in the chapter are probaly useful here */

		// Author's Solution :

			function characterScript(code) {
				for (let script of SCRIPTS) {
					if (script.ranges.some(([from, to]) => {
						return code >= from && code < to;
					})) {
						return script;
					}
				}
				return null;
			}
			console.log(characterScript(121));
			// → {name: "Latin", ...}


			function countBy(items, groupName) {
				let counts = [];
				for (let item of items) {
					let name = groupName(item);
					let known = counts.findIndex(c => c.name == name);
					if (known == -1) {
						counts.push({name, count: 1});
					} else {
						counts[known].count++;
					}
				}
				return counts;
			}
			console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
			// → [{name: false, count: 2}, {name: true, count: 3}]

			function dominantDirection(text) {
  				let counted = countBy(text, char => {
    				let script = characterScript(char.codePointAt(0));
    				return script ? script.direction : "none";
  				}).filter(({name}) => name != "none");

  				if (counted.length == 0) return "ltr";

  				return counted.reduce((a, b) => a.count > b.count ? a : b).name;
			}

			console.log(dominantDirection("Hello!"));
			// → ltr
			console.log(dominantDirection("Hey, مساء الخير"));
			// → rtl


		// Explanation of the above code :

			// SCRIPTS :	The example data set contains some pieces of information about the 140
			//		scripts defined in Unicode. It is available in the coding sandbox for this chapter
			//		(https://eloquentjavascript.net/code#5) as the SCRIPTS binding. The binding
			//		contains an array of objects, each of which describes a script.

			/*	Such an object tells us the name of the script, the Unicode ranges assigned to
				it, the direction in which it is written, the (approximate) origin time, whether
				it is still in use, and a link to more information. The direction may be "ltr"
				for left to right, "rtl" for right to left (the way Arabic and Hebrew text are
				written), or "ttb" for top to bottom (as with Mongolian writing).
				The ranges property contains an array of Unicode character ranges, each of
				which is a two-element array containing a lower bound and an upper bound.
				Any character codes within these ranges are assigned to the script.		*/


			/*	++++ The ranges property ++++ contains an array of Unicode character ranges, each of
				which is a two-element array containing a lower bound and an upper bound.
				Any character codes within these ranges are assigned to the script.			*/	

			// Given a character code the function characterScript() finds the corresponding script.
			function characterScript(code) {
				for (let script of SCRIPTS) {
				// loops through each individual script inside the array SCRIPTS
					if (script.ranges.some(([from, to]) => {
						// script.ranges : returns an array containing a lower bound and an upper bound.
						// Ex : ranges: [[994, 1008], [11392, 11508], [11513, 11520]].
						// script.ranges.some : Here we call the some methode on ranges() 
						// And what it does is that the some methode is going to loop through each sub-array of ranges function
						// Ex : script.ranges.some(([994, 1008]) => 
						// 	script.ranges.some(([11392, 11508]) =>
						//	and so on ...
						//  For each sub-array the some methode will test the boolean condition (code >= from && code < to)					
						return code >= from && code < to;
					})) {
						return script;
					}
				}
				return null;
			}

			// Even with these explanation this code seemed tangled, but the moment i wrote the if condition
			// on a single line everything made sense, check it out.

			function characterScript(code) {
				for (let script of SCRIPTS) {
				// loops through each individual script inside the array/'database' SCRIPTS
				// each script/language corresopnds to a particular numeric range,
				// thats how a language is identified. 
					if (script.ranges.some(([from, to]) => code >= from && code < to)){
					// So inside each script there is key named range and the value is a two dimentional array
					// with multiple ranges :[[994, 1008], [11392, 11508], [11513, 11520]].
					// While looping through each indiviual script :
						// the if condition checks whether our argument 'code'(which is a range corresponding to a unique language)
						// corresponds to the current script. 
						// if it is the case (meaning our code corresponds to a valid script in the DB SCRIPTS)
							// the whole if condition becomes true and 'return script' is executed.
							// i.e: if(True) 

						return script;
					}
				}
				return null;// In case the code doesn't correspond to a valid script range, return null
			}

			console.log(characterScript(121));
			// → {name: "Latin", ...}

			/**********************************************************************************************/


			/*	The countBy function expects a collection (anything that we can loop over with for / of ) 
				and a function that computes a group name for a given element. It returns an array of objects, 
				each of which names a group and tells you the number of elements that were found in that group.
				It uses another array method— findIndex . This method is somewhat like indexOf,
				but instead of looking for a specific value, it finds the first value for which the given function returns true. 
				Like indexOf , it returns -1 when no such element is found. Using countBy, 
				we can write the function that tells us which scripts are used in a piece of text*/


			/* 	The purpose of countBy() is to return an array of objects, each of which names a group 
				and tells you the number of elements that were found in that group.	*/


			function countBy(items, groupName) {
			// countBy takes a collection/array named 'items' and a (arrow)function which returns a boolean depending 
			// on the condition named 'groupName'
				let counts = [];
				// counts is the (currently)empty resulting array
				for (let item of items) {
				// for each item in the array items
					let name = groupName(item); 
					// Ex: items = [1, 2, 3, 4, 5];
					// Ex : groupName = n => n > 2
					// 1st iteration:
						// groupName(item) : 1>2 which is False
						// Which means name = False
					let known = counts.findIndex(c => c.name == name);
						// findIndex allows you to search through an array and return the index of an element
						// which matches or satisfies the testing condition passed in.
						// findIndex iterates over array "counts"
							// Using (c => c.name == name) checks if object's(counts) "name" property is equal to 
							// the result of the groupName function (true or false).
							// If it doesn't match or the array's length is 0 it returns -1. 
							// If it matches it returns the index number of that object.
					if (known == -1) {
						counts.push({name, count: 1}); 
						//adds new object to counts array with name equal to result of groupName function
					} else {
						counts[known].count++; 
						//adds 1 to count property in object matching the index stored in 'known' which resulted from findIndex
					}
				}
				return counts;
			}
			// Credit to Michael Wilson for his explanation on codepen. 

			console.log(countBy([1, 2, 3, 4, 5], n => n > 2));
			// → [{name: false, count: 2}, {name: true, count: 3}]

			/**********************************************************************************************/


			// dominantDirection() function computes the dominant writing direction in a string of text.
			function dominantDirection(text) {
  				let counted = countBy(text, char => {
  				// the countBy function takes text as its 'items' and an arrow function	as its 'groupName'.
  				// iterates through each letter of the text. (in other words: for each char in text)
  				// creates an array with the name "ltr", "rtl", or "ttb"
    				let script = characterScript(char.codePointAt(0));
    				// we know that the function characterScript() returns a script when given a character code 
    				// The codePointAt() method points at the character/string on the first position (0) in the text 
    				// and returns a non-negative integer that is the Unicode code point value.
    				return script ? script.direction : "none";
    				// if the characterScript() function returned a valid script to be affected to the script variable
    				// then return the direction propety of the script which is either 'ltr'(left to right) or 'rtl'(right to left) or 'ttb'(top to bottom)
    				// else if no valid script was affected to the variable script return "none" 
  				}).filter(({name}) => name != "none");
  					// filters out objects whose name property is "none"

  				console.log(counted);
  				// -> [{name: "ltr", count: 5}]

  				if (counted.length == 0) return "ltr";
  				// this would mean that characterScript output false or null for all characters, 
  				// which means only things like !&%^%$#/.,]';   ~|?' were typed.

  				return counted.reduce((a, b) => a.count > b.count ? a : b).name;
  				// reduce iterates over the counted variable which contains arrays. It initializes with a(accumulator) as the first array. 
  				// Then compares the "count" properties of that array and the next  array, and returns the greater one. 
  				// Then repeats. When finished we return the array.name
			}
			// Credit to Michael Wilson for his explanation on codepen. 

			console.log(dominantDirection("Hello!"));
			// → ltr
			console.log(dominantDirection("Hey, مساء الخير"));
			// → rtl
