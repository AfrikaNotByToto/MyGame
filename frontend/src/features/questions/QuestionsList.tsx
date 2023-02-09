
import React from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import QuestionCard2 from '../questions2/QuestionCard2';
import QuestionCard from './QuestionCard';

export default function QuestionsList(): JSX.Element {
  const { topics } = useSelector((store:RootState) => store.topicState);
  const { questions } = useSelector((store:RootState) => store.qsState);

  return (
    <div className="questions_list_div">
      <div className="questions_list_div2">
        {topics.map((topic) => (
          <><QuestionCard key={topic.id} topic={topic} />
          <div className="questions_list_div4">
            {questions.map((question) => topic.id === question.topic_id(
              <QuestionCard2 key={question.id} question={question} />
            ))}
          </div>
          </>
        ))}
      </div>

    </div>
  );
}
