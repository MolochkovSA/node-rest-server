import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userScheme = new Schema(
  {
    username: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 50,
    },
    password: {
      type: String,
      required: true,
      minlength: 8,
    },
    sex: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
)
const User = mongoose.model('User', userScheme)

async function create(data) {
  const user = new User({
    username: data.username,
    password: data.password,
    sex: data.sex,
    email: data.email,
  })
  try {
    const result = await user.save()
    return result
  } catch (error) {
    throw new Error(error)
  }
}

async function getAll() {
  try {
    const users = await User.find()
    return users
  } catch (error) {
    throw new Error(error)
  }
}

async function getById(id) {
  try {
    const user = await User.findOne({ _id: id })
    return user
  } catch (error) {
    throw new Error(`User not found by id: ${id}`) //лучше выввести error или ошибку поиска по id?
  }
}

async function updateById(id, data) {
  const user = {
    username: data.username,
    password: data.password,
    sex: data.sex,
    email: data.email,
  }
  try {
    const newUser = await User.findOneAndUpdate({ _id: id }, user, {
      new: true,
    })
    return newUser
  } catch (error) {
    throw new Error(`User not found by id: ${id}`)
  }
}

async function deleteById(id) {
  try {
    await User.deleteOne({ _id: id })
  } catch (error) {
    throw new Error(`User not found by id: ${id}`) //лучше выввести error или ошибку поиска по id?
  }
}

export default { getAll, getById, create, updateById, deleteById }
