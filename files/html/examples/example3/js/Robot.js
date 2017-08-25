
/**
 * Simple Robot that can move and perform actions.
 * Note: this is a simple class to show how classes can be used.
 */
class Robot {

  // Note: fields are not declared.

  /**
   * Creates a robot with a name, and its energy fully charged.
   * The constructor, as usual, is called when doing `new Robot(name)`.
   * Parameter types are not specified (JS is not a statically-typed language).
   */
  constructor(name) {
    this.name = name;
    this.energy = Robot.MAX_ENERGY; // Note: MAX_ENERGY is defined at the end
  }

  /**
   * When moving, the robot loses energy.
   * Note: we don't specify return type or parameter types
   */
  move(steps) {
    this.energy -= steps;
  }

  recharge() {
    this.energy = Robot.MAX_ENERGY;
  }

  performAction(action) {
    action();
    this.energy -= 10;
  }

  toString() {
    return this.name + " (energy: " + this.energy + ")";
  }
}

/** Note: This is a way of specifying class fields (in Java we use static) */
Robot.MAX_ENERGY = 100;
