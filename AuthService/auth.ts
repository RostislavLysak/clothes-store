type TUser = {
  email: string;
  password: string;
};

const users = [
  {
    id: "1",
    email: "user123@gmail.com",
    password: "123456",
  },
  {
    id: "2",
    email: "admin@gmail.com",
    password: "123456",
  },
];

export const login = ({ email, password }: TUser) => {
  const user = users.find((i) => i.email === email && i.password === password);

  return user ?? null;
};
