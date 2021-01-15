import * as mongoose from 'mongoose';
import * as slug from 'slug';
<<<<<<< HEAD

import { ERROR_CODES, REGEXES } from './constants';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> we abstracted the role validation and finished all role mutations
=======
=======
>>>>>>> changes
import { ERROR_MESSAGES, REGEXES } from './constants';
>>>>>>> we abstracted the role validation and finished all role mutations
=======
>>>>>>> Fix merge errors, add tradulabErrors in the file resolver
=======
>>>>>>> Back-End Review
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
<<<<<<< HEAD
<<<<<<< HEAD
    name: {
      type: String,
      maxlength: [64, ERROR_CODES.NAME_LONG],
      minlength: [3, ERROR_CODES.NAME_SHORT],
      required: true,
      unique: true,
    },
    private: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      index: true,
      match: [REGEXES.SLUG, ERROR_CODES.SLUG_INVALID],
      maxlength: [64, ERROR_CODES.SLUG_LONG],
      minlength: [3, ERROR_CODES.SLUG_SHORT],
      required: true,
      unique: true,
=======
    displayName: {
      type: String,
      maxlength: [64, ERROR_MESSAGES.DISPLAY_NAME_LONG],
      minlength: [3, ERROR_MESSAGES.DISPLAY_NAME_SHORT],
      required: true,
>>>>>>> changes
=======
    name: {
      type: String,
      maxlength: [64, ERROR_CODES.NAME_LONG],
      minlength: [3, ERROR_CODES.NAME_SHORT],
      required: true,
      unique: true,
    },
    private: {
      type: Boolean,
      default: false,
    },
    slug: {
      type: String,
      index: true,
      match: [REGEXES.SLUG, ERROR_CODES.SLUG_INVALID],
      maxlength: [64, ERROR_CODES.SLUG_LONG],
      minlength: [3, ERROR_CODES.SLUG_SHORT],
      required: true,
      unique: true,
>>>>>>> Back-End Review
    },
    owner: {
      type: Types.ObjectId,
      index: true,
      ref: 'user',
      required: true,
<<<<<<< HEAD
=======
    },
<<<<<<< HEAD
    private: {
      type: Boolean,
      default: false,
>>>>>>> changes
    },
    slug: {
      type: String,
      index: true,
      match: [REGEXES.SLUG, ERROR_MESSAGES.SLUG_INVALID],
      maxlength: [64, ERROR_MESSAGES.SLUG_LONG],
      minlength: [3, ERROR_MESSAGES.SLUG_SHORT],
      required: true,
      unique: [true, ERROR_MESSAGES.SLUG_ALREADY_IN_USE],
    },
=======
>>>>>>> Back-End Review
  },
  {
    timestamps: true,
    minimize: false,
  }
);

export interface IProject extends mongoose.Document {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> Back-End Review
  name: String;
  private: Boolean;
  slug: String;
  owner: IUser | mongoose.Types.ObjectId;
<<<<<<< HEAD
=======
  slug: string;
=======
  createdAt: Date;
>>>>>>> changes
  displayName: string;
  owner: mongoose.Types.ObjectId | IUser;
<<<<<<< HEAD
>>>>>>> we abstracted the role validation and finished all role mutations
  createdAt: Date;
=======
  private: boolean;
  slug: string;
>>>>>>> changes
=======
  createdAt: Date;
>>>>>>> Back-End Review
  updateAt: Date;
}

schema.pre<IProject>('validate', function preValidate(next) {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  this.slug = slug(this.name);
=======
=======
  // this.set({ slug: this.displayName });
>>>>>>> changes
=======
>>>>>>> changes
  this.slug = slug(this.displayName);
>>>>>>> we abstracted the role validation and finished all role mutations
=======
  this.slug = slug(this.name);
>>>>>>> Back-End Review
  next();
});

const model = mongoose.model<IProject>('project', schema);

export default model;
