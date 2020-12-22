import * as mongoose from 'mongoose';
<<<<<<< HEAD

<<<<<<< HEAD
import { ERROR_CODES, REGEXES } from './constants';
=======
=======
>>>>>>> changes
import { ERROR_MESSAGES, REGEXES } from './constants';
>>>>>>> we abstracted the role validation and finished all role mutations

const schema = new mongoose.Schema(
  {
    nickname: {
      type: String,
<<<<<<< HEAD
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
<<<<<<< HEAD
      minlength: [3, ERROR_CODES.USERNAME_SHORT],
      maxlength: [32, ERROR_CODES.USERNAME_LONG],
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
=======
      index: true,
      match: [REGEXES.NICKNAME, ERROR_CODES.NICKNAME_INVALID],
      maxlength: [32, ERROR_CODES.NICKNAME_LONG],
      minlength: [3, ERROR_CODES.NICKNAME_SHORT],
      required: true,
>>>>>>> Back-End Review
      unique: true,
=======
>>>>>>> changes
    },
    username: {
      type: String,
<<<<<<< HEAD
      index: true,
      match: [REGEXES.USERNAME, ERROR_MESSAGES.USERNAME_INVALID],
      maxlength: [32, ERROR_MESSAGES.USERNAME_LONG],
      minlength: [3, ERROR_MESSAGES.USERNAME_SHORT],
      required: true,
<<<<<<< HEAD
      minlength: [3, ERROR_CODES.DISPLAY_NAME_SHORT],
      maxlength: [64, ERROR_CODES.DISPLAY_NAME_LONG],
=======
      unique: [true, ERROR_MESSAGES.USERNAME_ALREADY_IN_USE],
>>>>>>> changes
=======
      match: [REGEXES.USERNAME, ERROR_CODES.USERNAME_INVALID],
      maxlength: [64, ERROR_CODES.USERNAME_LONG],
      minlength: [3, ERROR_CODES.USERNAME_SHORT],
      required: true,
>>>>>>> Back-End Review
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IUser extends mongoose.Document {
  nickname: String;
  username: String;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IUser>('user', schema);

export default model;
