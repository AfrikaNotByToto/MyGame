export type User = {
  id?: number;
  name?: string;
  email: string;
  password: string;
  points?: number;
};

export type State = {
  user: {} | User;
  message: '' | string;
};
