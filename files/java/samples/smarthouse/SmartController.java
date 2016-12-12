/**
 * Represents a machine that can control different devices in the house,
 * like oven, tv, etc.
 */
public class SmartController {

	private Oven oven;
	private Tv tv;

	public SmartController() {
		// We create the objects here, but we could
		// also create them from outside the class and
		// set them using "setters"
		// (i.e. defining setOven and setTv)
		this.oven = new Oven("Balay");
		this.tv = new Tv("Sony");
	}

	public void prepareMovieNight() {

		// pre-heat oven to prepare supper
		this.oven.turnOn();
		this.oven.increaseTemperature(100);

		// turn on tv to watch a movie
		this.tv.turnOn();
		this.tv.increaseVolume(50);
	}

	public Oven getOven() {
		return oven;
	}

	public Tv getTv() {
		return tv;
	}
}
