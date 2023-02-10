/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable max-len */
//@ts-nocheck
import * as api from '../../App/api';
import React, { useEffect, useState } from 'react';
import { Question } from './types/Types';
import './QuestionCard2.scss';
// eslint-disable-next-line import/no-cycle

export default function QuestionCard2({
  question,
}: {
 question: Question;

}): JSX.Element {
  const [modal, setModal] = useState(false);
  // const [countScore, setCountScore] = useState(0);
  // const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState('');
  const [classs, setClass] = useState(true);
  const [count, setCount] = useState(15);
  const answeR = `Правильный ответ: ${question.answer}`;
  const right = `красавчик, ответ: ${question.answer}`;
  const handleclick = (e): void => {
    e.preventDefault();
    if (question.answer.toLowerCase() === answer.toLowerCase()) {
      // setScore(score + question.price)
      // console.log(score);
      // setScore(-10);
      // console.log(question.price);
      // console.log(score);
      document.querySelector('.hello')!.innerHTML = right;
      setAnswer('');
      e.target.remove();
    } else {
      // setScore(score - question.price);
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      document.querySelector('.try')!.innerHTML = answeR;
      setAnswer('');
      // e.target.remove();
      e.target.remove();
    }
  };

  // useEffect(() => {
  //   api.addPoints(score);
  // }, [score]);

  useEffect(() => {
    setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    return () => {
      clearInterval(setInterval);
    };
  }, []);

  function handleclickClass() {
    setModal((prev) => !prev);
    setCount(15);
    setClass((prev) => !prev);
    setScore(15)
  }

  return (
    <div className="question-card">
      <div
        onClick={handleclickClass}
        className={classs ? 'main__quest' : 'main__quest disable'}
      >
        {question.price}
      </div>
      {modal && (
        <div className="main__modal">
          <div className="modal__container">
            <form className="form_card" onSubmit={handleclick}>
              <div className="quest">{question.question} </div>
              <input
                className="answer_input"
                onChange={(e) => setAnswer(e.target.value)}
                value={answer}
                type="text"
                name="answer"
              />
              <button type="submit" className="answer_button">
                ответить
              </button>
              <div className="time">
                {count > 0 ? <>{count} </> : <div> время вышло</div>}
              </div>
            </form>
            <div className="hello" />
            <div className="try" />
            <button
              className="close"
              type="button"
              onClick={() => setModal(false)}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
