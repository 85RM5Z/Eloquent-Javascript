// Exercises
	
	// A vector type

	/* PROBLEMATIC :Write a class Vec that represents a vector in two-dimensional space. It takes
			x and y parameters (numbers), which it should save to properties of the same name.

			Give the Vec prototype two methods, plus and minus , that take another
			vector as a parameter and return a new vector that has the sum or difference
			of the two vectors’ ( this and the parameter) x and y values.
			Add a getter property length to the prototype that computes the length of
			the vector—that is, the distance of the point (x, y) from the origin (0, 0).	*/ 

	// Author's solution : 

		class Vec {
	  		constructor(x, y) {
	    			this.x = x;
	    			this.y = y;
	  		}

	  		plus(other) {
	    			return new Vec(this.x + other.x, this.y + other.y);
	  		}

	  		minus(other) {
	    			return new Vec(this.x - other.x, this.y - other.y);
	  		}

	  		get length() {
	    			return Math.sqrt(this.x * this.x + this.y * this.y);
	  		}
		}

		console.log(new Vec(1, 2).plus(new Vec(2, 3)));
		// → Vec{x: 3, y: 5}
		console.log(new Vec(1, 2).minus(new Vec(2, 3)));
		// → Vec{x: -1, y: -1}
		console.log(new Vec(3, 4).length);
		// → 5

	// Explanation of the above code :

		class Vec {
		// Creation of a Vector class, which will be used to create vector objects
	  		constructor(x, y) {
	  		// constructor takes all the parameters we want to put into our vector,
	  		// when we create a new instance or an object of that vector.
	  		// our counstructor methode takes two arguments x and y coordinates,
	  		// which are used to create a vector object. 
	    			this.x = x;
	    			this.y = y;
	    			// the this keyword is going to save the x and y coordinates on to our vector object.
	  		}

	  		// Creation of the methode plus() which takes one argument named other.
	  		// The arg other takes a new vector when the plus() methode is called.
	  		plus(other) {
	    			return new Vec(this.x + other.x, this.y + other.y);
	    			// returns a new vector with the results of the vector coordinates passed on to the constructor 
	    			// summed up with the vector coordinates passed on to the other vector
	    			// Example:
	    			//		console.log(new Vec(1, 2).plus(new Vec(2, 3)));
	    			//		(this.x + other.x, this.y + other.y)
	    			//		this.x = 1 + other.x = 2, this.y = 2 + other.y = 3
	  		}

	  		minus(other) {
	    			return new Vec(this.x - other.x, this.y - other.y);
	  		}

	  		// The getter property length computes the length of the vector
	  		get length() {
	    			return Math.sqrt(this.x * this.x + this.y * this.y);
	    			// The length of a vector is the square root of the sum of the squares of the horizontal and vertical components.
	    			// The Math.sqrt() function returns the square root of a number,
	    			// in our case Math.sqrt returns √(x² + y²)
	  		}
		}

		console.log(new Vec(1, 2).plus(new Vec(2, 3)));
		// → Vec{x: 3, y: 5}
		console.log(new Vec(1, 2).minus(new Vec(2, 3)));
		// → Vec{x: -1, y: -1}
		console.log(new Vec(3, 4).length);
		// → 5


	// Groups

		/* PROBLEMATIC :Write a class called Group (since Set is already taken). Like Set , it has add ,
				delete , and has methods. Its constructor creates an empty group, add adds
				a value to the group (but only if it isn’t already a member), delete removes
				its argument from the group (if it was a member), and has returns a Boolean
				value indicating whether its argument is a member of the group. */


		// Author's solution : 
			
			class Group {
  				constructor() {
    					this.members = [];
  				}

  				add(value) {
    					if (!this.has(value)) {
      						this.members.push(value);
    					}
  				}

  				delete(value) {
    					this.members = this.members.filter(v => v !== value);
  				}

  				has(value) {
    					return this.members.includes(value);
  				}

  				static from(collection) {
    					let group = new Group;
    					for (let value of collection) {
      						group.add(value);
    					}
    					return group;
  				}
			}

			let group = Group.from([10, 20]);
			console.log(group.has(10));
			// → true
			console.log(group.has(30));
			// → false
			group.add(10);
			group.delete(10);
			console.log(group.has(10));


		// Explanation of the above code :

			class Group {
			// Creation of a groupe, which will be use to create groupe objects.
  				constructor() {
  				// constructor methode that takes no arguments.
    					this.members = [];
    					// this keyword refers to the current instance 
    					// this is going to save the members on to our groupe objet as an array.
  				}

  				// Creation of the methode add() which takes one argument named value and adds it to the array members.
  				add(value) {
    					if (!this.has(value)) {
    					// if the members array doesn't already 'has'(or includes) the 'value' inside of it then add the 'value' to the members array.
    					// The 'this' keyword here refers to the members array, 
    					// Then calls the methode has (written below) to check 
    					// if the value passed as an argument already exists in the array members  
      						this.members.push(value);
      						// if not push value into members array.
    					}
  				}

  				// Creation of the methode delete() which takes one argument named value and deletes it from the array members.
  				delete(value) {
    					this.members = this.members.filter(v => v !== value);
    					// this.members is our array containing all the members of the groupe.

    					// when we call the filter() methode on this.members it will loop through the members array executing the callback function's
    					// testing condition (v !== value) on each element of the array.

    					// Which means unless an element(v) is different(!==) from the value(value) passed as the arg(value) it will NOT be added to the new array
    					// which filter() returns after the task is over containing only the elements different from value  
  				}

  				has(value) {
    					return this.members.includes(value); // returns boolean a value.
    					// includes methode returns true if 'value' is in memebers array, false if not.
  				}

  				/*	The static keyword defines a static method or property for a class. 
  					Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself. 
  					Static methods are often utility functions, such as functions to create or clone objects, whereas static properties are useful for caches,
  					fixed-configuration, or any other data you don't need to be replicated across instances.	*/

  				static from(collection) {
    					let group = new Group;
    					// Creates a new Groupe object, which is initilized to the variable groupe,
    					// so here the variable groupe is an empty array.
    					for (let value of collection) {
    					// loops through each value in the collection array.
      						group.add(value);
      						// each value in collection array gets added to the 'new' groupe array.
    					}
    					return group;
  				}
			}

			let group = Group.from([10, 20]);
			// The variable groupe is now initilized with an array which is the result of the expression : Group.from([10, 20])

			// Group.from([10, 20]) means 
			// Inside the class Groupe call the stactic methode 'from' and pass the array [10,20] as the argument for collection.

			console.log(group.has(10));
			// → true
			console.log(group.has(30));
			// → false
			group.add(11);
			console.log(group); // -> {members : [10,20,11]} 
			group.delete(11);
			console.log(group); // -> {members : [10,20]} 
			console.log(group.has(10));
			// → true


	// Iterable groups

		/* PROBLEMATIC :Make the Group class from the previous exercise iterable. Refer to the section
				about the iterator interface earlier in the chapter if you aren’t clear on the
				exact form of the interface anymore.
				If you used an array to represent the group’s members, don’t just return the
				iterator created by calling the Symbol.iterator method on the array. That
				would work, but it defeats the purpose of this exercise.
				It is okay if your iterator behaves strangely when the group is modified during
				iteration.	*/

		// Author's solution + Explanations:(P.S: Still decoding)

			class Group {
  				constructor() {
    					this.members = [];
  				}

  				add(value) {
    					if (!this.has(value)) {
      						this.members.push(value);
    					}
  				}

  				delete(value) {
    				this.members = this.members.filter(v => v !== value);
  				}

  				has(value) {
    					return this.members.includes(value);
  				}

  				static from(collection) {
    					let group = new Group;
    					for (let value of collection) {
      						group.add(value);
    					}
    					return group;
  				}

  				[Symbol.iterator]() {
    					return new GroupIterator(this);
				
				// Iteration revolves around two concepts namely iterables and iterators.
  				// Let's try to understand what are iterators and iterables.

  					// -> An iterable is any object that implements a methode whose key is Symbol.iterator.

  						/*	Iterable {
								[Symbole.Iterator]() : Iterator
  							}											

  								The Symbol.Iterator methode is going to return an Iterator 		*/ 

  					// -> An iterator is an object that is going to implement a next() methode

  						/*	Iterator {
								next() : IResultObj
  							}

  								This next() methode knows how to access elements in a collection be it an array or a string
  								or maps or sets.

  								The next methode returns an object(IResult) is nothing but an object that contains two properties...

  							IResultObj{
								value : any
								done : bool
  							}

  								The first property is a value property and this can be of any data type.
  								This value is going to be the actual value within the collection.

  								The second property is a boolean flag called done, this done indicates if the ieration is complete or not.
  								if done is true the iteration is complete else there are more elements to be iterated over.
  						*/
  				}
			}

			class GroupIterator {
				constructor(group) {
    					this.group = group;
    					this.position = 0;
  				}

  				next() {
    					if (this.position >= this.group.members.length) {
      						return {done: true};
    					} else {
      						let result = {
      							value: this.group.members[this.position],
           						done: false
           					};
      						this.position++;
      						return result;
    					}
  				}
			}

			for (let value of Group.from(["a", "b", "c"])) {
  				console.log(value);
			}
			// → a
			// → b
			// → c
