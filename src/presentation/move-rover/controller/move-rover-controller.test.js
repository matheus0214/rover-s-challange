const {
  MoveRoverControllerFactory,
} = require("../factories/move-rover-controller-factory");

const { Plateau } = require("../../../domain/entity/plateau");
const { Id } = require("../../../domain/value-objects/id");
const { Position } = require("../../../domain/value-objects/position");
const { Rover } = require("../../../domain/entity/rover");
const {
  RoverInMemoryRepository,
} = require("../../../infra/repository/memory/rover.repository");
const {
  PlateauInMemoryRepository,
} = require("../../../infra/repository/memory/plateau.repository");

const roverRepository = new RoverInMemoryRepository();
const plateauRepository = new PlateauInMemoryRepository();

describe("Move rover controller unit test", () => {
  it("should validate all required params", async () => {
    const controller = MoveRoverControllerFactory.create(
      roverRepository,
      plateauRepository
    );

    const response = await controller.handle();

    expect(response).toEqual(
      "Should require roverId, movement and plateauId param"
    );
  });

  it("should validate is not pass roverId", async () => {
    const controller = MoveRoverControllerFactory.create(
      roverRepository,
      plateauRepository
    );

    const response = await controller.handle({
      movement: "M",
      plateauId: "any",
    });

    expect(response).toEqual("Should require roverId param");
  });

  it("should validate is not pass movement", async () => {
    const controller = MoveRoverControllerFactory.create(
      roverRepository,
      plateauRepository
    );

    const response = await controller.handle({
      roverId: "any_rover_id",
      plateauId: "any",
    });

    expect(response).toEqual("Should require movement param");
  });

  it("should validate is not pass plateauId", async () => {
    const controller = MoveRoverControllerFactory.create(
      roverRepository,
      plateauRepository
    );

    const response = await controller.handle({
      roverId: "any_rover_id",
      movement: "LLL",
    });

    expect(response).toEqual("Should require plateauId param");
  });

  it("should move a rover", async () => {
    const rover = new Rover(new Id("cv2"), new Position(3, 3), "E");
    roverRepository.getById = jest.fn().mockReturnValueOnce(rover);

    const plateau = new Plateau(new Id("x1x"), new Position(5, 5));
    plateauRepository.getById = jest.fn().mockReturnValueOnce(plateau);

    const controller = MoveRoverControllerFactory.create(
      roverRepository,
      plateauRepository
    );

    const response = await controller.handle({
      roverId: rover.id.value,
      movement: "MMRMMRMRRM",
      plateauId: plateau.id.value,
    });

    expect(response).toEqual("5 1 E");
  });
});
