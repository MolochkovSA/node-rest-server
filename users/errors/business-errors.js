import { BusinessError } from '../../shared/errors/business-errors.js';

export class ExampleUserError extends BusinessError{
  constructor(message) {
    super(message);
  }
}