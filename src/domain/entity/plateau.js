const {
  CreatePlateauValidation,
} = require("../validators/plateau/create-plateau");
const { Position } = require("../value-objects/position");

class Plateau {
  #id;
  #bottomLeftPosition = new Position(0, 0);
  #topRightPosition;

  /**
   *
   * @param {import("../value-objects/id").Id} id
   * @param {import("../value-objects/position").Position} topRightPosition
   */
  constructor(id, topRightPosition) {
    CreatePlateauValidation.validate(id, topRightPosition);

    this.#id = id;
    this.#topRightPosition = topRightPosition;
  }

  /**
   * @returns {import("../value-objects/id").Id}
   */
  get id() {
    return this.#id;
  }

  /**
   * @returns {import("../value-objects/position").Position}
   */
  get topRightPosition() {
    return this.#topRightPosition;
  }

  /**
   * @returns {import("../value-objects/position").Position}
   */
  get bottomLeftPosition() {
    return this.#bottomLeftPosition;
  }
}

module.exports = { Plateau };
