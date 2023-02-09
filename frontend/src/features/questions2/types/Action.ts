import { Question } from './Types';

type Action =
{
  type: 'INIT_QS';
  payload: Question[];
};
export default Action;
