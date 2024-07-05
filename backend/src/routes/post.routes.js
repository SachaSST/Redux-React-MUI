const express = require('express');
const { setPosts } = require('../controllers/post.controller');
const router = express.Router();


router.get("/", (req, res) => {
    res.json({message: "voici les données"});
  });
  
router.post("/", setPosts);
  

router.put("/:id", (req, res) => {
    res.json({messageId: req.params.id})
});


router.delete("/:id", (req, res) => {
    res.json({message: "Todo supprimé id  " + req.params.id});
});

router.patch("/completed-task/:id", (req, res) => {
    res.json({message: "Post completed : id : " + req.params.id});
});

router.patch("/not-completed-task/:id", (req, res) => {
    res.json({message: "Post not completed : id : " + req.params.id});
});








module.exports = router