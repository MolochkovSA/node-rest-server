const usersMap = new Map()

function create(req, res) {
  const id = `${Date.now()}${Math.random().toFixed(2) * 100}`
  const user = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  }
  usersMap.set(id, user)
  return res.status(201).send({ [id]: user })
}

function getAll(req, res) {
  res.send(Object.fromEntries(usersMap.entries()))
}

function getById(req, res) {
  if (!usersMap.has(req.params['id'])) {
    return res.status(400).send('invalid id')
  }
  return res.send(usersMap.get(req.params['id']))
}

function updateById(req, res) {
  if (!usersMap.has(req.params['id'])) {
    return res.status(400).send('invalid id')
  }
  const user = Object.assign(usersMap.get(req.params['id']), req.body)
  usersMap.set(req.params['id'], user)
  return res.send(user)
}

function deleteById(req, res) {
  if (!usersMap.has(req.params['id'])) {
    return res.status(400).send('invalid id')
  }
  usersMap.delete(req.params['id'])
  return res.status(204)
}
export default { getAll, getById, create, updateById, deleteById }
