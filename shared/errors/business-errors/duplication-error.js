import BusinessError from './base-error.js';

export class DuplicationError extends BusinessError{
  constructor(message) {
    super(message);
  }
}