import Joi from 'joi'
import {
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  MIN_USERNAME_LENGTH,
  PASSWORD_REG_EXP,
  sexEnum
} from './constants.js'

const userCreateSchema = {
  username: Joi.string()
    .trim()
    .alphanum()
    .min(MIN_USERNAME_LENGTH)
    .max(MAX_USERNAME_LENGTH)
    .required(),
  password: Joi.string()
    .trim()
    .pattern(PASSWORD_REG_EXP)
    .min(MIN_PASSWORD_LENGTH)
    .required(),
  sex: Joi.string()
    .trim()
    .valid(...Object.values(sexEnum))
    .required(),
  email: Joi.string()
    .trim()
    .lowercase()
    .email()
    .required(),
};

export const userCreateValidator = (obj) => Joi.object(userCreateSchema).validate(obj, { abortEarly: false }); //TODO optimize abortEarly: false for all validators
export const userUpdateValidator = userCreateValidator;

