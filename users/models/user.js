import mongoose from 'mongoose';
import {
  MIN_USERNAME_LENGTH,
  MAX_USERNAME_LENGTH,
  MIN_PASSWORD_LENGTH,
  sexEnum
} from '../constants.js';

const userScheme = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: MIN_USERNAME_LENGTH,
      maxlength: MAX_USERNAME_LENGTH,
    },
    password: {
      type: String,
      required: true,
      minlength: MIN_PASSWORD_LENGTH,
    },
    sex: {
      type: String,
      required: true,
      enum: Object.values(sexEnum)
    },
    email: {
      type: String,
      lowercase: true,
      required: true,
    },
  }, {
    collection: 'users',
    timestamps: true
  }
)

export default mongoose.model('User', userScheme)