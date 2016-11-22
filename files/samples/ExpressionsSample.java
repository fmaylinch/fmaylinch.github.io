
import java.util.*;

public class ExpressionsSample {

	public static void main(String[] args) {

		double price;

		// An assignment is composed by a variable name on the left
		// and an expression on the right.
		price = 100 * 1.21;


		// An expression might be just a number
		price = 150;

		int discount = 5;

		// Or something more complicated
		price = price * 1.21 - discount;

		// The result value and type depends on the values of the expression
		double exp1 = 2 * price;
		// int exp2 = 2 * price; // WRONG, expression results in a `double` value
		String exp3 = 2 * price + " euros";
		// double exp4 = 2 * price + " euros"; // WRONG, expression results in a `String` value

		// When you compare numbers, the expression results in a boolean value
		boolean isExpensive = price > 100;
		// int isExpensiveWrong = price > 100; // WRONG, result is not a number

		// You can use a boolean experssion in an "if" statement
		if (isExpensive) {
			System.out.println("Oh my, " + price + " is too much!");
		}

		// You can directly use a complex expression inside the condition (but don't abuse)
		if (price > 100) {
			System.out.println("I said " + price + " is too much!");
		}

		// You can use the `else` block, executed when the condition is not met
		// Notice that you can execute multiple instructions inside each block
		if (price < 100) {
			System.out.println("What a bargain!");
			System.out.println("Take my money!");
		} else {
			System.out.println("No way!");
			System.out.println("Too expensive!");
		}

		// Sometimes you'll want to add multiple conditions
		// Make sure they are in the right order or some blocks will never be executed
		if (price < 100) {
			System.out.println("Take my money!");
		} else if (price < 150) {
			System.out.println("Ok, not so bad, I'll buy it.");
		} else if (price < 250) {
			System.out.println("Hum... Let me think about it.");
		} else {
			System.out.println("Oh no, too much maaan.");
		}
	}
}