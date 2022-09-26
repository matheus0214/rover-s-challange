const { CommomValidatior } = require("../@shared/validators/commom");

class Id {
  #id;

  /**
   *
   * @param {string=} id
   */
  constructor(id) {
    if (id) {
      Id.#validate(id);
      this.#id = id;
    } else {
      this.#id = Math.random().toString(36).substring(2, 9);
    }
  }

  /**
   * @returns {string}
   */
  get value() {
    return this.#id;
  }

  static #validate(id) {
    if (
      CommomValidatior.isArray(id) ||
      (!CommomValidatior.isNumber(id) &&
        !CommomValidatior.isString(id) &&
        !CommomValidatior.containStringAndNumbers(id)) ||
      (!CommomValidatior.isNumber(id) && !CommomValidatior.isString(id))
    ) {
      throw new Error("Invalid id format");
    }
  }
}

module.exports = { Id };
