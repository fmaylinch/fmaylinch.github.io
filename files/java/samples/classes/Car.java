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
		return brand;
	}

	// We don't make a setBrand() method, because we don't want to
	// let the users of this class change it

	public int getSpeed() {
		return speed;
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
}
