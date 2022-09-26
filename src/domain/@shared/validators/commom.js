class CommomValidatior {
  static isString(value) {
    return isNaN(value);
  }

  static isNumber(value) {
    return !isNaN(value);
  }

  static isArray(value) {
    return Array.isArray(value);
  }

  static containSpecialChar(value) {
    return /\W|_/g.test(value);
  }

  static containStringAndNumbers(value) {
    return /^(?=.*[a-zA-Z])(?=.*[0-9])/g.test(value);
  }

  static isNullable(value) {
    return value === undefined || value === null;
  }
}

module.exports = { CommomValidatior };
