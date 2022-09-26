const { Plateau } = require("../../../domain/entity/plateau");
const { Id } = require("../../../domain/value-objects/id");
const { Position } = require("../../../domain/value-objects/position");
const { PlateauInMemoryRepository } = require("./plateau.repository");

describe("Plateau repository unit test", () => {
  it("should be able to save a plateau", async () => {
    const plateau = new Plateau(new Id(), new Position(1, 2));
    const repository = new PlateauInMemoryRepository();

    await repository.create(plateau);

    const registered = await repository.getById(plateau.id.value);

    expect(registered.id).toBeInstanceOf(Id);
    expect(registered.id.value).toEqual(plateau.id.value);
    expect(registered.topRightPosition).toBeInstanceOf(Position);
    expect(registered.topRightPosition.x).toEqual(1);
    expect(registered.topRightPosition.y).toEqual(2);
    expect(registered.bottomLeftPosition).toBeInstanceOf(Position);
    expect(registered.bottomLeftPosition.x).toEqual(0);
    expect(registered.bottomLeftPosition.y).toEqual(0);
  });

  it("should return nothing if plateau is not register", async () => {
    const repository = new PlateauInMemoryRepository();

    const registered = await repository.getById("not register");

    expect(registered).toBeFalsy();
  });
});
