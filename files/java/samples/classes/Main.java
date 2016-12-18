package classes;

/**
 * Example of how we build a correct class.
 *
 * Before the
 */
public class Main {

	public static void main(String[] args) {

		CarV1 car1 = new CarV1();
		car1.brand = "Ford";
		car1.speed = -50; // We can set weird values

		CarV2 car2 = new CarV2("Toyota");
		car2.speed = -50; // We can still set weird values
		// We can also change values that maybe should not be able to change
		car2.brand = "Renault"; // Wasn't it a Toyota??

		CarV3 car3 = new CarV3("Peugeot");
		// car3.setBrand("Renault"); // We can't change the brand, that's good
		car3.setSpeed(-50); // But we can still set weird values

		Car car4 = new Car("Seat");
		// car4.setBrand("Renault"); // We can't change the brand
		car4.setSpeed(50); // We can set reasonable values
		car4.setSpeed(-50); // If we do this, the program will crash, so we can't use weird values
	}
}
