/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Header.scss';

function Header(): JSX.Element {
  return (
    <>
      <div className="nav__container">
        <div className="nav__logo">
          <NavLink to="/">
            <img src="./favicon.png" alt="" />
          </NavLink>
        </div>
        <ul className="nav__list">
          {!user && (
            <>
              <li>
                <NavLink className="nav__list-item" to="/authorization">
                  Войти
                </NavLink>
              </li>
              <li>
                <NavLink className="nav__list-item" to="/registration">
                  Регистрация
                </NavLink>
              </li>
            </>
          )}
          {user && (
            <>
              <li>Привет, {user.name}!</li>
              <li>
                <NavLink className="nav__list-item" to="/logout">
                  Выйти
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Header;
