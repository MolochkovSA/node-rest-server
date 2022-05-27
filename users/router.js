import express from 'express'
import controller from './controllers.js'
import userValidation from './validator.js'

const userRouter = express.Router()
userRouter.get('/', controller.getAll)
userRouter.get('/:id', controller.getById)
userRouter.post('/', userValidation, controller.create)
userRouter.put('/:id', userValidation, controller.updateById)
userRouter.delete('/:id', controller.deleteById)

export { userRouter }
