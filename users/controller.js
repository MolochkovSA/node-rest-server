import BaseController from '../shared/base-controller.js';
import userService from './service.js';
import HttpStatus from 'http-status';
import UserView from './models/user-view.js';
import { ExampleUserError } from './errors/business-errors.js';
import { ExampleUserError as ExampleUserHttpError } from './errors/http-errors.js';

const httpErrorsByErrorTypeObj = {
  [ExampleUserError.name]: ExampleUserHttpError
};

class UserController extends BaseController {

  constructor() {
    super(httpErrorsByErrorTypeObj)
  }

  getAll = async (req, res) => {
    const { data, error } = await userService.getAll();
    if (error) return this.sendError(res, error);

    res.status(HttpStatus.OK).send(UserView.fromArray(data));
  }

  getById = async (req, res) => {
    const { data, error } = await userService.getById(req.params['id']);
    if (error) return this.sendError(res, error);

    res.status(HttpStatus.OK).send(UserView.fromEntity(data));
  }

  create = async (req, res) => {
    const { data, error } = await userService.create(req.body);
    if (error) return this.sendError(res, error);

    res.status(HttpStatus.CREATED).send(UserView.fromEntity(data));
  }

  updateById = async (req, res) => {
    const { data, error } = await userService.updateById(req.params['id'], req.body);
    if (error) return this.sendError(res, error);

    res.status(HttpStatus.OK).send(UserView.fromEntity(data));
  }

  deleteById = async (req, res) => {
    const { error } = await userService.deleteById(req.params['id'], req.body);
    if (error) return this.sendError(res, error);

    res.status(HttpStatus.NO_CONTENT).send();
  }

}

export default new UserController();