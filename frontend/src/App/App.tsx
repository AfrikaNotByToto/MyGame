/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';

import './App.scss';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import * as api from './api';

import MainPage from '../features/Main/MainPage';

import Header from '../features/Header/Header';
import Registration from '../features/auth/Registration';
import Login from '../features/auth/Authorization';

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
          <Route path="/authorization" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
