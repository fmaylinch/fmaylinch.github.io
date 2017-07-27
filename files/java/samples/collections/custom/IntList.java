package collections.custom;

/**
 * This is similar to a {@link java.util.List} but much more simple.
 * It contains integer values.
 */
class IntList {
	
	private IntElement first;
	private IntElement last;
	private int size;

	public IntList() {
		first = null;
		last = null;
		size = 0;
	}

	/** Gets element at specified index */
	public IntElement get(int index) {

		IntElement e = first;
		
		for (int i = 0; i < index; i++) {
			e = e.getNext();
		}
		
		return e;
	}

	/** Adds an element to the list */
	public void add(IntElement e) {

		if (last != null) {
			last.setNext(e);
			last = e;
		} else {
			first = e;
			last = e;
		}

		size++;
	}

	/** Gets number of elements in the list */
	public int size() {
		return size;
	}


	/** Tells if the list contains the given value */
	public boolean contains(int value) {
		return false; // TODO
	}

	/**
	 * Removes the element at the given index.
	 * @throws IndexOutOfBoundsException if the index is out of the list.
	 */
	public void remove(int index) {
		// TODO
	}
}
