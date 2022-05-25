import express from 'express'
import controller from './controllers.js'

const userRouter = express.Router()
userRouter.get('/', controller.getAll)
userRouter.get('/:id', controller.getById)
userRouter.post('/', controller.create)
userRouter.put('/:id', controller.updateById)
userRouter.delete('/:id', controller.deleteById)

export { userRouter }
