/**
 * @interface
 */
class RoverRepository {
  constructor() {
    if (this.constructor === RoverRepository) {
      throw new Error("Class 'RoverRepository' can't be instantiated.");
    }
  }

  /**
   *
   * @param {import("../entity/rover").Rover} rover
   * @returns {Promise<void>}
   */
  create(rover) {
    throw new Error("Method 'create(id, position)' must be implemented.");
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<import("../entity/rover").Rover | undefined>} Rover
   */
  getById(id) {
    throw new Error("Method 'getById(id)' must be implemented.");
  }
}

module.exports = { RoverRepository };
