/**
 * This program is an example of how to define new class types and how to use them.
 */
public class ClassesSample {

	/** Remember that `main` is the entry point of the program */
	public static void main(String[] args) {

		System.out.println("start");

		// When we define a class like Car
		// we define a new "type" like String, List, etc.

		// So we can declare a variable of type Car.
		// This is like when we declare a String name, or a List<Integer> numbers.
		// Remember: TYPE NAME; is the syntax in Java
		Car renault;

		// Then we can create a new Car object, so it can
		// contain the properties defined in the Car class.
		// It's like we take RAM memory to store the properties of a car (brand and speed)
		renault = new Car();


		// Check the class Car defined below, at the end of this file


		// We can set values to the properties of the car we created
		renault.brand = "Renault";
		renault.speed = 100;

		// We can create other cars, with their own property values (brand and speed)
		Car ford = new Car();
		ford.brand = "Ford";
		ford.speed = 150;

		// Let's print the status of both car objects (each has a different brand and speed)
		// We're using the `status` method, that we have defined in the Car class
		System.out.println( renault.status() );
		System.out.println( ford.status() );

		// Now let's increase the speed of one of the cars
		renault.accelerate(20);
		renault.accelerate(10);

		// If we print the status again, we will see that the `renault` has a higher speed (100+20+10)
		System.out.println( renault.status() );
		System.out.println( ford.status() );
	}
}



// Note the next class is defined outside of the class above (ClassesSample).
// Also note the class is not marked as `public` (you can't do it, we'll talk about that later).

/**
 * This is defining a class called Car.
 *
 * This class specifies the properties that a car has.
 * And also defines the actions (methods) that a car can do.
 *
 * A class is used when you create objects of that class.
 */
class Car {

	// -- properties, fields --
	// they are information related to a car
	// we can declare anything we want
	// the syntax is similar to declaring a variable

	String brand;
	int speed;


	// -- methods --
	// they are functions, very similar to what we have done previously
	// the only difference is that they have access to a special variable
	// called `this`, that references this car, this object, the car
	// object we are working with right now (it's the object
	// that we used to call the method).

	String status() {
		return this.brand + " running at " + this.speed + "km/h";
	}

	void accelerate(int increment) {
		this.speed = this.speed + increment;
	}
}