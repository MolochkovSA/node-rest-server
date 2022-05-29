import express from 'express'
import controller from './controller.js';
import { userCreateValidator, userUpdateValidator } from './validators.js'
import { validateBody } from '../shared/middlewares/validatiors.js';

const userRouter = express.Router();
userRouter.get('/', controller.getAll);
userRouter.get('/:id', controller.getById);
userRouter.post('/', validateBody(userCreateValidator), controller.create);
userRouter.put('/:id', validateBody(userUpdateValidator), controller.updateById);
userRouter.delete('/:id', controller.deleteById);

export { userRouter }
