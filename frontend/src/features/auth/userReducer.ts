/* eslint-disable import/prefer-default-export */
import Action from './Types/Action';
import { State } from './Types/types';

const init = {
  user: {},
  message: '',
};

export const userReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'REG_USER':
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case 'CHECK_USER':
      return {
        ...state,
        user: action.payload,
        message: action.payload.message,
      };
    default:
      return state;
  }
};
