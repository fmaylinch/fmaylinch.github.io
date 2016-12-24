package filedata;

import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectOutputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * Writes a couple of gyms to a file in some binary format.
 *
 * Note:
 * When a file is in binary format, you can't see the contents correctly
 * with a text editor.
 */
public class WriteGyms {

	public static void main(String[] args) throws IOException {

		Gym gym1 = new Gym("Accura Bruc", 7.0);
		Gym gym2 = new Gym("Verneda", 5.0);

		gym2.setVisible(false); // just set this gym to not visible

		List<Gym> gyms = new ArrayList<>();
		gyms.add(gym1);
		gyms.add(gym2);
		gyms.add(new Gym("Maresme", 7.0)); // we can "inline" the object creation
		gyms.add(new Gym("Duet", 6.0));

		// Creates a file and writes the gyms there (in some "binary" format)
		FileOutputStream fos = new FileOutputStream("myfiles/gym.data");
		ObjectOutputStream oos = new ObjectOutputStream(fos);
		oos.writeObject(gyms);
		oos.close(); // will close `fos` too
	}
}
