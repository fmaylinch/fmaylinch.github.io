package classes;

/** Better class, with constructor, private properties and public methods */
public class CarV3 {

	private String brand;
	private int speed;

	public CarV3(String brand) {
		this.brand = brand;
		this.speed = 0;
	}

	public String getBrand() {
		return brand;
	}

	// We don't make a setBrand() method, because we don't want to
	// let the users of this class change it

	public int getSpeed() {
		return this.speed;
	}

	public void setSpeed(int speed) {
		this.speed = speed;
	}
}
