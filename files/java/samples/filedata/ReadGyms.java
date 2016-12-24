package filedata;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.util.List;

/**
 * Reads gyms from file (in some binary format written by ObjectOutputStream).
 */
public class ReadGyms {

	public static void main(String[] args) throws IOException, ClassNotFoundException {

		// Read from file
		FileInputStream fis = new FileInputStream("myfiles/gym.data");
		ObjectInputStream ois = new ObjectInputStream(fis);

		// cast to List<Gym> will work if we really saved that type of data
		// you must be careful with casts (only do it when you're sure)
		List<Gym> gyms = (List<Gym>) ois.readObject();

		ois.close(); // will close `fis` too

		// Display the gyms (those that are visible)
		for (Gym gym : gyms) {
			if (gym.isVisible()) {
				System.out.println( gym.getName() + " at " + gym.getPrice() + "€");
			}
		}
	}
}
