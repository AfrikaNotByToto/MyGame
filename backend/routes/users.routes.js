/* eslint-disable import/no-extraneous-dependencies */
const router = require('express').Router();
const { User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.session.userId } });
    res.json(user);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
