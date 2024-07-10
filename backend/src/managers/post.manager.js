const PostModel = require('../models/post.model');

module.exports = {
  getPosts: async () => {
    return await PostModel.find();
  },
  createPost: async (postData) => {
    const conflictingTask = await PostModel.findOne({
      dueDate: postData.dueDate,
      uniqueDate: postData.uniqueDate
    });

    if (conflictingTask) {
      throw new Error("Une tâche existe déjà à cette date et heure.");
    }

    const newPost = {
      message: postData.message,
      dueDate: postData.dueDate,
      reccurence: postData.reccurence,
      uniqueDate: postData.uniqueDate
    };

    return await PostModel.create(newPost);
  },
  editPost: async (id, postData) => {
    return await PostModel.findByIdAndUpdate(id, postData, { new: true });
  },
  deletePost: async (id) => {
    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("Ce post n'existe pas");
    }
    await post.deleteOne({ _id: post });
  },
  setCompleted: async (id, completed) => {
    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("Ce post n'existe pas");
    }
    post.completed = completed;
    await post.save();
  },
  setRecurrent: async (id, reccurence) => {
    const post = await PostModel.findById(id);
    if (!post) {
      throw new Error("Ce post n'existe pas");
    }
    post.reccurence = reccurence;
    await post.save();
  }
};