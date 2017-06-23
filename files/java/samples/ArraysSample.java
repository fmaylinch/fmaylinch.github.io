class ArraysSample {

	public static void main(String[] args) {

		// Predefined array
		int[] numbers = { 15, 5, 20, 2 };

		// Anyway, any position can be modified in an array
		numbers[2] = 33;

		System.out.println("--- Loop array ---");
		for (int i = 0; i < numbers.length; i++) {
			System.out.println("Number at position " + i + ": " + numbers[i]);
		}

		System.out.println("--- Abbreviated loop (without index) ---");
		for (int number : numbers) {
			System.out.println(number); // we don't have the index in this case
		}


		// Dynamically create array with some size
		int size = numbers[1];
		int[] numbers2 = new int[size];
		numbers2[0] = 10;

		System.out.println("--- By default, a new array has zeros ---");
		for (int i = 0; i < numbers2.length; i++) {
			System.out.println(numbers2[i]);
		}


		System.out.println("--- String array ---");
		String[] fruits = { "pear", "apple", "bannana "};
		for (String fruit : fruits) {
			System.out.println(fruit);
		}


		System.out.println("--- Pass array to function ---");
		int length = fullLength(fruits);
		System.out.println("Full length of fruits: " + length);
	}

	private static int fullLength(String[] words) {
		int result = 0;
		for (String word : words) {
			result += word.length(); // length of string
		}
		return result;
	}
}