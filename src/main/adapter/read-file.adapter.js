const fs = require("fs");

const { CommomValidatior } = require("../../domain/@shared/validators/commom");

class ReadFileAdapter {
  #data;

  constructor(path) {
    this.#data = fs.readFileSync(path, "utf-8").toString().split("\n");

    this.#validatePlateau();
  }

  get data() {
    return {
      plateau: this.#parsePlateau(),
      rovers: this.#parseRovers(),
    };
  }

  #parsePlateau() {
    const splited = this.#data[0].split(" ");
    return {
      x: Number(splited[0]),
      y: Number(splited[1]),
    };
  }

  #parseRovers() {
    const rovers = [];

    for (let i = 1; i < this.#data.length; i += 2) {
      const splited = this.#data[i].split(" ");
      rovers.push({
        x: Number(splited[0]),
        y: Number(splited[1]),
        side: splited[2],
        movement: this.#data[i + 1],
      });
    }

    return rovers;
  }

  #validatePlateau() {
    const splited = this.#data[0].split(" ");
    if (
      !splited[0] ||
      !splited[1] ||
      CommomValidatior.isNullable(splited[0]) ||
      CommomValidatior.isNullable(splited[1]) ||
      !CommomValidatior.isNumber(splited[0]) ||
      !CommomValidatior.isNumber(splited[1])
    ) {
      throw new Error("Invalid plateau edges");
    }
  }
}

module.exports = { ReadFileAdapter };
