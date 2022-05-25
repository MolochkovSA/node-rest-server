import repository from './repository.js'

function create(req, res) {
  const user = repository.create(req.body)
  return res.status(201).send(user)
}

function getAll(req, res) {
  const users = repository.getAll()
  return res.send(users)
}

function getById(req, res) {
  try {
    const user = repository.getById(req.params['id'])
    return res.send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

function updateById(req, res) {
  try {
    const user = repository.updateById(req.params['id'], req.body)
    return res.send(user)
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

function deleteById(req, res) {
  try {
    repository.deleteById(req.params['id'])
    return res.status(204).send()
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

export default { getAll, getById, create, updateById, deleteById }
