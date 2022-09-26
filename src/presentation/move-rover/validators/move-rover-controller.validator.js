const {
  CommomValidatior,
} = require("../../../domain/@shared/validators/commom");

class MoveRoverControllerValidator {
  static validate(payload) {
    if (CommomValidatior.isNullable(payload)) {
      throw new Error("Should require roverId, movement and plateauId param");
    }

    if (CommomValidatior.isNullable(payload.roverId)) {
      throw new Error("Should require roverId param");
    }

    if (CommomValidatior.isNullable(payload.movement)) {
      throw new Error("Should require movement param");
    }

    if (CommomValidatior.isNullable(payload.plateauId)) {
      throw new Error("Should require plateauId param");
    }
  }
}

module.exports = { MoveRoverControllerValidator };
