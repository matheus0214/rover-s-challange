const { Id } = require("../../value-objects/id");
const { Position } = require("../../value-objects/position");
const { CreatePlateauValidation } = require("./create-plateau");

describe("Create plateau validator unit test", () => {
  it("should to throw if not pass id", () => {
    expect(() => CreatePlateauValidation.validate()).toThrow(
      "Should require a valid id"
    );
  });

  it("should to throw if pass invalid id", () => {
    expect(() => CreatePlateauValidation.validate("invalid")).toThrow(
      "Should require a valid id"
    );
  });

  it("should to throw if not pass topRightPosition", () => {
    expect(() => CreatePlateauValidation.validate(new Id())).toThrow(
      "Should require a valid topRightPosition"
    );
  });

  it("should to throw if pass invalid topRightPosition", () => {
    expect(() => CreatePlateauValidation.validate(new Id(), "invalid")).toThrow(
      "Should require a valid topRightPosition"
    );
  });

  it("should not throw if all params are correct", () => {
    expect(() =>
      CreatePlateauValidation.validate(new Id(), new Position(1, 2))
    ).not.toThrow();
  });
});
