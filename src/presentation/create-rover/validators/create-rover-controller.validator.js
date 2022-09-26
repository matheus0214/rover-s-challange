const {
  CommomValidatior,
} = require("../../../domain/@shared/validators/commom");

class CreateRoverControllerValidator {
  static validate(payload) {
    if (CommomValidatior.isNullable(payload)) {
      throw new Error("Should require x, y and side param");
    }

    if (CommomValidatior.isNullable(payload.x)) {
      throw new Error("Should require x param");
    }

    if (CommomValidatior.isNullable(payload.y)) {
      throw new Error("Should require y param");
    }

    if (CommomValidatior.isNullable(payload.side)) {
      throw new Error("Should require side param");
    }
  }
}

module.exports = { CreateRoverControllerValidator };
