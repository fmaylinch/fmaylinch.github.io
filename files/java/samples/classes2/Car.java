package classes2;

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
			throw new RuntimeException("Wrong speed: " + speed);
		}
	}

	public String toString() {
		return this.brand + " at " + this.speed + "km/h";
	}
}
