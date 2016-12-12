public class SmartHouseSample {

	public static void main(String[] args) {

		SmartController controller = new SmartController();
		controller.prepareMovieNight();

		Oven oven = controller.getOven();
		Tv tv = controller.getTv();

		System.out.println("Oven: " + oven.toString());
		System.out.println("Tv: " + tv.toString());

	}
}
