const { Plateau } = require("../entity/plateau");
const { Id } = require("../value-objects/id");
const { Position } = require("../value-objects/position");

class CreatePlateauFactory {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @returns {import("../entity/Plateau").Plateau} Plateau
   */
  static create(x, y) {
    const topRightPosition = new Position(x, y);
    return new Plateau(new Id(), topRightPosition);
  }
}

module.exports = { CreatePlateauFactory };
