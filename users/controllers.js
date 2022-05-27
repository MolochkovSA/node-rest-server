import repository from './repository.js'
import mongodb from './mongodb.js'

async function create(req, res) {
  try {
    const user = await mongodb.create(req.body)
    console.log(user)
    return res.status(201).send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

async function getAll(req, res) {
  try {
    const users = await mongodb.getAll()
    return res.send(users)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

async function getById(req, res) {
  try {
    const user = await mongodb.getById(req.params['id'])
    return res.send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

async function updateById(req, res) {
  try {
    const user = await mongodb.updateById(req.params['id'], req.body)
    return res.send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

async function deleteById(req, res) {
  try {
    await mongodb.deleteById(req.params['id'])
    return res.status(204).send()
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

export default { getAll, getById, create, updateById, deleteById }
