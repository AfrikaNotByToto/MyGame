import MainPage from '../features/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Header from '../features/Header/Header';

import React, { useEffect } from 'react';

import './App.css';
import { useDispatch } from 'react-redux';
import * as api from './api';
// import { RootState } from '../store';

function App(): JSX.Element {
  // const { userState } = useSelector((store: RootState) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    api.checkUser().then((data) =>
      dispatch({
        type: 'CHECK_USER',
        payload: data,
      })
    );
  }, []);
  return (
    <div className="app__container">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainPage />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/authorization" element={<Authorization />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
