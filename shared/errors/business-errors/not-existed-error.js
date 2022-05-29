import BusinessError from './base-error.js';

export class NotExistedError extends BusinessError{
  constructor(message) {
    super(message);
  }
}