const {
  CommomValidatior,
} = require("../../../domain/@shared/validators/commom");

class CreatePlateauControllerValidator {
  static validate(payload) {
    if (CommomValidatior.isNullable(payload)) {
      throw new Error("Should require x and y params");
    }

    if (CommomValidatior.isNullable(payload.x)) {
      throw new Error("Should require x param");
    }

    if (CommomValidatior.isNullable(payload.y)) {
      throw new Error("Should require y param");
    }
  }
}

module.exports = { CreatePlateauControllerValidator };
