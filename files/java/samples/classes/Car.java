package classes;

/**
 * Final version of our class, with constructor,
 * private properties and public methods that don't allow weird values
 */
public class Car {

	private String brand;
	private int speed;

	public Car(String brand) {
		this.brand = brand;
		this.speed = 0;
	}

	public String getBrand() {
		return this.brand;
	}

	public int getSpeed() {
		return this.speed;
	}

	public void setSpeed(int speed) {
		if (speed >= 0) {
			this.speed = speed;
		} else {
			// We decided to throw an exception if speed is wrong
			// We could also decide to just do nothing
			// (it's up to the class developer)
			throw new RuntimeException("Wrong speed: " + speed);
		}
	}

	// We also implement toString(), to get a description of the car
	public String toString() {
		return this.brand + " at " + this.speed + "km/h";
	}
}
