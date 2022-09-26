const {
  MoveRoverControllerValidator,
} = require("../validators/move-rover-controller.validator");

class MoveRoverController {
  #moveRoverUseCase;

  /**
   * @param {import("../../../usecases/rover/move-rover").MoveRoverUseCase} moveRoverUseCase
   */
  constructor(moveRoverUseCase) {
    this.#moveRoverUseCase = moveRoverUseCase;
  }

  /**
   * @param {Object} payload
   * @param {string} payload.roverId
   * @param {string} payload.movement
   * @param {string} payload.plateauId
   * @returns {Promise<string>}
   */
  async handle(payload) {
    try {
      MoveRoverControllerValidator.validate(payload);

      const { roverId, movement, plateauId } = payload;

      const response = await this.#moveRoverUseCase.execute(
        roverId,
        movement,
        plateauId
      );

      return response;
    } catch (error) {
      return error.message || "Server error";
    }
  }
}

module.exports = { MoveRoverController };
