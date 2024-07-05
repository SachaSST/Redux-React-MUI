const PostModel = require('../models/post.model');

module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};
module.exports.setPosts = async (req, res) => {
    if (!req.body.message) {
      res.status(400).json({ message: "Merci d'ajouter un message" });
    }

    const post = await PostModel.create({
        message: req.body.message,
        author : req.body.author,
    });
    res.status(200).json(post);
    
  };

module.exports.editPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
  
    if (!post) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
  
    const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
      new: true,
    });
  
    res.status(200).json(updatePost);
  };


  module.exports.deletePost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
  
    if (!post) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
    await post.deleteOne({ _id: post })
    res.status(200).json("Message supprimé " + req.params.id);
  };

  module.exports.completedPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
  
    if (!post) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
    post.completed = true;
    await post.save();
    res.status(200).json("Post completed : id : " + req.params.id);
  }

  module.exports.notCompletedPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
  
    if (!post) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
    post.completed = false;
    await post.save();
    res.status(200).json("Post not completed : id : " + req.params.id);
  }

  module.exports.recurrentPost = async (req, res) => {
    const post = await PostModel.findById(req.params.id);
  
    if (!post) {
      res.status(400).json({ message: "Ce post n'existe pas" });
    }
    post.reccurence = req.body.reccurence;
    await post.save();
    res.status(200).json("Post recurrent : id : " + req.params.id);
  }




