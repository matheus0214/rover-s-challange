const { CommomValidatior } = require("./commom");

describe("Commom validator unit test", () => {
  it("should validate a string", () => {
    expect(CommomValidatior.isString(123)).toBeFalsy();
    expect(CommomValidatior.isString("any_value")).toBeTruthy();
  });

  it("should validate a number", () => {
    expect(CommomValidatior.isNumber("any_value")).toBeFalsy();
    expect(CommomValidatior.isNumber(123)).toBeTruthy();
  });

  it("should validate a array", () => {
    expect(CommomValidatior.isArray(123)).toBeFalsy();
    expect(CommomValidatior.isArray(["any_value"])).toBeTruthy();
  });

  it("should validate if contains special characters", () => {
    expect(CommomValidatior.containSpecialChar("123")).toBeFalsy();
    expect(CommomValidatior.containSpecialChar("any_value")).toBeTruthy();
  });

  it("should validate if contains numbers and letters", () => {
    expect(CommomValidatior.containStringAndNumbers("123")).toBeFalsy();
    expect(CommomValidatior.containStringAndNumbers("a12b")).toBeTruthy();
  });
});
