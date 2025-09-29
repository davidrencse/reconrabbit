const router   = require('express').Router();
const { register, login } = require('../controllers/authController');
const auth     = require('../middleware/auth');
const { User } = require('../../models');  // Sequelize model

// Public
router.post('/register', register);
router.post('/login',    login);

// Protected
router.get('/me', auth, async (req, res) => {
  try {
    // req.userId is set by auth.js
    const user = await User.findByPk(req.userId, {
      attributes: ['id', 'name', 'email']
    });
    if (!user) return res.status(404).json({ msg: 'User not found' });
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
