const {
  CreatePlateauFactory,
} = require("../../domain/factories/create-plateau");

class CreatePlateauUseCase {
  #plateauRepository;

  /**
   *
   * @param {import("../../domain/repository/plateau-repository").PlateauRepository} plateauRepository
   */
  constructor(plateauRepository) {
    this.#plateauRepository = plateauRepository;
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @returns {Promise<string>}
   */
  async execute(x, y) {
    const plateau = CreatePlateauFactory.create(x, y);

    await this.#plateauRepository.create(plateau);

    return plateau.id.value;
  }
}

module.exports = { CreatePlateauUseCase };
