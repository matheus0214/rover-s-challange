const { CreateRoverUseCase } = require("./create-rover");

const roverRepositoryMock = () => ({
  create: jest.fn(),
});

describe("Create rover usecase unit test", () => {
  it("should be able to create a rover", async () => {
    const mockRepository = roverRepositoryMock();

    const spy = jest.spyOn(mockRepository, "create");

    const useCase = new CreateRoverUseCase(mockRepository);

    await useCase.execute(1, 2, "W");

    expect(spy).toBeCalled();
  });
});
