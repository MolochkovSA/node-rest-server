export default class BusinessError extends Error{
  constructor(message) {
    super(message);
    if (this.constructor.name === 'BusinessError') {
      throw new Error(`${this.constructor.name}: can not create instance of abstract class`);
    }
    this.name = this.constructor.name;
  }
}