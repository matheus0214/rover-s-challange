const { CommomValidatior } = require("../../@shared/validators/commom");
const { Id } = require("../../value-objects/id");
const { Position } = require("../../value-objects/position");

class CreateRoverValidation {
  /**
   * @param {import("../../value-objects/id").Id} id
   * @param {import("../../value-objects/position").Position} position
   * @param {string} side
   */
  static validate(id, position, side) {
    if (id === undefined || !(id instanceof Id)) {
      throw new Error("Should require a valid id");
    }

    if (position === undefined || !(position instanceof Position)) {
      throw new Error("Should require a valid position");
    }

    if (side === undefined || !CreateRoverValidation.#validateSide(side)) {
      throw new Error("Invalid side");
    }
  }

  static #validateSide(value) {
    if (
      CommomValidatior.containSpecialChar(value) ||
      CommomValidatior.isArray(value) ||
      CommomValidatior.containStringAndNumbers(value) ||
      !CommomValidatior.isString(value) ||
      CommomValidatior.isNumber(value) ||
      (value[0] &&
        CommomValidatior.isString(value[0]) &&
        !["N", "W", "E", "S"].includes(value[0].toUpperCase()))
    ) {
      return false;
    }

    return true;
  }
}

module.exports = { CreateRoverValidation };
