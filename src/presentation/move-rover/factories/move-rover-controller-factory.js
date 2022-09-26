const { MoveRoverUseCase } = require("../../../usecases/rover/move-rover");
const { MoveRoverController } = require("../controller/move-rover-controller");

class MoveRoverControllerFactory {
  /**
   * @param {import("../../../domain/repository/repository").RoverRepository} roverRepository
   * @param {import("../../../domain/repository/plateau-repository").PlateauRepository} plateauRepository
   * @returns {import("../controller/move-rover-controller").MoveRoverController} controller
   */
  static create(roverRepository, plateauRepository) {
    const useCase = new MoveRoverUseCase(roverRepository, plateauRepository);
    const controller = new MoveRoverController(useCase);

    return controller;
  }
}

module.exports = { MoveRoverControllerFactory };
