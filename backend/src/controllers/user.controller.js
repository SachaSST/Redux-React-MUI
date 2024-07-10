const userManager = require('../managers/user.manager');

module.exports = {
  register: async (req, res) => {
    try {
      const newUser = await userManager.register(req.body.email, req.body.password);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  login: async (req, res) => {
    try {
      const { token, user } = await userManager.login(req.body.email, req.body.password);
      res.status(200).json({ token, user });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
  getUserProfile: async (req, res) => {
    res.status(200).json(req.user);
  }
};