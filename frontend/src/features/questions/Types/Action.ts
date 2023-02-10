import { Topic } from './Types';

type Action =
{
  type: 'INIT_TOPICS';
  payload: Topic[];
};
export default Action;
