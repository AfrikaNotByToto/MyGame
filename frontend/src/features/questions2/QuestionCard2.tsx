/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
// @ts-nocheck
import * as api from '../../App/api';
import React, { useEffect, useState } from 'react';
import { Question } from './types/Types';
import './QuestionCard2.scss';
// eslint-disable-next-line import/no-cycle

export default function QuestionCard2({ question }:{ question:Question }): JSX.Element {
  const [modal, setModal] = useState(false);
    const [answer, setAnswer] = useState('');
    const [countScore, setCountScore] = useState(0);

    const answeR = `Правильный ответ: ${question.answer}`;
    // const right = 'красавчик';
    const handleclick = (e):void => {
      e.preventDefault();
      if (question.answer === answer) {
        setCountScore((prev) => prev + question.price);
        document.querySelector('.hello').innerHTML = question.answer;
        setAnswer('');
      } else {
        setCountScore((prev) => prev - question.price);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        document.querySelector('.try').innerHTML = answeR;
        setAnswer('');
      }
    };
    useEffect(() => {
     api.addPoints(countScore)
    }, [countScore])

  return (

    <form onSubmit={handleclick}>
    <div onClick={() => setModal((prev) => !prev)} className="main__quest">{question.price}</div>
    { modal && (
<div className="main__modal"><div className="modal__container">{question.question}  <input
  className="answer_input"
  onChange={(e) => setAnswer(e.target.value).toLowerCase()}
  value={answer.toLowerCase()}
  type="text"
  name="answer"
/>

<button type="submit" className="answer_button">ответить</button>
{question.answer === answer && (<div className="hello" />)}
{question.answer !== answer && (<div className="try" />)}
<button className="close" type="button" onClick={() => setModal(false)}>Закрыть</button>
                             </div>
</div>
)}

    </form>
  );
}
