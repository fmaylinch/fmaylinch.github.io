package classes3;

public class Train {

	private Wagon first;
	private Wagon last;
	private int numOfWagons;

	public Train() {
		this.first = null;
		this.last = null;
		this.numOfWagons = 0;
	}

	public void addCar(Car car) {

		// Create a wagon to cary the car
		Wagon wagon = new Wagon();
		wagon.setCar(car);

		if (this.first == null) {
			// If it's the first wagon, set `first` property
			this.first = wagon;
		} else {
			// Otherwise, link the current last wagon to the new wagon
			this.last.setNext(wagon);
		}

		// And now the new wagon will be the last
		this.last = wagon;

		numOfWagons += 1; // Increment count
	}

	public int size() {
		return this.numOfWagons;
	}

	public Car getCarAtPosition(int index) {

		if (index >= this.numOfWagons) {
			throw new IndexOutOfBoundsException("That wagon doesn't exist: " + index);
		}

		Wagon current = first; // start at first wagon

		for (int i = 1; i <= index; i++) {
			current = current.getNext(); // move to next one
		}

		return current.getCar(); // get car of the wagon we reached
	}
}
