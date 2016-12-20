package files;

import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.Reader;
import java.io.Writer;

/**
 * Reader/Writer represent character-level (strings) data transfer.
 * In this example we copy an input.txt file to a destination output.txt
 * Before running, create the folder "myfiles" and the file "input.txt" inside,
 * with some text.
 */
public class CharsMain {

	public static void main(String[] args) throws IOException {

		Reader reader; // input, for reading characters (strings)
		Writer writer; // output, for writing characters

		reader = new FileReader("myfiles/input.txt");
		writer = new FileWriter("myfiles/output.txt");

		int b = reader.read();

		while (b != -1) {
			writer.write(b);
			b = reader.read();
		}

		reader.close();
		writer.close();
	}
}
