package files;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;

/**
 * Streams represent low-level (bytes, zeros and ones) data transfer.
 * In this example we copy an input.txt file to a destination output.txt
 * Before running, create the folder "myfiles" and the file "input.txt" inside,
 * with some text.
 */
public class StreamsMain {

	public static void main(String[] args) throws IOException {

		InputStream in; // input, for reading data (bytes, zeros and ones)
		OutputStream out; // output, for writing data

		// Car car1;
		// car1 = new Car("Ford");

		in = new FileInputStream("myfiles/input.txt");
		out = new FileOutputStream("myfiles/output.txt");

		int b = in.read();

		while (b != -1) {
			out.write(b);
			b = in.read();
		}

		in.close();
		out.close();
	}
}
