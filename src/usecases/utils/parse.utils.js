/**
 *
 * @param {string} move
 * @param {import("../../domain/entity/rover").Rover} rover
 */
const parseMovement = (move, rover) => {
  switch (move) {
    case "L":
      rover.turnLeft();
      break;
    case "R":
      rover.turnRight();
      break;
    case "M":
      rover.moveForward();
      break;
    default:
      throw new Error("Movement not acceptable");
  }
};

/**
 * @param {import("../../domain/entity/rover").Rover} rover
 * @param {import("../../domain/entity/plateau").Plateau} plateau
 */
const validatePassBoundaries = (rover, plateau) => {
  if (
    rover.position.x > plateau.topRightPosition.x ||
    rover.position.y > plateau.topRightPosition.y ||
    rover.position.x < plateau.bottomLeftPosition.x ||
    rover.position.y < plateau.bottomLeftPosition.y
  ) {
    throw new Error("You pass plateau edges");
  }
};

module.exports = { parseMovement, validatePassBoundaries };
