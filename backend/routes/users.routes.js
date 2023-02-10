/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    console.log(req.session.userId);
    if (req.session.userId) {
      const user = await User.findOne({ where: { id: req.session.userId } });

      res.json(user);
    } else {
      res.status(500).json({ message: 'Server error', user: {} });
    }
  } catch ({ message }) {
    res.status(500).json({ message: 'Server error', user: {} });
  }
});

module.exports = router;
