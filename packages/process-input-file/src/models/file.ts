import * as mongoose from 'mongoose';

export const EXTENSION_LIST = ['json', 'csv'];
export const PROCESS_STATUSES = ['pending', 'done', 'failed'];

const { Types } = mongoose.Schema;

const schema = new mongoose.Schema(
  {
    extension: {
      type: String,
      enum: EXTENSION_LIST,
      required: true,
    },
    filename: {
      type: String,
      index: true,
      required: true,
    },
    filePath: {
      type: String,
      required: false,
    },
    sourceLanguage: {
      type: String,
      required: true,
    },
    project: {
      type: Types.ObjectId,
      index: true,
      ref: 'project',
      required: true,
    },
    processedStatus: {
      type: String,
      enum: PROCESS_STATUSES,
      required: true,
    },
    processedAt: Date,
  },
  {
    minimize: false,
    timestamps: true,
  }
);

export interface IFile extends mongoose.Document {
  extension: string;
  filename: string;
  filePath: string;
  sourceLanguage: string;
  project: mongoose.Types.ObjectId;
  processedStatus: 'pending' | 'done' | 'failed';
  processedAt: Date;
  createdAt: Date;
  updateAt: Date;
}

const model = mongoose.model<IFile>('file', schema);

export default model;
