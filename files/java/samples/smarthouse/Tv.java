public class Tv {

	private String brand;
	private int volume;
	private boolean isOn;

	public Tv(String brand) {
		this.brand = brand;
		this.isOn = false;
		this.volume = 0;
	}

	public void turnOn() {
		this.isOn = true;
	}

	public void increaseVolume(int inc) {
		this.volume += inc;
	}

	public String toString() {
		return "On? " + this.isOn + ". Volume: " + this.volume;
	}
}
