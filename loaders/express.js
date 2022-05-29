import express from 'express';
import 'express-async-errors';
import {
  queryLogger,
  queryTimeLogger,
  responseSendWrapper,
  routeNotFoundHandler,
  serverErrorHandler
} from '../middlewares.js';
import { userRouter } from '../users/router.js';

export function expressLoader(app) {
  app.use(express.json());
  app.use(responseSendWrapper);
  app.use(queryLogger);
  app.use(queryTimeLogger);

  const router = express.Router();
  router.get('/hello', (req, res) => { res.send('Hello World') });
  router.use('/users', userRouter);
  app.use('/api', router);

  app.use(routeNotFoundHandler)
  app.use(serverErrorHandler)
}
