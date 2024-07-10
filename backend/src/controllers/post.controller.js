const postManager = require('../managers/post.manager');

module.exports = {
  getPosts: async (req, res) => {
    try {
      const posts = await postManager.getPosts();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
  setPosts: async (req, res) => {
    try {
      const post = await postManager.createPost(req.body);
      res.status(200).json(post);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  editPost: async (req, res) => {
    try {
      const updatedPost = await postManager.editPost(req.params.id, req.body);
      res.status(200).json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  deletePost: async (req, res) => {
    try {
      await postManager.deletePost(req.params.id);
      res.status(200).json({ message: "Post deleted" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  completedPost: async (req, res) => {
    try {
      await postManager.setCompleted(req.params.id, true);
      res.status(200).json({ message: "Post completed" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  notCompletedPost: async (req, res) => {
    try {
      await postManager.setCompleted(req.params.id, false);
      res.status(200).json({ message: "Post not completed" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  recurrentPost: async (req, res) => {
    try {
      await postManager.setRecurrent(req.params.id, req.body.reccurence);
      res.status(200).json({ message: "Post recurrent" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
};