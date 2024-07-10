const PostModel = require('../models/post.model');

// Récupérer les tâches
module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

// Ajouter une tâche
module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Merci d'ajouter un message" });
  }

  //les conflits avec les tâches existantes
  const conflictingTask = await PostModel.findOne({
    dueDate: req.body.dueDate,
    reccurence: { $ne: "none" } // Ignorer les tâches non récurrentes
  });

  if (conflictingTask) {
    // Si une tâche récurrente existe, marquer comme "overridden" et créer la nouvelle tâche normale
    conflictingTask.overridden = true;
    await conflictingTask.save();
  }

  const newPost = {
    message: req.body.message,
    dueDate: req.body.dueDate,
    reccurence: req.body.reccurence || "none",
    uniqueDate: req.body.uniqueDate || null,
    overridden: false // Ajouter un champ pour marquer si la tâche est remplacée
  };

  const post = await PostModel.create(newPost);
  res.status(200).json(post);
};

// Modifier une tâche
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

// Supprimer une tâche
module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  await post.deleteOne({ _id: post })
  res.status(200).json("Message supprimé " + req.params.id);
};

// Compléter une tâche
module.exports.completedPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  post.completed = true;
  await post.save();
  res.status(200).json("Post completed : id : " + req.params.id);
}

// Marquer une tâche comme non complétée
module.exports.notCompletedPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  post.completed = false;
  await post.save();
  res.status(200).json("Post not completed : id : " + req.params.id);
}

// Ajouter une récurrence à une tâche
module.exports.recurrentPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  post.reccurence = req.body.reccurence;
  await post.save();
  res.status(200).json("Post recurrent : id : " + req.params.id);
}