import { Request, Response } from 'express';
import * as postManager from '../managers/post.manager'; // Utilisation des exportations nommées

export const getPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const posts = await postManager.getPosts();
    res.status(200).json(posts);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message });
    } else {
      res.status(500).json({ message: 'Unknown error' });
    }
  }
};

export const setPosts = async (req: Request, res: Response): Promise<void> => {
  try {
    const post = await postManager.createPost(req.body);
    res.status(200).json(post);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};

export const editPost = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedPost = await postManager.editPost(req.params.id, req.body);
    res.status(200).json(updatedPost);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};

export const deletePost = async (req: Request, res: Response): Promise<void> => {
  try {
    await postManager.deletePost(req.params.id);
    res.status(200).json({ message: 'Post deleted' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};

export const completedPost = async (req: Request, res: Response): Promise<void> => {
  try {
    await postManager.setCompleted(req.params.id, true);
    res.status(200).json({ message: 'Post completed' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};

export const notCompletedPost = async (req: Request, res: Response): Promise<void> => {
  try {
    await postManager.setCompleted(req.params.id, false);
    res.status(200).json({ message: 'Post not completed' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};

export const recurrentPost = async (req: Request, res: Response): Promise<void> => {
  try {
    await postManager.setRecurrent(req.params.id, req.body.reccurence);
    res.status(200).json({ message: 'Post recurrent' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'Unknown error' });
    }
  }
};