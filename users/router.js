import express from 'express'
import { getAll, getById, create, updateById, deleteById } from './controller.js';
import { userCreateValidator, userUpdateValidator } from './validators.js'
import { validateBody } from '../shared/middlewares/validatiors.js';
import businessErrorHandler from '../shared/middlewares/businessErrorHandler.js';
import { ExampleUserError } from './errors/business-errors.js';
import { ExampleUserError as ExampleUserHttpError } from './errors/http-errors.js';

const httpErrorsByErrorTypeObj = {
  [ExampleUserError.name]: ExampleUserHttpError,
  // add new users errors handlers here...
};

const userRouter = express.Router();

userRouter.get('/', getAll);
userRouter.get('/:id', getById);
userRouter.post('/', validateBody(userCreateValidator), create);
userRouter.put('/:id', validateBody(userUpdateValidator), updateById);
userRouter.delete('/:id', deleteById);

userRouter.use(businessErrorHandler(httpErrorsByErrorTypeObj));
export { userRouter }
