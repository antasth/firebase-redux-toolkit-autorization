export interface IUser {
  email: string | null
  token: string | null
  id: string | null
}

export interface ISignUpForm {
  email: string
  password: string
  confirmPassword: string
}

export type ISignInForm = Omit<ISignUpForm, 'confirmPassword'>
