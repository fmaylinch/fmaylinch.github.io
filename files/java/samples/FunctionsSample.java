/**
 * Example with functions
 */
public class FunctionsSample {

	// We'll ignore this for now
	// Suppose that the program starts at the `run` function below this one
	public static void main(String[] args) {
		new FunctionsSample().run();
	}


	/** The program starts here (let's suppose that) */
	void run() {

		System.out.println("Let's call some functions!");

		sayHello();
		sayHi("Ferran");

		int result = sum(5, 6);
		System.out.println("Sum is: " + result);


		int[] numbers = {2, 7, 5, 4};
		boolean exists = numberExists(numbers, 5);
		System.out.println("The number exists? " + exists);


		System.out.println("End of program!");
	}


	// Here we'll define some functions.
	// They are not executed "automatically".
	// They are only executed when they are called.


	/** This is a function without parameters and no return value (void) */
	void sayHello() {
		System.out.println("Hello!");

	}


	/** This is a function with one parameter and no return value (void) */
	void sayHi(String name) {
		System.out.println(name  + " says hi!");

	}


	/** This is a function with 2 parameters and a return value (int)  */
	private int sum(int a, int b) {
		int result = a + b;
		return result;
	}


	/**
	 * A function can have any type of parameters and return type
	 * (String, boolean, int, even array). You can combine them as you wish.
	 *
	 * This function returns true if the numToSearch exists in the array,
	 * or false if it doesn't.
	 */
	private boolean numberExists(int[] array, int numToSearch) {

		for (int num : array) { // loop through numbers in array

			if (num == numToSearch) {
				// When `return` is executed, the function finishes.
				// We return true now because we now the number exists.
				return true;
			}
		}

		// If we reach this instruction, it means the number was not found
		return false;
	}
}
