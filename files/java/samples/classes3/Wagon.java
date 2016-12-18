package classes3;

/**
 * Represents a Wagon that can carry a car.
 *
 * The wagon is linked to a `next` wagon, so we can chain them.
 */
public class Wagon {

	private Wagon next;
	private Car car;

	/** When the Wagon is created, it is empty (it doesn't carry a car) */
	public Wagon() {
		this.car = null;
	}

	public Wagon getNext() {
		return next;
	}

	public void setNext(Wagon next) {
		this.next = next;
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
