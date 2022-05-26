import Joi from 'joi'
import { sexValues } from './constants.js'

const schema = Joi.object({
  username: Joi.string().trim().alphanum().min(3).max(50).required(),
  password: Joi.string()
    .trim()
    .pattern(new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/))
    .min(8)
    .required(),
  sex: Joi.string()
    .trim()
    .valid(...Object.values(sexValues))
    .required(),
  email: Joi.string().trim().email().required(),
})

function ValidationError(res, error) {
  const body = {
    code: 'VALIDATION_ERROR',
    params: error,
  }
  res.status(400).send(body)
}

function userValidation(req, res, next) {
  const { error, value } = schema.validate(req.body)
  if (error) {
    return ValidationError(res, error.details[0].message)
  } else {
    req.body = value
    next()
  }
}
export default userValidation
