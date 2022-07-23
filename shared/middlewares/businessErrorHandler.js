import { BusinessError } from "../errors/business-errors.js";

export default function(httpErrorsByErrorTypeObj) {
  return (err, req, res, next) => {

    if (!(err instanceof BusinessError))
      throw err;

    const errorHandler = httpErrorsByErrorTypeObj[err.name];
    if (!errorHandler)
      throw err;

    errorHandler(res, err.message);
  }
}