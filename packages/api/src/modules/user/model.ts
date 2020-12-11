import * as mongoose from 'mongoose';

import { ERROR_CODES, REGEXES } from './constants';

const schema = new mongoose.Schema(
  {
    displayName: {
      type: String,
      required: true,
      minlength: [3, ERROR_CODES.USERNAME_SHORT],
      maxlength: [32, ERROR_CODES.USERNAME_LONG],
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
      unique: true,
    },
    username: {
      type: String,
      index: true,
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
      required: true,
      minlength: [3, ERROR_CODES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_CODES.DISPLAY_NAME_LONG],
    },
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IUser extends mongoose.Document {
  createdAt: Date;
  displayName: string;
  updateAt: Date;
  username: string;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
