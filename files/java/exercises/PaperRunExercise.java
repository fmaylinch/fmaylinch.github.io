
/**
 * Complete the missing code (see TODO tags).
 * Then write the PaperRun up to when you enter
 * the percent() function for the second time.
 *
 * Note: Add a println() statement inside calculateSavings()
 * so it prints the total amount each month.
 */

class PaperRunExercise {

	public static void main(String[] args) {

		double salary = 2000;

		double savings = calculateSavings(salary, 3);

		System.out.println("Total savings: " + savings);
	}

	/** 
	 * Calculates how much you end up with if you save a monthlyAmount
	 * during the given months. We suppose the interest specified
	 * in the interest() function.
	 */
	static double calculateSavings(double monthlyAmount, int months) {

		return 0; // TODO
	}

	/** Percent of a value (e.g. 200 x 10% -> 20) */
	static double percent(double amount, double pct) {

		return 0; // TODO
	}

	/** 
	 * Return interest rate (not amount) for the given amount.
	 * When 0 <= salary < 2500 : you get 1%
	 * When 2500 <= salary < 5000 : you get 2%
	 * when 5000 <= salary : you get 5%
	 */
	static double interest(double amount) {

		return 0; // TODO
	}
}