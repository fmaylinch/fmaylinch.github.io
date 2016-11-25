
import java.util.*;


/**
 *  Samples with loops (while, for)
 */
public class LoopsSample {

	public static void main(String[] args) {

		// Review of operators:
		// artithmetic:  *  /  +  -      operands are numbers ('+' also for strings)
		// comparison:   <  >  <=  >=    operands are numbers
		// equality:     ==  !=          operands are numbers (and more...)
		// logic:        &&  ||  !       operands are booleans

		// Remmber that a processor can:
		// 1- do simple math operations: + - * /
		// 2- compare numbers: < > <= >= == !=
		// 3- jump to any instruction in the program (used by: if, while, for)
		// 4- read/write to any component (RAM, disk, other devices like: screen, keyboard, mouse, printer)

		// A couple of concepts:
		// inline variable: substitute the usages of a variable by its assigned expression
		// extract variable: introduce a new variable instead of using an expression directly
		// refactor: changing the code without changing the behaviour (inline and extract are refactors)



		System.out.println("Using `while` to print numbers from 1 to 4");

		int num = 1;

		// while ( CONDIION ) { ...block of instructions... }

		while (num < 5) {
			System.out.println(num);
			num++;
			// when the program reaches the end of the `while` (indicated by `}`),
			// it jumps back to the `while` and checks the condition again
		}



		System.out.println("Using `for` to print numbers from 1 to 4");

		// This `for` is equivalent to the previous `while`
		// Usually the variable incremented is called `i`.
		
		// for ( INIT ; CONDITION ; INCREMENT ) { ...block of instructions... }

		for ( int i = 1; i < 5; i++ ) {
			System.out.println(i);
		}
		


		System.out.println("Creating an array (list, collection) of int numbers");

		int[] numbers = { 8, 9, 5, 2, 9, 2 };

		System.out.println( "Length of array: " + numbers.length );
		System.out.println( "First number: " + numbers[0] ); // starts in 0
		System.out.println( "Second number: " + numbers[1] );

		// You can also select a number using a variable
		int index = 2;
		System.out.println( "Number at position " + index + ": " + numbers[index] );



		System.out.println("Adding all numbers of the array (using a `while`)");

		int total = 0;

		int j = 0;

		while (j < numbers.length) {
			int number = numbers[j];
			total += number;
			j++;
		}

		System.out.println( "Total: " + total );



		System.out.println("Adding all numbers of the array (using a `for`)");

		total = 0;

		// THE classic for (looping an array)
		for (int i = 0; i < numbers.length; i++) {
			int number = numbers[i];
			total += number;
		}

		System.out.println( "Total: " + total );



		System.out.println("Adding all numbers of the array (using an enhanced `for`)");

		total = 0;

		// enhanced for (less boilerplate code, shorter, cleaner, easier to read)
		for (int number : numbers) {
			total += number; // let's you focus on here, the important part
		}

		System.out.println( "Total: " + total );
	}
}