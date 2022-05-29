import HttpStatus from 'http-status'

export function NotExistedError(res, message) {
  const body = { code: 'ENTITY_NOT_EXISTED' };
  if (message) body.message = message;
  res.status(HttpStatus.NOT_FOUND).send(body);
}

export function ValidationError(res, errors) {
  const body = {
    code: 'VALIDATION_ERROR',
    params: errors,
  };
  res.status(HttpStatus.BAD_REQUEST).send(body);
}

export function DuplicationError(res, message) {
  const body = { code: 'ENTITY_DUPLICATION' };
  if (message) body.message = message;
  res.status(HttpStatus.BAD_REQUEST).send(body);
}
