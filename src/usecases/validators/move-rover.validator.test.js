const { MoveRoverValidator } = require("./move-rover.validator");

describe("Move rover validator unit test", () => {
  it("should throw an error if movement is invalid", () => {
    const invalidMovements = [[], "1", 1, "a1", "1a2"];

    invalidMovements.map((current) => {
      expect(() => MoveRoverValidator.validate(current)).toThrow(
        "Invalid movement format"
      );
    });
  });
});
