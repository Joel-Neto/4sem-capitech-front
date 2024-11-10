export interface IUser {
  name: string;
  email: string;
  password: string;
  adminCode: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
