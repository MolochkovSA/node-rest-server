import userRepository from './repository.js';
import { NotExistedError } from '../shared/errors/business-errors.js';
import { ExampleUserError } from './errors/business-errors.js';


const UserNotExistedError = NotExistedError.bind(this, 'User not found');

async function getAll() {
  throw new ExampleUserError('Example of a specific custom error for the user module only');
  return await userRepository.getAll();
}

async function getById(id) {
  const user = await userRepository.findById(id);
  if (!user) throw new UserNotExistedError();
  return user;
}

async function create(userCreateModel) {
  return await userRepository.create(userCreateModel);
}

async function updateById(id, data) {
  const user = await userRepository.findById(id);
  if (!user) throw new UserNotExistedError();
  return await userRepository.updateById(id, data);
}

async function deleteById(id) {
  const user = await userRepository.findById(id);
  if (!user) throw new UserNotExistedError();
  await userRepository.deleteById(id);
}

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};