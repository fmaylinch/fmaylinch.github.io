package collections.custom;

/**
 * This is a test for {@link IntList}.
 * We test different situations.
 */
public class IntListTest {

	public static void main(String[] args) {

		testEmptyList();
		testListWithOneElement();
		testListWithSomeElements();

		// This line will only be executed if all tests pass
		System.out.println("All tests OK!");
	}

	private static void testEmptyList() {
		IntList list = new IntList();
		assertEquals( list.size(), 0 );
	}

	private static void testListWithOneElement() {

		IntList list = new IntList();
		IntElement e = new IntElement(15);
		list.add(e);
		assertEquals( list.size(), 1 );
		assertEquals( list.get(0).getValue(), 15 );
	}

	private static void testListWithSomeElements() {
		
		IntList list = new IntList();

		list.add(new IntElement(10));
		list.add(new IntElement(20));
		list.add(new IntElement(30));
		list.add(new IntElement(40));

		assertEquals( list.size(), 4 );
		assertEquals( list.get(2).getValue(), 30 );
	}



	/** Checks that 2 values are equal; throws an exception if not. */
	private static void assertEquals(Object actual, Object expected) {

		if (!actual.equals(expected)) {
			throw new RuntimeException("not equals!!");
		}
	}
}








