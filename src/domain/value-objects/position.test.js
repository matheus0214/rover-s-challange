const { Position } = require("./Position");

describe("Position value objet unit test", () => {
  it("should be able to create a position", () => {
    const position = new Position(1, 2);

    expect(position.x).toEqual(1);
    expect(position.y).toEqual(2);
  });

  it("should be able to comparate a position", () => {
    const position = new Position(1, 2);
    const positionToComparate = new Position(1, 2);

    expect(position.equals(positionToComparate)).toBeTruthy();
  });

  it("should not be able to create a position without x and y", () => {
    expect(() => new Position()).toThrow("Should require a valid x, y params");
  });

  it("should throw if pass invalid params", () => {
    expect(() => new Position("x", 1)).toThrow(
      "Should require a valid x, y params"
    );

    expect(() => new Position(1, "d")).toThrow(
      "Should require a valid x, y params"
    );
  });
});
