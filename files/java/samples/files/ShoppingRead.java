package files;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.Reader;

/**
 * This program reads the file created by {@link ShoppingCreate}.
 * It just prints the products contained in the products.csv file.
 */
public class ShoppingRead {

	public static void main(String[] args) throws IOException {

		Reader reader = new FileReader("myfiles/products.csv");

		BufferedReader br = new BufferedReader(reader);

		String header = br.readLine(); // ignore header

		String productLine = br.readLine();

		while (productLine != null) {

			String[] parts = productLine.split(",");

			String name = parts[0];
			double price = Double.parseDouble( parts[1] );

			System.out.println("Product " + name + " with price " + price);

			productLine = br.readLine();
		}

		br.close();
	}
}
