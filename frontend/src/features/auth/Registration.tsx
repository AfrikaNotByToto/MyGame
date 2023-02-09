/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as api from '../../App/api';
import { RootState } from '../../store';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const { user, message } = useSelector((store: RootState) => store.userState);
  const registr = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    api.registr({ name, password, email }).then((data) =>
      dispatch({
        type: 'REG_USER',
        payload: data,
      })
    );
    if (user !== null) {
      nav('/');
    } else {
      document.querySelector('#error')!.innerHTML = message;
    }
  };
  return (
    <div className="form__container">
      <form
        className="form__body"
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={registr}
      >
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p id="error" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Registration;
