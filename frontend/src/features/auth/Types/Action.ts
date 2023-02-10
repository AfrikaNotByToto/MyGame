import { State } from './types';

type Action =
  | {
      type: 'REG_USER';
      payload: State;
    }
  | {
      type: 'LOGIN_USER';
      payload: State;
    }
  | {
      type: 'CHECK_USER';
      payload: State;
    };

export default Action;
