const { CreateRoverValidation } = require("../validators/rover/create-rover");

class Rover {
  #id;
  #position;
  #side;

  /**
   *
   * @param {import("../value-objects/id").Id} id
   * @param {import("../value-objects/position").Position} position
   * @param {string} side
   */
  constructor(id, position, side) {
    CreateRoverValidation.validate(id, position, side);
    this.#id = id;
    this.#position = position;
    this.#side = side[0].toUpperCase();
  }

  /**
   * @returns {import("../value-objects/id").Id}
   */
  get id() {
    return this.#id;
  }

  /**
   * @returns {string}
   */
  get side() {
    return this.#side;
  }

  /**
   * @returns {import("../value-objects/position").Position}
   */
  get position() {
    return this.#position;
  }

  turnLeft() {
    switch (this.#side) {
      case "N":
        this.#side = "W";
        break;
      case "W":
        this.#side = "S";
        break;
      case "S":
        this.#side = "E";
        break;
      default:
        this.#side = "N";
    }
  }

  turnRight() {
    switch (this.#side) {
      case "N":
        this.#side = "E";
        break;
      case "E":
        this.#side = "S";
        break;
      case "S":
        this.#side = "W";
        break;
      default:
        this.#side = "N";
    }
  }

  moveForward() {
    switch (this.#side) {
      case "N":
        this.#position.y += 1;
        break;
      case "W":
        this.#position.x -= 1;
        break;
      case "E":
        this.#position.x += 1;
        break;
      default:
        this.#position.y -= 1;
    }
  }
}

module.exports = { Rover };
