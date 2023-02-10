

import QuestionsList from '../questions/QuestionsList';

/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import './MainPage.scss';

function MainPage(): JSX.Element {
  const [modal, setModal] = useState(false);

  return (
    <div className="main__container">

      <div>MyGame</div>
      <QuestionsList />

      {modal && <div className="main__topic">Modal</div>}
      <div onClick={() => setModal((prev) => !prev)} className="main__quest">
        10
      </div>
      <div className="main__quest">20</div>
      <div className="main__quest">30</div>
      <div className="main__quest">40</div>
      <div className="main__topic">Theme1</div>
      <div className="main__quest">10</div>
      <div className="main__quest">20</div>
      <div className="main__quest">30</div>
      <div className="main__quest">40</div>
      <div className="main__topic">Theme1</div>
      <div className="main__quest">10</div>
      <div className="main__quest">20</div>
      <div className="main__quest">30</div>
      <div className="main__quest">40</div>
    </div>
  );
}

export default MainPage;
