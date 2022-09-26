const { CreatePlateauUseCase } = require("./create-plateau");

const plateauRepositoryMock = () => ({
  create: jest.fn(),
});

describe("Create plateau usecase unit test", () => {
  it("should be able to create a plateau", async () => {
    const mockRepository = plateauRepositoryMock();

    const spy = jest.spyOn(mockRepository, "create");

    const useCase = new CreatePlateauUseCase(mockRepository);

    await useCase.execute(1, 2);

    expect(spy).toBeCalled();
  });
});
