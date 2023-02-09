import React, { useState } from 'react';

export default function QuestionCard({ question }): JSX.Element {
  const [answer, setAnswer] = useState('');

  const pushAnswer = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:4000/question/${}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer
      }),
    });
    const data = await res.json();
  };
  return (
    <div className="form_question">

      <form onSubmit={pushAnswer}>

        <h3>{question.title}</h3>
        <input
          className="answer_input"
          onChange={(e) => setAnswer(e.target.value)}
          value={answer}
          type="text"
        />
        <button type="submit" className="answer_button">ответить</button>
      </form>
      <p>{}</p>
    </div>

  );
}
