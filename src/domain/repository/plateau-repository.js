/**
 * @interface
 */
class PlateauRepository {
  constructor() {
    if (this.constructor === PlateauRepository) {
      throw new Error("Class 'PlateauRepository' can't be instantiated.");
    }
  }

  /**
   *
   * @param {import("../entity/plateau").Plateau} Plateau
   * @returns {Promise<void>}
   */
  create(plateau) {
    throw new Error("Method 'create(id, position)' must be implemented.");
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<import("../entity/plateau").Plateau | undefined>} Rover
   */
  getById(id) {
    throw new Error("Method 'getById(id)' must be implemented.");
  }
}

module.exports = { PlateauRepository };
