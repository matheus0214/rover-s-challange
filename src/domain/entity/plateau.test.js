const { Id } = require("../value-objects/id");
const { Position } = require("../value-objects/position");
const { Plateau } = require("./plateau");

describe("Plateau unit test", () => {
  it("should not create a plateau without valid id", () => {
    expect(() => new Plateau("invalid", new Position(1, 2))).toThrow(
      "Should require a valid id"
    );
  });

  it("should not create a plateau without required params", () => {
    expect(() => new Plateau()).toThrow("Should require a valid id");
  });

  it("should not create a plateau without position params", () => {
    expect(() => new Plateau(new Id(), new Position())).toThrow(
      "Should require a valid x, y params"
    );
  });

  it("should not create a plateau without position", () => {
    expect(() => new Plateau(new Id())).toThrow(
      "Should require a valid topRightPosition"
    );
  });

  it("should not create a plateau with invalid position", () => {
    expect(() => new Plateau(new Id(), "invalid")).toThrow(
      "Should require a valid topRightPosition"
    );
  });

  it("should not create a plateau with invalid x position", () => {
    const invalidXFormat = ["a1", "a", [], "[]", "12 1"];

    invalidXFormat.forEach((invalid) => {
      expect(() => new Plateau(new Id(), new Position(invalid, 2))).toThrow(
        "Should require a valid x, y params"
      );
    });
  });

  it("should not create a plateau with invalid y position", () => {
    const invalidYFormat = ["a1", "a", [], "[]", "12 1"];

    invalidYFormat.forEach((invalid) => {
      expect(() => new Plateau(new Id(), new Position(2, invalid))).toThrow(
        "Should require a valid x, y params"
      );
    });
  });

  it("should be able to create with correct params", () => {
    expect(() => new Plateau(new Id(), new Position(2, 2))).not.toThrow();
  });
});
