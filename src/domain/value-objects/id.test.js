const { Id } = require("./id");

describe("Id value objet unit test", () => {
  it("should be able to create a new id", () => {
    const id = new Id();

    expect(id).toBeInstanceOf(Id);
    expect(id.value).toBeDefined();
  });

  it("should be able to pass an existing id", () => {
    const id = new Id("X12asd");

    expect(id).toBeInstanceOf(Id);
    expect(id.value).toBeDefined();
    expect(id.value).toEqual("X12asd");
  });

  it("should throw if pass a value is not a number or string", () => {
    expect(() => new Id([])).toThrow("Invalid id format");
  });
});
