package com.codethen.jsonexample;

public class Gym {

	private String name;
	private boolean visible;
	private double price;

	public Gym(String name, double price) {
		this.name = name;
		this.price = price;
		this.visible = true;
	}

	public String getName() {
		return name;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public boolean isVisible() {
		return visible;
	}

	public void setVisible(boolean visible) {
		this.visible = visible;
	}
}
