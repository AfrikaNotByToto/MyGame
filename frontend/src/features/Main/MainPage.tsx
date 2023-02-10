import React, { useState } from 'react';
import QuestionsList from '../questions/QuestionsList';
// import QuestionsList from '../questions/QuestionsList';

/* eslint-disable import/no-extraneous-dependencies */
import './MainPage.scss';

function MainPage(): JSX.Element {
  // const [modal, setModal] = useState(false);

  return (
    <div className="container">
      <QuestionsList />
    </div>
  );
}

export default MainPage;
