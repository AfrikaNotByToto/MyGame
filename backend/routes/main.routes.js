const router = require('express').Router();
const { Question } = require('../db/models');

// router.get('/', (req, res) => {

// });

router.post('/question/:id', async (req, res) => {
  try {
    const { answer } = req.body;
    const { id } = req.params;
    const question = await Question.findOne({ where: { id } });

    if (answer === question.answer) {
      res.json({ message: 'ответ правильный' });
    } else {
      res.json({message: 'ответ неправильный', question.answer })
    }
  } catch ({ message }) {
    res.status(500).json(message);
  }
});

module.exports = router;
