const express = require('express');
const { setPosts, getPosts, editPost, deletePost } = require('../controllers/post.controller');
const router = express.Router();


router.get("/", getPosts);
router.post("/", setPosts);
router.put("/:id", editPost);


router.delete("/:id", deletePost);

router.patch("/completed-task/:id", (req, res) => {
    res.json({message: "Post completed : id : " + req.params.id});
});

router.patch("/not-completed-task/:id", (req, res) => {
    res.json({message: "Post not completed : id : " + req.params.id});
});








module.exports = router