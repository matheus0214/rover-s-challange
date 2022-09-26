const { Id } = require("../value-objects/id");
const { CreatePlateauFactory } = require("./create-plateau");

describe("Create plateau factory unit test", () => {
  it("should be able to create a plateau", () => {
    const plateau = CreatePlateauFactory.create(1, 2);

    expect(plateau.id).toBeInstanceOf(Id);
    expect(plateau.id.value).toBeDefined();
    expect(plateau.topRightPosition.x).toEqual(1);
    expect(plateau.topRightPosition.y).toEqual(2);
    expect(plateau.bottomLeftPosition.x).toEqual(0);
    expect(plateau.bottomLeftPosition.y).toEqual(0);
  });

  it("should not be able to create a plateau if not pass topRightPosition", () => {
    expect(() => CreatePlateauFactory.create()).toThrow(
      "Should require a valid x, y params"
    );
  });
});
