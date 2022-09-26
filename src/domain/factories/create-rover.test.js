const { Id } = require("../value-objects/id");
const { CreateRoverFactory } = require("./create-rover");

describe("Create rover factory unit test", () => {
  it("should be able to create a rover", () => {
    const rover = CreateRoverFactory.create(1, 2, "W");

    expect(rover.id).toBeInstanceOf(Id);
    expect(rover.id.value).not.toBeNull();
    expect(rover.position.x).toEqual(1);
    expect(rover.position.y).toEqual(2);
    expect(rover.side).toEqual("W");
  });

  it("should throw if not pass position in create rover", () => {
    expect(() => CreateRoverFactory.create("W")).toThrow();
  });

  it("should throw if not pass side in create rover", () => {
    expect(() => CreateRoverFactory.create(2, 2)).toThrow();
  });

  it("should throw if pass invalid side in create rover", () => {
    expect(() => CreateRoverFactory.create(2, 2, "invalid")).toThrow();
  });
});
