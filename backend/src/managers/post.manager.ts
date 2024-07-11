import { Document, Model } from 'mongoose';
import PostModel, { IPost } from '../models/post.model';

interface IPostData {
  message: string;
  dueDate: Date;
  reccurence: string;
  uniqueDate: Date;
}

export const getPosts = async (): Promise<IPost[]> => {
  return await PostModel.find();
};

export const createPost = async (postData: IPostData): Promise<IPost> => {
  const conflictingTask = await PostModel.findOne({
    dueDate: postData.dueDate,
    uniqueDate: postData.uniqueDate,
  });

  if (conflictingTask) {
    throw new Error('Une tâche existe déjà à cette date et heure.');
  }

  const newPost = {
    message: postData.message,
    dueDate: postData.dueDate,
    reccurence: postData.reccurence,
    uniqueDate: postData.uniqueDate,
  };

  return await PostModel.create(newPost);
};

export const editPost = async (id: string, postData: Partial<IPostData>): Promise<IPost | null> => {
  return await PostModel.findByIdAndUpdate(id, postData, { new: true });
};

export const deletePost = async (id: string): Promise<void> => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new Error('Ce post n\'existe pas');
  }
  await post.deleteOne({ _id: post._id });
};

export const setCompleted = async (id: string, completed: boolean): Promise<void> => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new Error('Ce post n\'existe pas');
  }
  post.completed = completed;
  await post.save();
};

export const setRecurrent = async (id: string, reccurence: string): Promise<void> => {
  const post = await PostModel.findById(id);
  if (!post) {
    throw new Error('Ce post n\'existe pas');
  }
  post.reccurence = reccurence;
  await post.save();
};