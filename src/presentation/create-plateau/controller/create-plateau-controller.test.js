const {
  PlateauInMemoryRepository,
} = require("../../../infra/repository/memory/plateau.repository");
const {
  CreatePlateauControllerFactory,
} = require("../factories/create-plateau-controller.factory");

describe("Create plateau controller unit test", () => {
  it("should return error message if not pass required params", async () => {
    const repository = new PlateauInMemoryRepository();
    const controller = CreatePlateauControllerFactory.create(repository);

    const response = await controller.handle();

    expect(response).toEqual("Should require x and y params");
  });

  it("should return error message if not pass x param", async () => {
    const repository = new PlateauInMemoryRepository();
    const controller = CreatePlateauControllerFactory.create(repository);

    const response = await controller.handle({
      y: 1,
    });

    expect(response).toEqual("Should require x param");
  });

  it("should return error message if not pass y param", async () => {
    const repository = new PlateauInMemoryRepository();
    const controller = CreatePlateauControllerFactory.create(repository);

    const response = await controller.handle({
      x: 1,
    });

    expect(response).toEqual("Should require y param");
  });
});
