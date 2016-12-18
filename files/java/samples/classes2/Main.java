package classes2;

public class Main {

	public static void main(String[] args) {

		Car car1 = new Car("Ford");

		Wagon wagon1 = new Wagon();
		System.out.println(wagon1); // wagon is empty

		wagon1.setCar(car1);
		System.out.println(wagon1);  // wagon carries a car

		wagon1.removeCar();
		System.out.println(wagon1);  // wagon is empty again
	}
}
