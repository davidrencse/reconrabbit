const express  = require('express');
const router   = express.Router();
const { Contact } = require('../../models');   // auto-loaded by models/index.js

// POST /api/contact
router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Name, email, and message are required.' });
    }

    const saved = await Contact.create({ name, email, subject, message });
    return res.status(201).json({ message: 'Thanks! We’ll be in touch.', id: saved.id });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
