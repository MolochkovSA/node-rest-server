import userService from './service.js';
import HttpStatus from 'http-status';
import UserView from './models/user-view.js';

export async function getAll(req, res) {
  const users = await userService.getAll();
  res.status(HttpStatus.OK).send(UserView.fromArray(users));
}

export async function getById(req, res) {
  const user = await userService.getById(req.params['id']);
  res.status(HttpStatus.OK).send(UserView.fromEntity(user));
}

export async function create(req, res) {
  const user = await userService.create(req.body);
  res.status(HttpStatus.CREATED).send(UserView.fromEntity(user));
}

export async function updateById(req, res) {
  const user = await userService.updateById(req.params['id'], req.body);
  res.status(HttpStatus.OK).send(UserView.fromEntity(user));
}

export async function deleteById(req, res) {
  await userService.deleteById(req.params['id'], req.body);
  res.status(HttpStatus.NO_CONTENT).send();
}