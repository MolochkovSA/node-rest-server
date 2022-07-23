import express from 'express';
import 'express-async-errors';
import {
  bodyParserWrapper,
  queryLogger,
  queryTimeLogger,
  responseSendWrapper,
  routeNotFoundHandler,
  serverErrorHandler
} from '../middlewares.js';
import { userRouter } from '../users/router.js';
import businessErrorHandler from '../shared/middlewares/businessErrorHandler.js';
import { DuplicationError, NotExistedError } from '../shared/errors/business-errors.js';
import {
  DuplicationError as DuplicationHttpError,
  NotExistedError as NotExistedHttpError
} from '../shared/errors/http-errors.js';

const httpErrorsByErrorTypeObj = {
  [NotExistedError.name]: NotExistedHttpError,
  [DuplicationError.name]: DuplicationHttpError
  // add new common errors handlers here...
};

export function expressLoader(app) {
  app.use(bodyParserWrapper(express.json()));
  app.use(responseSendWrapper);
  app.use(queryLogger);
  app.use(queryTimeLogger);

  const router = express.Router();
  router.get('/hello', (req, res) => { res.send('Hello World') });
  router.use('/users', userRouter);
  app.use('/api', router);

  app.use(businessErrorHandler(httpErrorsByErrorTypeObj));

  app.use(routeNotFoundHandler);
  app.use(serverErrorHandler);
}
