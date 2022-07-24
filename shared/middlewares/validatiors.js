import { ValidationError } from '../errors/http-errors.js';

function validateObject(validator, object, res, next) {
  const { error, value } = validator(object);
  if (error) return ValidationError(res, error.details);
  for (const key in object) delete object[key];
  Object.assign(object, value);
  next();
}

export function validateBody(validator) {
  return (req, res, next) => {
    return validateObject(validator, req.body, res, next);
  };
}

function validateQuery(validator) {
  return (req, res, next) => {
    return validateObject(validator, req.query, res, next);
  };
}

function validatePathParams(validator) {
  return (req, res, next) => {
    return validateObject(validator, req.params, res, next);
  };
}