const { Id } = require("../value-objects/id");
const { Position } = require("../value-objects/position");
const { Rover } = require("./Rover");

describe("Rover unit test", () => {
  it("should not be able to create a rover without id", () => {
    expect(() => new Rover()).toThrow("Should require a valid id");
  });

  it("should not be able to create a rover with invalid id", () => {
    expect(() => new Rover("invalid")).toThrow("Should require a valid id");
  });

  it("should not be able to create a rover without position", () => {
    expect(() => new Rover(new Id())).toThrow(
      "Should require a valid position"
    );
  });

  it("should not be able to create a rover with invalid position format", () => {
    expect(() => new Rover(new Id(), "invalid")).toThrow(
      "Should require a valid position"
    );
  });

  it("should not be able to create a rover with position without x", () => {
    expect(() => new Rover(new Id(), new Position())).toThrow(
      "Should require a valid x, y params"
    );
  });

  it("should not be able to create a rover with position without y", () => {
    expect(() => new Rover(new Id(), new Position(1))).toThrow(
      "Should require a valid x, y params"
    );
  });

  it("should not create with invalid x position", () => {
    const invalidXFormat = ["a1", "a", [], "[]", "12 1"];

    invalidXFormat.forEach((invalid) => {
      expect(() => new Rover(new Id(), new Position(invalid, 2))).toThrow(
        "Should require a valid x, y params"
      );
    });
  });

  it("should not create with invalid y position", () => {
    const invalidYFormat = ["a1", "a", [], "[]", "12 1"];

    invalidYFormat.forEach((invalid) => {
      expect(() => new Rover(new Id(), new Position(2, invalid))).toThrow(
        "Should require a valid x, y params"
      );
    });
  });

  it("should not be able to create a rover without side", () => {
    expect(() => new Rover(new Id(), new Position(1, 1))).toThrow(
      "Invalid side"
    );
  });

  it("should not be able to create a rover with invalid side value", () => {
    const invalidYFormat = ["a1", [], "[]", "12 1"];

    invalidYFormat.forEach((invalid) => {
      expect(() => new Rover(new Id(), new Position(2, 2), invalid)).toThrow(
        "Invalid side"
      );
    });
  });

  it("should create a rover with correct value", () => {
    expect(() => new Rover(new Id(), new Position(2, 2), "n")).not.toThrow();
  });

  it("should be able to turn rover to left", () => {
    const expected = [
      {
        currentPosition: "N",
        expected: "W",
      },
      {
        currentPosition: "W",
        expected: "S",
      },
      {
        currentPosition: "S",
        expected: "E",
      },
      {
        currentPosition: "E",
        expected: "N",
      },
    ];

    const rover = new Rover(new Id(), new Position(2, 2), "n");

    expected.forEach(({ currentPosition, expected }) => {
      expect(rover.side).toBe(currentPosition);
      rover.turnLeft();
      expect(rover.side).toBe(expected);
    });
  });

  it("should be able to turn rover to right", () => {
    const expected = [
      {
        currentPosition: "N",
        expected: "E",
      },
      {
        currentPosition: "E",
        expected: "S",
      },
      {
        currentPosition: "S",
        expected: "W",
      },
      {
        currentPosition: "W",
        expected: "N",
      },
    ];

    const rover = new Rover(new Id(), new Position(2, 2), "n");

    expected.forEach(({ currentPosition, expected }) => {
      expect(rover.side).toBe(currentPosition);
      rover.turnRight();
      expect(rover.side).toBe(expected);
    });
  });

  it("should be able to move forward", () => {
    const rover = new Rover(new Id(), new Position(2, 2), "n");

    expect(rover.position.x).toBe(2);
    expect(rover.position.y).toBe(2);
    expect(rover.side).toBe("N");

    rover.moveForward();

    expect(rover.position.x).toBe(2);
    expect(rover.position.y).toBe(3);
    expect(rover.side).toBe("N");
  });
});
