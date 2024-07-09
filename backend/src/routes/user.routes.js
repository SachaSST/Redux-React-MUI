const express = require('express');
const { registerUser, authUser, getUserProfile } = require('../controllers/user.controller');
const { protect } = require('../middleware/auth.middleware');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', authUser);
router.get('/profile', protect, getUserProfile);

module.exports = router;