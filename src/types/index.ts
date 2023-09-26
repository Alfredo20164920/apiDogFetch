export interface ILogin {
  name: string,
  email: string
}

export interface IAuthContext {
  user: null | object,
  login: (payload: ILogin) => void
}