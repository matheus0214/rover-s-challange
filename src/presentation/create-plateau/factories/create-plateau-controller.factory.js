const {
  CreatePlateauUseCase,
} = require("../../../usecases/plateau/create-plateau");
const {
  CreatePlateauController,
} = require("../controller/create-plateau-controller");

class CreatePlateauControllerFactory {
  /**
   *
   * @param {import("../../../domain/repository/plateau-repository").PlateauRepository} plateauRepository
   * @returns {import("../controller/create-plateau-controller").CreatePlateauController}
   */
  static create(plateauRepository) {
    const useCase = new CreatePlateauUseCase(plateauRepository);
    const controller = new CreatePlateauController(useCase);

    return controller;
  }
}

module.exports = { CreatePlateauControllerFactory };
