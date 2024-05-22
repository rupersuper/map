export default class ErrorRepository {
  constructor(code, value) {
    this.errors = new Map();
    this.code = code;
    this.value = value;

    this.errors.set(this, {
      code,
      value,
    });
  }

  translate(code) {
    const error = this.errors.get(code);
    if (error) {
      return error;
    } else {
      return "Unknown error";
    }
  }
}
