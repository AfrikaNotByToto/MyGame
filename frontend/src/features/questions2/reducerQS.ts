import Action from './types/Action';
import { State } from './types/Types';

export const init = { questions: [] };

export const questionReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'INIT_QS':
      return {
        ...state,
        questions: action.payload,
      };
      default:
      return state;
}
};
