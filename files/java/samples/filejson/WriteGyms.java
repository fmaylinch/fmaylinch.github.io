package com.codethen.jsonexample;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Writes a couple of gyms to a file in JSON format.
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

		// Instead of creating a default Gson object, we configure it
		// to write the JSON output in a prettier way.
		//Gson gson = new Gson();
		Gson gson = new GsonBuilder().setPrettyPrinting().create();

		// Convert gyms to a string in JSON format
		String json = gson.toJson(gyms);

		// Display json on screen (just to see how it looks)
		System.out.println( json );

		// Write JSON to file
		FileWriter writer = new FileWriter("myfiles/gyms.json");
		writer.write(json);
		writer.close();

		System.out.println("Gyms written to file");
	}
}
