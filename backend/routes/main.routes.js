
const router = require('express').Router();
const { Question, Topic } = require('../db/models');

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

// router.post('/question/:id', async (req, res) => {
//   try {
//     const { answer } = req.body;
//     const { id } = req.params;
//     const question = await Question.findOne({ where: { id } });

//     if (answer === question.answer) {
//       res.json({ message: 'ответ правильный' });
//     } else {
//       res.json({message: 'ответ неправильный', question.answer })
//     }
//   } catch ({ message }) {
//     res.status(500).json(message);
//   }
// });


module.exports = router;

