public class Oven {

	// properties are usually private,
	// so they can't be modified without control
	private String brand;
	private boolean isOn;
	private int temperature;


	// constructor: initializes the properties/fields
	public Oven(String brand) {
		this.brand = brand;     // some properties are set via parameters
		this.isOn = false;      // other properties are set with some
		this.temperature = 0;   //   reasonable initial values
	}


	// methods

	public String toString() {
		return "On? " + this.isOn + ". Temperature: " + this.temperature + " ºC.";
	}


	public void increaseTemperature(int increment) {
		if (this.isOn) { // this "if" doesn't let us increment temp of a oven that is off
			this.temperature = this.temperature + increment;
			adjustTemperature();
		}
	}

	// private method, we don't want it to be used from outside the class
	/** Adjusts temperature so it is reasonable */
	private void adjustTemperature() {
		if (this.temperature < 0) {
			this.temperature = 0;
		} else if (this.temperature > 300) {
			this.temperature = 300;
		}
	}

	public void turnOn() {
		this.isOn = true;
	}

	public void turnOff() {
		this.isOn = false;
		this.temperature = 0;
	}
}