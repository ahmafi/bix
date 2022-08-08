export type LoginRes = {
  status: string;
  key: string;
};

export type LoginReq = {
  username: string;
  password: string;
  remember?: 'yes' | 'no';
};
