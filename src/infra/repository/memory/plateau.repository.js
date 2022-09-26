const { Plateau } = require("../../../domain/entity/plateau");
const {
  PlateauRepository,
} = require("../../../domain/repository/plateau-repository");
const { Id } = require("../../../domain/value-objects/id");
const { Position } = require("../../../domain/value-objects/position");

class PlateauInMemoryRepository extends PlateauRepository {
  #data;

  constructor() {
    super();
    this.#data = [];
  }

  /**
   *
   * @param {import("../../../domain/entity/plateau").Plateau} plateau
   * @returns {Promise<void>}
   */
  async create(plateau) {
    this.#data.push({
      id: plateau.id.value,
      bottomLeftX: plateau.bottomLeftPosition.x,
      bottomLeftY: plateau.bottomLeftPosition.y,
      topRightX: plateau.topRightPosition.x,
      topRightY: plateau.topRightPosition.y,
    });
  }

  /**
   *
   * @param {string} id
   * @returns {Promise<import("../../../domain/entity/plateau").Plateau | undefined>} Plateau
   */
  async getById(id) {
    let plateau = this.#data.find((current) => current.id === id);

    if (plateau) {
      plateau = new Plateau(
        new Id(plateau.id),
        new Position(plateau.topRightX, plateau.topRightY)
      );
    }

    return plateau;
  }
}

module.exports = { PlateauInMemoryRepository };
