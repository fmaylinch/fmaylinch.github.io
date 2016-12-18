package classes3;

public class Main {

	public static void main(String[] args) {

		Car car1 = new Car("Ford");
		Car car2 = new Car("Renault");
		Car car3 = new Car("Toyota");

		Train train = new Train();
		train.addCar(car1);
		train.addCar(car2);
		train.addCar(car3);

		System.out.println("Num of wagons (cars): " + train.size());

		System.out.println("First car: " + train.getCarAtPosition(0));
		System.out.println("Second car: " + train.getCarAtPosition(1));

		// TODO: Uncomment to see that this will fail
		// System.out.println("Second car: " + train.getCarAtPosition(5));
	}
}
