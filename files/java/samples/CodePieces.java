/** 
 * Example with comments about the different pieces (concepts)
 * in a programming language.
 */

class CodePieces { // class declaration

	// In Java the curly braces { } surround a block of instructions

	public static void main(String[] args) { // function declaration (`main` is the entry point in Java)

		int price; // variable declaration (type is indicated in statically-typed languages)
		price = 200; // variable assignment (variable = expression)

		double discount = 0.1; // declaration + assignment


		double total = price * (1 - discount); // expression (evaluation)


		// most common types in Java: int, double, boolean, String
		int age = 20;
		double height = 1.70;
		boolean adult = true;
		String name = "Alex";

		// Also: long (64-bit), float (32-bit), char


		if (price > 1000) { // if (boolean expression)
			System.out.println("High price");
		} else if (price > 100) {
			System.out.println("Normal price");
		} else {
			System.out.println("Low price");
		}


		int count = 5;

		while (count > 0) { // while (boolean expression)
			System.out.println("Count: " + count);
			count = count - 1;
		}


		// Equivalent for loop
		for (int i = 5; i > 0; i = i - 1) {
			System.out.println("Count: " + i);
		}


		sayHello(); // Function call

		sayHello(name); // Function call with arguments (expressions)

		int result = sum(1, 2); // Function call (with arguments and result)


		// Arguments are expressions (evaluated before the call)
		// Assigned value is an expression (evaluated before the assignment)
		int result2 = sum(result, result * 2) - 5;


	} // end of function declaration


	// Other function declarations:

	static void sayHello() {
		System.out.println("Hello!");
	}

	static void sayHello(String name) {
		System.out.println("Hello " + name);
	}

	static int sum(int x, int y) {
		int total = x + y;
		return total;
	}

} // end of class declaration