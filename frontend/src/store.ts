/* eslint-disable max-len */
import { createStore, combineReducers } from 'redux';
import { userReducer } from './features/auth/userReducer';
import { topicReducer } from './features/questions/reducerTopics';
import { questionReducer } from './features/questions2/reducerQS';

const store = createStore(combineReducers({ userState: userReducer, topicState: topicReducer, qsState: questionReducer }));

export default store;

export type RootState = ReturnType<typeof store.getState>;
