const {
  parseMovement,
  validatePassBoundaries,
} = require("../utils/parse.utils");
const { MoveRoverValidator } = require("../validators/move-rover.validator");

class MoveRoverUseCase {
  #roverRepository;
  #plateauRepository;

  /**
   *
   * @param {import("../../domain/repository/repository").RoverRepository} roverRepository
   * @param {import("../../domain/repository/plateau-repository").PlateauRepository} plateauRepository
   */
  constructor(roverRepository, plateauRepository) {
    this.#roverRepository = roverRepository;
    this.#plateauRepository = plateauRepository;
  }

  /**
   *
   * @param {string} roverId
   * @param {string} movement
   * @param {string} plateauId
   * @returns {Promise<string>}
   */
  async execute(roverId, movement, plateauId) {
    const rover = await this.#roverRepository.getById(roverId);
    if (!rover) {
      throw new Error("Rover not found");
    }

    const plateau = await this.#plateauRepository.getById(plateauId);
    if (!plateau) {
      throw new Error("Plateau not found");
    }

    MoveRoverValidator.validate(movement);

    for (let i = 0; i < movement.length; i++) {
      parseMovement(movement[i], rover);
      validatePassBoundaries(rover, plateau);
    }

    return `${rover.position.x} ${rover.position.y} ${rover.side}`;
  }
}

module.exports = { MoveRoverUseCase };
