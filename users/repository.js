const usersMap = new Map()

function create(data) {
  const id = `${Date.now()}${Math.random().toFixed(2) * 100}`
  const user = {
    id: id,
    username: data.username,
    password: data.password,
    sex: data.sex,
    email: data.email,
  }
  usersMap.set(id, user)
  return { user }
}

function getAll() {
  return Array.from(usersMap.values())
}

function getById(id) {
  if (!usersMap.has(id)) {
    throw new Error(`User not found by id: ${id}`)
  }
  return usersMap.get(id)
}

function updateById(id, data) {
  if (!usersMap.has(id)) {
    throw new Error(`User not found by id: ${id}`)
  }
  const user = Object.assign(usersMap.get(id), data)
  usersMap.set(id, user)
  return user
}

function deleteById(id) {
  if (!usersMap.has(id)) {
    throw new Error(`User not found by id: ${id}`)
  }
  usersMap.delete(id)
}

export default { getAll, getById, create, updateById, deleteById }
