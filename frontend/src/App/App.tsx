import React from 'react';
import MainPage from '../features/Main/MainPage';
import { Route, Routes } from 'react-router-dom';
import Header from '../features/Header/Header';
import './App.css';

function App() {
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
