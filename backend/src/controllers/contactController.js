// backend/src/controllers/contactController.js
const { Subscriber } = require('../../models');

exports.subscribe = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ msg: 'Email is required' });

    // idempotent: don’t insert duplicates
    const [subscriber, created] = await Subscriber.findOrCreate({
      where: { email },
      defaults: { email }
    });

    if (!created) {
      return res.status(200).json({ msg: 'You’re already on the list!' });
    }
    return res.status(201).json({ msg: 'Thanks for joining!', subscriber });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};
