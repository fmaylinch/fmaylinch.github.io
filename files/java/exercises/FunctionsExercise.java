
/**
 * Exercises about functions!
 *
 * Note: "functions" are also called "methods"
 */
public class FunctionsExercise {

	/** Ignore this function, go to run() */
	public static void main(String[] args) {
		new FunctionsExercise().run();
	}

	/**
	 * Here are the exercises
	 * define the functions below. See the bottom of the file.
	 */
	void run() {

		// 1- Define and call a function that prints "hello"
		printHello(); // (this is already solved)


		// 2- Define a function that prints "hi NAME",
		//    where NAME is the name of some person you pass as an argument.


		// --- Good names ---
		// For the functions you have to define, think about
		// a good name for them. For example, if the function prints
		// "hi NAME" we can say it "greets" (saluda), so we can name
		// it "printGreeting" or just "greet".


		// 3- Define a function that gets 2 numbers (arguments) and
		//    returns the biggest number of them.


		// --- Test them ---
		// Call your functions and check they work as expected.
		// You should call them a couple of times with different arguments.


		// 4- Define a function that gets 2 numbers (base and exponent) and
		//    calculates the power of base to the exponent. For example:
		//int pow = power(2,4); // should return 16 = 2 * 2 * 2 * 2
		// Note you can also do:
		//System.out.println( power(2,4) ) ; // should print 16


		// 5- Define a function that gets a text and a number `n`, and prints
		//    the text `n` times. Note this method doesn't return anything.


		// 6- Define a method that gets a text and a number `n`, and returns
		//    a text built as the concatenation of the text `n` times.
		//    For example:
		//String repeated = repeatString("bla", 3); // should return "blablabla"


		// 7- Define a method that gets an array of texts and returns
		//    a text built as the concatenation of all the texts.
		//    For example:
		String[] texts = {"you", "are", "amazing"};
		//String joined = joinStrings(texts); // should return "youareamazing"


		// 8- Now define a similar method, but now it gets an array of texts
		//    and also another text, that will be the separator.
		//    The method returns a text built as the concatenation of all the texts,
		//    with the separator text in the middle of them.
		//    For example:
		//String joined2 = joinStrings(texts, ", "); // should return "you, are, amazing"

		// Note: in Java you can define 2 methods with the same name
		//       as long as they have different arguments (in number or type)


		// 9- Define a method that gets an array (argument)
		//    and returns the sum of all the numbers in the array.


		// 10- Define a method that gets two numbers and returns true if
		//     one if them is twice (2 times) the other, in any order.
		//     Otherwise it returns false.
		//     For example:
		//boolean twice1 = oneIsTwice(4,8); // should return true
		//boolean twice2 = oneIsTwice(6,3); // should return true
		//boolean twice3 = oneIsTwice(2,8); // should return false
		// Remember you can do:
		//System.out.println( oneIsTwice(2,8) ); // should print false


		// 11- Define a method that takes two arrays and returns true if
		//     they contain the same numbers.
		int[] array1 = {1, 2 ,3};
		int[] array2 = {1, 2 ,4};
		//boolean equal = compareArrays(array1, array2); // false

		// What happens if one array is longer than the other? It should return false!
	}

	/** ex1 - Prints hello */
	void printHello() {
		System.out.println("hello");
	}

	// Define your functions from here:


}
