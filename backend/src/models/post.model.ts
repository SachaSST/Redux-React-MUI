import { Schema, model, Document } from 'mongoose';

export interface IPost extends Document {
  message: string;
  completed: boolean;
  date: Date;
  dueDate: Date | null;
  reccurence: string;
  uniqueDate: Date | null;
  overridden: boolean;
}

const postSchema = new Schema<IPost>(
  {
    message: {
      type: String,
      required: true,
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      default: null,
    },
    reccurence: {
      type: String,
      default: 'none',
    },
    uniqueDate: {
      type: Date,
      default: null,
    },
    overridden: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const PostModel = model<IPost>('Post', postSchema);
export default PostModel;