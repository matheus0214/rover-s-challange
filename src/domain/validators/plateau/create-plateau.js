const { CommomValidatior } = require("../../@shared/validators/commom");
const { Id } = require("../../value-objects/id");
const { Position } = require("../../value-objects/position");

class CreatePlateauValidation {
  /**
   * @param {import("../../value-objects/id").Id} id
   * @param {import("../../value-objects/position").Position} topRightPosition
   */
  static validate(id, topRightPosition) {
    if (id === undefined || !(id instanceof Id)) {
      throw new Error("Should require a valid id");
    }

    if (
      topRightPosition === undefined ||
      !(topRightPosition instanceof Position)
    ) {
      throw new Error("Should require a valid topRightPosition");
    }

    if (
      !CreatePlateauValidation.#validateOnValue(topRightPosition.x) ||
      !CreatePlateauValidation.#validateOnValue(topRightPosition.y)
    ) {
      throw new Error("Invalid topRightPosition");
    }
  }

  static #validateOnValue(value) {
    if (
      CommomValidatior.containSpecialChar(value) ||
      CommomValidatior.isArray(value) ||
      CommomValidatior.containStringAndNumbers(value) ||
      (CommomValidatior.isString(value) && !CommomValidatior.isNumber(value)) ||
      (!CommomValidatior.isString(value) && !CommomValidatior.isNumber(value))
    ) {
      return false;
    }

    return true;
  }
}

module.exports = { CreatePlateauValidation };
