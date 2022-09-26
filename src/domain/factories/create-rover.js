const { Rover } = require("../entity/Rover");
const { Id } = require("../value-objects/id");
const { Position } = require("../value-objects/position");

class CreateRoverFactory {
  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {string} side
   * @returns {import("../entity/Rover").Rover} Rover
   */
  static create(x, y, side) {
    const initialPosition = new Position(x, y);
    return new Rover(new Id(), initialPosition, side);
  }
}

module.exports = { CreateRoverFactory };
