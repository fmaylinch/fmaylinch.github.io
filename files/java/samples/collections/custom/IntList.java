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

	public IntElement get(int index) {

		IntElement e = first;
		
		for (int i = 0; i < index; i++) {
			e = e.getNext();
		}
		
		return e;
	}
	
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
	
	public int size() {
		return size;
	}
}
