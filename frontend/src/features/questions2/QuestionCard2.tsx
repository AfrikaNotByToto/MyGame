import React from 'react';
import { Question } from './types/Types';

export default function QuestionCard2({ question }:{ question:Question }): JSX.Element {
  return (
    <div>{question.price}</div>
  );
}
