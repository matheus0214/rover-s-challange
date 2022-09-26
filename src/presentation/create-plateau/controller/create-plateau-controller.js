const {
  CreatePlateauControllerValidator,
} = require("../validators/create-plateau-controller.validator");

class CreatePlateauController {
  #createPlateauUseCase;

  /**
   * @param {import("../../../usecases/plateau/create-plateau").CreatePlateauUseCase} createPlateauUseCase
   */
  constructor(createPlateauUseCase) {
    this.#createPlateauUseCase = createPlateauUseCase;
  }

  /**
   * @param {Object} payload
   * @param {string} payload.x
   * @param {string} payload.y
   * @returns {Promise<string>}
   */
  async handle(payload) {
    try {
      CreatePlateauControllerValidator.validate(payload);

      const { x, y } = payload;

      const response = await this.#createPlateauUseCase.execute(x, y);

      return response;
    } catch (error) {
      return error.message || "Server error";
    }
  }
}

module.exports = { CreatePlateauController };
