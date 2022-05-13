import express from 'express'
import { Controller } from './controllers.js'

const userRouter = express.Router()
const controller = new Controller()
userRouter.get('/(:id)?*', (req, res) => {
  res.json(controller.read(req.params.id))
})
userRouter.post('/*', (req, res) => {
  res.end(controller.create(req.body))
})
userRouter.put('/(:id)?*', (req, res) => {
  res.end(controller.update(req.params.id, req.body))
})
userRouter.delete('/(:id)?*', (req, res) => {
  res.end(controller.delete(req.params.id))
})

export { userRouter }
