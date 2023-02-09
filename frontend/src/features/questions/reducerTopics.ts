import Action from './Types/Action';
import { State } from './Types/Types';

export const init = { topics: [] };

export const topicReducer = (state: State = init, action: Action): State => {
  switch (action.type) {
    case 'INIT_TOPICS':
      return {
        ...state,
        topics: action.payload,
      };
      default:
      return state;
}
};
