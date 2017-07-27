package collections.custom;

/**
 * An element that contains an integer value and a pointer to the next element.
 */
class IntElement {

	/** Value of this element */
	private int value;

	/** Pointer to the next element */
	private IntElement next;

	public IntElement(int value) {
		this.value = value;
	}

	public int getValue() {
		return value;
	}

	public void setValue(int value) {
		this.value = value;
	}

	public IntElement getNext() {
		return next;
	}

	public void setNext(IntElement next) {
		this.next = next;
	}
}