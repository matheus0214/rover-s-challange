const { Plateau } = require("../../domain/entity/plateau");
const { Rover } = require("../../domain/entity/rover");
const { Id } = require("../../domain/value-objects/id");
const { Position } = require("../../domain/value-objects/position");
const { MoveRoverUseCase } = require("./move-rover");

const rover = new Rover(new Id(), new Position(1, 2), "N");
const plateau = new Plateau(new Id(), new Position(5, 5));

const roverRepositoryMock = () => ({
  getById: jest.fn().mockReturnValue(rover),
});

const plateauRepositoryMock = () => ({
  getById: jest.fn().mockReturnValue(plateau),
});

describe("Move rover usecase unit test", () => {
  it("should throw if rover is not found", async () => {
    const mockRoverRepository = roverRepositoryMock();
    const mockPlateauRepository = plateauRepositoryMock();

    mockRoverRepository.getById = jest.fn().mockReturnValueOnce(undefined);

    const useCase = new MoveRoverUseCase(
      mockRoverRepository,
      mockPlateauRepository
    );

    await expect(() =>
      useCase.execute(rover.id.value, "", plateau.id.value)
    ).rejects.toThrow("Rover not found");
  });

  it("should throw if plateau is not found", async () => {
    const mockRoverRepository = roverRepositoryMock();
    const mockPlateauRepository = plateauRepositoryMock();

    mockPlateauRepository.getById = jest.fn().mockReturnValueOnce(undefined);

    const useCase = new MoveRoverUseCase(
      mockRoverRepository,
      mockPlateauRepository
    );

    await expect(() =>
      useCase.execute(rover.id.value, "", plateau.id.value)
    ).rejects.toThrow("Plateau not found");
  });

  it("should throw if movement are in invalid format", async () => {
    const mockRoverRepository = roverRepositoryMock();
    const mockPlateauRepository = plateauRepositoryMock();

    const useCase = new MoveRoverUseCase(
      mockRoverRepository,
      mockPlateauRepository
    );

    const invalidMovements = [[], "", 123, "a12"];

    await Promise.all(
      invalidMovements.map(async (invalidMovement) => {
        await expect(() =>
          useCase.execute(rover.id.value, invalidMovement, plateau.id.value)
        ).rejects.toThrow("Invalid movement format");
      })
    );
  });

  it("should throw if movement pass plateau edges", async () => {
    const mockRoverRepository = roverRepositoryMock();
    const mockPlateauRepository = plateauRepositoryMock();

    const useCase = new MoveRoverUseCase(
      mockRoverRepository,
      mockPlateauRepository
    );

    await expect(() =>
      useCase.execute(rover.id.value, "MMMMMM", plateau.id.value)
    ).rejects.toThrow("You pass plateau edges");
  });

  it("should be possible to move a rover", async () => {
    const rover = new Rover(new Id(), new Position(1, 2), "N");

    const mockRoverRepository = roverRepositoryMock();
    mockRoverRepository.getById = jest.fn().mockReturnValueOnce(rover);

    const mockPlateauRepository = plateauRepositoryMock();

    const useCase = new MoveRoverUseCase(
      mockRoverRepository,
      mockPlateauRepository
    );

    const response = await useCase.execute(
      rover.id.value,
      "LMLMLMLMM",
      plateau.id.value
    );

    expect(response).toEqual("1 3 N");
  });
});
