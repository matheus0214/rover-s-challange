const path = require("path");

const {
  PlateauInMemoryRepository,
} = require("../infra/repository/memory/plateau.repository");
const {
  RoverInMemoryRepository,
} = require("../infra/repository/memory/rover.repository");
const {
  CreatePlateauControllerFactory,
} = require("../presentation/create-plateau/factories/create-plateau-controller.factory");
const {
  CreateRoverControllerFactory,
} = require("../presentation/create-rover/factories/create-rover-controller.factory");
const {
  MoveRoverControllerFactory,
} = require("../presentation/move-rover/factories/move-rover-controller-factory");
const { ReadFileAdapter } = require("./adapter/read-file.adapter");

(async () => {
  try {
    const adapter = new ReadFileAdapter(path.join(__dirname, "input.txt"));

    const plateauRepository = new PlateauInMemoryRepository();
    const roverRepository = new RoverInMemoryRepository();

    const createPlateauController =
      CreatePlateauControllerFactory.create(plateauRepository);
    const createRoverController =
      CreateRoverControllerFactory.create(roverRepository);
    const moveRoverController = MoveRoverControllerFactory.create(
      roverRepository,
      plateauRepository
    );

    const plateau = await createPlateauController.handle(adapter.data.plateau);

    console.log(
      `Plateau created ${plateau}, size: (${adapter.data.plateau.x}, ${adapter.data.plateau.y})`
    );

    await Promise.all(
      adapter.data.rovers.map(async (current) => {
        const rover = await createRoverController.handle({
          x: current.x,
          y: current.y,
          side: current.side,
        });

        console.log(
          `Rover created: ${rover} position: (${current.x}, ${current.y})`
        );

        const movement = await moveRoverController.handle({
          roverId: rover,
          movement: current.movement,
          plateauId: plateau,
        });

        console.log(`\n- Movements rover`);
        console.log(`\t -> ${movement}`);
      })
    );
  } catch (error) {
    console.log(error.message || "Server error");
  }
})();
