const {
  RoverInMemoryRepository,
} = require("../../../infra/repository/memory/rover.repository");
const {
  CreateRoverControllerFactory,
} = require("../factories/create-rover-controller.factory");

const roverRepository = new RoverInMemoryRepository();

describe("Create rover controller unit test", () => {
  it("should return an error message if not pass required params", async () => {
    const controller = CreateRoverControllerFactory.create(roverRepository);

    const response = await controller.handle();

    expect(response).toEqual("Should require x, y and side param");
  });

  it("should validate is not pass x", async () => {
    const controller = CreateRoverControllerFactory.create(roverRepository);

    const response = await controller.handle({
      y: 1,
      side: "W",
    });

    expect(response).toEqual("Should require x param");
  });

  it("should validate is not pass y", async () => {
    const controller = CreateRoverControllerFactory.create(roverRepository);

    const response = await controller.handle({
      x: 1,
      side: "W",
    });

    expect(response).toEqual("Should require y param");
  });

  it("should validate is not pass side", async () => {
    const controller = CreateRoverControllerFactory.create(roverRepository);

    const response = await controller.handle({
      x: 1,
      y: 1,
    });

    expect(response).toEqual("Should require side param");
  });
});
