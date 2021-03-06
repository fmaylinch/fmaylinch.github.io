
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
    this.numActionsPerformed = 0;
  }

  /**
   * When moving, the robot loses energy.
   * Note: we don't specify return type or parameter types
   */
  move(steps) {
    this.energy -= steps;
  }

  /** Recharges the energy */
  recharge() {
    this.energy = Robot.MAX_ENERGY;
  }

  /** Performs an action, given as a callback function */
  performAction(action) {
    action();
    this.energy -= Robot.ENERGY_PER_ACTION;
    this.numActionsPerformed++;
  }

  toString() {
    // template literal (explained in the main.js file)
    return `${this.name} (energy: ${this.energy}, actions: ${this.numActionsPerformed})`;
  }
}

/** Note: This is a way of specifying class fields (in Java we use static) */
Robot.MAX_ENERGY = 100;
Robot.ENERGY_PER_ACTION = 10;
