const { CreateRoverUseCase } = require("../../../usecases/rover/create-rover");
const {
  CreateRoverController,
} = require("../controller/create-rover-controller");

class CreateRoverControllerFactory {
  /**
   * @param {import("../../../domain/repository/repository").RoverRepository} roverRepository
   * @returns {import("../controller/create-rover-controller").CreateRoverController} controller
   */
  static create(roverRepository) {
    const useCase = new CreateRoverUseCase(roverRepository);
    const controller = new CreateRoverController(useCase);

    return controller;
  }
}

module.exports = { CreateRoverControllerFactory };
