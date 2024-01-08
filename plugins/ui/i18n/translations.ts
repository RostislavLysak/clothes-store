export const translationSubKeys = {
  loginPage: ['email', 'password', 'button'],
  registerPage: ['firstName', 'lastName', 'email', 'password', 'button'],
  profilePage: ['firstName', 'lastName', 'button'],
  header: ['profile', 'logout'],
  unAuthHeader: ['signIn', 'signUp'],
} as const

export type TLoginPage = Record<
  (typeof translationSubKeys.loginPage)[number],
  string
>
export type TRegisterPage = Record<
  (typeof translationSubKeys.registerPage)[number],
  string
>
export type TProfilePage = Record<
  (typeof translationSubKeys.profilePage)[number],
  string
>
export type THeader = Record<(typeof translationSubKeys.header)[number], string>
export type TUnAuthHeader = Record<
  (typeof translationSubKeys.unAuthHeader)[number],
  string
>
