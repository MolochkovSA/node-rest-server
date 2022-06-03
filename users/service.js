import mongoose from 'mongoose';
import userRepository from './repository.js';
import Result from '../shared/result.js';
import { NotExistedError } from '../shared/errors/business-errors.js';
import { ExampleUserError } from './errors/business-errors.js';


const UserNotExistedError = Result.bind(this, new NotExistedError('User not found'));

async function getAll() {
  return new Result(new ExampleUserError('Example of a specific custom error for the user module only'))
  const users = await userRepository.getAll();
  return new Result(users);
}

async function getById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return new UserNotExistedError();
  const user = await userRepository.findById(id);
  if (!user) return new UserNotExistedError();
  return new Result(user);
}

async function create(userCreateModel) {
  const user = await userRepository.create(userCreateModel);
  return new Result(user);
}

async function updateById(id, data) {
  if (!mongoose.Types.ObjectId.isValid(id)) return new UserNotExistedError();
  const user = await userRepository.findById(id);
  if (!user) return new UserNotExistedError();
  return new Result(await userRepository.updateById(id, data));
}

async function deleteById(id) {
  if (!mongoose.Types.ObjectId.isValid(id)) return new UserNotExistedError();
  const user = await userRepository.findById(id);
  if (!user) return new UserNotExistedError();
  await userRepository.deleteById(id);
  return new Result();
}

export default {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};