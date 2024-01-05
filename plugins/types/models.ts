export interface ILogin {
  email: string
  password: string
}

export interface IRegister extends ILogin {
  firstName: string
  lastName: string
}

export interface IUpdateProfile {
  firstName: string
  lastName: string
  accessToken: string | null
}

export interface IUpdateImage {
  img: string
  accessToken: string | null
}

export interface IRefreshToken {
  token: string
}
