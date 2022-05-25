import repository from './repository.js'

const create = repository.create
const getAll = repository.getAll
const getById = repository.getById
const updateById = repository.updateById
const deleteById = repository.deleteById

export default { getAll, getById, create, updateById, deleteById }
