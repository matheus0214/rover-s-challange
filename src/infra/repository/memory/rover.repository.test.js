const { Rover } = require("../../../domain/entity/rover");
const { Id } = require("../../../domain/value-objects/id");
const { Position } = require("../../../domain/value-objects/position");
const { RoverInMemoryRepository } = require("./rover.repository");

describe("Rover repository unit test", () => {
  it("should be able to save a rover", async () => {
    const rover = new Rover(new Id(), new Position(1, 2), "W");
    const repository = new RoverInMemoryRepository();

    await repository.create(rover);

    const registered = await repository.getById(rover.id.value);

    expect(registered.id).toBeInstanceOf(Id);
    expect(registered.id.value).toEqual(rover.id.value);
    expect(registered.position).toBeInstanceOf(Position);
    expect(registered.position.x).toEqual(1);
    expect(registered.position.y).toEqual(2);
    expect(registered.side).toEqual("W");
  });

  it("should return nothing if plateau is not register", async () => {
    const repository = new RoverInMemoryRepository();

    const registered = await repository.getById("not register");

    expect(registered).toBeFalsy();
  });
});
