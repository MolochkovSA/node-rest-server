import HttpStatus from 'http-status';

export function ExampleUserError(res, message) {
  const body = { code: 'EXAMPLE_ERROR_FOR_USER_MODULE' };
  if (message) body.message = message;
  res.status(HttpStatus.BAD_REQUEST).send(body);
}
