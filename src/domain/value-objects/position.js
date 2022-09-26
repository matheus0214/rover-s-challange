const { CommomValidatior } = require("../@shared/validators/commom");

/**
 * @namespace
 */
class Position {
  #x;
  #y;

  /**
   *
   * @param {number} x
   * @param {number} y
   */
  constructor(x, y) {
    Position.#validate(x, y);

    this.#x = x;
    this.#y = y;
  }

  /**
   * @returns {number}
   */
  get x() {
    return this.#x;
  }

  /**
   * @param {number} newX
   */
  set x(newX) {
    this.#x = newX;
  }

  /**
   * @param {number} newY
   */
  set y(newY) {
    this.#y = newY;
  }

  /**
   * @returns {number}
   */
  get y() {
    return this.#y;
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @returns {boolean}
   */
  equals(other) {
    return this.#x === other.x && this.#y === other.y;
  }

  static #validate(x, y) {
    Position.#validateFields(x, "Should require a valid x, y params");
    Position.#validateFields(y, "Should require a valid x, y params");
  }

  static #validateFields(value, message) {
    if (
      CommomValidatior.containSpecialChar(value) ||
      CommomValidatior.isArray(value) ||
      CommomValidatior.containStringAndNumbers(value) ||
      (CommomValidatior.isString(value) && !CommomValidatior.isNumber(value)) ||
      (!CommomValidatior.isString(value) && !CommomValidatior.isNumber(value))
    ) {
      throw new Error(message);
    }
  }
}

module.exports = { Position };
