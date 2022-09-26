const { CommomValidatior } = require("../../domain/@shared/validators/commom");

class MoveRoverValidator {
  static validate(movement) {
    if (
      CommomValidatior.isArray(movement) ||
      CommomValidatior.isNumber(movement) ||
      CommomValidatior.containSpecialChar(movement) ||
      CommomValidatior.containStringAndNumbers(movement) ||
      !CommomValidatior.isString(movement) ||
      CommomValidatior.isNullable(movement)
    ) {
      throw new Error("Invalid movement format");
    }
  }
}

module.exports = { MoveRoverValidator };
