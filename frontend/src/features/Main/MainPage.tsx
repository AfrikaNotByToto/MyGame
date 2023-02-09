import React from 'react';
import QuestionsList from '../questions/QuestionsList';
import './MainPage.scss';

function MainPage(): JSX.Element {
  return (
    <div className="main__container">
      <div>MyGame</div>
      <QuestionsList />
    </div>
  );
}

export default MainPage;
