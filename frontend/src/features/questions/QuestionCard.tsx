import React from 'react';
import { Topic } from './Types/Types';

export default function QuestionCard({ topic }: { topic:Topic }): JSX.Element {
  // const [answer, setAnswer] = useState('');

  return (

    <div>
      {topic.title}
    </div>
    // <div className="form_question">

    //   <form onSubmit={pushAnswer}>

    //     <h3>{question.title}</h3>
    //     <input
    //       className="answer_input"
    //       onChange={(e) => setAnswer(e.target.value)}
    //       value={answer}
    //       type="text"
    //     />
    //     <button type="submit" className="answer_button">ответить</button>
    //   </form>
    //   <p>{}</p>
    // </div>

  );
}
