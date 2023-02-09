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
    <div>
      <h1>привет</h1>
    </div>
  );
}

export default App;
