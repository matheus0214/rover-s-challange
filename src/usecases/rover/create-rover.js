const { CreateRoverFactory } = require("../../domain/factories/create-rover");

class CreateRoverUseCase {
  #roverRepository;

  /**
   *
   * @param {import("../../domain/repository/repository").RoverRepository} roverRepository
   */
  constructor(roverRepository) {
    this.#roverRepository = roverRepository;
  }

  /**
   *
   * @param {number} x
   * @param {number} y
   * @param {string} side
   * @returns {Promise<string>}
   */
  async execute(x, y, side) {
    const rover = CreateRoverFactory.create(x, y, side);

    await this.#roverRepository.create(rover);

    return rover.id.value;
  }
}

module.exports = { CreateRoverUseCase };
