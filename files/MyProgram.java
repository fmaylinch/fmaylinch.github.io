
import java.util.*; // Loads extra utilities

/**
 * This is a example program.
 * Open the Terminal and go to the folder where this file is located.
 * Compile with: javac MyProgram.java
 * Compilation will check the code.
 * - If there's something wrong you will see an error.
 * - If it's right it doesn't say anything and generates MyProgram.class
 * The MyProgram.class file is the executable (runnable) file.
 * Run the program with: java MyProgram
 * Note you don't include the class extension when running the program.
 *
 * To create a new program, you can copy this file,
 * rename it, e.g. AnotherProgram.java,
 * and also change the class name right here below this line.
 */
public class MyProgram { // The class name must match the file name

	public static void main(String[] args) {

		new MyProgram().run(args);
	}


	void run(String[] args) {

		// Your program starts here.
		// It was loaded to RAM and starts running.

		System.out.println("Hello there!");

		//  The program ends here.
		// It will stop and removed from RAM.
	}
}