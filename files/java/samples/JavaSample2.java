
import java.util.*; // Loads extra utilities

/**
 * A more complete Java sample
 */

public class JavaSample2 { // The class name must match the file name

	public static void main(String[] args) {


		System.out.println("--- Variables, values and types ---");

		int age; // variable declaration (`int` is for integer numbers)
		age = 15; // variable assignation

		double price = 5.95; // declaration + assignation (`double` is for floating-point numbers)

		boolean open = true; // booleans may contain true or false

		String name = "Mary"; // texts (strings) are surrounded by double quotes ""

		String numberAsText = "15"; // In Java, a number between quotes is just text, can't be used in operations

		// We can print any value
		System.out.println(name);
		System.out.println(age);
		System.out.println(price);
		System.out.println(open);

		// We can also build a longer text by joining strings and other values
		System.out.println("Price is " + price + "€");

		// when printing, a number and a string may look similar
		System.out.println(age);
		System.out.println(numberAsText);



		System.out.println("--- Expressions ---");

		int daysInMonth = 31;
		// An expression takes the wider type, so if an expression combines integers and floating-point
		// numbers, the expression type is floating-point (`double``).
		double weeksInMonth = daysInMonth / 7.0;
		// int weeksInMonth = daysInMonth / 7.0; // WRONG: won't compile

		// When comparing values, the expression type is `boolean`
		boolean longMonth = daysInMonth > 30;
		// int longMonth = daysInMonth > 30;  // WRONG: won't compile

		// When joining strings and other values, the expression type is `String`
		String priceDescription = "Number of days: " + daysInMonth;



		System.out.println("--- Conditional (if) ---");

		// An if statement has a boolean expression and a block of instructions
		if (daysInMonth > 30) {
			System.out.println("This is a long month because it has " + daysInMonth + " days");
		}

		// The boolean expression might be a boolean variable directly
		if (longMonth) {
			System.out.println("Yep, it's a long month");
		}

		// Optionally, you may include an "else" block
		if (price > 100) {
			System.out.println("The product is expensive");
		} else {
			System.out.println("The product is cheap, it only costs " + price);
		}



		System.out.println("--- Loop (while) ---");

		int number = 5;
		// The syntax of `while` is very similar to `if`, but it repeats while expression evaluates to true
		while (number > 0) {
			System.out.println("number is now: " + number);
			number = number - 1;
		}
		System.out.println("number is finally: " + number);


	}
}
