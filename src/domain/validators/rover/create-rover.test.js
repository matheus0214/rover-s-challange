const { Id } = require("../../value-objects/id");
const { Position } = require("../../value-objects/position");
const { CreateRoverValidation } = require("./create-rover");

describe("Create rover validator unit test", () => {
  it("should throw if not pass id", () => {
    expect(() => CreateRoverValidation.validate()).toThrow(
      "Should require a valid id"
    );
  });

  it("should throw if pass invalid id", () => {
    expect(() => CreateRoverValidation.validate("invalid")).toThrow(
      "Should require a valid id"
    );
  });

  it("should throw if not pass position", () => {
    expect(() => CreateRoverValidation.validate(new Id())).toThrow(
      "Should require a valid position"
    );
  });

  it("should throw if pass invalid position", () => {
    expect(() => CreateRoverValidation.validate(new Id(), "invalid")).toThrow(
      "Should require a valid position"
    );
  });

  it("should throw if not pass side", () => {
    expect(() =>
      CreateRoverValidation.validate(new Id(), new Position(1, 1))
    ).toThrow("Invalid side");
  });

  it("should throw if pass invalid side", () => {
    expect(() =>
      CreateRoverValidation.validate(new Id(), new Position(1, 1), "invalid")
    ).toThrow("Invalid side");
  });

  it("should not throw if pass all valid params", () => {
    expect(() =>
      CreateRoverValidation.validate(new Id(), new Position(1, 1), "W")
    ).not.toThrow();
  });
});
