package files;

import java.util.Scanner;

/** Example of reading from keyboard, to ask data to the user */
public class KeyboardMain {

	public static void main(String[] args) {

		Scanner scanner = new Scanner(System.in);

		System.out.print("Dime tu nombre: ");

		String name = scanner.next();

		System.out.print("Dame tu edad: ");

		int edad = scanner.nextInt();

		if (edad >= 18) {
			System.out.println(name + ", eres mayor de edad");
		} else {
			System.out.println(name + ", eres menor");
		}
	}
}
