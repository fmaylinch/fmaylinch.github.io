/** 
 * Example for explaining PaperRun,
 * to understand how a program works in detail.
 */

class PaperRunExample {

	public static void main(String[] args) {


		// --- variables, values, types, expressions ---

		int price; // declaration
		price = 100; // assignment

		double total = price * 4; // declaration + assignment

		String message = "Total price: " + total + "€";
		System.out.println(message);

		total = total + price * 2; // assignment using same variable

		System.out.println(message);


		// --- if, blocks ---

		if (total > 500) {
			double discount = total * 0.1; // lives inside the block
			total = total - discount;
		}

		System.out.println("Total to pay: " + total + "€");


		// --- loops ---

		double monthlyPayment = 100;
		int months = (int) (total / monthlyPayment) + 1;


		double pending = total;
	
		int n = 0;
		while (n < months) {
			System.out.println("Month " + n + ": pending " + pending + ", pay " + monthlyPayment);
			pending = pending - monthlyPayment;
			n = n + 1;
		}
		System.out.println("Finally pending: " + pending);


		pending = total;

		for (int i = 0; i < months; i = i + 1) {
			System.out.println("Month " + i + ": pending " + pending + ", pay " + monthlyPayment);
			pending = pending - monthlyPayment;
		}
		System.out.println("Finally pending: " + pending);



		// --- functions ---

		displayMessage();
		calculateTotal();
		calculateDiscounted(total);
		System.out.println("Total: " + total);
		System.out.println("Discounted: " + discounted(total));
	}


	static void displayMessage() {
		System.out.println("This is a great message");
	}

	static void displayOtherMessage() {
		System.out.println("This is another message");
	}

	static void calculateTotal() {
		int total = 100;
		total = total + 50;
	}

	static void calculateDiscounted(double total) {
		int discount = 10;
		total = total - discount;
		System.out.println("Calculated total: " + total);
	}

	static double discounted(double total) {
		int discount = 10;
		return total - discount;
	}
}