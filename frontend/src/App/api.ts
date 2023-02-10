import { User } from '../features/auth/Types/types';
import { Topic } from '../features/questions/Types/Types';
import { Question } from '../features/questions2/types/Types';

export const registr = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',

    body: JSON.stringify({
      name: newUser.name,
      email: newUser.email,
      password: newUser.password,
    }),
  });
  return res.json();
};

export const authorization = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-in', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({
      email: newUser.email,
      password: newUser.password,
    }),
  });
  return res.json();
};

export const checkUser = async (): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/users', {
    credentials: 'include',
  });
  // console.log(await res.json());
  const data = await res.json();
  console.log(data);

  return data;
};

export const loadTopics = async (): Promise<Topic[]> => {
  const res = await fetch('http://localhost:4000/api/game');
  return res.json();
};

export const loadQuestions = async (): Promise<Question[]> => {
  const res = await fetch('http://localhost:4000/api/game/questions');
  return res.json();
};

export const addPoints = async(): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/game');
  return res.json()
}