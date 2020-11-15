/*
				“Below the surface of the machine, the program moves. Without
				effort, it expands and contracts. In great harmony, electrons scatter
				and regroup. The forms on the monitor are but ripples on the water.
				The essence stays invisibly below.”
										—Master Yuan-Ma, The Book of Programming
*/


/*	Inside the computer’s world, there is only data. You can read data, modify
	data, create new data—but that which isn’t data cannot be mentioned. All
	this data is stored as long sequences of bits and is thus fundamentally alike.
*/


// Bits are any kind of two-valued things, usually described as zeros and ones.


/*VALUES*/

/*
	Though all values are made of bits, they play different roles. 
	Every value has a type that determines its role. 
	Some values are numbers, some values are pieces of text, some values are functions, and so on.
*/

/*NUMBERS*/

/*
	Values of the number type are, unsurprisingly, numeric values. 
	In a JavaScript program, they are written as follows:

	13
*/

/*ARITHMETIC*/

/*
	The main thing to do with numbers is arithmetic. Arithmetic operations such
	as addition or multiplication take two number values and produce a new number
	from them. Here is what they look like in JavaScript:

	100 + 4 * 11

	The + and * symbols are called operators. The first stands for addition, and
	the second stands for multiplication.

	For subtraction, there is the - operator, and division can be done with the /
	operator.

	The % symbol is used to represent the remainder operation. X % Y
	is the remainder of dividing X by Y .
*/

/*SPECIAL NUMBERS*/

/*
	There are three special values in JavaScript that are considered numbers but
	don’t behave like normal numbers. The first two are Infinity and -Infinity , 
	which represent the positive and negative infinities. 
	Infinity - 1 is still Infinity , and so on.

	NaN stands for “not a number”, even though it is a value of the number type.
	Exemple : */

		Infinity - Infinity == NaN
		0 / 0 == NaN


/*STRINGS*/

/*
	The next basic data type is the string. Strings are used to represent text. They
	are written by enclosing their content in quotes.

*/
		`Down on the sea`
		"Lie on the ocean"
		'Float on the ocean'

/*
	You can use single quotes, double quotes, or backticks to mark strings, as
	long as the quotes at the start and the end of the string match.

	where you want a backslash in a string to be just a backslash, not a special code:
*/
		"A newline character is written like \"\\n\"."
/*
	If two backslashes follow each other, they will collapse together, 
	and only one will be left in the resulting string value.

		Here is the output : “A newline character is written like " \n " .”

	Strings cannot be divided, multiplied, or subtracted, but the + operator can
	be used on them. It does not add, but it concatenates—it glues two strings
	together. The following line will produce the string "concatenate" :

		"con" + "cat" + "e" + "nate"

	Backtick-quoted strings, usually called template literals, can embed other values: */

		`half of 100 is ${100 / 2}`

		Output: “half of 100 is 50” 



/*UNARY OPERATORS*/

/*
	Not all operators are symbols. Some are written as words. One example is the
	typeof operator, which produces a string value naming the type of the value
	you give it.
	
	**  From here on out, output equals // →   **
*/
	console.log(typeof 4.5)
	// → number
	console.log(typeof "x")
	// → string
/*
	We will use console.log in example code to indicate that we want to see the
	result of evaluating something.
*/


/*BOOLEAN VALUES*/

/*
	JavaScript has a Boolean type, which has just two values, true and false, 
	which are written as those words.

	*Comparison*:

		Here is one way to produce Boolean values:*/

			console.log(3 > 2)
			// → true
			console.log(3 < 2)
			// → false

/*	
		The > and < signs are the traditional symbols for “is greater than” and “is
		less than”, respectively.

		Other similar operators are >= (greater than or equal to), <= (less than or
		equal to), == (equal to), and != (not equal to).

		There is only one value in JavaScript that is not equal to itself, and that is
		NaN (“not a number”).
*/	
			console.log(NaN == NaN)
			// → false


/*LOGICAL OPERATORS*/

/*
	There are also some operations that can be applied to Boolean values them-
	selves. JavaScript supports three logical operators: and, or, and not. These
	can be used to “reason” about Booleans.

	The && operator represents logical and. It is a binary operator, and its result
	is true only if both the values given to it are true.
*/
		console.log(true && false)
		// → false
		console.log(true && true)
		// → true
/*
	The || operator denotes logical or. It produces true if either of the values
	given to it is true.

*/		console.log(false || true)
		// → true
		console.log(false || false)
		// → false
/*
	Not is written as an exclamation mark ( ! ). It is a unary operator that flips
	the value given to it— !true produces false , and !false gives true .

	The last logical operator I will discuss is not unary, not binary, but ternary,
	operating on three values. It is written with a question mark and a colon, like
	this:
*/
		console.log(true ? 1 : 2);
		// → 1
		console.log(false ? 1 : 2);
		// → 2
/*
		The value on the left of the question mark “picks” which of the other two values will come out.
		When it is true, it chooses the middle value, and when it is false, it chooses the
		value on the right.


/*EMPTY VALUES*/

/*
	There are two special values, written null and undefined , that are used to
	denote the absence of a meaningful value. They are themselves values, but
	they carry no information.
*/


/*AUTOMATIC TYPE CONVERSION*/

/*
	Difference between "==" and "===" : 

		2 == "2" : returns true auto type coercion, string converted into number.
		2 === "2" : returns false, since both operands are not the same type. 
*/

/*SHORT-CIRCUITING OF LOGICAL OPERATORS*/

/*
	Short circuiting means the second operator will not be checked if the first operator decides the final outcome.

	E.g. Expression is: True || False

	In case of ||, all we need is one of the side to be True. So if the left hand side is true, 
	there is no point in checking the right hand side, and hence that will not be checked at all.

	Similarly, False && True

	In case of &&, we need both sides to be True. So if the left hand side is False, 
	there is no point in checking the right hand side, the answer has to be False. 
	And hence that will not be checked at all.
	
*/