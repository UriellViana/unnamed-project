import * as mongoose from 'mongoose';

import { ROLES_LIST } from './constants';
import { IProject } from '../project/model';
import { IUser } from '../user/model';

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: ROLES_LIST,
      index: true,
      required: true,
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
    },
    user: {
      type: Types.ObjectId,
      index: true,
      ref: 'user',
      required: true,
    },
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IRole extends mongoose.Document {
  role: string;
  project: mongoose.Types.ObjectId | IProject;
  user: mongoose.Types.ObjectId | IUser;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IRole>('role', schema);

export default model;
