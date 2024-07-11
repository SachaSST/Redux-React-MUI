import express from 'express';
import {
  setPosts,
  getPosts,
  editPost,
  deletePost,
  completedPost,
  notCompletedPost,
  recurrentPost
} from '../controllers/post.controller';

const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/completed-task/:id", completedPost);
router.patch("/not-completed-task/:id", notCompletedPost);
router.patch("/reccurence-task/:id", recurrentPost);

export default router;