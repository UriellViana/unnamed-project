import * as mongoose from 'mongoose';

import { ERROR_MESSAGES, REGEXES } from './constants';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    user: {
      type: Types.ObjectId,
      ref: 'user',
      required: true,
      index: true,
    },
    email: {
      type: String,
      trim: true,
      required: true,
      lowercase: true,
      minlength: [6, ERROR_MESSAGES.EMAIL_SHORT],
      maxlength: [254, ERROR_MESSAGES.EMAIL_LONG],
      match: [REGEXES.EMAIL, ERROR_MESSAGES.EMAIL_INVALID],
      unique: [true, ERROR_MESSAGES.EMAIL_ALREADY_IN_USE],
      index: true,
    },
    password: {
      type: String,
      required: true,
      minlength: [1, ERROR_MESSAGES.PASSWORD_EMPTY],
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

const model = mongoose.model('auth', schema);

export default model;
