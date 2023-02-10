const router = require('express').Router();
const { Question, Topic, User } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const topics = await Topic.findAll();
    console.log(topics);
    res.status(200).json(topics);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.get('/questions', async (req, res) => {
  try {
    const questions = await Question.findAll();
    console.log(questions);
    res.status(200).json(questions);
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

router.put('/', async (req, res) => {
  try {
    if (req.session.userId) {
      const { points } = req.body;
      const user = User.findOne({ where: { id: req.session.userId } });
      user.points = points;
      res.json(user);
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
