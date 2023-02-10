import React from 'react';
import { Topic } from './Types/Types';

export default function QuestionCard({ topic }: { topic:Topic }): JSX.Element {
  return (

    <div>
      {topic.title}
    </div>
    // <div className="form_question">

    //   <form onSubmit={pushAnswer}>

    //     <h3>{question.title}</h3>
    //   </form>
    //   <p>{}</p>
    // </div>

  );
}
