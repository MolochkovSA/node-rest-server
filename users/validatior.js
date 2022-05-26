import Joi from 'joi'

const sexValues = { male: 'male', female: 'female' }

const schema = Joi.object({
  username: Joi.string().trim().alphanum().min(3).max(50).required(),
  password: Joi.string()
    .trim()
    .pattern(new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/))
    .min(8)
    .required(),
  sex: Joi.string()
    .trim()
    .valid(...Object.values(sexValues)),
  email: Joi.string().trim().email().required(),
})

function userValidation(req, res, next) {
  const { error, value } = schema.validate(req.body)
  if (error) {
    res.status(418).send(error.details[0].message)
  } else {
    req.body = value
    next()
  }
}
export default userValidation
