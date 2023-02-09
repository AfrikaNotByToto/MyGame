import { User } from '../features/auth/Types/types';

export const registr = async (newUser: User): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/auth/sign-up', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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
    body: JSON.stringify({
      email: newUser.email,
      password: newUser.password,
    }),
  });
  return res.json();
};

export const checkUser = async (): Promise<User> => {
  const res = await fetch('http://localhost:4000/api/users');
  return res.json();
};
