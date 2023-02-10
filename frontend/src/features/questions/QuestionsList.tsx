import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import QuestionCard2 from '../questions2/QuestionCard2';
import QuestionCard from './QuestionCard';
import '../Main/MainPage.scss';

export default function QuestionsList(): JSX.Element {
  const { topics } = useSelector((store:RootState) => store.topicState);
  const { questions } = useSelector((store:RootState) => store.qsState);

  return (
    <div className="main__container">

        {topics.map((topic) => (
          <>
           <div className="main__topic">
          <QuestionCard key={topic.id} topic={topic} />
           </div>

               {questions.map((elem) => (
               elem.topic_id === topic.id && <QuestionCard2 key={elem.id} question={elem} />
            ))}

          </>

        ))}

    </div>
  );
}
