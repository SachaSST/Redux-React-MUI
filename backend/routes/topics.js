const express = require('express');
const router = express.Router();
const Topic = require('../models/Topic');

router.post('/', async (req, res) => {
  try {
    const { todo, date } = req.body;
    const topic = new Topic({ todo, date });
    await topic.save();
    res.status(201).json({ message: 'Todo created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create todo' });
  }
});

module.exports = router;
