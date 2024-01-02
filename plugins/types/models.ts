export interface ILogin {
  email: string
  password: string
}

export interface IRegister extends ILogin {
  firstName: string
  lastName: string
}

export interface IUpdateProfile extends Omit<IRegister, 'password'> {
  email: string
  firstName: string
  lastName: string
}

export interface IUpdateImage extends Pick<ILogin, 'email'> {
  img: string
}

export interface IRefreshToken {
  token: string
}
