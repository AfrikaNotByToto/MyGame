import React from 'react';

export default function QuestionCard({question}) {
  return (
<div className='form_question' >

    <form>

      <h3>{question.text}</h3>
      <input></input>
    </form>
</div>

  );
}
