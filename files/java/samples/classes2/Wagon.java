package classes2;

/** Represents a Wagon that can carry a car */
public class Wagon {

	private Car car;

	/** When the Wagon is created, it is empty (it doesn't carry a car) */
	public Wagon() {
		this.car = null;
	}

	/** Returns the car the wagon holds */
	public Car getCar() {
		return this.car;
	}

	/** Sets (puts) a car in the wagon */
	public void setCar(Car car) {
		this.car = car;
	}

	/** Removes the car from the wagon */
	public void removeCar() {
		this.car = null;
	}

	/** Description of the wagon */
	public String toString() {
		if (this.car != null) {
			return "Wagon holds car: " + this.car;
		} else {
			return "Wagon is empty";
		}
	}
}
