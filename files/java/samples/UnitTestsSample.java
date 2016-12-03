/**
 * Sample about how to write tests.
 * Tests check that functions work as expected.
 *
 * Unit tests just check one thing (a function or a class).
 * (Integration tests check a whole business process, like the purchase of a product)
 */
public class UnitTestsSample {

	/** Ignore this function, go to run() */
	public static void main(String[] args) {
		new UnitTestsSample().run();
	}

	/**
	 */
	void run() {

		// It's difficult to test functions that just print something.
		// Luckily, the purpose of most functions is not printing things.
		// So we just skip testing these function.
		printHello();
		printGreeting("Ferran");


		// Let's see a couple of samples of how to test functions.
		// We have defined a test() function to perform tests.
		// Real application tests are very similar to this.


		// 3- Define a function that gets 2 numbers (arguments) and
		//    returns the biggest number of them.

		// We check the comparison between what the function returns and what we expect
		test( maxNum(3, 7) == 7 );
		test( maxNum(6000, 2) == 6000 );
		test( maxNum(4, -6) == 4 );
		test( maxNum(4, 4) == 4 );
		test( maxNum(0.5, -1) == 0.5 );


		// 6- Define a method that gets a text and a number `n`, and returns
		//    a text built as the concatenation of the text `n` times. For example:
		//	  String repeated = repeatString("bla", 3); // should return "blablabla"

		// If you have to compare strings, you need to use equals()
		// So instead of str1 == str2 you do str1.equals(str2)
		// It's because String are classes; we'll talk about that soon.
		test( repeatString("Well", 4).equals("WellWellWellWell") );
		test( repeatString("aa", 3).equals("aaaaaa") );
		test( repeatString("a b", 4).equals("a ba ba ba b") );
		test( repeatString("A", 1).equals("A") );
		test( repeatString("hola", 0).equals("") );

		// 10- Define a method that gets two numbers and returns true if
		//     one if them is twice (2 times) the other, in any order.

		// This function returns a boolean so we can just check its result.
		// When we expect false, we just "invert" the result with the "NOT" (!) operator.
		test( ! oneIsTwice(7, 3) );
		test( oneIsTwice(6, 3) );
		test( ! oneIsTwice(3, 7) );
		test( oneIsTwice(3, 6) );
		test( ! oneIsTwice(8, 1) );
		test( ! oneIsTwice(0, 1) );

	}


	// ex1
	void printHello() {
		System.out.println("hello");
	}

	// ex 2
	void printGreeting(String name) {
		System.out.println("Hi " + name + "!!");
	}

	// ex 3
	double maxNum(double a, double b) {
		if (a >= b) {
			return a;
		} else {
			return b;
		}
	}

	// ex 6
	String repeatString(String text, int n) {
		String repeated = "";
		for (int i = 1; i <= n; i++){
			repeated += text;
		}
		return repeated;
	}

	// ex 10
	boolean oneIsTwice(int a, int b) {
		return a == b * 2 || b == a * 2;
	}



	/**
	 * We use this method to test other methods.
	 * It throws an error if `correct` is false.
	 */
	void test(boolean correct) {

		if (!correct) {

			// Printing is not useful because we don't know what line exactly failed.
			// System.out.println("wrong");

			// Throwing an exception stops the program and prints the line that failed.
			// It also prints the functions you were in (the stack trace).
			throw new RuntimeException("Some test was wrong!!!");
		}
	}
}