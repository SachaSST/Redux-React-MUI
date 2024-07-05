const express = require('express');
const { setPosts, getPosts, editPost, deletePost, completedPost, notCompletedPost } = require('../controllers/post.controller');
const router = express.Router();


router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);
router.delete("/:id", deletePost);
router.patch("/completed-task/:id", completedPost);
router.patch("/not-completed-task/:id", notCompletedPost);



module.exports = router