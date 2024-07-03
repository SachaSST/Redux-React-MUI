const authManager = require('../managers/authManager');

exports.signup = async (req, res) => {
  try {
    const { email, password } = req.body;
    await authManager.signup(email, password);
    res.status(201).send('User registered');
  } catch (err) {
    res.status(500).send('Server error');
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await authManager.signin(email, password);
    res.status(200).json({ token });
  } catch (err) {
    res.status(500).send('Server error');
  }
};
