package files;

import java.io.FileWriter;
import java.io.IOException;
import java.io.Writer;
import java.util.Scanner;

/**
 * This program asks the user for a list of products and writes
 * them into a CSV file (products.csv).
 * Before running, create the folder "myfiles".
 */
public class ShoppingCreate {

	public static void main(String[] args) throws IOException {

		Scanner scanner = new Scanner(System.in);

		System.out.println("Give me the products (enter 'stop' to stop)");

		Writer writer = new FileWriter("myfiles/products.csv");
		writer.write("Name,Price\n");

		System.out.print("Product name: ");
		String name = scanner.next();

		while ( ! name.equals("stop") ) {

			System.out.print("Product price: ");
			double price = scanner.nextDouble();

			// TODO: so something with name and price
			// System.out.println("You have entered: " + name + " " + price);
			writer.write(name + "," + price + "\n");

			System.out.print("Product name: ");
			name = scanner.next();
		}

		writer.close();
	}
}
