export class BusinessError extends Error{
  constructor(message) {
    super(message);
    if (this.constructor.name === 'BusinessError') {
      throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
    }
    this.name = this.constructor.name;
  }
}

export class DuplicationError extends BusinessError{
  constructor(message) {
    super(message);
  }
}

export class NotExistedError extends BusinessError{
  constructor(message) {
    super(message);
  }
}