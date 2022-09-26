const {
  CreateRoverControllerValidator,
} = require("../validators/create-rover-controller.validator");

class CreateRoverController {
  #createRoverUseCase;

  /**
   * @param {import("../../../usecases/rover/create-rover").CreateRoverUseCase} createRoverUseCase
   */
  constructor(createRoverUseCase) {
    this.#createRoverUseCase = createRoverUseCase;
  }

  /**
   * @param {Object} payload
   * @param {string} payload.x
   * @param {string} payload.y
   * @param {string} payload.side
   * @returns {Promise<string>}
   */
  async handle(payload) {
    try {
      CreateRoverControllerValidator.validate(payload);

      const { x, y, side } = payload;

      const response = await this.#createRoverUseCase.execute(x, y, side);

      return response;
    } catch (error) {
      return error.message || "Server error";
    }
  }
}

module.exports = { CreateRoverController };
