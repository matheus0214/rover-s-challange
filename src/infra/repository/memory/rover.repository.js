const { Rover } = require("../../../domain/entity/rover");
const { RoverRepository } = require("../../../domain/repository/repository");
const { Id } = require("../../../domain/value-objects/id");
const { Position } = require("../../../domain/value-objects/position");

class RoverInMemoryRepository extends RoverRepository {
  #data;

  constructor() {
    super();
    this.#data = [];
  }

  /**
   *
   * @param {import("../../../domain/entity/rover").Rover} rover
   * @returns {Promise<void>}
   */
  async create(rover) {
    this.#data.push({
      id: rover.id.value,
      x: rover.position.x,
      y: rover.position.y,
      side: rover.side,
    });
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<import("../../../domain/entity/rover").Rover | undefined>} Rover
   */
  async getById(id) {
    let rover = this.#data.find((current) => current.id === id);

    if (rover) {
      rover = new Rover(
        new Id(rover.id),
        new Position(rover.x, rover.y),
        rover.side
      );
    }

    return rover;
  }
}

module.exports = { RoverInMemoryRepository };
