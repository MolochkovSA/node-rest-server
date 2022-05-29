import BusinessError from '../../../shared/errors/business-errors/base-error.js';

export class ExampleUserError extends BusinessError{
  constructor(message) {
    super(message);
  }
}